import Image from "next/image";
import Link from "next/link";
import NextLogo from "../public/next.svg";

export default function Header(): JSX.Element {
  return (
    <div className="w-full flex gap-2 justify-between p-4">
      <Link href="/">
        <Image src={NextLogo} alt="nextlogo" className="w-32" />
      </Link>
      <div className="flex gap-2">
        <Link href="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>
        <Link href="/machines" className="hover:text-blue-400">
          Machines
        </Link>
        <Link href="/settings" className="hover:text-blue-400">
          Settings
        </Link>
      </div>
    </div>
  );
}
