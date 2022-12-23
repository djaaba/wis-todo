import React from "react";
import ReactDOM from "react-dom/client";
import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import "@fontsource/source-sans-pro";
import { Provider } from "react-redux";
import { rootStore } from "./store/rootStore";

import { App } from "./App";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  :root{
    --light-blue: #9ec5fe;
    --blue: #0d6efd;
    --light-gray: #f8f9fa;
    --gray: #dee2e6;
    --dark-gray: #adb5bd;
    --black: #333;
    --white: #fff;
  }

  body{
    font-family: "Source Sans Pro";
    background: var(--gray);
    margin: 0 20px;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
