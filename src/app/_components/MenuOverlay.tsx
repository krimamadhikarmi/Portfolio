import { NavLink } from "./NavLink";

interface NavLinkItem {
  title: string;
  path: string;
}

export function MenuOverlay({ links }: { links: NavLinkItem[] }) {
  return (
    <ul className="absolute top-16 right-4 w-56  bg-black/90 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-4 z-50">
      {links.map((link, index) => (
        <li key={index} className="w-full text-center text-lg">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
