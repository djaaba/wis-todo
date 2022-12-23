import { devToolsEnhancer } from "@redux-devtools/extension"
import { combineReducers, createStore } from "redux"

import { todos } from "./todos/todos-reducer"
import { filter } from './filter/filter-reducer';

const rootReducer = combineReducers({
	todos,
	filter
})

export const rootStore = createStore(rootReducer, devToolsEnhancer())