Certainly! Below is a professional, polished version of the `README.md` file tailored for your completed **Expenses Chart Component** challenge on Frontend Mentor. This version reflects a thoughtful development process, clearly explains decisions, and includes all standard project documentation sections.

---

# Frontend Mentor - Expenses Chart Component Solution

This is my solution to the [Expenses Chart Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). The goal of this challenge was to implement a clean, responsive, and interactive expense chart component using HTML, CSS, and JavaScript, based on the provided design files. This project gave me the opportunity to focus on data-driven UI rendering, responsive layout design, and custom styling techniques using modern CSS.

---

## Table of Contents

* [Overview](#overview)

  * [The Challenge](#the-challenge)
  * [Links](#links)
* [My Process](#my-process)

  * [Built With](#built-with)
  * [What I Learned](#what-i-learned)
  * [Continued Development](#continued-development)
  * [Useful Resources](#useful-resources)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

Users should be able to:

* View a bar chart representing expenses over the past 7 days.
* Hover over individual bars to see a tooltip displaying the precise amount.
* Identify the current day with a highlighted bar in a distinct color.
* View a fully responsive layout optimized for both desktop and mobile screen sizes.
* Experience hover feedback for interactive elements.
* (**Bonus**) See dynamically generated bar heights based on a local JSON data file.

This challenge was particularly interesting because it focused heavily on integrating real data into the UI and ensuring visual consistency across screen sizes using responsive design principles.

### Links

* **Live Site URL:** https://rodney-mokenyu.github.io/expenses-chart-component-main/
* **Solution URL on Frontend Mentor:** https://github.com/Rodney-Mokenyu/expenses-chart-component-main

---

## My Process

### Built With

* Semantic **HTML5** for accessible markup structure
* Custom **CSS** using:

  * CSS **variables** for theme consistency
  * **Flexbox** for layout and bar alignment
  * Media queries for **responsive design**
* **Vanilla JavaScript** to dynamically render the chart using a local `data.json` file
* Mobile-first development approach
* Basic **progressive enhancement** practices
* Optional: **Bootstrap utility classes** (minimal usage) for faster responsiveness and spacing (only if needed)

### What I Learned

Throughout this project, I had the opportunity to deepen my understanding of several key front-end techniques:

1. **Data-driven UI generation**
   I dynamically created bar elements from a local JSON file. This made the chart reusable and scalable, enabling me to easily update the data or even fetch from an API in the future.

   ```js
   bar.style.height = `${(item.amount / maxAmount) * 100}%`;
   ```

2. **Precision CSS layout with Flexbox**
   The bars are perfectly bottom-aligned using `align-items: flex-end`, and each bar is wrapped in a flex column to properly position the label and tooltip.

3. **Responsive design without frameworks**
   I relied mostly on pure CSS media queries, structuring components to adapt smoothly to both mobile and desktop layouts with just a few breakpoints.

4. **Clean component separation**
   I used utility classes and maintained modular styling for each chart element, making future styling updates simple and predictable.

### Continued Development

* **Accessibility improvements**: While the component is visually accessible, I plan to improve keyboard navigation and screen reader support using ARIA attributes.
* **Reusable chart component**: I'd like to refactor this chart into a reusable JS module that could accept arbitrary datasets and styling parameters.
* **Chart animations**: While I intentionally avoided animation in this implementation (as per project requirements), I may explore animated bar growth in future versions to enhance visual feedback.

### Useful Resources

* [MDN Web Docs - Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_Concepts_of_Flexbox) – Clear and concise explanation of layout behaviors using flexbox.
* [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – Great visual reference for flex properties and alignment.
* [JavaScript.info - Fetch API](https://javascript.info/fetch) – Helped me efficiently retrieve and parse the JSON data for the chart.

---

## Author

* Frontend Mentor – [@yourusername](https://www.frontendmentor.io/profile/yourusername)
* GitHub – [@yourgithub](https://github.com/yourgithub)
* Twitter – [@yourtwitter](https://twitter.com/yourtwitter)

---

## Acknowledgments

A big thank you to the [Frontend Mentor](https://www.frontendmentor.io) community for providing this thoughtful challenge and a platform for developers of all levels to learn and share. I also found inspiration from several solutions shared by other members, which helped me refine my layout and accessibility.

---

Let me know if you'd like this saved to a file or if you want help publishing it to GitHub Pages or Netlify.
