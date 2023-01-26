import React, { useCallback } from "react";
import { Button, List } from "antd";
import { Duty } from "../intefaces/duty";
import useApi from "../hooks/use-api";

export const DutyList = (props: {
  duties: Duty[];
  dutyDeleted: (id: string) => void;
  dutyUpdated: () => void;
}) => {
  const { duties, dutyDeleted, dutyUpdated } = props;
  const api = useApi();

  const deleteItem = useCallback(
    async (id: string) => {
      const result = await api.deleteDutyById(id);
      if (result) {
        dutyDeleted(id);
      } else {
        alert("There was an error while deleting the duty");
      }
    },
    [api, dutyDeleted]
  );

  const updateItem = useCallback(
    async (duty: Duty) => {
      const updatedName = prompt("Please, update the duty", duty.name);
      if (!updatedName || updatedName === duty.name) return;

      const updatedDuty: Duty = { id: duty.id, name: updatedName };
      const result = await api.updateDuty(updatedDuty);
      if (result) {
        dutyUpdated();
      } else {
        alert("There was an error while updating the duty");
      }
    },
    [api, dutyUpdated]
  );

  return (
    <List
      header={
        <div>
          <b>Duties</b>
        </div>
      }
      bordered
      style={{ maxWidth: 600 }}
      dataSource={duties}
      renderItem={(duty) => {
        return (
          <>
            <List.Item>
              {duty.name}
              <Button
                style={{ marginLeft: 20 }}
                onClick={() => updateItem(duty)}
              >
                Update
              </Button>
              <Button
                style={{ marginLeft: 20 }}
                onClick={() => deleteItem(duty.id)}
              >
                Delete
              </Button>
            </List.Item>
          </>
        );
      }}
    />
  );
};
