import Form from "./components/Form";
import { useState } from "react";
import { IResults } from "./types";
import ResultCard from "./components/ResultCard";

function App() {
  const [results, setResults] = useState<IResults | null>(null);
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="mb-10">
        <h1 className="text-xl font-medium">
          Welcome to Arithmancy Calculator
        </h1>
      </div>

      <div className="mb-11 w-full">
        <Form setResults={setResults} />
      </div>

      {results && (
        <section className="w-full">
          <h2>Your results: </h2>
          <div className="w-full flex flex-col gap-4  [&>*:nth-child(odd)]:bg-white [&>*:nth-child(odd)]:bg-opacity-10 [&>*:nth-child(even)]:bg-black [&>*:nth-child(even)]:bg-opacity-10 ">
            <ResultCard
              description="Soul's journey"
              title="Life Path Number"
              result={results.lifePath}
            />
            <ResultCard
              title="Character Number"
              description="General personality type"
              result={results.characterNumber}
            />
            <ResultCard
              description="Inner personality"
              title="Heart Number"
              result={results.heartNumber}
            />
            <ResultCard
              description="Outer personality"
              title="Social Number"
              result={results.socialNumber}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
