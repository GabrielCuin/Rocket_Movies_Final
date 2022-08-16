import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  overflow: hidden;
  display: grid;

  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > header {
    max-width: 100%;
  }

  > main {
    width: calc(100vw - 10vw);
    grid-area: content;
    overflow-y: auto;

    padding: 0 3rem;
    margin: 10px auto 0;
    height: auto;
  }
`;

export const Form = styled.form`
  max-width: 100%;
  margin: 38px auto;
  padding: 0 10px;

  > header {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 36px;

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 700;
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > textarea {
    padding: 16px;
    max-width: 100%;


  }

  > section {
    width: 100%;
    margin-bottom: 30px;

    p {
      margin-bottom: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: clamp(14px, 16px + 0.2vw, 18px);
    }
  }

  .tags {
    max-width: 100%;
    padding: 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    div {
      flex: 1;
      min-width: 150px;

      button {
        width: 100px;
      }
    }
  }

  .two-inputs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3vw;

    div,
    button {
      flex: 1;
    }

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;
