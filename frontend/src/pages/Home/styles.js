import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 64px;
  overflow-y: auto;
`;

export const NewMovie = styled(Link)`
  width: 207px;
  height: 24px;
  border-radius: 8px;
  padding: 32px;
  z-index: 2;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 188px;
  right: 106px;
  
  svg {
    margin-right: 8px;
  }
`;
