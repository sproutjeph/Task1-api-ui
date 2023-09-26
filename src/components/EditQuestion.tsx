import { EditOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { FC } from "react";

interface EditQuestionProps {
  title: string;
  subTitle: string;
}

const EditQuestion: FC<EditQuestionProps> = ({ title, subTitle }) => {
  return (
    <div>
      <Typography className="edit-question-text">{subTitle}</Typography>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>{title}</Typography>
        <EditOutlined />
      </div>
    </div>
  );
};

export default EditQuestion;
