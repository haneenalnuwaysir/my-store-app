
# my-store-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

MyStore App is a single-page application built in Angular, that offers a rich, dynamic experience on the web. It presents a list of product which can be added to a cart then checkout. You can View, Add product and view it in the cart also remove it.

##  The flow of My Store application
 
#### It has a Components, Model, and Services. 
#### The Components contain of :
``cart-component``
it show all the products that user add to the cart.

``confirmation-component``
it show the confirmation message for user order.

``product-item-component``
it show all the products .

``product-list-component``
it component that contain the product-item-component.

``product-item-detail-component``
it show the details of product name, price, description.

``user-details-component``
it contain of all input that user must intered for complete the order .

#### The Mudel contain of :
`` productModel `` 
it is the interface for ProductStore details id, name , description, price ... etc
`` address `` 
it is the interface for user address details .
#### The Services contain of :
`` cart.service`` the service of get and clear of cart.  
`` product.service`` the service of get and add of product.


## Dependencies 

To install the dependencies for this project, run the following command: 
```
npm install
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Author

- [@haneenalnuwaysir](https://github.com/haneenalnuwaysir)
