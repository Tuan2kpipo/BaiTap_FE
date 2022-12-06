import { Breadcrumb, Layout, Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../../store/Actions/UserAction";
import { useNavigate } from "react-router-dom";
import ComponentTable from "../../public/Table/ComponentTable";
import AddUserForm from "../../public/FormUser/AddUserModal";
import { LoadingOutlined } from "@ant-design/icons";
import {
  StyledLayoutUser,
  SpanBtnUser,
  ContentUser,
} from "./StyledLayOutUser/StyledLayOutUser";
const { Content } = Layout;

function InfoUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUsers, loading } = useSelector((state) => state.userRd);

  //Lay tat ca du lieu
  useEffect(() => {
    dispatch(ACTIONS.getAllUser());
  }, [dispatch]);

  const handleBackHome = () => {
    navigate("/content");
  };

  return (
    <ContentUser
      style={{
        padding: "0 50px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      ></Breadcrumb>
      <StyledLayoutUser>
        <SpanBtnUser>
          <Button type="primary" onClick={handleBackHome}>
            Quay lại
          </Button>
        </SpanBtnUser>

        <AddUserForm></AddUserForm>

        {loading && (
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        )}

        <ComponentTable
          allInfo={allUsers}
          btnOne={"XEM"}
          btnTwo={"SỬA"}
          btnThree={"XÓA"}
          infoColumn={[
            {
              title: "Name",
              dataIndex: "username",
              key: "username",
            },
            {
              title: "Email",
              dataIndex: "email",
              key: "email",
            },
            {
              title: "Password",
              dataIndex: "password",
              key: "password",
            },
            {
              title: "Phone",
              dataIndex: "phone",
              key: "phone",
            },
          ]}
        ></ComponentTable>
      </StyledLayoutUser>
    </ContentUser>
  );
}

export default InfoUser;
