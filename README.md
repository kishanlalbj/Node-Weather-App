# Node-Weather-App


### Installation

Node Weather App is a command line weather application. It requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/kishanlalbj/Node-Weather-App.git
$ cd Node-Weather-App
$ npm install -d
$ node app
```


### Usage

For help 

```sh
$ node app --help

Options:
  --version      Show version number                                   [boolean]
  -a, --address  address to fetch weather                    [string] [required]
  --help, -h     Show help                                             [boolean]
```

```sh
$ node app --address="Rasipuram"

It is currently 91.94. Weather will be Mostly Cloudy
```


