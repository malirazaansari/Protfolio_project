#!/bin/bash

# 🔧 Configure these
GH_USER="malirazaansari"
GH_EMAIL="malirazaansari4@gmail.com"
GH_TOKEN="github_pat_11BA2XGCY0"

echo "🔍 Scanning private repos for co-authored commits by: $GH_EMAIL"

# Check if required environment variables are set
if [ -z "$GH_TOKEN" ] || [ -z "$GH_EMAIL" ]; then
  echo "❌ Please set both GH_TOKEN and GH_EMAIL environment variables."
  exit 1
fi

# Get all repos (owned, collaborated, org member)
repos=$(curl -s -H "Authorization: token $GH_TOKEN" \
  "https://api.github.com/user/repos?affiliation=owner,collaborator,organization_member&per_page=100" \
  | jq -r '.[].full_name' | sort -u)

total=0

# Loop safely over each repo name
echo "$repos" | while read -r repo; do
  if [[ -z "$repo" ]]; then continue; fi

  echo "📦 Repo: $repo"

  page=1
  while :; do
    commits=$(curl -s -H "Authorization: token $GH_TOKEN" \
      "https://api.github.com/repos/$repo/commits?per_page=100&page=$page")

    # Break if empty
    if [[ $(echo "$commits" | jq length) -eq 0 ]]; then
      break
    fi

    count=$(echo "$commits" | jq -r '.[].commit.message' | grep -i -c "Co-authored-by:.*$GH_EMAIL")
    echo "   ➕ $count co-authored commits found on page $page"
    total=$((total + count))
    page=$((page + 1))
  done
done

echo "✅ Total co-authored commits found: $total"
