#!/usr/bin/env bash
set -euo pipefail

# Deploy nostuds.com static site to S3 + CloudFront invalidation.
# Requires AWS credentials for account 181398284705 (not default shell profile).
#
# Usage:
#   export AWS_ACCESS_KEY_ID=... AWS_SECRET_ACCESS_KEY=... AWS_DEFAULT_REGION=us-east-1
#   ./infra/deploy.sh

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUCKET="nostuds.com"
DISTRIBUTION_ID="ERN4Z2YR27XC1"

cd "$ROOT_DIR"
npm run build

aws s3 sync dist/ "s3://${BUCKET}/" \
  --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "index.html"

aws s3 cp dist/index.html "s3://${BUCKET}/index.html" \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html"

for asset in favicon.svg icons.svg og-image.png og-image.svg; do
  if [[ -f "dist/${asset}" ]]; then
    aws s3 cp "dist/${asset}" "s3://${BUCKET}/${asset}" \
      --cache-control "public,max-age=86400"
  fi
done

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text

echo "Deployed to https://nostuds.com"
