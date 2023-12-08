function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          key={i}
          disabled={hasAnswered}
          className={`btn btn-option ${i === answer ? "answer" : " "} ${
            hasAnswered
              ? i === question.correctOption
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
