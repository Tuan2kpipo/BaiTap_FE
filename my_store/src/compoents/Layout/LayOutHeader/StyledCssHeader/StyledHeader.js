import styled from "styled-components";
import { Button, Layout, Input, Dropdown, Space } from "antd";
const { Header } = Layout;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  width: 100%;
`;

export const HeaderSpan = styled.div`
  margin: 0 10px;
`;

export const HeaderLayOut = styled(Header)`
  padding: 0 10px;
`;
