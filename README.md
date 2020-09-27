# node-express-template

A template for creating fast and secure Express Applications. 
Content Security Policy has been set up using [Helmet](https://helmetjs.github.io/). 
Compression has been added using the node middleware [Compression](https://www.npmjs.com/package/compression)
The template has been setup to use Bootstrap CSS and Bootstrap-native Javascript as a CDN but will fall back on local copies if the CDN is unavailable.
Both CDN's have been allowed through the CSP
[Bootstrap-native](https://thednp.github.io/bootstrap.native/) has been used for added performance. Bulky ```j-query``` and ```popper``` libraries are not required

# Installation

Clone or download and unzip this repository. Change the parent directory to your own application's name. Navigate to your parent directory and run
```
npm init
```
Answers the questions when prompted

## Essential Packages
If you haven't already installed them run these commands from your root directory
```
npm install express --save
npm install pug --save
```

## Optional Packages for Security and Performance
If you want a fast and secure website I highly recommend using CSP and compression. Run these commands from your root directory
```
npm install compression --save
npm install helmet --save
```
If you are not going to use these packages, don't forget to remove the imports and usage lines from ```app.js```

From the parent directory run 
```node app.js```
Open up your browser and goto 
```localhost:3000```
where you will find your app running.

## Make it your Own

* Edit the ```views/home pug``` template to show your homepage
* Further routes should be added to the ```routes.js``` file
* Further pug templates should inherit from ```global.pug``` As this contains the head section and bootstrap imports.
* Google analytics should be added to the head section of ```global.pug```
