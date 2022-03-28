# Angular 13 

- Clone the repo: `git clone https://github.com/carlosed1995/angular-test-soyyo.git`

#### <i>Prerequisites</i>
Before you begin, make sure your development environment includes `Node.js®` and an `npm` package manager.

###### Node.js
Angular 13 requires `Node.js` version `^12.20`, `^14.15` or `^16.10`.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

###### Angular CLI
Install the Angular CLI globally using a terminal/console window.
```bash
npm install -g @angular/cli
```

### Installation

``` bash
$ npm install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:4200
$ npm start
```

Navigate to [http://localhost:4200](http://localhost:4200). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
# build for production with minification
$ npm run build
```
## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
 
├── src/                         # project root
│   ├── app/                     # main app directory
|   │   ├── containers/          # layout containers
|   |   │   └── default-layout/  # layout containers
|   |   |       └── _nav.js      # sidebar navigation config
|   │   ├── icons/               # icons set for the app
|   │   └── views/               # application views
│   ├── assets/                  # images, icons, etc.
│   ├── components/              # components for demo only
│   ├── scss/                    # scss styles
│   └── index.html               # html template
│
├── angular.json
├── README.md
└── package.json
```

## Documentation

The documentation for the CoreUI Admin Template is hosted at our website [CoreUI for Angular](https://coreui.io/angular/)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.
