import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataLineChart = ({ data }) => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={235}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="0 1" /> {/* Set strokeDasharray to "0" to hide grid lines */}
          <XAxis dataKey="label" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 10 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataLineChart;
