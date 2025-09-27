import React from 'react'

const HealthCheckupButton = () => {
  return (
    <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow hover:from-blue-500 hover:to-teal-500 transition duration-400 font-semibold cursor-pointer"
            onClick={() => window.location.href = '/checkup'}>
              Health Checkup
            </button>
  )
}

export default HealthCheckupButton