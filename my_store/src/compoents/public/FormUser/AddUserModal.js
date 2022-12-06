import React, { useState } from "react";
import { Button, Modal, Checkbox, Form, Input, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/Actions/UserAction";
import { StyleAddUser, StyleAddUserModal } from "./FormUserStyle/AddFormStyle";
function AddUserForm(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { loadingAdd } = useSelector((state) => state.userRd);

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
    const dataUser = {
      ...values,
      id: Math.floor(Math.random() * 1000),
    };

    dispatch(addUser(dataUser));
    setTimeout(() => setIsModalOpen(false), 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm người dùng
      </Button>

      <StyleAddUserModal
        className="modalAddUser"
        forceRender
        title="Thêm người dùng"
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
            <Button type="danger" htmlType="submit" loading={loadingAdd}>
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </StyleAddUserModal>
    </>
  );
}
export default AddUserForm;
