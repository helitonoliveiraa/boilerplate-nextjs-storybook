import styled, { css } from 'styled-components';

const typewriteSpeed = '6s';

type Props = {
  quantityLetter: number;
};

export const Container = styled.div<Props>`
  ${({ quantityLetter }) => css`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: #fff;

    h1 {
      font-family: 'Souce Sans Pro', monospace;
      color: #333;
      width: max-content;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      &::before {
        background-color: #fff;
        animation: typewriter ${typewriteSpeed} 1s steps(${quantityLetter})
          forwards;
      }

      &::after {
        width: 0.125em;
        background-color: black;
        animation: typewriter ${typewriteSpeed} 1s steps(${quantityLetter})
            forwards,
          blink 1s steps(${quantityLetter}) infinite;
      }

      @keyframes typewriter {
        to {
          left: 100%;
        }
      }

      @keyframes blink {
        to {
          background-color: transparent;
        }
      }
    }
  `}
`;
