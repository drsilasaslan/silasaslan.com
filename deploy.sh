#!/bin/bash
set -euo pipefail

# Deploy script for Dr. Silas Aslan website
# Builds and uploads the static Next.js site to production

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REMOTE_HOST="all-inkl"
REMOTE_PATH="/www/htdocs/w01fa976/silasaslan.com/"
LOCAL_DIR="out"

echo "=========================================="
echo "🚀 Deploying Dr. Silas Aslan Website"
echo "=========================================="

# Check if Next.js is available
if ! command -v npx &> /dev/null; then
    echo "❌ ERROR: npx is not available. Please install Node.js."
    exit 1
fi

# Check if ssh access works
if ! ssh -o BatchMode=yes -o ConnectTimeout=10 "$REMOTE_HOST" "echo 'SSH OK'" &> /dev/null 2>&1; then
    echo "❌ ERROR: Cannot connect to remote server $REMOTE_HOST"
    echo "Please check your SSH configuration."
    exit 1
fi

echo "✅ SSH connection verified"

# Build the site
echo "🔨 Building Next.js static site..."
if ! npm run build; then
    echo "❌ ERROR: Build failed"
    exit 1
fi

# Check if output directory exists
if [ ! -d "$LOCAL_DIR" ]; then
    echo "❌ ERROR: Build directory not found: $LOCAL_DIR"
    echo "Did the build complete successfully?"
    exit 1
fi

echo "✅ Build completed successfully"
echo "📁 Local files: $(find "$LOCAL_DIR" -type f | wc -l) files"

# Create backup on remote (optional but safe)
echo "💾 Creating backup of current deployment..."
ssh "$REMOTE_HOST" "cd '$REMOTE_PATH' && tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz --exclude='*.tar.gz' . 2>/dev/null || echo 'No existing files to backup'"

# Upload files
echo "📤 Uploading files to $REMOTE_HOST..."
if ! scp -r "$LOCAL_DIR"/* "$REMOTE_HOST:$REMOTE_PATH"; then
    echo "❌ ERROR: Upload failed"
    exit 1
fi

# Verify deployment
echo "✅ Upload completed"
echo "🌐 Verifying deployment..."

HTTP_CODE=$(ssh "$REMOTE_HOST" "curl -s -o /dev/null -w '%{http_code}' https://www.silasaslan.com/" || echo "000")

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Deployment successful!"
else
    echo "⚠️  WARNING: Deployment may have issues (HTTP $HTTP_CODE)"
fi

echo "=========================================="
echo "🎉 Website: https://www.silasaslan.com/"
echo "📁 Remote: $REMOTE_HOST$REMOTE_PATH"
echo "📈 Files uploaded: $(find $LOCAL_DIR -type f | wc -l)"
echo "=========================================="

# Optional: Clean old backups (keep last 3)
echo "🧹 Cleaning old backups (keeping last 3)..."
ssh "$REMOTE_HOST" "cd '$REMOTE_PATH' && ls -t backup-*.tar.gz 2>/dev/null | tail -n +4 | xargs -r rm -f 2>/dev/null || echo 'No old backups to clean'"

echo "✅ Deployment complete!"