import React, { useState } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import "./AddFormProduct.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/Actions/ProductAction";

function AddFormProduct(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading } = useSelector((state) => state.productRd);

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
    setIsModalOpen(false);
    const dataProduct = {
      ...values,
      id: Math.floor(Math.random() * 1000),
    };
    dispatch(addProduct(dataProduct));
    console.log("Success:", dataProduct);
    navigate("/content");
    setIsModalOpen(false);

    console.log("laoddinggggg", loading);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm sản phẩm
      </Button>
      <Modal
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
            <Button type="danger" htmlType="submit">
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
export default AddFormProduct;
