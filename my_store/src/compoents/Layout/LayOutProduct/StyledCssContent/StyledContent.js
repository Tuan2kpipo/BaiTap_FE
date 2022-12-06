import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;
export const StyledBtnDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

export const StyleBtnUpdate = styled.span`
  margin: 0 10px;
`;

export const StyledAddProduct = styled.span`
  margin-right: 10px;
`;

export const StyledImgCard = styled.img`
  width: 220px;
  height: 300px;
`;

export const StyledCard = styled.div`
  height: 400px;
  background-color: white;
`;

export const ColCard = styled.div`
  margin: 10px 9px;
`;

export const ContentProduct = styled(Content)`
  padding: 0 !important;

  .ant-breadcrumb {
    margin: 0 !important;
  }
`;
