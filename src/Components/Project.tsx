import { useParams } from "react-router-dom";
import Index from "./Navigation/Index";

function Project() {
  const { id } = useParams();
  console.log({ id });
  return (
    <div>
      <Index />
      <p>Project</p>
    </div>
  );
}

export default Project;
