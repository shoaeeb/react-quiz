import { useQuestion } from "../contextpovider/questionprovider";

function Options() {
  const { questions, index, dispatch, answer } = useQuestion();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.at(index).options.map((option, i) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          key={i}
          disabled={hasAnswered}
          className={`btn btn-option ${i === answer ? "answer" : " "} ${
            hasAnswered
              ? i === questions.at(index).correctOption
                ? "correct"
                : "wrong"
              : " "
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
