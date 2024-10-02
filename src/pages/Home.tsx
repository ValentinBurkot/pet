/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import Categories from "../components/Categories/Categories";
import Sort, { sortList } from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import "../scss/app.scss";

import Pagination from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";

import { setFilters } from "../Redux/slices/filterSlice";

import { fetchPizzas, selectPizzas } from "../Redux/slices/pizzasSlice";

type FilterState = {
  categoryId: number;
  searchValue: string;
  pagination: number;
  sort: {
    name: string;
    sortProperty: string;
  };
  categories: string[];
};
type RootState = {
  filter: FilterState;
};

type PizzaProps = {
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  id: string;
};

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { searchValue, categoryId, sort, pagination } = useSelector(
    (state: RootState) => state.filter
  );

  const { pizzas, status }: any = useSelector(selectPizzas);
  console.log(pizzas);

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";
    //@ts-ignore
    dispatch(fetchPizzas({ sortBy, order, category, search, pagination }));

    window.scrollTo(0, 0);
  };
  // если изменили параметры и был первый рендер у нас будет проверка
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pagination,
      });
      // console.log(queryString);
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, pagination]);

  //если был первый рендер, то проверяем url параметры и сохраняем в редакс
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  // если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue, pagination]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {status === "loading"
            ? [...new Array(10)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((pizza: PizzaProps, i: number) => (
                <PizzaBlock key={i} {...pizza} />
              ))}
        </div>
      </div>
      <Pagination />
    </>
  );
}
