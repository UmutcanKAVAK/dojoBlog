
Dojo Blog Project
This project is a simple blog built using React. It incorporates various technologies and concepts to create a dynamic and interactive user experience.

Technologies and Concepts Used
React: Utilized React, a JavaScript library for building user interfaces, to create a fast and interactive blog application.

React Router: Integrated React Router, a standard library for routing in React applications, to handle navigation dynamically.

State Management with useState: Leveraged the useState hook from React to manage component-level state, facilitating a reactive user interface.

Fetch API: Utilized the Fetch API to make HTTP requests to a JSON server (http://localhost:3001/blogs), enabling communication with a backend server.

CSS Styling: Applied basic CSS styling to enhance the visual presentation of blog components, ensuring a pleasing user interface.

Form Handling: Implemented form handling in React to add new blog entries, including input validation, data submission to the server, and UI updates.

Conditional Rendering: Utilized conditional rendering in React to dynamically display elements based on the application's state, such as showing a loading message during data fetching.

React Hooks: Specifically, used the useEffect hook to perform side effects in functional components, such as fetching data after the component mounts.

Error Handling: Implemented error handling by catching errors from the Fetch API, providing a graceful response and updating the UI accordingly.

React Router Navigation: Set up navigation with React Router, creating links and routes for different parts of the application, ensuring a seamless user experience.

React Fragment: Employed the shorthand <></> syntax as a React fragment to wrap adjacent JSX elements without introducing unnecessary parent elements.

Getting Started
To run the project locally, follow these steps:

Clone the repository.
Navigate to the project directory.
Run npm install to install dependencies.
Run npm start to start the development server.
Run 'npm run dev' to start the server for getting data back from db.json file.
After step 5 everything should just be fine.
You can see the blogs at http://localhost:3000/blogs]
You can see a single blog at http://localhost:3000/blogs/:id] with the id.
Open http://localhost:3000 in your browser to view the application.
Feel free to explore and contribute to the development of this Dojo Blog project!
