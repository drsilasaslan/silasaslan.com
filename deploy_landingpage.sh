#!/usr/bin/env bash
set -euo pipefail

# Deploy script for Dr. Silas Aslan website via FTP
# Uses lftp for reliable FTP uploads

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${1:-$SCRIPT_DIR/.env.local}"

# Load environment variables
if [ ! -f "$ENV_FILE" ]; then
  echo "ERROR: Environment file not found: $ENV_FILE"
  exit 1
fi

source "$ENV_FILE"

# Validate required variables
: "${FTP_HOST:?FTP_HOST is required}"
: "${FTP_USER:?FTP_USER is required}"
: "${FTP_PASS:?FTP_PASS is required}"
: "${FTP_BASE:?FTP_BASE is required}"
: "${LOCAL_DIR:=out}"

# Build the remote path
REMOTE_PATH="/${FTP_BASE}"
if [ -n "${FTP_TARGET:-}" ]; then
  REMOTE_PATH="${REMOTE_PATH}/${FTP_TARGET}"
fi

# Resolve local directory
if [[ "$LOCAL_DIR" != /* ]]; then
  LOCAL_DIR="$SCRIPT_DIR/$LOCAL_DIR"
fi

# Check if local directory exists
if [ ! -d "$LOCAL_DIR" ]; then
  echo "ERROR: Local directory not found: $LOCAL_DIR"
  echo "Did you run 'npm run build' first?"
  exit 1
fi

echo "=========================================="
echo "Deploying to: $FTP_HOST$REMOTE_PATH"
echo "From: $LOCAL_DIR"
echo "=========================================="

# Check for lftp
if ! command -v lftp &> /dev/null; then
  echo "ERROR: lftp is not installed."
  echo "Install with: brew install lftp"
  exit 1
fi

# Build lftp command
LFTP_CMD="set ftp:ssl-allow no; set net:timeout 30; set net:max-retries 3;"

if [ "${DRY_RUN:-false}" = "true" ]; then
  echo "[DRY RUN] Would upload files from $LOCAL_DIR to $REMOTE_PATH"
  ls -la "$LOCAL_DIR"
  exit 0
fi

# Mirror command options
# Always delete old files to prevent stale chunk errors, but NEVER delete wordpress folder
MIRROR_OPTS="--reverse --verbose --parallel=${PARALLEL:-1} --delete --exclude wordpress/"

# Build exclude patterns from .deployignore
EXCLUDE_OPTS=""
DEPLOYIGNORE="$SCRIPT_DIR/.deployignore"
if [ -f "$DEPLOYIGNORE" ]; then
  echo "Using .deployignore for exclusions..."
  while IFS= read -r line || [ -n "$line" ]; do
    # Skip comments and empty lines
    [[ "$line" =~ ^#.*$ ]] && continue
    [[ -z "$line" ]] && continue
    # Add exclude pattern
    EXCLUDE_OPTS="$EXCLUDE_OPTS --exclude $line"
  done < "$DEPLOYIGNORE"
fi

# Execute upload
echo "Starting upload..."
lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" << EOF
$LFTP_CMD
mirror $MIRROR_OPTS $EXCLUDE_OPTS "$LOCAL_DIR" "$REMOTE_PATH"
bye
EOF

echo "=========================================="
echo "Deployment complete!"
echo "Website: https://${FTP_BASE}"
echo "=========================================="
