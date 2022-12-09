import ChatOutline from "@/assets/icons/ChatOutline";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { IPostModel } from "@/models/Post";
import PostService from "@/services/Post/PostService";
import { addCommentsToState } from "@/store/features/Post/Post";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spacer from "../atom/Spacer";

interface IPostCardProps {
  Post: IPostModel;
}

export const PostCard: React.FC<IPostCardProps> = ({ Post }) => {
  const UserDB = useAppSelector((state) => state.auth.byId[Post.userId]);
  const PostDB = useAppSelector((state) => state.post.commentsById[Post.id]);

  const Navigate = useNavigate();
  const [commentsNumber, setCommentNumber] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!UserDB) return;
    const fetchData = async () => {
      try {
        const res = await PostService.getPostTotalComment(Post.id);
        if (!res.data) return;

        dispatch(
          addCommentsToState({ PostId: Post.id, CommentData: res.data })
        );
        setCommentNumber(res.data?.length ? res.data.length : 0);
      } catch (err) {
        console.log(err);
      }
    };
    if (PostDB) {
      setCommentNumber(PostDB?.length ? PostDB.length : 0);
      return;
    }
    fetchData();
  }, [UserDB]);

  if (!UserDB) return null;

  return (
    <Container>
      <Card>
        <TitleText>{UserDB?.username.slice(0, 4)}</TitleText>

        <CardBody>
          <div
            style={{
              textAlign: "justify",
              textAlignLast: "left",
              color: "gray",
              fontSize: 13,
            }}
          >
            {Post.body}
          </div>
          <Spacer height={8} />
          <CardAction>
            <ChatOutline color="#4285e0" />
            <Spacer width={8} />
            <ActionText>{commentsNumber}</ActionText>
            <Spacer width={32} />
            <DetailText onClick={() => Navigate(`/post/${Post.id}`)} href="">
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
  width: 75px;
`;

const Card = styled.div`
  width: 400px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

export default PostCard;
