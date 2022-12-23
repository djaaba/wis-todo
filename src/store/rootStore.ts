import { devToolsEnhancer } from "@redux-devtools/extension"
import { combineReducers, createStore } from "redux"
// import axios from "axios";

import { todos } from "./todos/todos-reducer"
import { filter } from './filter/filter-reducer';

const rootReducer = combineReducers({
	todos,
	filter
})

export const rootStore = createStore(rootReducer, devToolsEnhancer())


// axios
    //   .get(`https://jsonplaceholder.typicode.com/todos`)
    //   .then((response) => (tasks = response.data))
    //   .catch((error) => {
    //     tasks = [];
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     isLoading = false;
    //   });