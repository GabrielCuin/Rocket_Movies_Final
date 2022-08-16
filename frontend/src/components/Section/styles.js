import styled from "styled-components";

export const Container = styled.section`
  margin: 50px 0;

  > h2 {
    margin-bottom: 40px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    line-height: 42px;
    font-weight: 400;
  }
`;
