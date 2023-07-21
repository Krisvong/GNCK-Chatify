# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1. GNCK Send-It

This is the Milestone three project of all stars Casey, Kristen, Nick and Gregg for the NCSU Software Development Bootcamp. The goal of this project was to demonstrate our knowledge and understanding of a fullstack application from conception to deployment. It is a culmination of all of our work in the software development course with a specific focus on building from scratch a React front end, an Express back end, connecting to a Mongo database, and running in a Node environment. Our overarching goal was to build an API that relied on RESTful pricipals, keeping our code as DRY as possible, and to make an app that was functional and useful, and that looked good too. We specifically chose to do this project as a group in order to hone our skills as developers, while also building on our earlier work of team building and collaboration. Collaborative coding is clearly a foundational skill and each of us was determined to further our understanding of it.

2. Outline

In order to organize our original thoughts, we started our planning with an outline. It was not 100% complete, and it had some things that would change in the end, but it helped us to get going. Here is what our outline looked like:

Send-It outline

Set up the development environment:

Install Node.js and MongoDB on your machine. Set up a new project directory. Backend development (Node.js and Express.js):

Initialize a new Node.js project in your project directory. Install the required dependencies, such as Express, Mongoose, and any other libraries you may need. Set up your Express.js server with necessary routes and middleware. Create a MongoDB database to store messages. Define a schema for the messages and create a Mongoose model. Implement API routes for sending, receiving, and retrieving messages. Test your API using a tool like Postman. Frontend development (React.js):

Initialize a new React.js project in a separate directory. Set up necessary folder structure and component files. Install required dependencies, such as Axios for API communication. Create React components for displaying messages, composing new messages, and other necessary components. Implement API calls in your components to interact with the backend. Build UI and UX for your messaging app using HTML, CSS, and React component styling. Connect the backend and frontend:

Set up the necessary endpoints on the backend to handle API requests from the frontend. Update your frontend components to interact with the backend API. Test the integration between the frontend and backend to ensure data flow. Deploy and host your application:

Prepare your application for deployment by configuring necessary settings and environment variables. Build your React frontend for production. Deploy your backend and frontend to a hosting platform like Heroku or Netlify. Set up your MongoDB database in a cloud service like MongoDB Atlas. Update your application configuration to use the production database and API endpoints. Test and refine:

Thoroughly test your messaging app for functionality and performance. Identify any bugs or issues and fix them. Refine the user interface and experience based on feedback and usability testing.

3. Usage:

Who among us does not feel that the internet's main function has not always been to facilitate communication? As novice developers we did not set out to reinvent communication, just to build an intuitive app that would allow brief chats between friends. A user first must register, or sign in and create a profile, then they can search for others and finally send messages, and have the communication string be visible for reference.

4. About the Team

Casey: Hey I'm Casey. I have been a stay at home mom for a few years and now looking for a change of scenery! I enjoy technology and learning new skills as well as creating and fixing projects. I would love to pursue something with the car industry and software. Here's to a new journey!

Nick:

Nick has been working in IT for over 10 years. He is looking forward to making a career transition into software development, focusing on frontend specialties. When he's not learning new code, Nick enjoys playing guitar and chess, as well as working on projects outside.

Kristen:

Hi there! I am Kristen, a software developer. I am passionate about fitness, reading, and I love to learn about new technologies.

Gregg:

Gregg has spent the last many years opening and developing a venerable local eatery/institution, but has now decided to try his hand at a different kind of development. He likes to debate matters of great import with his adult sons, and is obsessed with electrified stringed instruments.

5. Tech

The team made use of an Express App running React and a Mongo database to keep track of everything, all of which is running in a Node environment and deployed to the cloud via Heroku.

6. Citations

The team was careful to do their own work to bring the app to life, but as good developers do, some references were used for their documentation.

Mern Stack Chat App tutorial Videos

Author: RoadsideCoder date: Nov 7 2021 https://youtu.be/02MoKBaU3SY type: Youtube video series @RoadsideCoder piyushagarwalvo@gmail.com

Realtime Chat app with React, Node.js, Socket.io and MongoDB

Author: Kishan Sheth date: Mar 2 2022 https://youtu.be/otaQKODEUFs type: Youtube video @KishanSheth21 kishansheth21@gmail.com

Socket.io Webdocs

author: Socket.IO date: last updated June 20 2023 https://socket.io/docs/v4/faq/ https://socket.io/

7. Demo:

see the deployed version and demo it here:

https://gnck-send-it-c75ccd121857.herokuapp.com/