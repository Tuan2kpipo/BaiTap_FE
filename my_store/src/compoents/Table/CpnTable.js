import React, { useState } from "react";
import { Table, Space, Button, Modal, Tag } from "antd";
import { useDispatch } from "react-redux";
import * as ACTIONS from "../store/actions/User";
import "./CpnTable.css";
import UpdateUser from "../public/formUser/UpdateUserForm";

const { Column, ColumnGroup } = Table;
function CpnTable(props) {
  const { allInfo } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [NameUser, setNameUser] = useState("");
  const [EmailUser, setEmailUser] = useState("");
  const [PasswordUser, setPasswordUser] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

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
    if (window.confirm("Ban co muon xoa khong")) {
      dispatch(ACTIONS.deleteUser(id));
    }
  };
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <div className="tb_cpn">
      {isUpdate && <UpdateUser></UpdateUser>}
      <Table dataSource={allInfo}>
        <Column title="UserName" dataIndex="username" key="username" />
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

              <Button type="primary" onClick={() => handleDelete(record.id)}>
                Xóa
              </Button>
              <Button type="primary" onClick={() => handleDetail(record)}>
                Xem
              </Button>
            </Space>
          )}
        />
      </Table>
      {/* <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table> */}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Name: {NameUser}</p>
        <p>Email: {EmailUser}</p>
        <p>Password: {PasswordUser}</p>
      </Modal>
    </div>
  );
}

export default CpnTable;
