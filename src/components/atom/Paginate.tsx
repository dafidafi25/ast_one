import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getPostPage } from "@/store/features/Post/Post";
import React, { useEffect } from "react";
import styled from "styled-components";
import Spacer from "./Spacer";

interface IPaginateProps {}

export const Paginate: React.FC<IPaginateProps> = () => {
  const PostDB = useAppSelector((state) => state.post.pagination);
  const dispatch = useAppDispatch();
  const { page, last_page } = useAppSelector((state) => state.post);

  const handlePageClick = (selectedItem: { selected: number }) => {
    dispatch(getPostPage(selectedItem.selected + 1));
  };

  //create items with array number from 1 to last page
  const items = Array.from({ length: last_page }, (_, i) => i + 1);

  return (
    <Container>
      {page != 1 && (
        <Button onClick={() => handlePageClick({ selected: page - 1 - 1 })}>
          prev
        </Button>
      )}

      <Spacer width={12} />

      {/* for 10 times with a */}
      {items?.map((item) => (
        <>
          <Page
            key={item}
            style={{
              color: page == item ? "#4285e0" : "gray",
              fontWeight: page == item ? "bold" : "normal",
            }}
            onClick={() => handlePageClick({ selected: item - 1 })}
          >
            {item}
          </Page>
          <Spacer width={12} />
        </>
      ))}
      {page != last_page && (
        <Button onClick={() => handlePageClick({ selected: page - 1 + 1 })}>
          next
        </Button>
      )}
    </Container>
  );
};

const Page = styled.a`
  color: gray;
  font-size: 13px;
  text-decoration: none;
  padding: 1px 1px;
  width: 15px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  color: gray;
  border-bottom: 2px solid #4285e0;
  &:hover {
    color: #4285e0;
  }
`;

const Button = styled.a`
  color: gray;
  text-decoration: none;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
`;

const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Paginate;
