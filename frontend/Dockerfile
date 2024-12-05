# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Set environment variable for React app
ENV REACT_APP_API_URL=http://backend:5000

# Serve the app using a simple static server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
