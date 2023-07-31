import React from 'react'

const Stats = ({percentages}) => {
  return (
    <div className='flex flex-col flex-wrap gap-[1rem] '  >
    {
        Object.entries(percentages).map(([activityName, percentage], index) => (
            <div key={index} className={`flex justify-start gap-[4px] w-fit font-semibold ${percentage == 100 ? 'text-green' : 'text-red'} `} >
                <span className="flex-1">{activityName as string}</span>
                <span>-</span>
                <span className="flex-1">{percentage as number}%</span>
            </div>
        ))
    }
</div>
  )
}

export default Stats