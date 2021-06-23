# MooveIT BootCamp PostIT App

Welcome. Below you can find more informationn about the project.

<!-- TODO: MAKE PUBLIC WHEN LINK (Github-page) IS READY -->
<!--You can see the running app following this link: Github-page
//Or set it up locally:-->

## Required Software :computer:

Before starting, make sure your computer has up-to-date versions of the following installed:

* Node/NPM (choose the latest version)
* Git
* Visual Studio Code as our main IDE.
* ESLint as an extension for your Visual Studio Code.

## Installing and running the project :zap:
* Clone the repository in the directory of your preference using `git clone https://github.com/alfredoLopezpintos/aplicacion-react.git`
* Type `cd aplicacion-react` to change your current directory to the repository folder.
* Open this repository with Visual Studio Code.
* Type `npm install` to install all of the project dependencies.
* Start the project locally running: `npm start`
### This will load the following site:
![Post_IT_Home](https://user-images.githubusercontent.com/84357625/121825858-10d75500-cc8b-11eb-9b46-1d997a83b05b.PNG)

Perfect, you are ready to start. Happy coding! :smiley:

## Technical decisions made by the group :ballot_box_with_check:
Here we will deliver more info about anything needed or important related to the project.
### Dependencies
    "@reduxjs/toolkit": "^1.5.1",
    "@testing-library/jest-dom": "^5.12.0",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
* `"react-icons": "^4.2.0"`:  used for the icons of "delete", "permanently delete", "undo",
                            "empty trash bin" and "full trash bin"
* `"react-redux": "^7.2.4"`: used for the offer of hooks like `useSelector()`, `useDistpatch()`, `useStore()`.
* `"react-router-dom": "^5.2.0"`: used to establish and redirect the navigation between index and trash bin pages.
* `"react-scripts": "4.0.3"`: this package includes scripts and configuration used by Create React App.
* `"redux": "^4.1.0"`: used to manage the state of the application.
* `"redux-logger": "^3.0.6"`: used to print in the terminal all dispatched action. 
* `"web-vitals": "^1.1.2"`: used to measure the UX performance. It came in the package of `create-react-app`.

All project dependencies have a reason. This project uses React, Redux, React-Router, Jest & Redux Toolkit as a must for the code challenge. Also we are using React icons for a better UI experience and to facilitate the design development of the app. The other dependencies are for development purposes only.
