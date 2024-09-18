// style
import "./createPlan.scss";
import Section1Plan from "./createPlanComponents/Section1Plan";
import Section2Plan from "./createPlanComponents/Section2Plan";
import Section3Plan from "./createPlanComponents/Section3Plan";

function CreatePlan() {
  return (
    <div className="createPlan">
      <div className="createPlan-container container">
        <Section1Plan />
        <Section2Plan />
        <Section3Plan />
      </div>
    </div>
  );
}

export default CreatePlan;
