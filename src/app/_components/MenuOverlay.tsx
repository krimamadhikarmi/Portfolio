
import { NavLink } from "./NavLink";

interface NavLink {
    title: string;
    path: string;
}

export function MenuOverlay({ links }: { links: NavLink[] }){
    return(
        <ul className="flex flex-col py-4 items-center bg-opacity-50 bg-gray-50 ">
            {links.map((link,index)=>(
                <li key={index}>
               <NavLink href={link.path} title={link.title}/>
               </li>
            )
        )}
        </ul>
    )
}