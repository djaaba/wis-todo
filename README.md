# [To-Do List](https://wis-todo.vercel.app/) – список дел для организации работы и жизни

Тестовое задание - создание веб-приложения Todo-List с использованием React, Typescript, Redux

**Цели:**

- Поработать с styled components
- Поработать с Redux

**Что должно быть реализовано?**

- работы с асинхронными запросами для полученния списков (можно взять любое fake api)
- возможность просмотра полной информации об элементе списка
- возможность редактировать список (грубо говоря сделать фильтрацию на фронте на верифицированные элементы и на неверефицированные)
- хранить списки нужно в стейт менеджере, все изменения по фильтрациям тоже нужно делать через стейт менеджер.
- Можно использовать любой стейт менеджер (redux, mobx, effector),
- axios
- Нельзя использовать готовые библиотеки компонент (Material UI и т.д.)
- обязательно использовать TypeScript
- желательно максимально грамотно подойти к реализации, то есть реализовывать проект с максимально деструктаризацией логики

## Быстрый старт

#### `npm i` – установить зависимости проекта

#### `npm run start` – запуск devServer на http://localhost:3000/

## Скрипты

#### `npm run start` – запуск devServer на http://localhost:3000/

#### `npm run build` – production сборка проекта

## Используемые библиотеки

- [redux](https://github.com/reduxjs/redux)
- [react-router-dom](https://github.com/remix-run/react-router)
- [styled-normalize](https://github.com/sergeysova/styled-normalize)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)

## Макеты

## Изученный статьи

- https://rahuulmiishra.medium.com/react-worst-practices-bdf924efe470
- https://betterprogramming.pub/8-basic-and-advanced-react-router-tips-6993ece8f57a

### Структура проекта

```
├── public/                          # Папка с HTML, определяющим шаблон приложения
├── src/                             # Исходники
│   ├── components/                  # Папка с используемыми элементами
│   │   ├── ...                      # UI-kit для приложения
│   │   └── index.ts                 # Файл экспорта всех компонентов UI-kit
│   ├── interfaces/                  # Папка с интерфейсами приложения
│   │   ├── Main/                    # Главная страница приложения
│   │   └── TodoItem/                # Страница одного элемента списка дел
│   ├── pages/                       # Папка со страницами приложения
│   ├── store/                       # Папка с состоянием приложения
│   ├── utils/                       # Папка с утилитами приложения
│   ├── App.tsx                      # Главный компонент приложения
│   ├── index.tsx                    # Корневой компонент приложения
│   └── react-app-env.d.ts           # Файл добавляющий поддержку импортов
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация приложения
└── tsconfig.json                    # Параметры компилятора TypeScript

```
