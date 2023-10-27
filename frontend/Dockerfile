# Use an official Nginx runtime as the base image
FROM nginx:1.21.6

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Add a new Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d

# Copy the frontend application files to the Nginx document root
COPY public /usr/share/nginx/html

# Make port 80 available outside the container
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]
