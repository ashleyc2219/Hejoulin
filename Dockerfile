# Build stage
FROM node:18 AS build

WORKDIR /app

# Copy package files first to leverage caching
COPY package*.json ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy source code excluding .env file
COPY src ./src
COPY public ./public
COPY tsconfig*.json ./
# Add any other necessary config files you need to copy

# Build the application
RUN npm run build

COPY . .

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]