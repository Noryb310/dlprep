
import React from 'react';
import styled from 'styled-components';
import { PiTruckTrailerFill } from 'react-icons/pi';
import { FaTruckMoving } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

const MainScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const ClickableImage = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    margin-top: 1rem;
    font-weight: bold;
  }
`;

const MainScreen = () => {
  return (
    <MainScreenContainer>
      <h1>Choose Your Class</h1>
      <ImagesContainer>
        <ClickableImage>
          <PiTruckTrailerFill size={50} color="#333" />
          <p>Class A</p>
        </ClickableImage>
        <ClickableImage>
          <FaTruckMoving size={50} color="#333" />
          <p>Class B</p>
        </ClickableImage>
        <ClickableImage>
          <FaCarSide size={50} color="#333" />
          <p>Class C</p>
        </ClickableImage>
      </ImagesContainer>
    </MainScreenContainer>
  );
};

export default MainScreen;
