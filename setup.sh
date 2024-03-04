#!/bin/bash

# Prompt for environment variables
echo "Enter MySQL database name: "
read mysql_database

echo "Enter MySQL root password: "
stty -echo
read mysql_root_password
stty echo

echo "Enter MySQL user: "
read mysql_user

echo "Enter MySQL user password: "
stty -echo
read mysql_password
stty echo

echo "Enter timezone (default is Asia/Bangkok): "
read timezone
if [[ -z "$timezone" ]]; then
    timezone="Asia/Bangkok"
fi

echo "Enter language setting (default is C.UTF-8): "
read lang
if [[ -z "$lang" ]]; then
    lang="C.UTF-8"
fi

# Prepare the content for the .env file
env_content="MYSQL_DATABASE=$mysql_database
MYSQL_ROOT_PASSWORD=$mysql_root_password
MYSQL_USER=$mysql_user
MYSQL_PASSWORD=$mysql_password
TZ=$timezone
LANG=$lang
"

# Path to the .env file
env_file_path=".env"

# Write the environment variables to the .env file
echo "$env_content" > $env_file_path

echo "Successfully created $env_file_path with specified environment variables."
