# Gulp Tasks

This project contains a recommended structure and set of Gulp tasks to perform the following operations:

* Dynamic generation of a "master" Sass file
* Sass transpilation and CSS minification
* TypeScript transpilation and JavaScript combination
* JavaScript linting and minification
* Image spriting with related Sass variable/mixin generation

## Structure

### Modules

The structure is designed to **promote self-contained modules**, providing a simple, consistent pattern for placing and locating code.

The tasks are built to create framework-style bundles that include all modules (e.g. all.min.css and all.min.js), but the module-centric structure also simplifies a **dynamic bundling** approach where only the required modules can be bundled at runtime for each page, optionally rendering styles for above-the-fold modules as inline CSS.  Such an approach would need to be implemented server-side and is beyond the scope of this project.

### Shared Code

Shared code is stored separately and referenced by modules.  This includes:

* Fonts
* Images
* Sass variables and mixins
* Base element styles
* Script utilities

## Installation

1. Clone the repo to your project root
1. Run `npm install`
1. Run `gulp`

This should open a browser at http://localhost:3000/ and show the sample page.  At this point, you can modify HTML, Sass, TypeScript, or icon images and see those changes reflected in the browser.