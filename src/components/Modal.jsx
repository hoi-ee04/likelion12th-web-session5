import styled from "styled-components";

const Modal = (props) => {
  const { open, close } = props;
  return (
    <>
      {open && (
        <ModalBackground>
          <ModalBlock>
            <TopContent>
              <CloseButton onClick={close}>&times;</CloseButton>
            </TopContent>
            {props.children}
          </ModalBlock>
        </ModalBackground>
      )}
    </>
  );
};

const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
`;

const ModalBlock = styled.div`
  width: 380px;
  height: 650px;
  margin: auto;
  border-radius: 5px;
  background-color: #ffffff;
  align-items: center;
`;

const TopContent = styled.div`
  position: relative;
  font-size: 30px;
`;

const CloseButton = styled.button`
  display: flex;
  width: 10px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #696969;
  background-color: transparent;
  cursor: pointer;
  border: white;
`;

export default Modal;
