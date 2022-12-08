import Spacer from "@/components/atom/Spacer";
import PostCard from "@/components/molecule/PostCard";
import SearchBar from "@/components/molecule/SearchBar";
import React from "react";
import styled from "styled-components";

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <Container>
      <Spacer height={25} />

      <SearchBar />
      <Spacer height={25} />
      <PostCard />
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
