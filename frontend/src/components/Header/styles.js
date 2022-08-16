import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 50px;
  max-width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGORUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 123px;

  > a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  width: 600px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > a {
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    text-align: right;

    button {
      font-size: 16px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-align: right;
    }

    strong {
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const LogOut = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
