### Homework #38

Description

Створіть компонент Card.jsx, який повертає таку структуру — (посилання на приклад структури).
Компонент приймає два пропси: title і text.
Усередині компонента потрібно прийняти ці пропси та відрендерити їх у відповідних місцях.
Якщо якийсь із пропсів не переданий, то не рендеримо HTML-код, який його обгортає (тобто блок для title або text взагалі не з’являється).
Підключіть компонент Card у App.js і відрендерте його 3 рази, передаючи пропси по черзі:
При першому рендері — тільки title.
При другому рендері — тільки text.
При третьому рендері — обидва пропси.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
