Notes:

This is a project for the webpage of Paisajismo Muñoza.

For this project i´ve setup npm as package manager.
Thanks to this, i will be able to install dependancias as webpack, wich i installed as a module bundler.
This means that all of my javascript and Sass(instead of css) will be compiled and bundled onto the docs folder as bundle.js.

The docs folder used to be called dist, but for deploying the website to github pages purposes it changed.
This can be changed on the webpapck config file.

Now, talking about frameworks and libraries for styling:

Bootstrap:
Installed from NPM, incluiding webpack, wich will be helpful on the firebase usage too.
Used this instructions to setup: https://getbootstrap.com/docs/5.3/getting-started/webpack/


FontAwesome Icons:
Installed from NPM.
Used this instructions to setup:
1- To install the dependancie: https://fontawesome.com/docs/web/setup/packages
2- Chosen webFonts + css method
3- To setup with sass and compile with webpack: https://fontawesome.com/docs/web/setup/host-yourself/webfonts#reference-font-awesome-in-your-project

//Problem Found: webpack outputs the fonts in the docs folder directly too...
Found a kinda solution to output them in a specific folder but now it outputs in specific folder and the docs too.
1- First(deprecated): https://stackoverflow.com/questions/33058964/configure-webpack-to-output-images-fonts-in-a-separate-subfolders
2- Update: https://medium.com/@mehran.hrajabi98/webpack-5-asset-loaders-vs-asset-modules-b08263970510
3- Docs Wepack 4(previous): https://v4.webpack.js.org/loaders/url-loader/
(Here i npm installed url-loader and file-loader)
4- Actual webpack 5(Says previous way is deprecated but still valid): https://webpack.js.org/guides/asset-modules

Changed the webpack.config.js file in order to work. But it shouldn´t output on docs folder directly