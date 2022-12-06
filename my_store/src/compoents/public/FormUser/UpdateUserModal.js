import React, { useEffect, useState } from "react";
import { Button, Modal, Checkbox, Form, Input, Spin } from "antd";
import "../FormProduct/AddFormProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../store/Actions/UserAction";

function AddUserForm(props) {
  const { idupdateUser } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { loadingUpdate } = useSelector((state) => state.userRd);

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

  const onFinish = (values) => {
    dispatch(updateUser(values, idupdateUser.id));
    setTimeout(() => setIsModalOpen(false), 2000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // modal, day du lieu len input
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      id: idupdateUser.id,
      username: idupdateUser.username,
      email: idupdateUser.email,
      password: idupdateUser.password,
      phone: idupdateUser.phone,
    });
  }, [idupdateUser, form]);

  return (
    <>
      <Button onClick={showModal}>Sửa</Button>
      <Modal
        forceRender
        title="Sua người dùng"
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
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="danger" htmlType="submit" loading={loadingUpdate}>
              Sửa
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
export default AddUserForm;
