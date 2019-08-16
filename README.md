# OSSU-progress

[![Open Source Society University - Computer Science](https://img.shields.io/badge/OSSU-computer--science-blue.svg)](https://github.com/ossu/computer-science)

Showcase your progress with the Open Source Society University's Computer Science curriculum.  
Currently only `Introduction to Computer Science` and `Core CS` courses are included.

Preview [here](https://geritol.github.io/ossu).

## Usage

Copy `src/index.html.example` to `src/index.html`  
and `src/progress.json.example` to `src/progress.json`

Alter `progress.js` to reflect your current progress with the course.  
Use the following statuses:

- todo
- doing
- done

Add your name and contact info to `./index.html`.

Run `npm run build`

> Note: the `build` script assumes that you will deploy it in the root of your site.  
> To deploy it in a subfolder use `npm run build-subfolder` (replace the part after `--public-url` with your subfolder name)

Deploy `./dist` to a static server.

## Development

Setup: `npm install` in the root folder.

Source files are located in the `./src` folder.
After altering files `npm run build`
