import { useQuestion } from "../contextpovider/questionprovider";

function StartScreen() {
  const { numQuestions, dispatch } = useQuestion();
  return (
    <div className="start">
      <h2>Welcome To React Quiz</h2>
      <h3>{numQuestions} Questions to test your React Mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
