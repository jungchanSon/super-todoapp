import styled, { css } from "styled-components";

export type StyledButtonProps = {
  buttonType?: string;
  borderRadius?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 4px;

  transition: 150ms;
  &:active {
    transform: scaleY(.95);
  }

  ${props => {
    const btnType = props.buttonType ?? "primary"
    return css`
      background-color: ${ props.theme.palette[btnType] };
      color: ${ props.theme.fontColor[btnType] };
      border-radius: ${ props.borderRadius ?? "5px" };
    `
  }}
`

export default StyledButton