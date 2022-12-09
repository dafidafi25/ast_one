import { useAppSelector } from "@/hooks/useAppSelector";
import { getUser } from "@/store/features/Auth/AuthAction";
import { getPostList } from "@/store/features/Post/PostAction";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Paginate from "../atom/Paginate";
import Spacer from "../atom/Spacer";
import PostCard from "../molecule/PostCard";

interface IListViewPostCardProps {}

export const ListViewPostCard: React.FC<IListViewPostCardProps> = () => {
  const dispatch = useDispatch();
  const PostDB = useAppSelector((state) => state.post.byId);
  const PostList = useAppSelector((state) => state.post.pagination);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPostList());
      await dispatch(getUser());
    };
    fetchData();
  }, []);

  return (
    <>
      {PostList?.map((item) => {
        return (
          <div key={item}>
            <PostCard Post={PostDB[item]} />
            <Spacer height={16} />
          </div>
        );
      })}
      <Spacer height={32} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Paginate />
      </div>
      <Spacer height={80} />
    </>
  );
};
export default ListViewPostCard;
