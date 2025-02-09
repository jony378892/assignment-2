# Project Overview

This project is a simple quiz application built with React. It fetches questions from an external API and allows users to interact with them. The application keeps track of the user's score and displays result at the end of the quiz with proper message about his progress.

## Setup Instructions

1. **Create the project:**

   ```bash
   npm create vite@latest project
   cd project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Components

### Introduction

This component allows the user to enter their name and start the quiz.

### Questions

This component fetches the quiz questions from an external API and displays them one by one. It also handles the user's answers and calculates the total score.

## Error Handling

The application includes basic error handling for the API request. If the data fails to load, an error message is displayed to the user.

## Dependencies

- React
- Tailwind CSS (for styling)

## License

This project is licensed under the MIT License.
