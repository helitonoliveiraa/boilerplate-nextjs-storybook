import styled from 'styled-components';

export const Container = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: min(25rem, 100%);
  }

  h1 {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  img:last-child {
    margin-top: 3rem;
    width: min(30rem, 100%);
  }
`;
