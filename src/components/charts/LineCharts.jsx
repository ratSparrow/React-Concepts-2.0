import { Line, LineChart, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
  const data = [
    { student: 1, physics: 75, math: 78, chemistry: 82 },
    { student: 2, physics: 82, math: 85, chemistry: 88 },
    { student: 3, physics: 89, math: 92, chemistry: 91 },
    { student: 4, physics: 84, math: 88, chemistry: 85 },
    { student: 5, physics: 77, math: 76, chemistry: 80 },
    { student: 6, physics: 93, math: 95, chemistry: 92 },
    { student: 7, physics: 88, math: 89, chemistry: 90 },
    { student: 8, physics: 81, math: 83, chemistry: 86 },
    { student: 9, physics: 90, math: 91, chemistry: 89 },
    { student: 10, physics: 85, math: 87, chemistry: 84 },
  ];

  return (
    <LineChart width={500} height={400} data={data}>
      <XAxis dataKey="student"></XAxis>
      <YAxis datakey="student"></YAxis>
      <Line dataKey="math" stroke="red"></Line>{' '}
      <Line dataKey="physics" stroke="green"></Line>{' '}
      <Line dataKey="chemistry" stroke="blue"></Line>{' '}
    </LineChart>
  );
};

export default LineCharts;
