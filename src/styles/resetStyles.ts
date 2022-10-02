import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  * {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }


  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }


  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }


  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }


  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }


  /* Make images easier to work with */
  img,
  picture {
    width: 100%;
    display: block;
  }


  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: none;
  }
`