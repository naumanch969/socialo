import React from 'react'

const Form = ({ activityForm }) => {
    return (
        <div className="flex flex-col gap-[20px] h-full w-full ">

            <h3 className='font-semibold text-[20px] text-purple-900 ' >Your Today's Activity</h3>
            <div className='flex flex-1 flex-col gap-[1rem] ' >
                {
                    Object.entries(activityForm).map(([activityName, activityValue], index) => (
                        <div key={index} className='flex justify-between gap-[8px] ' >
                            <span className='flex-[4] capitalize ' >{activityName}:</span>
                            <div className='flex justify-between gap-[4px] flex-[6] ' >
                                <span className='flex-[4] h-[1rem] ' >
                                    {
                                        activityValue.type.toLowerCase() == 'number'
                                            ?
                                            <input
                                                type="number"
                                                className='w-full border-none rounded-[2px] outline-purple-400 px-[4px] '
                                                defaultValue={0}
                                                value={Object.values(activityValue.chunks).reduce((sum, chunkValue) => sum + chunkValue, 0)}
                                                placeholder=''
                                            />
                                            :
                                            <select
                                                value={Object.values(activityValue.chunks)[0] == 100 ? 'true' : 'false'}
                                                className='w-full border-none rounded-[2px] outline-purple-400 px-[4px] '
                                            >
                                                <option value='true'>Yes</option>
                                                <option value='false'>No</option>
                                            </select>
                                    }
                                </span>
                                <span className='flex-[2] ' >{activityValue.target.unit}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Form