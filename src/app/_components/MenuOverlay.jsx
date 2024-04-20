import { NavLink } from "./NavLink";
export function MenuOverlay({links}){
    return(
        <ul className="flex flex-col py-4 items-center">
            {links.map((link,index)=>(
                <li>
               <NavLink href={link.path} title={link.title}/>
               </li>
            )
        )}
        </ul>
    )
}