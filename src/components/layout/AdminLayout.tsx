import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Sidebar className="row-span-2" />
      <Header className="col-start-2" />
      <main className="col-start-2 row-start-2 overflow-auto bg-background p-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
