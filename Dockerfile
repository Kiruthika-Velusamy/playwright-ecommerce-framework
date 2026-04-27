# Use official Playwright image
# This has Node, browsers, everything pre-installed
FROM --platform=linux/amd64 mcr.microsoft.com/playwright:v1.59.1-jammy

# Set working directory inside container
WORKDIR /app

# Copy package files first
# (separate step for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of your project
COPY . .

# Command to run when container starts
CMD ["npx", "playwright", "test"]