import React, { useEffect, useState } from 'react'
import { data } from './data'
import Form from './Form';
import Stats from './Stats';
import Graph from './Graph';
import { Add } from '@mui/icons-material';

const Tracker = () => {


    // object of all the keys of data.schema and initial value of each is 0
    const initialPercentageObject = Object.keys(data.schema).reduce((result, key) => { result[key] = 0; return result; }, {})
    var [percentages, setPercentages] = useState(initialPercentageObject);

    const initialActivityForm = { ...data.schema }
    const [activityForm, setActivityForm] = useState(initialActivityForm)


    useEffect(() => {
        Object.entries(activityForm).map(([activityName, activityValue], index) => {
            percentages[activityName] = Math.floor(activityValue.achieved / activityValue.target.number * 100)
        })
        setPercentages({ ...percentages })
    }, [activityForm])


    return (
        <div className='w-full flex justify-between gap-[1rem] mt-[1rem] ' >

            <div className="flex">
                <button onClick={() => setOpenCreateModal(true)} ><Add /></button>
            </div>

            <div className="flex gap-[8px] flex-[3] h-[16rem] ">
                <Graph />
                <Stats percentages={percentages} />
            </div>

            <div className="flex flex-col gap-[20px] flex-[1] min-h-[20rem] h-fit bg-purple-200 p-[12px] rounded-[2px] ">
                <Form activityForm={activityForm} setActivityForm={setActivityForm} />
            </div>

        </div>
    )
}

export default Tracker





            // data.activities.map((dayActivity) => {
            //     const schema = data.schema
            //     percentages = initialPercentageObject
            //     Object.entries(dayActivity).map(([activityName, activityValue]) => {
            //         var keyChunks = schema[activityName].chunks
            //         Object.entries(activityValue.chunks).map(([chunkKey, chunkValue]) => {
            //             if (chunkValue) {
            //                 percentages[activityName] += keyChunks[chunkKey]
            //             }
            //         })
            //     })
            // })