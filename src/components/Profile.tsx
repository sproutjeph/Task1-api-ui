import { FC, useState } from "react";

interface ProfileProps {}

import { Card, Form, Tag, Typography } from "antd";
import { Divider } from "antd";
import CustomFormItem from "./CustomFormItem";
import { headStyle } from "../utils/styles";
import AddQuestionButton from "./AddQuestionButton";
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
    <Card title="Profile" headStyle={headStyle} className="card-container">
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

        <AddQuestionButton />
      </Form>
    </Card>
  );
};

export default Profile;
