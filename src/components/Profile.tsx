import { FC, useState } from "react";

interface ProfileProps {}

import { Card, Form, Tag, Typography } from "antd";
import { Divider } from "antd";
import CustomFormItem from "./CustomFormItem";
type RequiredMark = boolean | "optional" | "customize";

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean }
) => (
  <>
    {required ? (
      <Tag color="error">Required</Tag>
    ) : (
      <Tag color="warning">optional</Tag>
    )}
    {label}
  </>
);

const Profile: FC<ProfileProps> = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <Card
      title="Profile"
      headStyle={{
        backgroundColor: "#D0F7FA",
        color: "#000",
        fontSize: "25px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "114%",
        height: "24.98px",
        flexShrink: 0,
      }}
      style={{
        maxWidth: "595px",
        width: "100%",
        borderRadius: "20px",
        background: "#FFF",
        boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={
          requiredMark === "customize" ? customizeRequiredMark : requiredMark
        }
      >
        <Form.Item required>
          <CustomFormItem title="Education" checkLabel="Mondatory" />
        </Form.Item>
        <Divider />
        <Form.Item required>
          <CustomFormItem title="Experience" checkLabel="Mondatory" />
        </Form.Item>
        <Divider />
        <Form.Item required>
          <CustomFormItem title="Resume" checkLabel="Mondatory" />
        </Form.Item>
        <Divider />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#000",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "-0.09px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
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
      </Form>
    </Card>
  );
};

export default Profile;
