# Use the official MySQL image
FROM mysql:8.3.0

# Set environment variables
ENV MYSQL_DATABASE=accountant
ENV MYSQL_ROOT_PASSWORD=password
# Set encoding to UTF-8
ENV LANG=C.UTF-8

# Copy your SQL scripts into the container
COPY ./docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d/

# Copy your data files into the container
#COPY ./data/ /var/lib/mysql-files/

# Optional: Set permissions for the copied CSV files (might be necessary depending on your Docker setup)
#RUN chmod a+r /var/lib/mysql-files/*
