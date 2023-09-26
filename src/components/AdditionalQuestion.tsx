import { Card, Divider, Typography } from "antd";
import { FC } from "react";
import { Button, Form, Input } from "antd";
import { headStyle } from "../utils/styles";
import EditQuestion from "./EditQuestion";
import AddQuestionButton from "./AddQuestionButton";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

interface AdditionalQuestionProps {}

const AdditionalQuestion: FC<AdditionalQuestionProps> = () => {
  return (
    <Card
      title="Additional Questions"
      headStyle={headStyle}
      className="card-container"
    >
      <EditQuestion
        title="Please tell me about yourself in less than 500 words"
        subTitle="paragraph"
      />

      <Divider />
      <EditQuestion
        title="Please select the year of graduation from the list below"
        subTitle="Dropdown"
      />

      <Divider />
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Question" name="question">
          <Input
            placeholder="Type here"
            style={{
              borderRadius: "10px",
              border: "1px solid #D0D0D0",
              padding: "10px",
              width: "100%",
              height: "50px",
            }}
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 10.5C3.2 10.5 2.5 11.2 2.5 12C2.5 12.8 3.2 13.5 4 13.5C4.8 13.5 5.5 12.8 5.5 12C5.5 11.2 4.8 10.5 4 10.5ZM4 5.5C3.2 5.5 2.5 6.2 2.5 7C2.5 7.8 3.2 8.5 4 8.5C4.8 8.5 5.5 7.8 5.5 7C5.5 6.2 4.8 5.5 4 5.5ZM4 15.5C3.2 15.5 2.5 16.2 2.5 17C2.5 17.8 3.2 18.5 4 18.5C4.8 18.5 5.5 17.8 5.5 17C5.5 16.2 4.8 15.5 4 15.5ZM7.5 6V8H21.5V6H7.5ZM7.5 18H21.5V16H7.5V18ZM7.5 13H21.5V11H7.5V13Z"
              fill="black"
            />
          </svg>
          <Form.Item
            label="Choice"
            name="choice"
            style={{
              flex: 1,
            }}
          >
            <Input
              style={{
                borderRadius: "10px",
                border: "1px solid #D0D0D0",
                padding: "10px",
                width: "100%",
                height: "50px",
              }}
            />
          </Form.Item>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M1.77866 6.50921L1 6.51404L7.5 6.47434L14 6.43464"
              stroke="black"
              stroke-width="3"
            />
            <path
              d="M7.44509 1.37632L7.4409 0.597656L7.47525 7.09769L7.47524 13.1175"
              stroke="black"
              stroke-width="3"
            />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            backgroundColor: "#FFF",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M9.55672 9.42862L8.54309 8.42749L17.0037 16.7854L25.4644 25.1434"
              stroke="#A80000"
              stroke-width="5"
            />
            <path
              d="M23.5279 10.1184L24.5299 9.10559L16.165 17.5594L8.37691 25.3474"
              stroke="#A80000"
              stroke-width="5"
            />
          </svg>
          <Typography
            style={{
              color: "#A80000",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "-0.09px",
            }}
          >
            Delete question
          </Typography>
          <Form.Item
            style={{
              marginLeft: "auto",
              marginTop: "20px",
            }}
          >
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
      <Divider />
      <EditQuestion
        title="Have you ever been rejected by the UK embassy?"
        subTitle="Yes/No Question"
      />

      <AddQuestionButton />
    </Card>
  );
};

export default AdditionalQuestion;
