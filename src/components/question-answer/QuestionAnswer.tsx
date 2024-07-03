import React from 'react';

interface IQuestionAnswer {
  question: string;
  options: string[];
  onConfirm: () => void;
}

const QuestionAnswer = (props: IQuestionAnswer) => {
  const { question, options, onConfirm } = props;
  return (
    <section>
      <form onSubmit={onConfirm}>
        
      </form>
    </section>
  );
};

export default QuestionAnswer;
