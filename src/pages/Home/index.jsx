import React from "react";
import Categories from "../../components/Categories";
import styles from "../../App.module.scss";
import Item from "../../components/Item";
import { LoaderItem } from "../../components/Loaders";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ searchValue, setSearchValue }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [page, setPage] = React.useState(0);

  const [categoryId, setCategoryId] = React.useState(0);
  const [orderDESC, setOrderDESC] = React.useState(true);
  const [selector, setSelector] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  // ниже фильтруем по значению из ввода input searchValue
  const items = pizzas
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .map((value) => <Item key={value.id} {...value} />);

  const itemsOnPage = pizzas.length ? (
    items
  ) : (
    <div className={styles.nothingBlock}>
      <h1>тут ничего нет :(</h1>
      <button onClick={() => setPage(0)}>Вернуться на первую</button>
    </div>
  );

  React.useEffect(() => {
    const sortby = `sortBy=${selector.sortProperty}`;
    const order = `&order=${orderDESC ? "desc" : "asc"}`;
    const category = categoryId !== 0 ? `&category=${categoryId}` : "";
    const getPage = page === 0 ? "&page=1&limit=4" : `&page=${page}&limit=4`;

    setIsLoading(true);
    axios
      .get(
        `https://62adceb5645d00a28a001b0f.mockapi.io/api/pizzas?${sortby}${order}${category}${getPage}`
      )
      .then((resp) => {
        setPizzas(resp.data);
        setIsLoading(false);
      });
  }, [selector, orderDESC, categoryId, page]);

  return (
    <div>
      <Categories
        value={selector}
        onClickSort={setSelector}
        orderBy={orderDESC}
        onClickOrderBy={setOrderDESC}
        categoryId={categoryId}
        onClickCategory={setCategoryId}
      />

      <div className={styles.content}>
        {!isLoading
          ? itemsOnPage
          : [...new Array(4)].map((_, index) => <LoaderItem key={index} />)}
      </div>
      {/*/////////// PAGINATION ///////////////*/}
      <Pagination pages={items.length} setPage={setPage} />
    </div>
  );
};

export default Home;
