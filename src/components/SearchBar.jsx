import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";


const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {

        if (location.pathname.includes('/collections')) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }, [location, showSearch])
    return (showSearch && visible) ? (
        <div className="border-t  border-b text-center bg-gray-50">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2  mx-3 my-5 rounded-full sm:w-1/2">
                <input value={search} onChange={(e) => { setSearch(e.target.value) }} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search" />
                <img className="w-4" src={assets.search_icon} alt="search" />
            </div>
            <img onClick={() => setShowSearch(false)} className="w-4 inline cursor-pointer " src={assets.cross_icon} alt="Cross" />
        </div>
    ) : null
}

export default SearchBar