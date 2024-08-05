import Separator from "../recipe-card/Separator";

type NutritionProps = {
    desc:string;
    nutritionValue: {
      calories: string;
      carbs: string;
      protein: string;
      fat: string;
    };
    
}
const Nutrition = ({desc,nutritionValue}: NutritionProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl text-rose800 font-bold">Nutrition</h1>
      <p className="text-[1rem] text-stone600">
        {desc}
      </p>

        
      {Object.entries(nutritionValue).map(([key, value], index) => (
        <div  key={index}>
          <div className="flex justify-around pb-3">
            <span className="capitalize text-stone600 ">{key}</span>
            <span className="text-[1rem] font-bold text-rose800">{value}</span>
          </div>
          <Separator/>
        </div>

      ))}
    </div>
  );
}

export default Nutrition