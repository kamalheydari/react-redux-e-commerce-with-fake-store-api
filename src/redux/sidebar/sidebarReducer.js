import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../../utils/actions";

const initialState = { isSidebarOpen: false };

const sidebarReducer = (state = initialState, action) => {
  let { type } = action;

  if (type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }

  if (type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
};

export default sidebarReducer;
