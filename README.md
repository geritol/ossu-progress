# OSSU-progress
[![Open Source Society University - Computer Science](https://img.shields.io/badge/OSSU-computer--science-blue.svg)](https://github.com/ossu/computer-science)

Showcase your progress with the Open Source Society University's Computer Science curriculum.  
Currently only `Introduction to Computer Science` and `Core CS` courses are included.  

Preview [here](https://geritol.github.io/ossu).

## Usage

Alter `progress.js` to reflect your current progress with the course.  
Use the following statuses:  
- todo
- doing
- done

Add your name and contact info to `./index.html`.

Deploy `./index.html`, `./progress.js` and `./dist` to a static server.

## Development

Setup: `npm install` in the root folder.

Source files are located in the `./src` folder. While altering stuff in this folder be sure to have   
```bash 
gulp dev
```
running.

Before deploying run `gulp` to create the production build to the ```./dist``` folder.
