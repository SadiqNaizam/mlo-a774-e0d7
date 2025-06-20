import React from 'react';

import AdminLayout from '../components/layout/AdminLayout';
import FunnelOverview from '../components/Dashboard/FunnelOverview';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import PageHeader from '../components/Dashboard/PageHeader';
import SourcesPieChart from '../components/Dashboard/SourcesPieChart';
import StatisticsGrid from '../components/Dashboard/StatisticsGrid';

/**
 * The main dashboard page.
 * This component orchestrates the layout and assembly of all dashboard widgets.
 * It utilizes AdminLayout for the primary structure (Sidebar and Header)
 * and arranges the content widgets in a responsive grid.
 */
const DashboardPage: React.FC = () => {
  return (
    <AdminLayout>
      <PageHeader />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Main content column (left) */}
        <div className="flex flex-col gap-6">
          <FunnelOverview />
          <LeadsTrackingChart />
        </div>
        {/* Sidebar content column (right) */}
        <div className="flex flex-col gap-6">
          <SourcesPieChart />
        </div>
      </div>
      <StatisticsGrid />
    </AdminLayout>
  );
};

export default DashboardPage;
