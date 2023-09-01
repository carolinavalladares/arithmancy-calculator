interface IProps {
  result: {
    number: number;
    details: { principle?: string; keywords: string[]; description: string };
  };
  title: string;
  description: string;
}

const ResultCard = ({ title, result, description }: IProps) => {
  const { number, details } = result;
  return (
    <div
      className={`w-full max-w-xl rounded p-5 box-border ${
        number == 11 || number == 22 || number == 33
          ? "border border-amber-400"
          : null
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-medium flex items-center gap-1 leading-none ">
            {title}:
            <span className="text-orange-500 font-semibold text-lg leading-none">
              {number}
            </span>
          </h2>
          <p className="font-light text-xs leading-none">({description})</p>
        </div>
        {details.principle && (
          <div
            className={`text-xs font-semibold p-1 rounded ${
              details.principle == "yin"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {details.principle.toUpperCase()}
          </div>
        )}

        {number == 11 || number == 22 || number == 33 ? (
          <div
            className={`text-xs font-semibold p-1 rounded bg-amber-400 text-black`}
          >
            MASTER NUMBER
          </div>
        ) : null}
      </div>

      <div className="mt-2 ml-2">
        <p>{details.description}</p>
      </div>

      <div className="mt-3 ml-2 flex items-center gap-2">
        {details.keywords.map((keyword, index) => {
          return (
            <span
              className="text-xs font-medium bg-black bg-opacity-25 p-1 rounded"
              key={index}
            >
              {keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ResultCard;
