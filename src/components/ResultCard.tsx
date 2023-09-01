import React from "react";

interface IProps {
  result: { number: number; text: string };
  title: string;
  description: string;
}

const ResultCard = ({ title, result, description }: IProps) => {
  const { number, text } = result;
  return (
    <div className=" w-full max-w-xl rounded p-5">
      <h2 className="font-medium flex items-center gap-1 leading-none ">
        {title}:
        <span className="text-orange-500 font-semibold text-lg leading-none">
          {number}
        </span>
      </h2>
      <p className="font-light text-xs leading-none">({description})</p>

      <div className="mt-2 ml-2">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ResultCard;
