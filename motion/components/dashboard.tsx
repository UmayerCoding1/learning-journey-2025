'use client';
import { IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons-react';
import React, { useState } from 'react';
import {motion} from 'motion/react';
type NavItem = { id: string; label: string; icon?: string };

const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
];

const StatCard: React.FC<{ title: string; value: string; change?: string }> = ({ title, value, change }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="text-sm text-gray-500 mb-2">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
            <div className={`mt-2 text-sm ${change.startsWith('-') ? 'text-red-500' : 'text-emerald-500'}`}>{change}</div>
        )}
    </div>
);

const PlaceholderChart: React.FC<{ title?: string }> = ({ title }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
        {title && <div className="text-sm font-medium mb-3">{title}</div>}
        <div className="h-56 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">Chart Placeholder</div>
    </div>
);

const Dashboard: React.FC = () => {
    const [active, setActive] = useState<string>('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);


    const sidebarVerient = {
        open: {
            width: '14rem',
        },
        closed: {
            width: '4.5rem',
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex">
            {/* Sidebar */}
            <motion.div
             initial={false}
            animate={isSidebarOpen ? 'open' : 'closed'}
            variants={sidebarVerient}

            transition={{
                duration: 0.3
            }}
            >
                <motion.aside
             variants={sidebarVerient}

            className="w-56 bg-white border-r border-gray-200 p-6 hidden md:block">
                <div className="text-xl font-bold mb-6 flex items-center justify-between ">
                   { isSidebarOpen && <span>Dashboard</span>}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? ( <IconArrowBadgeLeft className='cursor-pointer hover:bg-gray-100 rounded-md'/> ) : ( <IconArrowBadgeRight className='cursor-pointer hover:bg-gray-100 rounded-md'/> )}
                    </button>
                </div>
                <nav className="space-y-2">
                    {navItems.map((n) => (
                        <button
                            key={n.id}
                            onClick={() => setActive(n.id)}
                            className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg ${
                                active === n.id ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <span className="w-6 text-center">{n.icon}</span>
                             { isSidebarOpen && <span>{n.label}</span>}
                        </button>
                    ))}
                </nav>
            </motion.aside>
            </motion.div>

            {/* Main area */}
            <main className="flex-1 p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Overview</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <input className="hidden sm:block px-3 py-2 border rounded-lg text-sm" placeholder="Search..." />
                        <button className="p-2 rounded-lg hover:bg-gray-100">🔔</button>
                        <div className="w-9 h-9 rounded-full bg-gray-200" />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard title="Total Users" value="2,543" change="+12%" />
                    <StatCard title="Revenue" value="$45,257" change="+8%" />
                    <StatCard title="Active Sessions" value="1,325" change="+5%" />
                    <StatCard title="Conversion Rate" value="12.3%" change="-2%" />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <PlaceholderChart title="User Activity" />
                    <PlaceholderChart title="Revenue Overview" />
                </div>

                {/* Lower panels */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium">Recent Activity</h3>
                        <p className="text-sm text-gray-500">No recent activity. Replace with real data.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium">Top Products</h3>
                        <p className="text-sm text-gray-500">Top product list goes here.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;