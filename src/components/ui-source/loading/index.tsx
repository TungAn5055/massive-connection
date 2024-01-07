import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const LoadingRegion = ({ tip, color = "#CD9D2F", size = "large" }) => {
  return (
    <Spin
      tip={tip}
      size={size}
      style={{ color: color }}
      indicator={<LoadingOutlined spin />}
    />
  );
};
