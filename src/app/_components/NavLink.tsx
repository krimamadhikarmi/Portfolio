import Link from "next/link";

interface NavLinkProps{
  href: string;
  title: string;
}

export function NavLink({ href, title }: NavLinkProps) {
  return (
    <>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-purple-200 sm:text-xl rounded md:p-0 hover:text-purple-300"
      >
        {title}
      </Link>
    </>
  );
}
