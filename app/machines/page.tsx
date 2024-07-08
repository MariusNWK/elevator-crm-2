import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col m-8 bg-neutral-200 rounded h-full">
      <div className="flex gap-2 justify-between">
        <h1 className="text-2xl font-semibold">Liste des machines</h1>
        <Link href="/machines/new" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          New Machine
        </Link>
      </div>
      <div className="flex-1 bg-red-400"></div>
    </div>
  );
}
