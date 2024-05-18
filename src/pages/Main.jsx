import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal.jsx'
import kakao from '../assets/image/icon_kakao.png';
import google from '../assets/image/icon_google.png';
import twitter from '../assets/image/icon_twitter.png';
import line from '../assets/image/icon_line.png';
import apple from '../assets/image/icon_apple.png';
import logo from '../assets/image/icon_logo.png';


const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
			<LoginTap onClick={openModal}>로그인</LoginTap>
            <Modal open={isModalOpen} close={closeModal}>
                <ModalLogoImage src={logo} alt="모달 로고 이미지" />
                <LoginTitle>로그인</LoginTitle>
                <InputBox>
                    <LoginInput placeholder="이메일" />
                </InputBox>
                <InputBox>
                    <LoginInput placeholder="비밀번호" />
                </InputBox>
                <LoginButton>로그인</LoginButton>
                <Content color="#ff0558">비밀번호를 잊어버리셨나요?</Content>
                <CenterBox>
                    <Content color="#a7a7a7">계정이 없으신가요?</Content>
                    <Content color="#ff0558">회원가입</Content>
                </CenterBox>
                <CenterBox>
                    <Grayline />
                    <OrContent>OR</OrContent>
                    <Grayline />
                </CenterBox>
                <WrapIcon>
                    <img src={kakao} alt="카카오" />
                    <img src={google} alt="구글" />
                    <img src={twitter} alt="트위터" />
                    <img src={apple} alt="애플" />
                    <img src={line} alt="라인" />
                </WrapIcon>
                <LoginTip>TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.</LoginTip>
            </Modal>
        </>
    )
};


const LoginTap = styled.div`
	font-size: 12px;
	width: 40px;
	text-align: center;
    cursor: pointer;
    margin-left: 20px;
    border: none;
    background: none;
    color: #c4c4c4;
`;

const ModalLogoImage = styled.img`
    width: 200px;
    margin-top: 8px;
`;

const LoginTitle = styled.div`
    font-weight: bolder;
    font-size: 15px;
    margin: 25px;
`;

const LoginInput = styled.input`
    width: 300px;
    height: 20px;
    border-radius: 5px;
    margin-top: 9px;
    border: none;
    background-color: #f7f7f7;
`;

const InputBox = styled.div`
    width: 330px;
    height: 40px;
    margin: 7px auto;
    border-radius: 5px;
    background-color: #f7f7f7;
`;

const LoginButton = styled.div`
    width: 330px;
    height: 44px;
    margin-top: 30px;
    background-color: #ff0558;
    border-radius: 5px;
    border: none;
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 15px;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;

const Content = styled.div`
    font-size: 13px;
    color: ${(props) => props.color};
	margin: 10px 2px;
`;

const CenterBox = styled.div`
    display: flex;
    justify-content: center;
`;

const Grayline = styled.div`
    margin-top: 25px;
    width: 130px;
    height: 1px;
    background-color: #00000020;
`;

const OrContent = styled.div`
    color: #8c8c8c;
    font-size: 14px;
    margin: 0 20px;
    margin-top: 10px;
    cursor: default;
`;

const WrapIcon = styled.div`
    height: 50px;
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 30px;
`;

const LoginTip = styled.div`
    padding: 20px;
    margin: 50px auto;
    background-color: #f7f7f7;
    color: #919191;
    width: 320px;
    font-size: 14px;
    padding: 10px;
`;

export default Main;
