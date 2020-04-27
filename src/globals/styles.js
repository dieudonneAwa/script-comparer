import { css } from "styled-components";

const sizes = {
  large: 1500,
  desktop: 1199,
  tablet: 768,
  phone: 576,
  smallPhone: 368,
};

export const screens = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 10}em) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {}
);
