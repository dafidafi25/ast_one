import ChatOutline from "@/assets/icons/ChatOutline";
import React from "react";
import styled from "styled-components";
import Spacer from "../atom/Spacer";

interface IPostCardProps {}

export const PostCard: React.FC<IPostCardProps> = () => {
  return (
    <Container>
      <Card>
        <TitleText>Abit</TitleText>
        <Spacer width={20} />
        <CardBody>
          <div
            style={{
              textAlign: "justify",
              textAlignLast: "left",
              color: "gray",
              fontSize: 13,
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nulla
            esse accusamus sint dicta ipsam. Minus commodi suscipit rerum, ullam
            facilis at itaque amet esse eos recusandae vero doloremque iste.
          </div>
          <Spacer height={16} />
          <CardAction>
            <ChatOutline color="#4285e0" />
            <Spacer width={8} />
            <ActionText>5</ActionText>
            <Spacer width={32} />
            <DetailText onClick={() => console.log("Detail")} href="">
              Detail
            </DetailText>
          </CardAction>
        </CardBody>
      </Card>
    </Container>
  );
};

const DetailText = styled.a`
  font-size: 14px !important;
  color: #4285e0 !important;
  font-weight: 600 !important;
  align-self: center;
  underline: none;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;
`;

const CardAction = styled.div`
  display: flex;
  flex-direction: row;
`;

const ActionText = styled.div`
  font-size: 14px !important;
  color: #4285e0 !important;
  font-weight: 600 !important;
  align-self: center;
`;

const CardBody = styled.div`
  font-size: 14px;
  width: 85%;
  word-wrap: break-word;
  flex-direction: column;
  align-self: flex-start;
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
`;

const Card = styled.div`
  width: 400px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

export default PostCard;
