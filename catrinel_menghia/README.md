# Installation instructions for local development.

- After cloning navigate with (git bash, etc - or terminal if you are a mac user) to catrinel_menghia folder
- Run "npm install" (gulp-jshint and jshint-stylish are now added to package json so a separate install is not needed)
- Run "gulp watch" (jshint should provide hints related to js mistakes, and sass should convert scss into css)
- In a new terminal tab/window navigate to chatrinel_menghia folder and run ionic serve or ionic serve --lab
  (all changes will be available in a browser tab - live reload active)

# General file structure that is relevant at the moment

- www/app - app components and logic
- www/app/folder_x - specific component that can contain a template, a controller, etc
- www/scss/ionic.app.scss - all styles are added here ATM. There is one .scss file but this may need to be changed.
- www/layout - general templates that are not specific for component
- www/index.html

- everything else outside www are either settings files or components (modules, plugins, etc) we use.

#Documentations
- Ionic: http://ionicframework.com/docs/components/#buttons
- Bootstrap: http://getbootstrap.com/components/
