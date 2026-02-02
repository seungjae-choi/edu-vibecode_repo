# Project Blueprint

## Overview
This project is a simple lottery number generator with a dark mode/light mode feature.

## Detailed Outline

### Features
- **Lottery Number Generation**: Generates 6 unique random numbers between 1 and 45.
- **Theme Switching**: Toggles between light and dark modes.
  - The user's theme preference is saved in `localStorage`.
  - System theme preference is detected on first load if no saved preference exists.
  - A confirmation modal appears before changing the theme.
- **Responsive Design**: Adapts to different screen sizes.

### Technologies
- HTML5
- CSS3 (with modern features like `prefers-color-scheme`, CSS variables)
- JavaScript (ES6+)

### File Structure
- `index.html`: Main HTML file, includes meta-information, links to CSS and JS, and contains the UI elements.
- `style.css`: Contains all the styling for the application, including light and dark mode styles.
- `main.js`: Contains the JavaScript logic for lottery number generation and theme switching.

### Visual Design
- **Fonts**: 'Roboto', sans-serif.
- **Light Mode Colors**:
  - Background: `#f0f2f5`
  - Text: `#333`
  - Header/Container Background: `#fff`
  - Generate Button: `linear-gradient(145deg, #673ab7, #512da8)`
  - Lotto Numbers: `radial-gradient(circle at 20px 20px, #ff8a80, #ff5252)`
- **Dark Mode Colors**:
  - Background: `#2c2c2c`
  - Text: `#f5f5f5`
  - Header/Container Background: `#3a3a3a`
  - Generate Button: `linear-gradient(145deg, #424242, #212121)`
  - Lotto Numbers: `radial-gradient(circle at 20px 20px, #424242, #212121)`
- **Interactivity**: Buttons have hover and active states with subtle transformations and shadow effects. Lotto numbers have a scale animation on generation.
- **Modal**: A confirmation modal is displayed before applying theme changes.

## Current Task: Git Deployment

### Plan
The dark mode/light mode feature is already implemented in the existing codebase. The current task is to prepare the project for deployment using Git.

### Steps
1.  **Check Git Status**: Verify the current state of the repository.
2.  **Add all changes**: Stage all modified and new files.
3.  **Commit Changes**: Create a descriptive commit message.
4.  **Confirm Deployment**: Inform the user about the commit and ask for confirmation to proceed with deployment (e.g., pushing to a remote repository).