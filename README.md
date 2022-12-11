# To-Do List – список дел для организации работы и жизни

Тестовое задание - создание веб-приложения с использованием React, Typescript, mobX

**Цели:**
- Поработать с styled components
- Поработать с mobX

**Что должно быть реализовано?**
- работы с асинхронными запросами для полученния списков (можно взять любое fake api)
- возможность просмотра полной информации об элементе списка
- возможность редактировать список (грубо говоря сделать фильтрацию на фронте на верифицированные элементы и на неверефицированные)
- хранить списки нужно в стейт менеджере, все изменения по фильтрациям тоже нужно делать через стейт менеджер.
- Можно использовать любой стейт менеджер (redux, mobx, effector),
- axios
- Нельзя использовать готовые библиотеки компонент (Material UI  и т.д.)
- обязательно использовать TypeScript
- желательно максимально грамотно подойти к реализации, то есть реализовывать проект с максимально деструктаризацией логики

## Быстрый старт

#### `npm i express` – установить зависимости проекта

#### `npm run start` – запуск devServer на http://localhost:3000/

## Скрипты

#### `npm run start` – запуск devServer на http://localhost:3000/

#### `npm run build` – production сборка проекта

## Используемые библиотеки
- [mobx](https://github.com/mobxjs/mobx)
- [mobx-react-lite](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite)
- [mobx-react](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react)

- [react-router-dom](https://github.com/remix-run/react-router)
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary)

- [styled-normalize](https://github.com/sergeysova/styled-normalize)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)

babel-plugin-transform-decorators-legacy
babel-plugin-transform-class-properties

npm install -D eslint prettier
npx eslint --init
styled comp

## Макеты

## Изученный статьи
https://rahuulmiishra.medium.com/react-worst-practices-bdf924efe470


### Структура проекта

```
├── public/                          # Папка с HTML, определяющим шаблон приложения
├── src/                             # Исходники
│   ├── components/                  # Папка с используемыми элементами
│   │   ├── ...                      # UI-kit для приложения
│   │   └── index.ts                 # Файл экспорта всех компонентов UI-kit
│   ├── store/                       # Папка с js файлом, позволяющим управлять состоянием
│   │   └── store.js                 # Файл, управляющий состоянием приложения
│   ├── layout/                      # 
│   │   ├── .../                     # Папки с компонентами
│   │   ├── Layout.module.css        # Стили для макета
│   │   ├── Layout.props.ts          # Входные данные для макета
│   │   └── Layout.tsx               # Компонент макета
│   ├── App.css                      # Файл глобальных стилей
│   ├── App.tsx                      # Главный компонент
│   ├── index.css                    # Файл стилей
│   ├── index.tsx                    # Корневой компонент
│   └── react-app-env.d.ts           # Файл добавляющий поддержку импортов
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация шаблона
├── tsconfig.json                    # Параметры компилятора TypeScript

```