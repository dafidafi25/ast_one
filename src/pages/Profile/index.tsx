import ArrowLeft from "@/assets/icons/ArrowLeft";
import Spacer from "@/components/atom/Spacer";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IProfileProps {}

export const Profile: React.FC<IProfileProps> = () => {
  const navigate = useNavigate();

  // get user from local storage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Container>
      <Spacer height={48} />
      <BackButton onClick={() => navigate("/dashboard")}>
        <ArrowLeft size={30} />
      </BackButton>
      <Spacer height={48} />
      <DataContainer>
        <div style={{ width: "15%" }}>
          <div style={{ textAlign: "left" }}>User Name</div>
        </div>
        <div style={{ width: "5%" }}>
          <div style={{ textAlign: "center" }}>:</div>
        </div>
        <Spacer width={40} />
        <div style={{ width: "40%" }}>
          <div style={{ textAlign: "left" }}>{user["username"]}</div>
        </div>
      </DataContainer>
      <Spacer height={20} />
      <DataContainer>
        <div style={{ width: "15%" }}>
          <div style={{ textAlign: "left" }}>Email</div>
        </div>
        <div style={{ width: "5%" }}>
          <div style={{ textAlign: "center" }}>:</div>
        </div>
        <Spacer width={40} />
        <div style={{ width: "40%" }}>
          <div style={{ textAlign: "left" }}>{user["email"]}</div>
        </div>
      </DataContainer>
      <Spacer height={20} />
      <DataContainer>
        <div style={{ width: "15%" }}>
          <div style={{ textAlign: "left" }}>Address</div>
        </div>
        <div style={{ width: "5%" }}>
          <div style={{ textAlign: "center" }}>:</div>
        </div>
        <Spacer width={40} />
        <div style={{ width: "40%" }}>
          <div style={{ textAlign: "left" }}>{user["address"]["city"]}</div>
        </div>
      </DataContainer>
      <Spacer height={20} />
      <DataContainer>
        <div style={{ width: "15%" }}>
          <div style={{ textAlign: "left" }}>Phone</div>
        </div>
        <div style={{ width: "5%" }}>
          <div style={{ textAlign: "center" }}>:</div>
        </div>
        <Spacer width={40} />
        <div style={{ width: "40%" }}>
          <div style={{ textAlign: "left" }}>{user["phone"]}</div>
        </div>
      </DataContainer>
    </Container>
  );
};

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30%;
`;

const BackButton = styled.a`
  pointer: cursor;
  width: 30px;
  &:hover {
    opacity: 0.5;
    pointer: cursor;
  }
`;

export default Profile;
