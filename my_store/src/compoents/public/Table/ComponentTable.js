import React, { useState } from "react";
import { Table, Space, Button, Modal, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../../store/Actions/UserAction";
import "./ComponentTable.css";
import UpdateUser from "../FormUser/UpdateUserModal";

const { Column } = Table;
function ComponentTable(props) {
  const { allInfo } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [NameUser, setNameUser] = useState("");
  const [EmailUser, setEmailUser] = useState("");
  const [PasswordUser, setPasswordUser] = useState("");
  const dispatch = useDispatch();
  const [idUser, setIdUser] = useState();
  // chuc nang xem
  const handleDetail = (user) => {
    setIsModalOpen(true);
    setNameUser(user.username);
    setEmailUser(user.email);
    setPasswordUser(user.email);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // chuc nang xoa
  const handleDelete = (id) => {
    setIdUser(id);
    dispatch(ACTIONS.deleteUser(id));
  };

  return (
    <div className="tb_cpn">
      <Table dataSource={allInfo}>
        <Column
          color="blue"
          title="UserName"
          dataIndex="username"
          key="username"
        />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Password" dataIndex="password" key="password" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column
          className="tb_action"
          title="Action"
          key="action"
          render={(_, record) => (
            <Space className="space_tb" size="middle">
              <UpdateUser idupdateUser={record}></UpdateUser>

              <Button
                onClick={() => handleDelete(record.id)}
                loading={record.id === idUser ? true : false}
              >
                Xóa
              </Button>

              <Button onClick={() => handleDetail(record)}>Xem</Button>
            </Space>
          )}
        />
      </Table>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Name: {NameUser}</p>
        <p>Email: {EmailUser}</p>
        <p>Password: {PasswordUser}</p>
      </Modal>
    </div>
  );
}

export default ComponentTable;
