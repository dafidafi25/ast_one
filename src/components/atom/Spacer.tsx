import React from "react";
import styled from "styled-components";

interface ISpacerProps {
  width?: number;
  height?: number;
}

export const Spacer: React.FC<ISpacerProps> = ({ width, height }) => {
  const Spacer = styled.div`
    width: ${width}px;
    height: ${height}px;
  `;

  return <Spacer />;
};

export default Spacer;
