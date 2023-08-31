import React from 'react'

const Form = ({ activityForm, setActivityForm }) => {


    const handleChange = (e) => {
        let value;
        (e.target.value >= activityForm[e.target.name].target.number)
            ?
            value = activityForm[e.target.name].target.number
            :
            value = e.target.value

        activityForm[e.target.name].achieved = value
        setActivityForm({ ...activityForm })
    }

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
                                        activityValue.type.toLowerCase() == 'boolean'
                                            ?
                                            <select
                                                onChange={handleChange}
                                                name={activityName}
                                                value={activityValue.achieved}
                                                className='w-full border-none rounded-[2px] outline-purple-400 px-[4px] '
                                            >
                                                <option value={100}>Yes</option>
                                                <option value={0}>No</option>
                                            </select>
                                            :
                                            <input
                                                type="number"
                                                className='w-full border-none rounded-[2px] outline-purple-400 px-[4px] '
                                                name={activityName}
                                                onChange={handleChange}
                                                max={activityValue.target.number}
                                                min={activityValue.default}
                                                value={activityValue.achieved}
                                                placeholder=''
                                            />
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


// value={Object.values(activityValue.chunks).reduce((sum, chunkValue) => sum + chunkValue, 0)}