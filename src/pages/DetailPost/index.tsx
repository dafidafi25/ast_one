import ArrowLeft from "@/assets/icons/ArrowLeft";
import ChatOutline from "@/assets/icons/ChatOutline";
import Spacer from "@/components/atom/Spacer";
import { IPostCommentModel, IPostModel } from "@/models/Post";
import { IUserModel } from "@/models/User";
import PostService from "@/services/Post/PostService";
import { PostState } from "@/store/features/Post/Post.interface";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IDetailPostProps {}

export const DetailPost: React.FC<IDetailPostProps> = () => {
  const postId = Number(window.location.pathname.split("/").pop());
  const navigate = useNavigate();

  const [postState, setPostState] = React.useState<Record<number, IPostModel>>(
    {}
  );
  const [commentState, setCommentState] = React.useState<
    Record<number, IPostCommentModel[]>
  >({});

  const [userState, setUserState] = React.useState<Record<number, IUserModel>>(
    {}
  );

  useEffect(() => {
    const post = localStorage.getItem("postById");
    const comments = localStorage.getItem("commentsById");
    const users = localStorage.getItem("users");

    if (post) {
      setPostState(JSON.parse(post));
    }
    if (comments) {
      setCommentState(JSON.parse(comments));
    }
    if (users) {
      setUserState(JSON.parse(users));
    }
  }, []);

  // set post by id local storage to post state
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
          <div
            style={{
              textAlign: "justify",
              textAlignLast: "left",
              color: "black",
              fontSize: 13,
            }}
          >
            {postState[postId]?.title}
          </div>
        </CardBody>
      </Card>
      <Spacer height={32} />
      <Card>
        <TitleText>
          {userState[postState[postId]?.userId]?.name.slice(0, 4)}
        </TitleText>
        <CardBody>
          <div
            style={{
              textAlign: "justify",
              textAlignLast: "left",
              color: "gray",
              fontSize: 13,
            }}
          >
            {postState[postId]?.body}
          </div>
          <Spacer height={8} />
          <CardAction>
            <ChatOutline
              color="#4285e0"
              onClick={() => navigate(`/post/${postId}/comments`)}
            />

            <Spacer width={8} />
            <ActionText>{commentState[postId]?.length}</ActionText>
          </CardAction>
        </CardBody>
      </Card>
    </Container>
  );
};

const ActionText = styled.div`
  font-size: 14px !important;
  color: #4285e0 !important;
  font-weight: 600 !important;
  align-self: center;

  &:hover {
    opacity: 0.5;
    pointer: cursor;
  }
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

export default DetailPost;
