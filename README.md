# IwoCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Developer notes

The calculator table was decided to be developed as a seperate component as that would reduce HTML and logic duplication

The restrictions API is called on the parent app component to avoid calling it multiple times

It was assumed that the restictions API repsonse would always have the same format

It was assummed that decimal values will be rounded down to the nearest integer for this particular use case

If there was more time, input validations should be implemented for all user inputs so that the user cannot leave them empty
or put something that is not a number

If there was more time, the error messages would appear into an error dialog window which would have been a separate custom component




