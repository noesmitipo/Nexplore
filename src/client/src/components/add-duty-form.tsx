import React from "react";
import { Button, Form, Input } from "antd";
import { v4 } from "uuid";
import useApi from "../hooks/use-api";
import { Duty } from "../intefaces/duty";

export const AddDutyForm = (props: { dutyAdded: (duty: Duty) => void }) => {
  const api = useApi();
  const { dutyAdded } = props;

  const onSubmit = async (values: { duty: string }) => {
    const id = v4();
    const newDuty: Duty = { id: id, name: values.duty };
    const response = await api.addDuty(newDuty);

    if (response) {
      dutyAdded(newDuty);
    } else {
      alert("There was an error while adding the new duty");
    }
  };

  return (
    <Form name="new-duty" style={{ maxWidth: 600 }} onFinish={onSubmit}>
      <Form.Item
        label="New Duty"
        name="duty"
        rules={[{ required: true, message: "Please input a new duty!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Duty
        </Button>
      </Form.Item>
    </Form>
  );
};
