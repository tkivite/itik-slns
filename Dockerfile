FROM node:18-alpine

# Add build-time dependencies
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files first for better caching
COPY package.json yarn.lock ./

# Install dependencies with cache mount
RUN --mount=type=cache,target=/root/.yarn \
    yarn install --frozen-lockfile --silent

# Copy source files
COPY . .

# Build with cache mount
RUN --mount=type=cache,target=/app/.next \
    yarn build

EXPOSE 3009

# Use production mode instead of dev
CMD ["yarn", "preview"]