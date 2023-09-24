import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const BarChartComponent = () => {

    const data = [
        {
            name: "Today Sales",
            burgrrr: 4000,
            Fries: 2400,
            Shake: 2400,
        }
    ];


    return (
        <div>
            <BarChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="burgrrr" fill="#8884d8" />
                <Bar dataKey="Fries" fill="#82ca9d" />
                <Bar dataKey="Shake" fill="#FF00FF" />
            </BarChart>
        </div>
    )
}

export default BarChartComponent