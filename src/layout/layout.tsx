import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                {children ? children : <Outlet />}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;