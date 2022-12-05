import { Button, Layout, Input, Dropdown, Space } from "antd";
import React, { useCallback, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { path } from "../../Ultils/Constant";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../store/Actions/ProductAction";
import { logout } from "../../store/Actions/AuthAction";
import "./LayOutHeader.css";

const { Header } = Layout;

function LayoutStore() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // den trang chinh
  const goHome = useCallback(() => {
    navigate(path.CONTENT);
  }, []);

  // dang xuat
  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  // search
  const handleSearch = (e) => {
    const keys = e.target.value;
    dispatch(searchProduct(keys));
    if (keys.length > 0) {
      navigate("/search");
    } else navigate("/content");
  };

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="btn_layout_header">
            <Button type="primary" onClick={goHome}>
              Trang chủ
            </Button>

            <Input placeholder="Tim kiem" onChange={handleSearch} />

            <Button className="logout" onClick={logOut}>
              Đăng xuất
            </Button>
          </div>
        </Header>
      </Layout>

      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default LayoutStore;
