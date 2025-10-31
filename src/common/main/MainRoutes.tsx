import App from "../presentation/App";
import dashboard from "../../dashboard/main";
import MainLayout from "../presentation/MainLayout";

const mappingMainRoutes = [dashboard];

const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [...mappingMainRoutes],
};

export default mainRoutes;
