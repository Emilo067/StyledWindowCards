import styled, {css} from "styled-components";
import {myTheme} from "./Theme";

type BtnPropsType = {
    primary?: boolean;
    secondary?: boolean;
}
export const Btn = styled.button<BtnPropsType>`
  border: none;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px; /* 200% */
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
     transform: scale(1.2);
  }
  
  ${props => props.primary && css<BtnPropsType>`
    background: ${myTheme.colors.blue};
    color: ${myTheme.colors.white};
  `}
  ${props => props.secondary && css<BtnPropsType>`
    background: ${myTheme.colors.white};
    color: ${myTheme.colors.blue};
    border: 1px solid ${myTheme.colors.blue};
  `}
`