import Spacer from "@/components/atom/Spacer";
import PostCard from "@/components/molecule/PostCard";
import SearchBar from "@/components/molecule/SearchBar";
import ListViewPostCard from "@/components/Organisms/ListViewPostCard";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setFilterPage } from "@/store/features/Post/Post";
import React, { useState } from "react";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  const dispatch = useAppDispatch();
  //debunce query
  const onChangeQuery = useDebouncedCallback((value) => {
    dispatch(setFilterPage(value));
  }, 500);

  return (
    <Container>
      <Spacer height={25} />
      <SearchBar onChangeText={onChangeQuery} />
      <Spacer height={25} />
      <ListViewPostCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30%;
`;

export default Dashboard;
