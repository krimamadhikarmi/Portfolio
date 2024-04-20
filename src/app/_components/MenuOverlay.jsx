import { NavLink } from "./NavLink";
export function MenuOverlay({links}){
    return(
        <ul className="flex flex-col py-4 items-center bg-opacity-50 bg-gray-50 ">
            {links.map((link,index)=>(
                <li>
               <NavLink href={link.path} title={link.title}/>
               </li>
            )
        )}
        </ul>
    )
}