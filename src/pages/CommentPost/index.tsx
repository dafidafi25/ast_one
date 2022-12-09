import ArrowLeft from "@/assets/icons/ArrowLeft";
import ChatOutline from "@/assets/icons/ChatOutline";
import Spacer from "@/components/atom/Spacer";
import { useAppSelector } from "@/hooks/useAppSelector";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ICommentPostProps {}

export const CommentPost: React.FC<ICommentPostProps> = () => {
  const postId = window.location.pathname.split("/").pop();
  const PostDB = useAppSelector((state) => state.post.byId[Number(postId)]);
  const navigate = useNavigate();

  useEffect(() => {
    if (PostDB) return;
    const fetchData = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Spacer height={48} />
      <BackButton onClick={() => navigate("/dashboard")}>
        <ArrowLeft size={30} />
      </BackButton>
      <Spacer height={24} />
      <Card>
        <Spacer width={75} />
        <CardBody>
          <Profile>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            ipsam, ex hic, vero quam accusamus soluta nobis reiciendis magnam,
            nisi animi recusandae aperiam exercitationem suscipit maiores
            mollitia accusantium beatae voluptate.
          </Profile>
        </CardBody>
      </Card>
      <Spacer height={32} />
      <Card>
        <TitleText>{"wawa"}</TitleText>
        <CardBody>
          <Profile>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            fuga nihil porro accusantium esse autem aut culpa, omnis, recusandae
            repudiandae consectetur hic? Culpa dolores iusto corrupti ut quaerat
            quibusdam rem?
          </Profile>
          <Spacer height={8} />
          <CardAction>
            <ChatOutline color="#4285e0" />
            <Spacer width={8} />
            <ActionText>{2}</ActionText>
          </CardAction>
        </CardBody>
      </Card>
      <Spacer height={32} />
      <Card>
        <TitleText />
        <div>All Comment</div>
      </Card>
      <Spacer height={32} />

      {/* Comment Section */}
      <Card>
        <TitleText />
        <Spacer height={32} />
        <Card>
          <Spacer width={8} />
          <TitleText>Rals</TitleText>
          <CardBody>
            <Profile>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam fuga nihil porro accusantium esse autem aut culpa,
              omnis, recusandae repudiandae consectetur hic? Culpa dolores iusto
              corrupti ut quaerat quibusdam rem?
            </Profile>
          </CardBody>
        </Card>
      </Card>
    </Container>
  );
};

const Profile = styled.div`
  text-align: justify;
  text-align-last: left;
  color: gray;
  fontsize: 13;
`;

const ActionText = styled.div`
  font-size: 14px !important;
  color: #4285e0 !important;
  font-weight: 600 !important;
  align-self: center;
`;

const CardAction = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
  width: 75px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30%;
`;

const CardBody = styled.div`
  font-size: 14px;
  width: 85%;
  word-wrap: break-word;
  flex-direction: column;
  align-self: flex-start;
`;

const BackButton = styled.a`
  pointer: cursor;
  width: 30px;
  &:hover {
    opacity: 0.5;
    pointer: cursor;
  }
`;

const PostTitle = styled.div`
  textalign: justify;
  textalignlast: left;

  fontsize: 13;
`;

const Card = styled.div`
  width: 400px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

export default CommentPost;
