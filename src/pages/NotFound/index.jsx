import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Упс..</h1>
      <h2>Ничего не найдено</h2>
      <span>Возможно вы ошиблись, у нас нет такой страницы на сайте</span>
      <Link to="/">Вернуться на сайт</Link>
    </div>
  );
};

export default NotFound;
