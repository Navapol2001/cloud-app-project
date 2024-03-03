import getpass


def main() -> None:
    # Ask for environment variables
    mysql_database = input("Enter MySQL database name: ")
    mysql_root_password = getpass.getpass("Enter MySQL root password: ")
    mysql_user = input("Enter MySQL user: ")
    mysql_password = getpass.getpass("Enter MySQL user password: ")
    timezone = input("Enter timezone (default is `Asia/Bangkok`): ")
    if timezone == "":
        timezone = "Asia/Bangkok"
    lang = input("Enter language setting (default is `C.UTF-8`): ")
    if lang == "":
        lang = "C.UTF-8"

    env_content = f"""MYSQL_DATABASE={mysql_database}
    MYSQL_ROOT_PASSWORD={mysql_root_password}
    MYSQL_USER={mysql_user}
    MYSQL_PASSWORD={mysql_password}
    TZ={timezone}
    LANG={lang}
    """

    # Path to the .env file
    env_file_path = '.env'

    # Writing the environment variables to the .env file
    with open(env_file_path, 'w') as file:
        file.write(env_content)

    print(f"Successfully created {env_file_path} with specified environment variables.")


if __name__ == "__main__":
    main()
