import './App.css';
import React from 'react';
import styled, {css} from 'styled-components';
import picture from '../src/assets/images/img1.png';
import pictureCat from '../src/assets/images/img2.jpg';

function App() {
   return (
      <div className="App">
         <Container>
            <Box>
               <Picture src={picture} alt=""/>
               <Title titleType={"headName"}>This is my picture N1</Title>
               <Title titleType={"description"}>Description of my picture...</Title>
               <div>
                  <Buttons btnType={"primary"}>See more</Buttons>
                  <Buttons btnType={"outlined"}>Save</Buttons>
               </div>
            </Box>

            <Box>
               <Picture src={pictureCat} alt=""/>
               <Title titleType={"headName"} color={"#635e81"}>This is my picture N2</Title>
               <Title titleType={"description"}>Description of my picture...</Title>
               <div>
                  <Buttons btnType={"btnCard2Primary"}>See more</Buttons>
                  <Buttons btnType={"btnCard2Outlined"}>Save</Buttons>
               </div>
            </Box>
         </Container>
      </div>
   );
}

export default App;

//*****************************************************
//--------------------= TEXT =-------------------------

type TitlePropsType = {
   titleType: string;
   color?: string
}

const Title = styled.div <TitlePropsType>`
    margin: 0;
    padding: 0;
    ${props => props.titleType === "headName" && css<TitlePropsType>
            `
                color: ${props => props.color || "olive"};
                font-size: 23px;
                font-weight: bold;
            `};
    ${props => props.titleType === "description" && css<TitlePropsType>
            `
                color: #7e7e7d;
                font-size: 15px;
            `}
`

//*****************************************************
//--------------------= Picture =-------------------------

const Picture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

//*****************************************************
//--------------------= Container =-------------------------

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 30px;
    
`

//*****************************************************
//--------------------= BOX =-------------------------

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 10px;

    width: 400px;
    height: 500px;
    border-radius: 15px;
    gap: 15px;

    color: olive;
    background-color: #e7e6e2;
    box-shadow: 5px 10px 10px 0px #c3c7c7;

    button {
        cursor: pointer;
    }
`

//*****************************************************
//---------------= BUTTONS =---------------------------

type ButtonsPropsType = {
   color?: string
   fontSize?: string
   primary?: boolean
   outlined?: boolean
   btnCard2Primary?: boolean
   btnCard2Outlined?: boolean
   btnType?: "primary" | "outlined" | "btnCard2Primary" | "btnCard2Outlined";
}

const Buttons = styled.button <ButtonsPropsType>`

    padding: 5px 20px;
    margin-right: 10px;
    margin-top: 10px;
    font-weight: bold;

    border-radius: 10px; 
    border: none;
 
 
    ${props => props.btnType === "primary" && css<ButtonsPropsType>
      `   border: 2px solid ${props => props.color || "#768804"};
          color: ${props => props.color || "snow"};
          background-color: #768804;

          &:hover {
              background-color: gold;
              border-color: gold;
          }
      `
   }

 ${props => props.btnType === "outlined" && css<ButtonsPropsType>
      `   border: 2px solid ${props => props.color || "#768804"};
          color: ${props => props.color || "#768804"};
          background-color: transparent;

          &:hover {
              background-color: #ffcd00;
              border-color: #ffcd00;
              color: #ffffff;
          }
      `
   }


    ${props => props.btnType === "btnCard2Primary" && css<ButtonsPropsType>
      `   border: 2px solid ${props => props.color || "#58508c"};
          color: ${props => props.color || "snow"};
          background-color: #58508c;

          &:hover {
              background-color: #eeb180;
              border-color: #eeb180;
          }
      `
   }
    
 ${props => props.btnType === "btnCard2Outlined" && css<ButtonsPropsType>
      `   border: 2px solid ${props => props.color || "#58508c"};
          color: ${props => props.color || "#58508c"};
          background-color: transparent;

          &:hover {
              background-color: #eeb180;
              border-color: #eeb180;
              color: #ffffff;
          }
      `
}
  
`