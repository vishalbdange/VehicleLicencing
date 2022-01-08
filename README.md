# **BookXchanger**

### Table of Content

  - [Team members](#team-members)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [DataBase](#database)
    - [Design](#design)
  - [Installation](#installation)
  - [Contribution](#contribution)

## Team members

- [Sagar Mude](https://github.com/sagarmude7)
- [Vedant Mondkar](https://github.com/vdmondkr2002)
- [Vishal Dange](https://github.com/vishalbdange)
- [Shivam Pawar](https://github.com/theshivv)
- [Ameya Dhonddev](https://github.com/)

## Problem Statement

We are trying to create software that can solve the following problems : 
- Lack of proper security and authentication in the system creates an avenue for fraud and manipulation of stored data in the system, 
- Lack of proper, accurate, and concise information about the vehicle owner.
- Lack of proper and accurate record-keeping of stored information and finally lack of review process: this is a situation where there is no avenue created for review.
- Handling and carrying documents for registration.
- A User-Friendly Interface that makes the user easy to access Details of Vehicles.


## Features

- Customer Registration: Any customer can register on a website using the registration module.
- Customer Login: There is the login form, from where the Customer can log in to the system
- Add Vehicle: There is an add Vehicle form where customers can easily add a Vehicle.
- My Dashboard: There is the customer my Vehicle form.
- Update Vehicle: There is the module where a customer changes his Vehicle details.

## Tech Stack

### Frontend

- [ReactJS](https://reactjs.org/) - React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

- [MaterialUI](https://material-ui.com/) - Material Design (codenamed Quantum Paper)[5] is a design language developed by Google in 2014. Expanding on the "card" motifs that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

### Backend

- [NodeJS](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

- [ExpressJS](https://expressjs.com/) - Express.js, or simply Express, is a back-end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

### DataBase

- [MongoDB](https://www.mongodb.com/) - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).

### Design

- [Draw.io](https://app.diagrams.net/) - Diagrams.net (formerly draw.io) is free online diagram software. You can use it as a flowchart maker, network diagram software, to create UML online, as an ER diagram tool, to design database schema, to build BPMN online, as a circuit diagram maker, and more. draw.io can import .vsdx, Gliffy™, and Lucidchart™ files.


## Installation

Step1 - Clone this repository using:

```
$ git clone https://github.com/vishalbdange/VehicleLicencing.git
```

Step2 - Install the server dependencies:

```
cd VehicleLicencing
npm install
```

Step3 - Install the client dependencies:

```
cd client
npm install
```

Step4 - Create a config.env file inside the config folder of the parent directory and put variable values as guided in config.env.example file

Step5-
Now you can run the app on localhost:3000 using:

```
$ npm run dev
```

## Contribution

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch 
```
$ git checkout -b feature/AddFeature
```
3. Commit your Changes
```
$ git commit -m 'Add some New Feature'
```
4. Push to the Branch 
```
$ git push origin feature/AddFeature
```
5. Open a Pull Request
