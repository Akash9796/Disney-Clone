import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



export default function Login({ user, logIn }) {

  const navigation = useNavigate();


  return (user ? (
    navigation("/")
  ) : (
    <Container>
      <Background>
        <img src="/Images/login-background.jpg" alt="" />
      </Background>
      <CTA>
        <CTALogoOne src="/Images/cta-logo-one.svg" />
        <Signup onClick={logIn}>GET ALL THERE</Signup>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius
          aliquid, ratione distinctio fuga accusamus debitis similique.
          Laboriosam omnis explicabo magni quis fugit, accusantium, minima illum
          ratione, facere id soluta.
        </Text>
        <CTALogoTwo src="/Images/cta-logo-two.png" />
      </CTA>
    </Container>
  ))
}

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  transform: translateX(23vw);
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img``;
const Signup = styled.a`
  width: 100;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;

const Text = styled.div`
  padding: 20px;
  max-width: 800px;
  max-height: 200px;
`;
