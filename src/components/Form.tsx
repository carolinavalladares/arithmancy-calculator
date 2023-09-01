import { useState } from "react";
import { calculate } from "../utils";
import { INumberMeanings, IResults } from "../types";
import { numberMeanings } from "../CONSTS";

interface IProps {
  setResults: React.Dispatch<React.SetStateAction<IResults | null>>;
}

const Form = ({ setResults }: IProps) => {
  const [values, setValues] = useState({ date: "", name: "" });

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    console.log(values);

    setValues({ date: "", name: "" });
    const { lifePathNumber, characterNumber, socialNumber, heartNumber } =
      calculate(values.name, values.date);

    console.log(lifePathNumber, characterNumber, socialNumber, heartNumber);

    setResults({
      lifePath: {
        number: lifePathNumber,
        details: numberMeanings[lifePathNumber as keyof INumberMeanings],
      },
      characterNumber: {
        number: characterNumber,
        details: numberMeanings[characterNumber as keyof INumberMeanings],
      },
      socialNumber: {
        number: socialNumber,
        details: numberMeanings[socialNumber as keyof INumberMeanings],
      },
      heartNumber: {
        number: heartNumber,
        details: numberMeanings[heartNumber as keyof INumberMeanings],
      },
    });
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

      <div className="flex item-center flex-col justify-center mb-4">
        <label className=" text-sm mb-2" htmlFor="birthday">
          Enter your birthday:
        </label>
        <input
          id="birthday"
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
