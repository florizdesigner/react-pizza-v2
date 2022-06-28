import React from "react";
import Categories from "../../components/Categories";
import styles from "../../App.module.scss";
import Item from "../../components/Item";
import { LoaderItem } from "../../components/Loaders";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setSort,
  setSortDesc,
} from "../../redux/slices/filterSlice";

const Home = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortSelector = useSelector((state) => state.filter.sort);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [page, setPage] = React.useState(0);

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
    const sortby = `sortBy=${sortSelector.sortProperty}`;
    const order = `&order=${sortSelector.desc ? "desc" : "asc"}`;
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
  }, [sortSelector, categoryId, page]);

  return (
    <div>
      <Categories
        value={sortSelector}
        onClickSort={(obj) => dispatch(setSort(obj))}
        orderBy={sortSelector.desc}
        onClickOrderBy={() => dispatch(setSortDesc(!sortSelector.desc))}
        categoryId={categoryId}
        onClickCategory={(id) => dispatch(setCategoryId(id))}
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
