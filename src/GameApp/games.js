import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
const Game = () => {
  const [userInput, setUserInput] = useState(0);
  const [computerInput, setComputerInput] = useState(0);

  const computerRandom = () => {
    setComputerInput(Math.floor(Math.random() * 5));
  };

  useEffect(() => {
    setInterval(() => {
      computerRandom();
    }, 10000);
  }, []);

 

  return (
    <Fragment>
      <Container>
        <Wrapper>
          <WrapperName>BRIGHT'S GAME</WrapperName>
          <WrapperRow>
            <WrapperRowMe>
              <WrapperMeBox>{userInput}</WrapperMeBox>
              <NumberBox>
                <Number onClick={() => setUserInput(1)}>1</Number>
                <Number onClick={() => setUserInput(2)}>2</Number>
                <Number onClick={() => setUserInput(3)}>3</Number>
                <Number onClick={() => setUserInput(4)}>4</Number>
                <Number onClick={() => setUserInput(5)}>5</Number>
              </NumberBox>
              <WrapperMeText>Bright</WrapperMeText>
            </WrapperRowMe>
            <WrapperRowComputer>
              <WrapperMeBox>{computerInput}</WrapperMeBox>
              <WrapperMeText>Computer</WrapperMeText>
            </WrapperRowComputer>
          </WrapperRow>
          <Result>{userInput === computerInput  ? <span>You Win!</span>: <span>You no dey shame, computer dey beat</span> }</Result>
        </Wrapper>
      </Container>
    </Fragment>
  );
};


export default Game;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: red;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;
const WrapperName = styled.div`
  padding: 30px 0;
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const WrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  flex-wrap: wrap;
`;
const WrapperRowMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;
const WrapperRowComputer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;
const WrapperMeText = styled.div`
  font-size: 20px;
  padding: 10px 0;
`;
const WrapperMeBox = styled.div`
  width: 250px;
  height: 250px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 7px;
  cursor: pointer;
`;
const Result = styled.div`
  width: 250px;
  padding: 15px;
  background: white;
  text-align: center;
  font-size: 19px;
  border-radius: 7px;
  cursor: pointer;
`;

const NumberBox = styled.div`
  display: flex;
`;
const Number = styled.div`
  font-size: 20px;
  padding: 4px 12px;
  background: white;
  margin: 8px 4px;
  border-radius: 50%;
  cursor: pointer;
`;
