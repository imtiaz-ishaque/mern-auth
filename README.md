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

  # Global install concurrently
  npm i -g concurrently
  # Local install concurrently
  npm i -D concurrently
```

# open another terminal for frontend
```sh
  cd ..
  npx create-react-app client
  cd client
  npm i axios
  npm i react-router-dom
```
