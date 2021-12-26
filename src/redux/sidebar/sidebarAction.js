import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../../utils/actions";

const openSidebar = () => {
  return { type: OPEN_SIDEBAR };
};
const closeSidebar = () => {
  return { type: CLOSE_SIDEBAR };
};

export { openSidebar, closeSidebar };
