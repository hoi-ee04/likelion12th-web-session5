import styled from "styled-components";
import logo from '../assets/image/icon_blacklogo.png';

const Footer = () => {
    return (
        <Container>
            <Content>
                <Menuitem>
                    <Link href="#">서비스 이용약관&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
                    <Link href="#">개인정보 처리방침&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
                    <Link href="#">회사 안내</Link>
                </Menuitem>
                <Links>
                    <Title>고객센터&nbsp;&nbsp;|&nbsp;&nbsp;</Title>
                    <Link href="mailto:cs@watchapedia.co.kr">cs@watchapedia.co.kr,&nbsp;</Link>
                    <Link href="tel:02-515-9985">02-515-9985</Link>
                </Links>
                <Links>
                    <Title>제휴 및 대외 협력&nbsp;&nbsp;|&nbsp;&nbsp;</Title>
                    <Link href="https://watcha.team/contact">https://watcha.team/contact</Link>
                </Links>
                <Address>
                    <p>주식회사 왓챠&nbsp;&nbsp;|&nbsp;&nbsp;대표 박태훈&nbsp;&nbsp;|&nbsp;&nbsp;서울특별시 서초구 강남대로 343 신덕빌딩 3층</p>
                    <p>사업자 등록 번호 211-88-66013</p>
                </Address>
                <Copyright>
                    <LogoImage src={logo} alt="왓챠피디아 로고"/>
                    <p>© 2024 by WATCHA, Inc. All rights reserved.</p>
                </Copyright>
            </Content>
            
            <LanguageToggle>
                {/* 언어 설정 토글 */}
            </LanguageToggle>
            
        </Container>
    )
};

const Menuitem = styled.div`
    display: flex;
    align-items: start;
    margin-bottom: 15px;
`

const Container = styled.footer`
    background-color: #1c1d1f;
    padding: 30px ;
    text-align: center;
    line-height: 20px;
    width: 100%;
    bottom: 0;
`;

const Content = styled.div`
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    color: #a5a5a7;
`;

const Links = styled.a`
    display: flex;
    flex-direction: row;
    align-items: start;
    height: 20px;
`;

const Title = styled.div`
    text-decoration: none;
    color: #a5a5a7;
`;

const Link = styled.div`
    text-decoration: none;
    color: #a5a5a7;
    cursor: pointer;
`;

const Address = styled.div`
    margin-top: 15px;
    p {
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #848485;
`;

const Copyright = styled.div`
    font-size: 12px;
    display: flex;
	line-height: 0px;
    align-items: center;
    color: #848485;
`;

const LanguageToggle = styled.div`
    /* 언어 설정 토글의 스타일링 */
`;

const LogoImage = styled.img`
    margin-right: 5px;
    width: 80px;
`;

export default Footer;
