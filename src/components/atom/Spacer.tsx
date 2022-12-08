import React from "react";

interface ISpacerProps {
  width?: number;
  height?: number;
}

export const Spacer: React.FC<ISpacerProps> = ({ width, height }) => {
  return <div style={{ width: width, height: height }}></div>;
};

export default Spacer;
