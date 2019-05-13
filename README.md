
## Description
style is a sub-project for propen for scss-css generation

## Automation
the project use gulp to streamline the process of compiling scss.

### plugin used:
    - postcss
        - nanocss
        - autoprefixer
    - gulp-sourcemaps (could be replaced with new src dest config)
    - gulp-sass

### cli-command 
    "npm start" to start watching in devmode.
    "npm run build" to manually compile production css.