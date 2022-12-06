import React, { useState } from "react";
import { Button, Modal, Checkbox, Form, Input, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/Actions/ProductAction";
import { AddProductModal } from "./StyleFormProduct/AddFormStyleProduct";
function AddFormProduct(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loadingAdd } = useSelector((state) => state.productRd);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const dataProduct = {
      ...values,
      id: Math.floor(Math.random() * 1000),
    };
    navigate("/content");
    dispatch(addProduct(dataProduct));
    setTimeout(() => setIsModalOpen(false), 2000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleAddProduct = () => {};

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm sản phẩm
      </Button>
      <AddProductModal
        forceRender
        title="Thêm sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>

          <Form.Item label="Price" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>

          <Form.Item label="Image" name="image">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="danger"
              htmlType="submit"
              onClick={handleAddProduct}
              loading={loadingAdd}
            >
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </AddProductModal>
    </>
  );
}
export default AddFormProduct;
