# create project folders
```sh
  mkdir mern-auth && cd mern-auth
```
# backend
```sh
  mkdir server && cd server
  npm init -y
  npm i express mongoose bcryptjs jsonwebtoken cookie-parser cors dotenv
  npm i -D nodemon
```
# open another terminal for frontend
```sh
  cd ..
  npx create-react-app client
  cd client
  npm i axios
```
