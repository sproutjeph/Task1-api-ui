import { Typography } from "antd";
import { FC } from "react";

interface AddQuestionButtonProps {}

const AddQuestionButton: FC<AddQuestionButtonProps> = () => {
  return (
    <div className="add-question-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M2.42465 11.9094L1 11.9183L12.8925 11.8456L24.7851 11.773"
          stroke="black"
          stroke-width="5"
        />
        <path
          d="M12.7915 2.51806L12.7838 1.0934L12.8466 12.986L12.8466 24"
          stroke="black"
          stroke-width="5"
        />
      </svg>
      <Typography>Add a Question</Typography>
    </div>
  );
};

export default AddQuestionButton;
