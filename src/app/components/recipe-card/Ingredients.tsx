

type IngredientProps = {
  ingredients: string[]
}


const Ingredients = ({ingredients}: IngredientProps) => {
  return (
    <div className="">
      <h1 className="text-3xl text-rose800 font-bold pb-3">Ingredients</h1>
      <ul className="list-disc list-inside flex flex-col gap-3 text-stone600 ">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ingredients