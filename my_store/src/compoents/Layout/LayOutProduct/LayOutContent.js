import {
  Breadcrumb,
  Layout,
  Card,
  Col,
  Row,
  Divider,
  Button,
  Modal,
  Spin,
} from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../../store/Actions/ProductAction";
import "./LayOutContent.css";
import { useNavigate } from "react-router-dom";
import AddFormProduct from "../../public/FormProduct/AddProductModal";
import UpdateFormProduct from "../../public/FormProduct/UpdateProductModal";
import { LoadingOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Meta } = Card;

const style = {
  background: "#ccc",
  padding: "8px 0",
  display: "flex",
  justifyContent: "center",
};

function LayOutContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allProducts, getProductFalse, loading, loadingDelete } = useSelector(
    (state) => state.productRd
  );
  const [titleCard, setTitleCard] = useState("");
  const [descriptionCard, setdescriptionCard] = useState("");

  // cac ham cua modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //Lay tat ca du lieu
  useEffect(() => {
    dispatch(ACTIONS.getAll());
  }, [dispatch]);

  //xoa
  const handleDelete = (id) => {
    if (window.confirm("Ban co muon xoa khong")) {
      dispatch(ACTIONS.deleteProduct(id));
    }
  };

  //xem
  const handleDetail = (products) => {
    setIsModalOpen(true);
    setTitleCard(products.title);
    setdescriptionCard(products.description);
  };

  // click chuyen sang trang uẻ
  const handleInfoUser = () => {
    navigate("/user");
  };

  return (
    <>
      {loadingDelete && (
        <div className="example">
          <Spin />
        </div>
      )}
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        ></Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <AddFormProduct></AddFormProduct>

          <Button type="primary" onClick={handleInfoUser}>
            Thông tin người dùng
          </Button>

          {loading && (
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          )}

          <Divider orientation="left">Danh sách sản phẩm</Divider>
          <Row gutter={16}>
            {allProducts &&
              allProducts.length > 0 &&
              allProducts.map((products, index) => {
                return (
                  <Col key={index} className="gutter-row" span={4}>
                    <div style={style}>
                      <Card
                        hoverable
                        style={{
                          width: 240,
                        }}
                        cover={
                          <img
                            className="img_card"
                            alt="example"
                            src={products.image}
                          />
                        }
                      >
                        <Meta title={products.description} />
                        <div className="btn_card_product">
                          <Button
                            type="primary"
                            className="btn_delete"
                            onClick={() => handleDelete(products.id)}
                          >
                            Xóa
                          </Button>

                          <UpdateFormProduct
                            products={products}
                          ></UpdateFormProduct>

                          <Button
                            type="primary"
                            onClick={() => handleDetail(products)}
                          >
                            Xem
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </Col>
                );
              })}
          </Row>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>{titleCard}</p>
            <p>{descriptionCard}</p>
          </Modal>
        </div>
      </Content>
    </>
  );
}

export default LayOutContent;
