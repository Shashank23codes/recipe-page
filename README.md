# Recipe Landing Page - Enhanced Solution

This is a **premium, fully responsive landing page** based on the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Expanding on the original challenge, this project transforms a simple recipe card into a full-featured culinary website.

## Key Features

- **Fully Responsive Layout:** Adjusts seamlessly from desktop to tablet and mobile screens.
- **Modern UI/UX:**
  - **Hero Section:** Engaging split-screen header with floating 3D elements.
  - **Interactive Ingredients:** Check-off list for users to track their progress.
  - **Stats Bar:** Quick glance at prep time and calories.
  - **Nutrition Cards:** Beautifully styled grid for nutritional info.
- **JavaScript Interactivity:** Mobile navigation toggle and smooth scrolling.

## Table of Contents


- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

The challenge was to build a recipe page that matches the provided design as closely as possible, while also ensuring the following:

- **Optimal Layout:** The design adapts to the user's device screen size (responsive design).
- **State Management:** Hover, active, and focus states for all interactive elements.
- **Semantics:** Using proper HTML5 semantic tags for better accessibility and SEO.

### Screenshot

![Recipe Page Screenshot](./Screenshot.jpeg)

### Links

- **Solution URL:** [GitHub Repository](https://github.com/Shashank23codes/recipe-page)
- **Live Site URL:** [Live Demo](https://shashank23codes.github.io/recipe-page/)

## My Process

### Built With

- **Semantic HTML5 Markup:** Uses `<header>`, `<main>`, `<section>`, `<article>`, and other semantic tags to provide meaning to the web page structure.
- **CSS Custom Properties (Variables):** For consistent theming (colors, fonts, spacing) and easy maintenance.
- **Flexbox:** To layout the page structure and align elements effectively.
- **Mobile-First Workflow:** Designing for mobile devices first and then scaling up for larger screens using media queries.
- **Google Fonts:** Integrated 'Young Serif' for headings and 'Outfit' for body text to match the design aesthetics.
- **Rich Aesthetics:** Enhanced with subtle drop shadows, smooth gradients, and refined spacing for a premium look.

### What I Learned

This project reinforced my understanding of semantic HTML and responsive design patterns.

**Key Highlights:**

1.  **Refined Typography & Spacing:**
    Learning to balance font weights and whitespace to create a clean, readable, and "premium" feel.
    
    ```css
    body {
       background-image: linear-gradient(135deg, hsl(30, 54%, 94%), hsl(30, 30%, 88%));
       -webkit-font-smoothing: antialiased;
    }
    ```

2.  **Semantic Structure:**
    Instead of using `<div>` everywhere, I used specific tags like `<section>` for the Ingredients and Instructions, improving the document outline.

    ```html
    <section class="Ingredients">
      <h2>Ingredients</h2>
      ...
    </section>
    ```

3.  **Custom List Markers:**
    Creating custom colored bullet points using CSS pseudo-elements `::before` to match the specific design requirements.

### Continued Development

In the future, I plan to:
- Add a "Print" style sheet so users can easily print the recipe.
- Implement a dark mode switch using JavaScript and CSS variables.
- Add more recipes to turn this into a multi-page site or a Single Page Application (SPA).

## Author

- **GitHub:** [Shashank23codes](https://github.com/Shashank23codes)
- **LinkedIn:** [Shashank Gupta](https://www.linkedin.com/in/shashank-gupta-238a96209)
- **Frontend Mentor:** [@Shashank23codes](https://www.frontendmentor.io/profile/Shashank23codes)

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing this challenge. It is a fantastic platform to practice front-end skills with realistic projects.
