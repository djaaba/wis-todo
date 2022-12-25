import { Routes, Route } from "react-router-dom";

import { TodoItem } from "./components";
import { Main } from "./pages";

export const App = (...props: any) => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path=":id" element={<TodoItem />} />
        </Route>
      </Routes>
    </>
  );
};

