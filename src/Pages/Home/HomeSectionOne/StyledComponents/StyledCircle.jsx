import styled, { css, keyframes } from "styled-components";

const colors = [
  "linear-gradient(45deg, #ff7e5f, #feb47b)",
  "linear-gradient(45deg, #ff9a9e, #f8cdd1)",
  "linear-gradient(45deg, #e2a4b6, #f5b6b0)",
  "linear-gradient(45deg, #a2c2e3, #c2e0c2)",
  "linear-gradient(45deg, #fcb045, #fda085)",
  "linear-gradient(45deg, #8ec8a4, #c5e1a7)",
];

const circleAnim = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(5);
  }
`;

const createBgAnim = (prevColor, curColor) => {
  return keyframes`
    from {
      background: ${prevColor};
    }
    90%{
        background: ${prevColor};
    }
    to {
      background: ${curColor};
    }
  `;
};

export const StyledCircle = styled.div`
  width: 70%;
  height: 0;
  padding-bottom: 50%;
  border-radius: 50%;
  background-color: var(--white);
  position: absolute;
  bottom: -60%;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    background-color: var(--white);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    ${({ $circle }) =>
      $circle &&
      css`
        animation: ${circleAnim} 2s linear forwards;
      `}
  }

  &::before {
    content: "";
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transform: scale(2, 2.5);
    animation: ${(props) => createBgAnim(props.$prevColor, props.$curColor)}
      0.5s forwards;
  }
`;
