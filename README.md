# Gulp Tasks

This project contains a recommended structure and set of Gulp tasks to perform the following operations:

* Dynamic generation of a "master" Sass import file
* Sass transpilation and minification
* TypeScript transpilation and combination
* JavaScript linting and minification
* Image spriting with related Sass variable/mixin generation

## Structure

### Modules

The structure is designed to **promote self-contained modules**, providing a simple, consistent pattern for placing and locating code.

The tasks are built to create framework-style bundles that include all modules (e.g. all.min.css and all.min.js), but the module-centric structure also simplifies a **dynamic bundling** approach where only the required modules can be bundled at runtime for each page, optionally rendering styles for above-the-fold modules as inline CSS.  Such an approach would need to be implemented server-side and is not implemented in this repo.  

### Shared Code

Shared code is stored separately and is referenced by modules.  This includes:

* Fonts
* Images
* Sass variables and mixins
* Base element styles
* Script utilities