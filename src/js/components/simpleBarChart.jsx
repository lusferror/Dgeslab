import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Marzo",
    Reacondicionados: 740,
    Entrada: 1240,
    amt: 2400
  },
  {
    name: "Abril",
    Reacondicionados: 956,
    Entrada: 848,
    amt: 2210
  },
  {
    name: "Mayo",
    Reacondicionados: 436,
    Entrada: 589,
    amt: 2290
  },
  {
    name: "Junio",
    Reacondicionados: 900,
    Entrada: 803,
    amt: 2000
  },
  {
    name: "Julio",
    Reacondicionados: 680,
    Entrada: 506,
    amt: 2181
  },

];

export default function Barra() {
  return (
    <div >
    <ResponsiveContainer>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
     className="">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Entrada" fill="#8884d8" />
      <Bar dataKey="Reacondicionados" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}