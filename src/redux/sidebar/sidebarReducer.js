import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./actions";

const initialState = { isSidebarOpen: false };

const sidebarReducer = (state = initialState, action) => {
  let { type } = action;

  if (type === OPEN_SIDEBAR) {
    return { isSidebarOpen: true };
  }

  if (type === CLOSE_SIDEBAR) {
    return { isSidebarOpen: false };
  }
  return state;
};

export default sidebarReducer;
