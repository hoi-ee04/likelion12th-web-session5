import styled from 'styled-components';
import logo from '../assets/image/icon_logo.png';
import Main from '../pages/Main';

const Header = () => {
    return (
        <HeaderContent>
            <LogoImage src={logo} alt="헤더 로고" />
            <Main />
        </HeaderContent>
    );
};

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ececec;
`;

const LogoImage = styled.img `
    margin: 15px 34px;
    width: 150px;
`;

export default Header;
