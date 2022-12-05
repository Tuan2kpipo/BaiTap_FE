import "./App.css";
import { Routes, Route, Router, Outlet, Navigate } from "react-router-dom";
import { path } from "./compoents/Ultils/Constant";
import LayoutStore from "./compoents/Layout/LayOutHeader/LayoutHeader";
import LayOutContent from "./compoents/Layout/LayOutProduct/LayOutContent";
import LoginForm from "./compoents/public/Login";

import InfoUser from "./compoents/Layout/LayOutUser/LayOutUser";
import { useSelector } from "react-redux";
import SearchProduct from "./compoents/searchProduct/SearchProduct";

function App() {
  function ProtectedRoute() {
    const { token } = useSelector((state) => state.authLogingRd);
    return token ? <Outlet> </Outlet> : <Navigate to="/login"></Navigate>;
  }

  function RejectedRoute() {
    const { token } = useSelector((state) => state.authLogingRd);
    return !token ? <Outlet> </Outlet> : <Navigate to="/content"></Navigate>;
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<RejectedRoute></RejectedRoute>}>
          <Route path={path.LOGIN} element={<LoginForm></LoginForm>}></Route>
        </Route>
        <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route element={<LayoutStore></LayoutStore>}>
            <Route
              path={path.CONTENT}
              element={<LayOutContent></LayOutContent>}
            ></Route>

            <Route
              path={path.SEARCH}
              element={<SearchProduct></SearchProduct>}
            ></Route>

            <Route path={path.USER} element={<InfoUser></InfoUser>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
