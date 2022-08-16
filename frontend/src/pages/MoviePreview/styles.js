import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > section {
    grid-area: content;
    height: auto;
    overflow-y: auto;
    padding: 0 10px 50px;
    margin: 10px auto 0;
    width: min(90%, 100rem);

    header {
      display: flex;
      gap: 20px;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 36px;

      button {
        background: none;
        border: none;
        
        display: flex;
        align-items: center;
        gap: 8;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 24px;
      }
    }

    p {
      margin-top: 2.5rem;
      font-size: clamp(1.2rem, 1.2rem + 1vw, 1.6rem);
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      line-height: 2.4rem;
      text-align: justify;
    }
  }
`;

export const Movie = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  font-size: clamp(18px, 16px + 0.5vw, 30px);

  svg {
    align-self: center;
  }
`;

export const UserInfo = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  div {
    display: flex;
    align-items: center;
    justify-items: space-between;
    gap: 8px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  img {
    width: 30px;
    border-radius: 50%;
  }
`;
