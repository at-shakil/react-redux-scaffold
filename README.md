# React Redux Scaffold

A feature rich React Redux scaffold

### Version
1.0.0

### Installation

#### Prerequisites
This project depends on [npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org). The installation method varies from platform to platform.

If you are using a Debian distribution, please follow the steps below,

```sh
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Or, if you are using some other linux distribution or a different platform, please follow the instruction provided [here](https://nodejs.org/en/download/package-manager/).

Now, the dependency modules need to be installed.
```sh
$ npm install
```

#### Development
The development server (with hot reloading support) can be started using,
```sh
$ npm start
```

Now open up [http://localhost:3000](http://localhost:3000)

#### Production
To deploy the project, first build the production package:
```sh
$ npm run build
```
Once the build is ready, it becomes available at `./build` directory.

Built package can be tested on a demo. HTTP server:
```sh
$ npm run start:prod
```
Or, a clean build can be produced and tested at a time:
```sh
$ npm run start:prod:cold
```

