# Use an official Node.js runtime as the base image
FROM node:21.1.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Make port 8080 available outside the container
EXPOSE 3000

# Start the application when the container is run
CMD ["npm", "start"]
