# Project Overview

This project is a simple quiz application built with React. It fetches questions from an external API and allows users to interact with them. The application keeps track of the user's score and displays result at the end of the quiz with proper message about his progress.

## Additional Resources

For more information, visit the [Video Link](https://youtu.be/Ug1UbvqrKYQ).

[Image Link](https://drive.google.com/drive/folders/1eIZ7ONUGiIL0rVGFVZcO-UUnA81QDs1U?usp=sharing).

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

### Results

This component displays the user's total score at the end of the quiz along with a message about their progress. It provides feedback based on the user's performance.

## Error Handling

The application includes basic error handling for the API request. If the data fails to load, an error message is displayed to the user.

## Dependencies

- React
- Tailwind CSS (for styling)

## License

This project is licensed under the MIT License.
