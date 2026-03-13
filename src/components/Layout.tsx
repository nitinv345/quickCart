import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 QuickCart Grocery Delivery</p>
      </footer>
    </div>
  );
};

export default Layout;
