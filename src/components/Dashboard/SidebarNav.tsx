import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  UsersRound,
  User,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Circle,
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
  isBottom?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, active }) => (
  <li>
    <a
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900',
        active && 'bg-gray-200 text-gray-900'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  </li>
);

const SidebarNav: React.FC = () => {
  const mainNavItems: NavItemProps[] = [
    { href: '#', icon: LayoutGrid, label: 'Dashboard', active: true },
    { href: '#', icon: UsersRound, label: 'Leads' },
    { href: '#', icon: User, label: 'Customers' },
    { href: '#', icon: FileText, label: 'Proposals' },
    { href: '#', icon: Receipt, label: 'Invoices' },
    { href: '#', icon: ShoppingCart, label: 'Items' },
    { href: '#', icon: Mail, label: 'Mail' },
    { href: '#', icon: Archive, label: 'Shoebox' },
    { href: '#', icon: Calendar, label: 'Calendar' },
  ];

  const bottomNavItems: NavItemProps[] = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-60 bg-gray-50 flex flex-col border-r h-full">
      <div className="flex items-center gap-2 p-4 border-b h-16">
        <div className="bg-black p-2 rounded-lg">
           <Circle className="w-6 h-6 text-white" />
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <ul className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <ul className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarNav;
