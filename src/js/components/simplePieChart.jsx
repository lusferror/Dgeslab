import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tecnico 1',
    S1: 120,
    S2: 60,
    S3: 90,
    amt: 2400,
  },
  {
    name: 'Tecnico 2',
    S1: 302,
    S2: 160,
    S3: 120,
    amt: 2210,
  },
  {
    name: 'Tecnico 3',
    S1: 260,
    S2: 134,
    S3: 194,
    amt: 2290,
  },

];

export  class PieExample extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

  state = {
    opacity: {
      S1: 1,
      S2: 1,
      S3: 1
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
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
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line type="monotone" dataKey="S2" strokeOpacity={opacity.S2} stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="S1" strokeOpacity={opacity.S1} stroke="#82ca9d" />
            <Line type="monotone" dataKey="S3" strokeOpacity={opacity.S3} stroke="#DB300A" />
          </LineChart>
        </ResponsiveContainer>
        <p className="notes text-secondary fw-bold">Produccion Semanal por Tecnico mes actual</p>
      </div>
    );
  }
}
