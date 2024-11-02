import { list } from "postcss";
import Link from "../Link/Link";
import { useState } from "react";


const Navbar = () => {
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/profile", name: "Profile" },
        { id: 4, path: "/settings", name: "Settings" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
      const [open,setOpen] = useState(false)
    return (
        <div>
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open===true? <img src="https://img.icons8.com/?size=48&id=pwIDwJpH6BTA&format=png" className="w-[20px]"></img> : <img src="https://img.icons8.com/?size=32&id=VypMXfzO4ZOq&format=png" className="w-[20px]" alt="" />
                }
               
            </div>
           
          <ul className={`z-10 md:flex absolute md:static duration-1000 shadow-xl p-5 shadow-gray-400 md:shadow-none ${open?'top-5':'-top-60'}`} >
            {
                routes.map(route=><Link route={route} key={route.id}></Link>)
            }
          </ul>
        </div>
    );
};

export default Navbar;