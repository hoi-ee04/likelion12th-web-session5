import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
import whiteLogo from "../assets/image/icon_whitelogo.png";
import Login from "../pages/Login";
import glasses from "../assets/image/icon_glasses.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerBackground, setHeaderBackground] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const goToMainPage = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname.includes("/detail")) {
      setHeaderBackground(false);
    } else {
      setHeaderBackground(true);
    }
  }, [location]);

  const isSticky = headerBackground || isScrolled;

  return (
    <HeaderContent sticky={isSticky ? 1 : 0}>
      <LogoImage
        src={isSticky ? logo : whiteLogo}
        alt="헤더 로고"
        onClick={goToMainPage}
      />
      <OnRight>
        <SearchBox sticky={isSticky ? 1 : 0}>
          <img src={glasses} alt="돋보기 이미지" />
          <Search
            placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
            sticky={isSticky ? 1 : 0}
          />
        </SearchBox>
        <Login />
        <CreateAccount>회원가입</CreateAccount>
      </OnRight>
    </HeaderContent>
  );
};

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: ${(props) => (props.sticky ? "1px" : "0px")} solid #ececec;
  background-color: ${(props) => (props.sticky ? "#ffffff" : "transparent")};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: background-color 0.3s ease;
`;

const LogoImage = styled.img`
  margin: 15px 34px;
  width: 150px;
  cursor: pointer;
`;

const CreateAccount = styled.div`
  font-size: 12px;
  font-weight: bold;
  height: 28px;
  width: 75px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-left: 20px;
  border: 1px solid #9b9b9b;
  color: #c4c4c4;
  border-radius: 6px;
`;

const SearchBox = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.sticky ? "#eeeeee" : "rgba(0, 0, 0, 0.1)"};
  border: 0.1px solid ${(props) => (props.sticky ? "transparent" : "#868686")};
  border-radius: 2px;

  img {
    margin: 8px;
    height: 18px;
  }
`;

const Search = styled.input`
  font-size: 12px;
  background-color: transparent;
  color: ${(props) => (props.sticky ? "#2c2c2c" : "#ececec")};
  width: 250px;
  height: 33px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const OnRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export default Header;
