import styled from "styled-components";
import backGroungImg from "../../assests/images/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch; ;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  text-align: left;

  > h1 {
    font-size: 48px;
    line-height: 63px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    line-height: 32px;
    margin: 48px 0;
    text-align: left;
    font-weight: 500;
  }

  > p {
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  > a {
    align-self: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backGroungImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`;
