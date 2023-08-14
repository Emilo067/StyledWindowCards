import React from 'react';
import rectangle from './Image.png';
import './App.css';
import styled, {css} from "styled-components";
import {Btn} from "./styles/Buttons.styled";
import {myTheme} from "./styles/Theme";

function App() {
    return (
        <>
            <Container className="cont">
                <Box className="1">
                    <img src={rectangle} alt=""/>
                    <div>
                        <h1>Headline</h1>
                        <p>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</p>
                        <Btn primary={true}>See more</Btn>
                        <Btn secondary={true}>Save</Btn>
                    </div>
                </Box>
                <Box greenBackground={true} className="2">
                    <img src={rectangle} alt=""/>
                    <div>
                        <h1>Headline</h1>
                        <p>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</p>
                        <Btn primary={true}>See more</Btn>
                        <Btn secondary={true}>Save</Btn>
                    </div>
                </Box>
                <Box yellowBackground={true} className="3">
                    <img src={rectangle} alt=""/>
                    <div>
                        <h1>Headline</h1>
                        <p>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</p>
                        <Btn primary={true}>See more</Btn>
                        <Btn secondary={true}>Save</Btn>
                    </div>
                </Box>
                <Box redBackground={true} className="4">
                    <img src={rectangle} alt=""/>
                    <div>
                        <h1>Headline</h1>
                        <p>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</p>
                        <Btn primary={true}>See more</Btn>
                        <Btn secondary={true}>Save</Btn>
                    </div>
                </Box>
            </Container>
        </>
    );
}

type BoxPropsType = {
    greenBackground?: boolean,
    yellowBackground?: boolean,
    redBackground?: boolean
}

const Box = styled.div<BoxPropsType>`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background: ${props => props.color || "#fff"};
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);

  img {
    display: block;
    padding-top: 10px;
    margin: 0 auto ${myTheme.margin.bottom};
  }

  h1 {
    margin-bottom: ${myTheme.margin.bottom};
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    width: 260px;
    margin-bottom: ${myTheme.margin.bottom};
    color: #ABB3BA;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
  }

  div {
    padding: 0 20px;
  }

  ${Btn} {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
  
  ${props => props.greenBackground && css<BoxPropsType>`
    background-color: ${myTheme.colors.green};
    h1 {
      color: #ffdc00;
    }
    p{
      color: #ffdc00;
    }
    ${Btn} {
      border: 1px solid black;
      background-color: ${myTheme.colors.white};
      color: #000;
    }
  `}

  ${props => props.yellowBackground && css<BoxPropsType>`
    background-color: ${myTheme.colors.yellow};
    h1 {
      color: #85144b;
    }
    p{
      color: #85144b;
    }
    ${Btn} {
      border: 1px solid black;
      background-color: ${myTheme.colors.white};
      color: #85144b;
    }
  `}

  ${props => props.redBackground && css<BoxPropsType>`
    background-color: ${myTheme.colors.red};
    color: ${myTheme.colors.white};

    h1 {
      color: ${myTheme.colors.white};
    }

    p {
      color: ${myTheme.colors.white};
    }

    ${Btn} {
      border: 1px solid black;
      background-color: ${myTheme.colors.white};
      color: #85144b;
    }

  `}
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default App;
