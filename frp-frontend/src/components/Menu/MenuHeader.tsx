import { useState } from "react";
import AutoCompleteSearchBar from "./AutoCompleteSearchBar";
import Logo from "./Logo";


const MenuHeader = () => {
    const [query, setQuery] = useState("");
    return (
        <div className="menu-header">
            Family Resource Planning

            {/* <Logo /> */}
            <AutoCompleteSearchBar query={query} setQuery={setQuery} />
        </div>
    );
};

export default MenuHeader;