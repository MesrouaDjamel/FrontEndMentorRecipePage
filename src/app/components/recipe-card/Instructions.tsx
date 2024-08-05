

type Instruction = {
        step: string,   
        desc: string
    }
    

type InstructionsProps = {
    insturctions : [
        {
            step:string,
            desc:string,
        }[]
    ]
}
const Instructions = ({instructions}:any) => {
    // console.log(instructions);
    
    
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl text-rose800 font-bold">Instructions</h1>
      <ul className=" flex flex-col gap-3 list-decimal list-inside ">
        {instructions.map((instruction:any, index:number) => (
          <li key={index}>
            <span className="font-semibold">
                {instruction.step} {' '}
            </span>
            <span className="text-[1rem]  text-stone600">
            {instruction.desc}
            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Instructions