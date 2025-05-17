'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<string>(''); // To handle success or error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus(''); // Reset status before submission

  // Validate form data
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
    setStatus('All fields are required.');
    return;
  }

  try {
    console.log('Submitting form data:', formData); // Debugging
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('API response:', result);
      setStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      const errorData = await response.json();
      console.error('Error Response:', errorData);
      setStatus(errorData.error || 'Failed to send your message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    setStatus('An error occurred. Please try again later.');
  }
};

  return (
    <div className="dark:bg-[#262d42] bg-gray-400 rounded-lg p-4 sm:p-10">
      <h1 className="dark:text-white text-gray-700 text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Work together!
      </h1>
      <p className="dark:text-gray-200 text-gray-700 mt-3 lg:text-base text-xs md:text-sm">
        For any questions or inquiries about my Services, Please don&apos;t hesitate to reach out to me. I&apos;d be happy to assist you.
      </p>
      
      <form onSubmit={handleSubmit} className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex flex-col mt-5 md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="mt-5">
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
            className="flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleTextAreaChange}
          rows={5}
          className="flex-1 mt-5 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
        ></textarea>
        {status && <p className="mt-4 text-center text-lg text-green-600">{status}</p>}
        <div className="mt-5">
            
          <button
            type="submit"
            className="px-6 py-3.5 dark:bg-[#191D2B] bg-blue-700 border-[#4A62D6] text-white hover:bg-[#4A62D6] transition-all duration-150 rounded-full"
          >
             Submit Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
