import Description from "./Description"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"
import Nutrition from "./Nutrition"
import PreparationTime from "./PreparationTime"
import Separator from "./Separator"

const CardRecipe = () => {
   type instuction = {
     step: string;
     desc: string;
   };
   type Recipe = [
     {
       image: string;
       name: string;
       desc: string;
       ingredients: string[];
       instructions: {
         step: string;
         desc: string;
       }[];
       preparationTime: {
         Total: string;
         Preparation: string;
         Cooking: string;
       };
       nutrition: {
         desc: string;
         nutritionValue: {
           calories: string;
           carbs: string;
           protein: string;
           fat: string;
         };
       };
     }
   ];

   const recipe: Recipe = [
     {
       image: "/image-omelette.jpeg",
       name: "Simple Omelette Recipe",
       desc: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
       ingredients: [
         "2-3 large eggs",
         "Salt, to taste",
         "Pepper, to taste",
         "1 tablespoon of butter or oil",
         "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
       ],
       instructions: [
         {
           step: "Beat the eggs:",
           desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
         },
         {
           step: "Heat the pan:",
           desc: "Place a non-stick frying pan over medium heat and add butter or oil.",
         },
         {
           step: "Cook the omelette:",
           desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
         },
         {
           step: "Add fillings (optional):",
           desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
         },
         {
           step: "Fold and serve :",
           desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
         },
         {
           step: "Enjoy :",
           desc: "Serve hot, with additional salt and pepper if needed.",
         },
       ],
       preparationTime: {
         Total: "Approximately 10 minutes",
         Preparation: "5 minutes",
         Cooking: "5 minutes",
       },
       nutrition: {
         desc: "The table below shows nutritional values per serving without the additional fillings.",
         nutritionValue: {
           calories: "277kcal",
           carbs: "0g",
           protein: "20g",
           fat: "22g",
         },
       },
     },
   ];
   const instructions = recipe[0].instructions;
   const ingredients = recipe[0].ingredients;
   const nutrition = recipe[0].nutrition;
   const image = recipe[0].image;
   const name = recipe[0].name;
   const desc = recipe[0].desc;
  return (
    <div className="flex flex-col gap-10 max-w-[735px] p-10 my-32 rounded-lg bg-white">
      <Description image={image} name={name} desc={desc} />

      <PreparationTime
        total={recipe[0].preparationTime.Total}
        preparation={recipe[0].preparationTime.Preparation}
        cooking={recipe[0].preparationTime.Cooking}
      />

      <Ingredients ingredients={ingredients} />

      <Separator />

      <Instructions instructions={instructions} />

      <Separator />
      <Nutrition
        desc={nutrition.desc}
        nutritionValue={nutrition.nutritionValue}
      />
    </div>
  );
}

export default CardRecipe