import {
  Breadcrumb,
  Layout,
  Card,
  Col,
  Row,
  Divider,
  Button,
  Modal,
  Popconfirm,
} from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../../store/Actions/ProductAction";
import { useNavigate } from "react-router-dom";
import AddFormProduct from "../../public/FormProduct/AddProductModal";
import UpdateFormProduct from "../../public/FormProduct/UpdateProductModal";
import { LoadingOutlined } from "@ant-design/icons";

import {
  StyledBtnDiv,
  StyleBtnUpdate,
  StyledAddProduct,
  StyledImgCard,
  StyledCard,
  ColCard,
  ContentProduct,
  InfoImageProduct,
} from "./StyledCssContent/StyledContent";
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
  const { allProducts, loading } = useSelector((state) => state.productRd);
  const [titleCard, setTitleCard] = useState("");
  const [descriptionCard, setdescriptionCard] = useState("");
  const [idProduct, setIdProduct] = useState();
  const [imgProduct, setImgProduct] = useState("");

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
    setIdProduct(id);
    dispatch(ACTIONS.deleteProduct(id));
  };

  //xem
  const handleDetail = (products) => {
    setIsModalOpen(true);
    setTitleCard(products.title);
    setdescriptionCard(products.description);
    setImgProduct(products.image);
  };

  // click chuyen sang trang uẻ
  const handleInfoUser = () => {
    navigate("/user");
  };

  return (
    <>
      <ContentProduct
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
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <StyledAddProduct>
            <AddFormProduct></AddFormProduct>
          </StyledAddProduct>

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
                  <ColCard key={index} span={4}>
                    <div style={style}>
                      <StyledCard>
                        <Card
                          hoverable
                          style={{
                            width: 220,
                          }}
                          cover={
                            <StyledImgCard
                              alt="example"
                              src={products.image}
                            ></StyledImgCard>
                          }
                        >
                          <Meta title={products.description} />
                          <StyledBtnDiv>
                            <Popconfirm
                              title="Bạn có muốn xóa sản phẩm này không ?"
                              okText="Có"
                              cancelText="Không"
                              onConfirm={() => handleDelete(products.id)}
                            >
                              <Button
                                type="primary"
                                className="btn_delete"
                                loading={
                                  products.id === idProduct ? true : false
                                }
                              >
                                Xóa
                              </Button>
                            </Popconfirm>

                            <StyleBtnUpdate>
                              <UpdateFormProduct
                                products={products}
                              ></UpdateFormProduct>
                            </StyleBtnUpdate>

                            <Button
                              type="primary"
                              onClick={() => handleDetail(products)}
                            >
                              Xem
                            </Button>
                          </StyledBtnDiv>
                        </Card>
                      </StyledCard>
                    </div>
                  </ColCard>
                );
              })}
          </Row>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>{titleCard}</p>
            <p>{descriptionCard}</p>
            <InfoImageProduct>
              <StyledImgCard src={imgProduct} alt="anh product"></StyledImgCard>
            </InfoImageProduct>
          </Modal>
        </div>
      </ContentProduct>
    </>
  );
}

export default LayOutContent;
