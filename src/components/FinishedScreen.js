import { useQuestion } from "../contextpovider/questionprovider";

function FinishedScreen() {
  const { highestScore, maxPoints, points, dispatch } = useQuestion();
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  else if (percentage >= 80 && percentage < 100) emoji = "😗";
  else if (percentage >= 50 && percentage < 80) emoji = "😣";
  else if (percentage > 0 && percentage < 50) emoji = "😑";
  else if (percentage === 0) emoji = "😰";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points} </strong>
        out of {maxPoints}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore"> {highestScore} Points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
  //   return <div>Finished</div>;
}

export default FinishedScreen;
