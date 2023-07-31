import React, { useEffect, useState } from 'react'
import { MoreVert, ThumbUpOutlined, Share, Comment, Save, CopyAll, Favorite, Report } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { image1 } from '../../../assets'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { likePost } from '../../../redux/actions/code'


const CodePost = ({ post }) => {

  const { isFetching, error } = useSelector(state => state.code)
  const dispatch = useDispatch()

  const [showMenu, setShowMenu] = useState(false)

  const Menu = () => (
    <motion.div animate={{ x: [100, 0], opacity: [0, 1] }} className="absolute z-[50] shadow-2xl top-[3rem] items-start right-0 w-[15rem] h-auto flex flex-col gap-[4px] p-[8px] border-[2px] bg-purple-200 border-purple-800 rounded-[4px]  " >
      <button onClick={() => { setShowMenu(false) }} className="w-full flex hover:bg-purple-400 p-[6px] rounded-[6px] gap-2 " ><Save /> <span className="" >Save</span> </button>
      <button onClick={() => { setShowMenu(false) }} className="w-full flex hover:bg-purple-400 p-[6px] rounded-[6px] gap-2 " ><CopyAll /> <span className="" >Copy</span> </button>
      <button onClick={() => { setShowMenu(false) }} className="w-full flex hover:bg-purple-400 p-[6px] rounded-[6px] gap-2 " ><Favorite /> <span className="" >Add to Favourite</span> </button>
      <button onClick={() => { setShowMenu(false) }} className="w-full flex hover:bg-purple-400 p-[6px] rounded-[6px] gap-2 " ><Comment /> <span className="" >Comment</span> </button>
      <button onClick={() => { setShowMenu(false) }} className="w-full flex hover:bg-purple-400 p-[6px] rounded-[6px] gap-2 " ><Share /> <span className="" >Share</span> </button>
      <button onClick={() => { setShowMenu(false) }} className="w-full flex hover:bg-purple-400 p-[6px] rounded-[6px] gap-2 " ><Report /> <span className="" >Report</span> </button>
    </motion.div>
  )

  const handleLikePost = () => {
    dispatch(likePost(post._id))
  }


  return (
    <div className='flex flex-col p-[1rem] bg-white rounded-[2px] ' >

      {/* username */}
      <div className='flex justify-between items-center ' >
        <div className='flex gap-[1rem] ' >
          <div className='w-[3rem] h-[3rem] rounded-full ' >
            <img src={image1} alt="image" className='w-full h-full rounded-full object-cover ' />
          </div>
          <div className='flex flex-col items-start justify-center ' >
            <h5 className='text-[14px] font-semibold ' >{post.userName}</h5>
            <p className='text-[12px] font-light ' >{post.username}</p>
          </div>
          <div className='flex items-center' >
            <span className='text-gray-500 ' >{post.createdAt} minutes ago</span>
          </div>
        </div>
        <div className="relative" >
          <IconButton onClick={() => setShowMenu(prev => !prev)} className="bg-purple-200 cursor-pointer capitalize text-black " ><MoreVert /></IconButton>   {/* #423e65 */}
          {showMenu && <Menu />}
        </div>
      </div>

      <hr className='w-full h-[1px] bg-gray-100 border-none mt-[6px] mb-[12px] ' />

      <div className='flex flex-col gap-[8px] ' >
        {/* title, description, tags */}
        <div className='flex flex-col gap-[2px] ' >
          <h3 className='font-semibold text-[20px] ' >{post.title}</h3>
          <p className='text-[14px] ' >{post.description}</p>
          <div className='flex gap-[6px] ' >
            {
              post.tags.map((tag, index) => (
                <span key={index} className='text-link-blue '  >#{tag}</span>
              ))
            }
          </div>
        </div>
        {/* code */}
        <div className='rounded-[4px] p-[8px] bg-black text-white ' >
          <code>
            {post.code}
          </code>
        </div>
      </div>

      <hr className='w-full h-[1px] bg-gray-100 border-none mb-[6px] mt-[12px] ' />

      {/* likes,share,comments */}
      <div className='flex justify-between items-center ' >

        <div>
          <IconButton onClick={handleLikePost} > <ThumbUpOutlined /> </IconButton>
          <span className='text-[14px] ' > {post.likes.length} people</span>
        </div>

        <div className='flex gap-[4px] ' >
          <IconButton className='relative ' >
            <Share />
            <span className='w-[18px] h-[18px] rounded-full absolute top-0 right-0 flex justify-center items-center text-[14px] bg-green text-white ' >5</span>
          </IconButton>
          <IconButton className='relative ' >
            <Comment />
            <span className='w-[18px] h-[18px] rounded-full absolute top-0 right-0 flex justify-center items-center text-[14px] bg-green text-white ' >5</span>
          </IconButton>
        </div>

      </div>


    </div>
  )
}

export default CodePost