# cloud-app-project

# Loan Monitoring

This project was created for EN814710 Cloud Applications and Networking.
To learn about microservice application and One-Command Deployment.

## Members
- Thanawat Thongnoi 633040159-8
- Metee Yingyongwatthanakit 633040174-2
- Navapol Sombatteeta 633040712-0

## Service
![image](https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.15752-9/423472372_387017143972494_3402851554600212657_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF5CTV-COqlYVjujASW_N07BiRkSvSyBpkGJGRK9LIGmQtifB64DQ_KqXYgiFLCcrgL3MDsglpQWF8w8QKPFIUS&_nc_ohc=iJ5M6IfbTW8AX_UbxVy&_nc_ht=scontent.fkkc3-1.fna&oh=03_AdRRYzZ3JLgGkdqOOBGUxcmo-5RYZf0jQ8RWVr5XoUmVRw&oe=660C083B)
- 3 Service
  - Frontend
  - backend
  - database
- 2 network
  - dashboard network
  - backend network
# Installation

- clone this project
```bash
git clone https://github.com/Navapol2001/cloud-app-project.git
```
- change directory to the project
```bash
cd cloud-app-project
```

## Setting up
1. you need to run python setup script or shell script to setup environment file.
```bash
python3 setup.py
```
or
```bash
chmod +x setup.sh
./setup.sh
```
- output
```bash
Enter MySQL database name: 
Enter MySQL root password: 
Enter MySQL user: 
Enter MySQL user password: 
Enter timezone (default is `Asia/Bangkok`): 
Enter language setting (default is `C.UTF-8`): 
Successfully created .env with specified environment variables.
```

2. Before you compose Up you must add `database/docker-entrypoint-initdb.d` sql queries. You can read more about it in [database markdown document](./database/README.md).
![image](https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.15752-9/430881713_418694170613533_2318251427622433982_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE75qCPfGpag6JWC42LtcX_z-UiyuoEsmDP5SLK6gSyYMn9uuFbuUFRRF7v5qMTExraxoTtYd0U9ZR4r4Uzdsjy&_nc_ohc=VetoGwtUOK4AX_1kR9_&_nc_ht=scontent.fkkc3-1.fna&oh=03_AdTOimqitKW7IFzG-9zw9ssfjwYc9KSB-eLniu6hjFlMDQ&oe=660C0C42)
3. Make sure you have docker compose
```bash
docker-compose --version
```
- output
```bash
> docker-compose version 1.25.5, build 8a1c60f6
```
4. Run your compose up
```bash
docker-compose up --build -d
```
