import { useQuestion } from "../contextpovider/questionprovider";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuestion();
  console.log(index);
  return (
    <div>
      <h4>{questions.at(index).question}</h4>
      <Options />
    </div>
  );
}

export default Question;
