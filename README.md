# Installation, up and running

Launch the Terminal app and use bellow command to install, up and running

## Clone repository

Run bellow command to clone this repository <br />
`git clone git@github.com:jahidhiron/raect-blog-app.git .`

## Server installation, up and running

You may use npm or yarn. Like `yarn` and `yarn run dev` <br />

`npm install` <br />
`npm run dev` <br />
<br />
<br />

# Documentation

Here I have discussed about which technology I have used, and why used. <br />

## Client side technology

### Framework/Library and modules

1. I have used `react.js` to handle client side UI
2. I have used `axios`. It is a promised-based HTTP client for JavaScript.
3. For client side route management I have used `react-router-dom`
4. `react-toastify` is used to show success/error message
5. `react-bootstrap` is used to show modal

## Decision

1. `Why react.js?: ` It provides state-of-the-art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework. Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages. It also provide `virtual DOM` which provides more performant.
2. I have used pagination instead of loading all data at a time. Initially, it loads 10 items
3. Authentication, authorization, user verify, recover password are added to this app
