# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![The desktop view for theme one](./screenshoot/calculator-app-theme-one-d.png,)
![The mobile view for theme one](./screenshoot/calculator-app-theme-one-m.png,)
![The desktop view for theme two](./screenshoot/calculator-app-theme-two-d.png,)
![The mobile view for theme two](./screenshoot/calculator-app-theme-two-m.png,)
![The desktop view for theme three](./screenshoot/calculator-app-theme-three-d.png,)
![The mobile view for theme three](./screenshoot/calculator-app-theme-three-m.png,)

### Links

- Solution URL: [Add solution URL here](https://github.com/jettechnologies/calculator-app)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- [Tailwind css and its layers customization](https://tailwindcss.com/)
- [React](https://reactjs.org/) - JS library

### What I learned
I learnt how to create layers or custom component using tailwind css @apply feature which allows one to create custom utility classes that can encapsulated all the little utility classes need for that component like:

```css
.secondary-btn-theme-one{
  @apply bg-theme-one-key-secondary-bg text-white shadow-md drop-shadow-lg shadow-theme-one-key-secondary-shadow;
}
```  
and i also learnt how to implement the calculator feature which performs calculation immediately the an arithematic operator is been clicked whne we have two operands and in-between them is an operation

### Continued development

I would like to create an history section for the application in the nearest future that would store the list of calculations been solved together with its result. The history feature would only store the previous ten calculations been done

### Useful resources

- [Web Dev simplified video ](https://www.youtube.com/watch?v=DgRrrOt0Vr8&t=1685s&pp=ygUwYnVpbGQgY2FsY3VsYXRvciB3aXRoIHJlYWN0IGpzIGFuZCByZWFjdCBjb250ZXh0) - This helped me for with implementing and understanding how common calculators work. 

## Author

- Frontend Mentor - [@jettechnologies](https://www.frontendmentor.io/profile/jettechnologies)

