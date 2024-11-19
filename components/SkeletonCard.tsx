import React from 'react'

export const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
    <div className="w-full h-64 bg-gray-600 rounded-md"></div>
    <div className="mt-4 h-6 bg-gray-600 rounded-md w-3/4"></div>
    <div className="mt-2 h-6 bg-gray-600 rounded-md w-1/2"></div>
  </div>
  )
}
