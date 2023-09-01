import { useState } from "react";
import { calculate, reduceNumbers } from "../utils";

const Form = () => {
  const [values, setValues] = useState({ date: "", name: "" });

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    console.log(values);

    setValues({ date: "", name: "" });
    console.log(calculate("John Smith", "20-08-1995"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-lg m-auto"
    >
      <div className="mb-4">
        <input
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className="h-11 w-full rounded px-4"
          type="text"
          placeholder="Enter your name"
          value={values.name}
        />
      </div>

      <div className="flex item-center justify-center mb-4">
        <input
          className="rounded p-2"
          onChange={(e) => setValues({ ...values, date: e.target.value })}
          type="date"
          value={values.date}
        />
      </div>

      <button>Calculate</button>
    </form>
  );
};

export default Form;
