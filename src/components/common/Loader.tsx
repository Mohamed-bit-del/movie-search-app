import React from 'react'

export const Loader: React.FC = () => (
    <div className="flex items-center justify-center py-8">
        <div className="w-10 h-10 rounded-full animate-spin border-4 border-gray-300 border-t-blue-500"></div>
    </div>
)