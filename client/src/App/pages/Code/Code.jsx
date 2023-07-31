import React, { useState } from "react";
import Topbar from "./Topbar";
import { useStateContext } from "../../../contexts/ContextProvider";
import CodePosts from "./CodePosts";
import Rightbar from "./Rightbar";
import Create from "./Create";
import { codePosts } from "./data";


const Code = () => {
  const { showSidebar } = useStateContext();
  const [filters, setFilters] = useState({ posts: 'all', language: 'all' })
 
  const titleArr = codePosts.map(post => post.title)

  return (
    <div className={`w-full h-full flex `}>
      <div className={`md:w-full h-full px-[3rem] py-[1rem]  `}>
        <Topbar filters={filters} setFilters={setFilters} />
        <Create/>
        <div className="w-full flex justify-between items-start gap-[2rem] mt-[1rem] " >
          <div className="flex flex-[7] " >
            <CodePosts filters={filters} />
          </div>
          <div className="flex flex-[3] bg-white " >
            <Rightbar array={titleArr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
