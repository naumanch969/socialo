import React, { useState } from "react";
import { Search } from '@mui/icons-material'
import { useStateContext } from "../../../contexts/ContextProvider";

const Topbar = ({ filters, setFilters }) => {
    const filterButtons = ["All", "Recommended", "Related", "Latest", "Famous"];

    const [searchValue, setSearchValue] = useState('');
    const { showCodeCreateModal, setShowCodeCreateModal } = useStateContext()


    return (
        <div className="w-full flex flex-col gap-[1rem] ">

            <div className="flex justify-between items-center " >
                <h1 className="text-[3rem] text-purple-900 font-bold ">Code</h1>
                <div className="flex justify-between gap-[24px] " >
                    <div className="relative w-[16rem] h-[40px] rounded-[4px] py-[4px] px-[8px] border-[1px] border-gray-100 bg-white " >
                        <input
                            type="text"
                            placeholder="Search here... "
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full bg-white h-full outline-none border-none "
                        />
                        <button className="absolute right-0 top-[50%] transform translate-y-[-50%] w-[36px] h-[99%] bg-purple-200 " > <Search /> </button>
                    </div>
                    <button onClick={()=>setShowCodeCreateModal(true)} className="flex justify-center items-center bg-purple-600 text-white w-[40px] h-[40px] text-[32px] rounded-full " >+</button>
                </div>
            </div>

            {/* container */}
            <div className="flex justify-between items-center gap-[2rem] ">
                {/* buttons */}
                <div className="flex-[7] w-full flex justify-start items-center gap-[1.5rem] pb-[4px] border-b-[.5px] border-purple-900  ">
                    {filterButtons.map((item, index) => (
                        <div className=" " key={index}>
                            <button onClick={() => setFilters({ ...filters, posts: item.toLowerCase() })} className={` text-purple-900 ${filters.posts.toLowerCase() == item.toLowerCase() && "text-purple-600  "}  `}>
                                {item}
                            </button>
                        </div>
                    ))}
                </div>
                {/* select */}
                <div className="flex justify-end flex-[3] " >
                    <select onChange={(e) => setFilters({ ...filters, language: e.target.value })} name="language" id="language-select" className="w-[10rem] h-[40px] rounded-[4px] p-[.5rem] bg-purple-200 cursor-pointer outline-none " >
                        <option value="all">All</option>
                        <option value="python">Python</option>
                        <option value="javascript">Javascript</option>
                        <option value="kotlin">Kotlin</option>
                        <option value="java">Java</option>
                        <option value="ruby">Ruby</option>
                        <option value="c">C</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
