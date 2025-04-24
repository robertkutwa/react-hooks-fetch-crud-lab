import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <section>
      <h2>Quiz Questions</h2>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateQuestion={onUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;