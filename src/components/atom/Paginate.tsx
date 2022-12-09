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

      {/* for 10 times with a */}
      {items?.map((item, index) => (
        <div key={item}>
          <Page
            style={{
              color: page == item ? "#4285e0" : "gray",
              fontWeight: page == item ? "bold" : "normal",
            }}
            onClick={() => handlePageClick({ selected: item - 1 })}
          >
            {item}
          </Page>
          {index < items.length && <Spacer width={24} />}
        </div>
      ))}

      <Button onClick={() => handlePageClick({ selected: page - 1 + 1 })}>
        {page != last_page && last_page != 0 && "next"}
      </Button>
    </Container>
  );
};

const Page = styled.p`
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

const Button = styled.span`
  text-align: center;
  color: gray;
  text-decoration: none;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
  width: 50px;
`;

const Container = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Paginate;
