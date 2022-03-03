#### Create React App manually

1.  Initialize NPM

    - `mkdir my-app-create-manually`
    - `cd my-app-create-manually`
    - `npm init -y`

2.  install react and react-dom

    `npm install react react-dom`

    This will generate the `package.json` file by default settings.

3.  Install babel

    `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader`

    - `–save-dev` means save all above installed modules in devDependencies in package.json file,
    - `@babel/core` is a module that contains the main functionality of Babel,
    - `@babel/cli` is a module that allows us to use babel from the terminal,
    - `@babel/preset-env` is preset that handles the transformation of ES6 syntax into common javascript,
    - `@babel/preset-react` is preset which deals with JSX and converts it into vanilla javascript.
    - `babel-loader` allows transpiling JavaScript files using Babel and webpack.

4.  Create a file .babelrc

    Creact the file

    ```
    copy NUL .babelrc
    ```

    Copy the code below and save to the file

    ```
    {
    "presets": ["@babel/preset-env","@babel/preset-react"]
    }
    ```

    This file will tell babel transpiler what presets and plugins to use to transpile the code.

5.  Install webpack

    `npm install --save-dev webpack webpack-cli webpack-dev-server`

    - `webpack` is a modular bundler,
    - `webpack-cli` allows us to use webpack from the terminal by running a set of commands,
    - `webpack-dev-server` provides a development server with live reloading i.e. you do not need to refresh the page manually.

6.  Install some plugins and loaders

    `npm install --save-dev html-webpack-plugin style-loader css-loader file-loader`

7.  Create a file webpack.config.js and copy the code below

    ```
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const path = require("path");

    module.exports = {
       entry: "./src/index.js",
       output: {
           filename: "bundle.[hash].js",
           path: path.resolve(__dirname, "dist"),
       },
       plugins: [
           new HtmlWebpackPlugin({
           template: "./src/index.html",
           }),
       ],
       resolve: {
           modules: [__dirname, "src", "node_modules"],
           extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
       },
       module: {
           rules: [
           {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: require.resolve("babel-loader"),
           },
           {
               test: /\.css$/,
               use: ["style-loader", "css-loader"],
           },
           {
               test: /\.png|svg|jpg|gif$/,
               use: ["file-loader"],
           },
           ],
       },
    };
    ```

8.  Create src folder and create basic js and html files in it

    - index.html

      ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div id="root"></div>
      </body>
      </html>
      ```

    - index.js

      ```
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App';

      ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
      ```

    - App.js

      ```
      import React from "react";

      function App(){
          return (
              <h1>Hello React</h1>
          )
      }

      export default App;
      ```

9.  Add start scripts to `package.json`

    ```
    "scripts": {
       "start": "webpack serve  --hot --open",
       "build": "webpack --config webpack.config.js --mode production",
    }
    ```

10. Start the app

    Run `npm start` and the page will be opened automatically in `http://localhost:8080/`

11. Add `.gitignore` file to avoid upload node_modules

12. For not uploading node_modules to GitHub, if you download these file from GitHub(without folder node_modules),
    you need to run `npm install` first, to download the dependencies, and then run `npm start`.
