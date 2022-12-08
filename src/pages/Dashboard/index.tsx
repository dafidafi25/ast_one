import Spacer from "@/components/atom/Spacer";
import SearchBar from "@/components/molecule/SearchBar";
import React from "react";
import styled from "styled-components";

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <Container>
      <Spacer height={50} />

      <SearchBar />
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
