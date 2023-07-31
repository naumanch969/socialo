import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Charat = () => {
  return (
    <div className="chart w-full my-[20px] p-[20px] relative  shadow-box ">
    <h3 className="chartTitle mb-[24px] font-semibold text-[20px] ">Your Tracker</h3>
    <div className='w-full h-[20rem] ' >
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#c5baba" />
                <Line type="monotone" dataKey={dataKey} stroke="#00008b" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#c5baba" strokeDasharray="5 5" />}
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
</div>
  )
}

export default Charat