
# VueJS - NodeJS Project

Training app to understand how to communicate back & front.

## Warning

This project is for educational purposes only. Base connection information, token secret and other secret information are shown in plain text.
#### /!\ Do not reproduce in production.

Make sure you have pnpm & docker installed on your computer.

If not, you can install it this way : 

```bash
npm i -g pnpm
```

If you don't have docker installed please refer to this link :
 [docker](https://docs.docker.com/desktop/install/windows-install/)

## How to install

### 1°/ Docker environnment

#### Start a container with mysql & phpmyadmin images

```bash
$vuejs-nodejs: docker-compose up -d
```

Phpmyadmin is running on port [8000](http://localhost:8000/)

#### Logs : root / secret

### 2°/ Database

#### Create a database called `chaussette`

### 3°/ Clone the project

```bash
git clone https://github.com/MelwinC/vuejs-nodejs.git
```

### 4°/ Setup & start back

```bash
$vuejs-nodejs: cd back
```

```bash
$vuejs-nodejs/back: pnpm i
```

```bash
$vuejs-nodejs/back : pnpm start
```
#### It should be running on port 8080

### 5°/ Setup & start front

#### /!\ In another terminal

```bash
$vuejs-nodejs: cd front
```

```bash
$vuejs-nodejs/front: pnpm i
```

```bash
$vuejs-nodejs/front: pnpm dev
```

#### It should be running on port [8081](http://localhost:8081/)

## Try it out

Go to this url :  [8081](http://localhost:8081/)

Try  register / login / adding items
## Author

- [@MelwinC](https://www.github.com/melwinc)

