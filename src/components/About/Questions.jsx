'use client';

import Heading from "./Heading";
import Question from "./Question";
import { questions } from "@/assets"; // Adjust import path if necessary

const Questions = () => {
  return (
    <div 
      id="questions" // Ensures this section links correctly with the Navbar
      className="py-20"
    >
      <Heading text="Questions and Answers" />
      <div>
        <ul className="flex flex-col gap-y-3">
          {questions.map((question, i) => (
            <Question key={i} data={question} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Questions;