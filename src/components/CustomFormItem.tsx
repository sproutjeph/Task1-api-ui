import { Checkbox, Switch, Typography } from "antd";
import { FC } from "react";

interface CustomFormItemProps {
  title: string;
  checkLabel?: string;
  switchLabel?: string;
}

const CustomFormItem: FC<CustomFormItemProps> = ({
  title,
  checkLabel,
  switchLabel,
}) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
      }}
    >
      <Typography>{title}</Typography>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Checkbox>{checkLabel || "Internal"}</Checkbox>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Switch />
          <Typography>{switchLabel || "Hide"}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CustomFormItem;
