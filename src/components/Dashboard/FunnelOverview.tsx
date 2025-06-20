import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { id: 'conversation', name: 'In conversation', count: 50, value: 100, duration: '2 days', color: 'bg-indigo-900' },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { id: 'closed', name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const FunnelOverview: React.FC = () => {
  const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <div className="flex items-baseline gap-2 pt-2">
          <span className="text-4xl font-bold">600</span>
          <span className="text-sm text-muted-foreground">active leads</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full flex rounded-full h-3 overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.id}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>
        <ul className="space-y-4">
          {funnelData.map((stage) => (
            <li key={stage.id} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className={cn('w-2.5 h-2.5 rounded-full', stage.color)}></span>
                <span>{stage.name}</span>
              </div>
              <span className="text-right text-muted-foreground font-medium">{stage.count}</span>
              <span className="text-right text-muted-foreground font-medium">$ {stage.value}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-right text-muted-foreground font-medium cursor-pointer">{stage.duration}</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Average time on this stage</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelOverview;
