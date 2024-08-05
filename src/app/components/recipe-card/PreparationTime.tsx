
type PreparationTimeProps = {
  total: string;
  preparation: string;
  cooking: string;
};
function PreparationTime({
  total,
  preparation,
  cooking,
}: PreparationTimeProps) {
  return (
    <ul className=" flex flex-col list-disc list-inside rounded-lg bg-rose25 p-5 gap-3 ">
      <h1 className="text-xl font-bold text-rose800">Preparation Time</h1>
      <li className="px-5">
        <span className="font-semibold">Total: </span>
        <span className="text-[1rem]  text-stone600">{total}</span>
      </li>

      <li className="px-5">
        <span className="font-semibold">Preparation: </span>
        <span className="text-[1rem]  text-stone600">{preparation}</span>
      </li>

      <li className="px-5">
        <span className="font-semibold">Cooking: </span>
        <span className="text-[1rem]  text-stone600">{cooking}</span>
      </li>
    </ul>
  );
}

export default PreparationTime;

