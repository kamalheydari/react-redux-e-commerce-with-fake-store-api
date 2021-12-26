import {
  CLEAR_FILTERS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_FILTERS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  LOAD_PRODUCTS,
} from "../../utils/actions";

const loadProducts = (payload) => {
  return { type: LOAD_PRODUCTS, payload };
};

const updateFilters = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  if (name === "category") {
    value = e.target.dataset.category;
  }
  if (name === "price") {
    value = Number(value);
  }
  return { type: UPDATE_FILTERS, payload: { name, value } };
};

const filterProducts = () => {
  return { type: FILTER_PRODUCTS };
};

const clearFilters = () => {
  return { type: CLEAR_FILTERS };
};

const setGridView = () => {
  return { type: SET_GRID_VIEW };
};
const setListView = () => {
  return { type: SET_LIST_VIEW };
};
const updateSort = (e) => {
  const value = e.target.value;
  return { type: UPDATE_SORT, payload: value };
};

const sortProducts = () => {
  return { type: SORT_PRODUCTS };
};

export {
  loadProducts,
  setGridView,
  setListView,
  updateSort,
  updateFilters,
  clearFilters,
  filterProducts,
  sortProducts,
};
