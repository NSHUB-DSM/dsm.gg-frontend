import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LolLogo } from "../assets/svgs/lollogo.svg";

const Header = () => {
  return (
    <>
      <TopHeaderContainer>
        <LoLButton>
          <LolLogo />
          <div>리그오브레전드</div>
        </LoLButton>
        <LoginStyle to="/user/login">로그인</LoginStyle>
      </TopHeaderContainer>
      <HeaderContainer>
        <div>
          <LinkStyle to="/">
            <Item>홈</Item>
          </LinkStyle>
          <Item>매칭 생성</Item>
          <Item>통계</Item>
          <LinkStyle to="/match">
            <Item>매칭</Item>
          </LinkStyle>
          <LinkStyle to="/notice">
            <Item>커뮤니티</Item>
          </LinkStyle>
        </div>
      </HeaderContainer>
    </>
  );
};
export default Header;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LoginStyle = styled(Link)`
  width: 90px;
  height: 36px;
  background-color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  font-weight: 660;
  padding-top: 6px;
  margin-right: 20px;
  text-decoration: none;
  color: black;
`;

const TopHeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: #7b5eb4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoLButton = styled.div`
  width: 300px;
  height: 48px;
  background-color: #624b90;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: white;
    font-size: 25px;
    font-weight: 700;
    margin-left: 15px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dadada;
  div {
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Item = styled.p`
  font-size: 600;
  cursor: pointer;
  &:hover {
    color: #7b5eb4;
  }
`;