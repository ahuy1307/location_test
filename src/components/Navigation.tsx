import {NavLink} from "react-router-dom";

function Navigation() {
    return <nav className={"flex justify-center gap-x-4 py-4 border-b border-neutral-900 text-xl"}>
        <NavLink
            to="/"
            className={({isActive}) =>
                isActive ? "text-green-500 font-bold" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/test"
            className={({isActive}) =>
                isActive ? "text-green-500 font-bold" : ""
            }
        >
            Test
        </NavLink>
    </nav>
}

export default Navigation;