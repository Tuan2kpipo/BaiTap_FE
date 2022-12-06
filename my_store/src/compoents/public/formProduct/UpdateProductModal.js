import React, { useEffect, useState } from "react";
import { Button, Modal, Checkbox, Form, Input, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../../store/Actions/ProductAction";
import { UpdateProductModal } from "./StyleFormProduct/UpdateFormStyle";
function UpdateFormProduct(props) {
  const { products } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loadingUpdate } = useSelector((state) => state.productRd);
  // show modal
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

  // update
  const onFinish = (values) => {
    dispatch(updateProduct(values, products.id));
    console.log("Success:", values);
    navigate("/content");
    setTimeout(() => setIsModalOpen(false), 2000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // day dl len the input
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      title: products.title,
      category: products.category,
      price: products.price,
      description: products.description,
      image: products.image,
    });
  }, [products, form]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sửa
      </Button>
      <UpdateProductModal
        forceRender
        title="Sửa thông tin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
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
            <Button type="danger" htmlType="submit" loading={loadingUpdate}>
              Sửa
            </Button>
          </Form.Item>
        </Form>
      </UpdateProductModal>
    </>
  );
}
export default UpdateFormProduct;
