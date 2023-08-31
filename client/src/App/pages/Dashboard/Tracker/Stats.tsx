import React from 'react'

const Stats = ({percentages}) => {
  return (
    <div className='flex-[2] flex flex-col justify-start gap-[1rem] w-full h-full bg-gray-200 p-[8px] rounded-[4px] overflow-y-scroll '  >
    {
        Object.entries(percentages).map(([activityName, percentage], index) => (
            <div key={index} className={`flex justify-between gap-[1px] w-full font-semibold ${percentage == 100 ? 'text-green' : 'text-red'} `} >
                <span className="capitalize ">{activityName as string}:</span>
                {/* <span>-</span> */}
                <span className="">{percentage as number}%</span>
            </div>
        ))
    }
</div>
  )
}

export default Stats