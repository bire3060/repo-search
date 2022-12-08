<h1 align="center">
🌐 Github Repo Searching
</h1>
<p align="center">
 Expressjs, React, Nodejs,tailwind-css
</p>




## clone or download
```terminal
$ git clone https://github.com/bire3060/repo-search.git

```

## project structure
```terminal
LICENSE
package.json
server/
   package.json
   .env (to create .env,)
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [Node](https://nodejs.org/en/download/) ^12.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$  npm i    // npm install packages
$ npm start        // run it locally

```

## Server-side usage(PORT: 8001)

### Prepare your secret

run the script at the first level:

(You need to add a TOKEN in .env to connect to github)

```terminal
// in the root level
$ cd server
$ echo "TOKEN=^ghp_hB50baopqvxFjdk26iD^FQbYDRdLlYr1J3RiI^" >> .env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ node server.js // run it locally

```



