import React from 'react';

interface GapProps {
  height?: number;
  width?: number;
}

const Gap = (props: GapProps) => {
  const { height, width } = props;
  return <div style={{ height: height, width: width }} />;
};

export default Gap;
