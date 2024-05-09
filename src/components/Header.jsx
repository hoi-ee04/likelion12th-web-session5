import styled from 'styled-components';
import logo from '../assets/image/icon_logo.png';
import Main from '../pages/Main';
import glasses from '../assets/image/icon_glasses.png';

const Header = () => {
    return (
        <HeaderContent>
            <OnLeft>
                <LogoImage src={logo} alt="헤더 로고" />

            </OnLeft>
            <OnRight>
                <SearchBox>
                    <img src={glasses} alt="돋보기 이미지"/>
                    <Search
                        type="text"
                        placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요.'
                    />
                    
                </SearchBox>
                <Main />
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
    border-bottom: 1px solid #ececec;
`;

const LogoImage = styled.img `
    margin: 15px 34px;
    width: 150px;
`;

const CreateAccount = styled.div`
    font-size: 12px;
    height: 30px;
	width: 78px;
	text-align: center;
    line-height: 30px;;
    cursor: pointer;
    margin-left: 20px;
    border: 1px solid #9b9b9b;
    background: none;
    color: #383838;
    border-radius: 6px;
`;

const SearchBox = styled.div`
    width: 285px;
    display: flex;
    align-items: center;
    background-color: #eeeeee;
    border: none;
    border-radius: 5px;
    img{
        margin: 8px;
        height: 18px;
    }
`;

const Search = styled.input`
    font-size: 12px;
    background-color: #eeeeee;
    color: #868686;
    width: 250px;
    height: 35px;
    border: none;
    border-radius: 5px;
    outline: none;
`;

const OnLeft = styled.div`

`;

const OnRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 50px;
`;

export default Header;
