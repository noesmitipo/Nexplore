import React, { useCallback, useEffect, useState } from "react";
import useApi from "./hooks/use-api";
import { Duty } from "./intefaces/duty";
import { AddDutyForm } from "./components/add-duty-form";
import { DutyList } from "./components/duty-list";

const App = () => {
  const api = useApi();
  const [duties, setDuties] = useState<Duty[]>([]);

  const fetchDuties = useCallback(async () => {
    const result = await api.getDuties();
    setDuties(result);
  }, []);

  useEffect(() => {
    fetchDuties();
  }, []);

  const onDutyAdded = useCallback((duty: Duty) => {
    setDuties((items) => [...items, duty]);
  }, []);

  const onDutyDeleted = useCallback((id: string) => {
    setDuties((items) => [...items.filter((item) => item.id !== id)]);
  }, []);

  const onDutyUpdated = useCallback(async () => {
    await fetchDuties();
  }, []);

  return (
    <>
      <AddDutyForm dutyAdded={onDutyAdded} />
      <DutyList
        duties={duties}
        dutyDeleted={onDutyDeleted}
        dutyUpdated={onDutyUpdated}
      />
    </>
  );
};

export default App;
