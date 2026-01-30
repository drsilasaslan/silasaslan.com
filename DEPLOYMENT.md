# CI/CD Configuration Files for Various Platforms

## GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Website

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      if: github.ref == 'refs/heads/main'
      uses: appleboy/ssh-action@v1.0.0
      with:
        host: ${{ secrets.SSH_HOST }}
        username: ${{ secrets.SSH_USER }}
        key: ${{ secrets.SSH_KEY }}
        source: 'out/*'
        target: '/www/htdocs/w01fa976/silasaslan.com/'
        strip_components: 1
```

## Vercel (Alternative)
Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

## Netlify (Alternative)
Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
```

## Docker Support
Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Environment Variables
Create `.env.example`:

```env
# SSH Deployment
SSH_HOST=all-inkl
SSH_USER=ssh-w01fa976
SSH_KEY_PATH=~/.ssh/id_rsa

# Development
NODE_ENV=development
PORT=3006

# Analytics (optional)
GOOGLE_ANALYTICS_ID=
```

## Git Hooks
Create `.husky/pre-commit`:

```bash
#!/bin/sh
npm run lint
npm run build
```

## Lint-Staged
Create `.lintstagedrc.json`:

```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}
```

---

*Note: Add these files as needed for your specific deployment workflow*