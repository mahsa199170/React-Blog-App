# React-Blog-App


**React Blog App**
This is a simple blog application built with React, using React hooks and React router. The blog posts are stored in a JSON file and served with JSON server.


**<span style="font-size: 50px;">Features</span>** <br>
Home page: displays a list of blog posts with their titles and authors. Users can click on a post to view its full content.<br>
Create page: allows users to create a new blog post by filling out a form with a title, author, and content. The new post is added to the JSON file and displayed on the home page.<br>
Blog page: displays the full content of a specific blog post, as well as the option to delete the post from the JSON file.<br>
404 page: displays a friendly error message when the user enters an incorrect URL.

**Technologies Used**<br>
React<br>
React Hooks<br>
React Router<br>
JSON server<br>

**Getting Started**<br>
To run the application, follow these steps:<br>

Clone this repository to your local machine.
Navigate to the project directory and run npm install to install the dependencies.
Start the JSON server by running npx json-server --watch data/db.json --port 8000 in the terminal.
In a separate terminal window, start the React development server by running npm start.
Open a web browser and navigate to http://localhost:3000 to view the application.
