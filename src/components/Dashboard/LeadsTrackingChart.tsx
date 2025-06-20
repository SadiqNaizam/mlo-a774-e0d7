import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Line } from 'recharts';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 60 },
  { name: 'April', closedWon: 59, closedLost: 48 },
  { name: 'May', closedWon: 80, closedLost: 40 },
  { name: 'June', closedWon: 81, closedLost: 19 },
  { name: 'July', closedWon: 56, closedLost: 43 },
  { name: 'August', closedWon: 55, closedLost: 90 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-border">
        <p className="font-bold text-sm text-gray-800">{label}</p>
        <p className="text-xs text-teal-500">{`Closed won: ${payload[0].value}`}</p>
        <p className="text-xs text-red-500">{`Closed lost: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <CardTitle>Leads tracking</CardTitle>
              <div className="flex items-baseline gap-4 pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">680</span>
                  <span className="text-sm text-muted-foreground">total closed</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">70</span>
                  <span className="text-sm text-muted-foreground">total lost</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <Button variant="ghost" size="sm" className="text-xs h-8 px-2">Leads came</Button>
              <Button variant="secondary" size="sm" className="text-xs h-8 px-2">Leads Converted</Button>
              <Button variant="ghost" size="sm" className="text-xs h-8 px-2">Total deals size</Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="closedWon" stroke="#14B8A6" fill="#14B8A6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" fill="#EF4444" fillOpacity={0.1} />
              <Line type="monotone" dataKey="closedWon" stroke="#14B8A6" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 7 }} />
              <Line type="monotone" dataKey="closedLost" stroke="#EF4444" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 7 }}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
                <span>Closed won</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
