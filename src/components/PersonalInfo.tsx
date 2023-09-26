import { FC, useState } from "react";
import { Card, Form, Input, Tag } from "antd";
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

interface PersonalInfoProps {}

const PersonalInfo: FC<PersonalInfoProps> = () => {
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
      title="Personal Information"
      headStyle={headStyle}
      className="card-container"
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
        <Form.Item label="First Name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Email" required>
          <Input />
        </Form.Item>
        <Form.Item required>
          <CustomFormItem title="Phone (without dial code)" />
        </Form.Item>
        <Divider />
        <Form.Item required>
          <CustomFormItem title="Nationality" />
        </Form.Item>
        <Divider />
        <Form.Item required>
          <CustomFormItem title="Current Residence" />
        </Form.Item>
        <Divider />
        <Form.Item required>
          <CustomFormItem title="ID Number" />
        </Form.Item>
        <Divider />
        <Form.Item required>
          <CustomFormItem title="Date of Birth" />
        </Form.Item>
        <Divider />
        <Form.Item required>
          <CustomFormItem title="Gender" />
        </Form.Item>
        <Divider />

        <AddQuestionButton />
      </Form>
    </Card>
  );
};

export default PersonalInfo;
