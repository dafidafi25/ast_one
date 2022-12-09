import ArrowLeft from "@/assets/icons/ArrowLeft";
import ChatOutline from "@/assets/icons/ChatOutline";
import Spacer from "@/components/atom/Spacer";
import { IPostCommentModel, IPostModel } from "@/models/Post";
import { IUserModel } from "@/models/User";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

interface ICommentPostProps {}

export const CommentPost: React.FC<ICommentPostProps> = () => {
  // get :post id from /post/:postId/comments
  const navigate = useNavigate();
  const { postId } = useParams();

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
          <Profile>{postState[Number(postId)]?.title}</Profile>
        </CardBody>
      </Card>
      <Spacer height={32} />
      <Card>
        <TitleText>
          {userState[postState[Number(postId)]?.userId]?.name.slice(0, 4)}
        </TitleText>
        <CardBody>
          <Profile>{postState[Number(postId)]?.body}</Profile>
          <Spacer height={8} />
        </CardBody>
      </Card>
      <Spacer height={32} />
      <Card>
        <TitleText />
        <div>All Comment</div>
      </Card>
      <Spacer height={32} />

      {/* Comment Section */}
      {commentState[Number(postId)]?.map((comment) => (
        <React.Fragment key={comment.id}>
          <Card>
            <TitleText />
            <Spacer height={32} />
            <Card>
              <Spacer width={8} />
              <TitleText>{comment.name.slice(0, 4)}</TitleText>
              <CardBody>
                <Profile>{comment.body}</Profile>
              </CardBody>
            </Card>
          </Card>
          <Spacer height={24} />
        </React.Fragment>
      ))}
      <Spacer height={48} />
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
