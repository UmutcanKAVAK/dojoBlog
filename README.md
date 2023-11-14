# Dojo Blog Project

This project is a simple blog built using React. It incorporates various technologies and concepts to create a dynamic and interactive user experience.

## Technologies and Concepts Used

1. **React:** Utilized React, a JavaScript library for building user interfaces, to create a fast and interactive blog application.

2. **React Router:** Integrated React Router, a standard library for routing in React applications, to handle navigation dynamically.

3. **State Management with useState:** Leveraged the `useState` hook from React to manage component-level state, facilitating a reactive user interface.

4. **Fetch API:** Utilized the Fetch API to make HTTP requests to a JSON server (`http://localhost:3001/blogs`), enabling communication with a backend server.

5. **CSS Styling:** Applied basic CSS styling to enhance the visual presentation of blog components, ensuring a pleasing user interface.

6. **Form Handling:** Implemented form handling in React to add new blog entries, including input validation, data submission to the server, and UI updates.

7. **Conditional Rendering:** Utilized conditional rendering in React to dynamically display elements based on the application's state, such as showing a loading message during data fetching.

8. **React Hooks:** Specifically, used the `useEffect` hook to perform side effects in functional components, such as fetching data after the component mounts.

9. **Error Handling:** Implemented error handling by catching errors from the Fetch API, providing a graceful response and updating the UI accordingly.

10. **React Router Navigation:** Set up navigation with React Router, creating links and routes for different parts of the application, ensuring a seamless user experience.

11. **React Fragment:** Employed the shorthand `<></>` syntax as a React fragment to wrap adjacent JSX elements without introducing unnecessary parent elements.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Run 'npm run dev' to start the server for getting data back from db.json file.
6. After step 5 everything should just be fine.
7. You can see the blogs at http://localhost:3000/blogs]
8.  You can see a single blog at http://localhost:3000/blogs/:id] with the id.
9. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

Feel free to explore and contribute to the development of this Dojo Blog project!
