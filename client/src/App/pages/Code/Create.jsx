import { FormatColorFill, Palette, Cancel, VideoCallRounded, PhotoRounded, EmojiEmotionsRounded, Close, Lock, Camera, Title, FormatSize, LocationCityOutlined, PersonPinCircle, ArrowDropDown } from '@mui/icons-material'
import { image6 } from '../../../assets'
import { Avatar, Slider } from '../../../utils/Components'
import { LightenDarkenColor } from '../../../utils/functions/function'
import { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { Modal } from '@mui/material'
import { useStateContext } from '../../../contexts/ContextProvider'
import FileBase64 from 'react-file-base64'
import { useRef } from 'react'
import { Image } from "@mui/icons-material"
import { Tooltip } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import { createPost } from "../../../redux/actions/post"

const CreatePost = () => {
    ///////////////////////////// VARIABLES /////////////////////////////////////
    const { users } = useSelector(state => state.user)
    const fileBase64Ref = useRef()
    const dispatch = useDispatch()
    const { showCodeCreateModal, setShowCodeCreateModal } = useStateContext()

    ///////////////////////////// STATES ////////////////////////////////////////
    const initialCode = {
        code: '',
        title: '',
        description: '',
        images: [],
        tags: [],
        hashTags: [],
        likes: [],
        comments: [],
        shares: [],
        visibility: 'private',
        createdAt: Date.now(),
        updatedAt: Date.now(),
    }
    const [codeData, setCodeData] = useState(initialCode)
    const [showMenu, setShowMenu] = useState(false)
    const [showTaggedModal, setShowTaggedModal] = useState(false)
    const [tagValue, setTagValue] = useState(``)
    const [showhashTagModal, setShowhashTagModal] = useState(false)

    const initialPostStyle = { background: { show: false, value: '#fff' }, color: { show: false, value: '#fff' }, fontSize: { show: false, value: codeData.description.length < 100 ? '24' : '16' }, fontWeight: { show: false, value: '400' }, }
    ///////////////////////////// USE EFFECTS ///////////////////////////////////


    ///////////////////////////// FUNCTIONS //////////////////////////////////////

    const tagFriend = (friend) => {
        if (Boolean(codeData.tags.find(tag => tag.user == friend._id))) {
            codeData.tags = codeData.tags.filter(tag => tag.user != friend._id)
            setCodeData({ ...codeData })
        }
        else {
            codeData.tags = codeData.tags.concat({ name: friend.name, user: friend._id })
            setCodeData({ ...codeData })
        }
    }

    const filterTag = (tagToDelete) => {
        codeData.tags = codeData.tags.filter(tag => tag !== tagToDelete)
        setCodeData({ ...setCodeData })
    }

    const addTag = (value) => {
        if (!value.trim()) return
        const isAlreadyAdded = codeData.hashTags.find(tag => tag == value)
        if (!isAlreadyAdded) {
            codeData.hashTags = [...codeData.hashTags, value]
            setTagValue(``)
            setCodeData({ ...codeData })
        }
    }






    return (
        <>

            <Modal open={showCodeCreateModal} onClose={() => setShowCodeCreateModal()} className='flex justify-center items-center ' >
                <div className='bg-white w-[70vw] min-h-[20rem] h-fit max-h-[90vh] rounded-[8px] p-[1rem] overflow-y-scroll  ' >

                    <div className='h-[12%] relative flex justify-center items-center pb-[12px] ' >
                        <h4 className='text-[18px] font-bold text-black ' >Create Code Post</h4>
                        <button onClick={() => setShowCodeCreateModal(false)} className='absolute right-0 w-[2rem] h-[2rem] rounded-full bg-gray-100 ' ><Close /></button>
                    </div>

                    <hr className='h-[4%] w-full py-[12px]   ' />

                    <div className='min-h-[82%] h-auto flex flex-col justify-between gap-[8px] ' >

                        {/* avatar */}
                        <div className='flex gap-[1rem] ' >
                            <Avatar src={image6} />
                            <div className='flex flex-col ' >
                                <p className='font-semibold ' >Nauman Ch</p>
                                <div className='relative flex flex-col justify-center items-start gap-[4px] cursor-pointer rounded-t-[4px] min-w-[9rem] bg-gray-100 ' >

                                    <button onClick={() => setShowMenu(pre => !pre)} className='w-full flex justify-between items-center p-[2px] ' ><span className="flex justify-start gap-[2px] capitalize " ><Lock style={{ fontSize: '16px' }} className='text-[16px] ' /><span className='text-[12px] font-medium ' >{codeData.visibility}</span></span><ArrowDropDown /></button>
                                    {
                                        showMenu &&
                                        <div className='w-full absolute top-full bg-gray-100 flex flex-col items-start gap-[4px] rounded-b-[4px] ' >
                                            {
                                                menu.filter(m => m != codeData.visibility).map((item, index) => (
                                                    <button key={index} onClick={() => { setShowMenu(false); setCodeData({ ...codeData, visibility: item }) }} className='w-full gap-[2px] text-start hover:bg-gray-200 capitalize p-[2px] ' ><Lock style={{ fontSize: '16px' }} className='text-[16px] ' /><span className='text-[12px] font-medium ' >{item}</span></button>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[1rem] ' >
                            {/* title */}
                            <div className='flex justify-start gap-[1rem] ' >
                                <label htmlFor="title" className='flex-[1] ' >Title:</label>
                                <TextareaAutosize
                                    minRows={1}
                                    maxRows={3}
                                    id='title'
                                    placeholder='Your title here....'
                                    value={codeData.title}
                                    onChange={(e) => { codeData.title = e.target.value; setCodeData({ ...codeData }) }}
                                    className={`px-[4px] py-[2px] flex flex-[5] w-full resize-none text-[16px] rounded-[4px] `}
                                />
                            </div>
                       
                            {/* description */}
                            <div className='flex justify-start gap-[1rem] ' >
                                <label htmlFor="description" className='flex-[1] ' >Description:</label>
                                <TextareaAutosize
                                    minRows={1}
                                    maxRows={3}
                                    id='decription'
                                    placeholder='Write a short description of the code....'
                                    value={codeData.description}
                                    onChange={(e) => { codeData.description = e.target.value; setCodeData({ ...codeData }) }}
                                    className={`px-[4px] py-[2px] flex flex-[5] w-full resize-none text-[16px] rounded-[4px] `}
                                />
                            </div>

                            {/* code */}
                            <div className='flex justify-start gap-[1rem] ' >
                                <label htmlFor="code" className='flex-[1] ' >Code:</label>
                                <TextareaAutosize
                                    minRows={6}
                                    maxRows={10}
                                    id='code'
                                    placeholder='Paste your code here....'
                                    value={codeData.code}
                                    onChange={(e) => { codeData.code = e.target.value; setCodeData({ ...codeData }) }}
                                    className={`px-[4px] py-[2px] flex flex-[5] w-full resize-none text-[16px] rounded-[4px] `}
                                />
                            </div>

                            {/* hashtags */}
                            <div className='flex flex-wrap gap-[8px] ' >
                                {
                                    codeData.hashTags.map((tag, index) => (
                                        <span key={index} className='text-link-blue italic hover:underline cursor-pointer ' >#{tag}</span>
                                    ))
                                }
                            </div>

                            {/* buttons */}
                            <div className='flex flex-col gap-[8px] ' >
                                {/* post button */}
                                <div className='flex justify-end ' >
                                    <button onClick={() => { }} disabled={!codeData.code} className={` ${codeData.code ? 'bg-purple-500' : 'bg-gray-500'}  w-[6rem] rounded-[4px] p-[4px] text-white font-medium text-[18px] `} >Post</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Modal>


            {/* showTaggedModal */}
            <Modal open={showTaggedModal} onClose={() => setShowTaggedModal(false)} className="flex justify-center items-center " >
                <div className="w-[20rem] h-[24rem] rounded-[8px] bg-white " >
                    <div className="h-[24rem] p-[8px] " >
                        <h5 className="h-[10%] font-semibold " >Tag your friends:</h5>
                        <div className="h-[90%] flex flex-col gap-[8px] overflow-y-scroll " >
                            {
                                users.map((friend, index) => (
                                    <div key={index} onClick={() => tagFriend(friend)} className={`${Boolean(codeData.tags.find(tag => tag.user == friend._id)) ? 'bg-gray-100' : ' '} flex justify-start items-center gap-[1rem] hover:bg-gray-100 cursor-pointer px-[8px] py-[4px] rounded-[8px] `} >
                                        <Avatar />
                                        <div className="flex flex-col justify-start " >
                                            <p className="text-[14px] font-medium " >{friend.email}</p>
                                            <p className="text-[14px] text-text-gray " >{friend.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Modal>



            {/* showhashTagModal */}
            <Modal open={showhashTagModal} onClose={() => setShowhashTagModal(false)} className="flex justify-center items-center " >
                <div className="w-[20rem] min-h-[10rem] max-h-[20rem] h-auto rounded-[8px] bg-white " >
                    <div className="h-[15rem] p-[12px] flex flex-col gap-[12px] " >
                        <h5 className="h-[10%] font-semibold " >Add hashTags:</h5>
                        <div className="h-[10rem] flex flex-wrap gap-[8px] overflow-y-scroll  " >
                            {
                                codeData.hashTags.map((hashTag, index) => (
                                    <div key={index} className="h-fit " >
                                        <div className="w-fit flex gap-2 items-center justify-between rounded-[15px] py-[3px] px-[7px] bg-purple-900 " >
                                            <span className="text-purple-100 capitalize text-[12px] " >{hashTag}</span>
                                            <Cancel onClick={() => filterTag(hashTag)} style={{ fontSize: '12px' }} className={`cursor-pointer text-purple-100 text-[12px] bg-purple-900 rounded-full `} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <input
                            placeholder={`Type here`}
                            value={tagValue}
                            onChange={(e) => setTagValue(e.target.value)}
                            onKeyDown={(e) => e.key == `Enter` && addTag(e.target.value)}
                            className={`outline-none w-full  p-[2px] rounded-[4px] bg-gray-100 `}
                        />
                    </div>
                </div>
            </Modal>


        </>
    )




}

export default CreatePost







const menu = [
    'private',
    'public',
    'friends only',
    'all friends except',
    'only share with',
]