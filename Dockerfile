# Install nginx
FROM nginx

# Copy files to container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
