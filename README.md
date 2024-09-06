# Course Management Web Application
 [Livesite](https://course-management-react-frontend.vercel.app/)

This project is a web application developed using React.js with Redux Toolkit for state management. It features a custom backend built with Node.js and Express.js, with MongoDB as the database. The application allows users to browse courses, view detailed information, and manage enrolled courses.

## Features

### Course Listing Page
- **Course Fetching**: Fetches a list of courses from a custom API.
- **Search Functionality**: Users can search courses by name and instructor.
- **Course Navigation**: Click on any course to view detailed information.

### Course Details Page
- Displays detailed information about the selected course:
  - Course name
  - Instructor's name
  - Description
  - Enrollment status (Open, Closed, In Progress)
  - Course duration
  - Schedule
  - Location
  - Pre-requisites
  - Syllabus (expandable)

### Student Dashboard
- **Enrolled Courses**: Displays a list of courses the student is enrolled in.
- **Course Details**: Shows course name, instructor name, thumbnail, due date, and a progress bar.
- **Mark as Completed**: Students can mark courses as completed.


### Advanced State Management
- The application uses Redux Toolkit to manage the state effectively across the application.

## Project Setup

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm or Yarn


### Getting Started

Follow these steps to set up and run the client-side of the project locally:

1. **Clone the Repository**
   First, clone the repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/yourusername/course-management-app.git
   cd course-management-app/client
   ```
2. **Install Client Dependencies**
Navigate to the client directory and install the required dependencies:

```bash 
npm install

```

This command installs all the necessary packages for the frontend, including React.js, Redux Toolkit, and other libraries.

3. **Run the Development Server**
After the dependencies have been installed, you can start the development server:

```bash
npm run dev
```
This will start the Vite development server, and you should see output indicating that the server is running.

4. **Access the Application**
Open your browser and go to https://course-management-react-frontend.vercel.app/ You should see the course management application running.



- Additional Notes
 - Ensure you have Node.js and npm installed on your system before running the above commands.
 - If you encounter any issues, make sure to check the console for errors and verify your      environment setup.