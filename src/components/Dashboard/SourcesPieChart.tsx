import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

interface SourceData {
  name: string;
  value: number;
  dealValue: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 50, dealValue: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 40, dealValue: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 10, dealValue: 1000, percentage: 10, color: '#34D399' }, // emerald-400
  { name: 'Dribbble', value: 10, dealValue: 1000, percentage: 10, color: '#60A5FA' }, // blue-400
];

const SourcesPieChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}
                  formatter={(value: number, name: string, props) => [`${props.payload.percentage}%`, props.payload.name]}
                />
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="space-y-3">
              {data.map((source) => (
                <li key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.color }}></span>
                    <span className="font-medium text-gray-700">{source.name}</span>
                  </div>
                  <span className="text-muted-foreground">${source.dealValue.toLocaleString()}</span>
                  <span className="text-muted-foreground font-medium">{source.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
          <Button variant="outline" size="sm">From leads total</Button>
      </CardFooter>
    </Card>
  );
};

export default SourcesPieChart;
