import React from 'react'

const About = () => {
  return (
    <>
    <div>About</div>
    <button onClick={() => {
      const userId = localStorage.getItem('userid');
      console.log('User ID from localStorage:', userId);
    }}>Get User ID</button> 
    </>
  )
}

export default About