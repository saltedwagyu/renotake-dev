"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-64 pt-16 pb-20 lg:pb-8">
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">My Tasks</h1>
            <div className="bg-white rounded-lg p-8">
              <p className="text-gray-600">My Tasks page content will be implemented here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}