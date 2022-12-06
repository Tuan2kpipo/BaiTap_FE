import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const StyledLayoutUser = styled.div`
  margin: 0 10px;
`;

export const SpanBtnUser = styled.span`
  margin-right: 10px;
`;

export const ContentUser = styled(Content)`
  margin: 0 !important;
  padding: 0 10px !important;

  .ant-breadcrumb {
    margin: 10px 0 !important;
  }
`;
