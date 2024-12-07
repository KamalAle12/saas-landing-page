import React, { useState } from 'react'
import Robot2 from '../assets/images/robot2.png'
import {FaUserCircle} from 'react-icons/fa';
import '../style/TestimonialsSection.css';

const TestimonialsSection = () => {

  const testimonials = [
    { 
      name: "Alice Johnson", 
      feedback: "This is an amazing product! It has made my daily tasks so much easier and more efficient. I can't imagine going back to how things were before." 
    },
    { 
      name: "Michael Lee", 
      feedback: "It has transformed my business. The results have exceeded all my expectations, and my team is equally thrilled with the improvements." 
    },
    { 
      name: "Sophia Martinez", 
      feedback: "Highly recommend it! The user-friendly interface and outstanding features make this product a must-have for everyone." 
    },
    { 
      name: "James Carter", 
      feedback: "Excellent support and features. Whenever I needed assistance, the support team was quick and incredibly helpful. Truly outstanding service!" 
    },
    { 
      name: "Emma Davis", 
      feedback: "Great value for the price. The product offers so much more than I expected, and the quality is just phenomenal!" 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index)=>{
    setActiveIndex(index==activeIndex?null:index);
  };

  const generateParticles = ()=>{
    return Array.from({length: 50}).map((_, idx)=>(
      <div key={idx} className="particle" style={{
        left: `${Math.random()*100}%`, 
        top: `${Math.random()*100}%`,
        animationDelay: `${Math.random()*3}s`,
        animationDuration: `${2+Math.random()*3}s`,
      }}></div>
    ))
  }
  return (
    <section className='testimonials-container bg-gray-100 py-16 px-8'>
      <h2 data-content="WHAT OUR USERS SAY" className='uppercase'>What Our <span className='text-coral-red'> Users</span> Say</h2>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex-1 testimonials-background'>
          <img src={Robot2} alt="3D background" />
        </div>


        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonials, index)=>(
            <div key={index} className={`bg-white shadow-md p-6 rounded-lg cursor-pointer transition-all duration-300 
              ${activeIndex===index? "col-span-2 row-span-2":"hover:scale-105"}`} 
              onClick={()=>handleCardClick(index)}>
                <div className='flex items-center mb-4'>
                  <FaUserCircle className='text-4xl text-blue-500'/>
                  <h4 className='text-lg font-semibold ml-4'>{testimonials.name}</h4>
                </div>
                {activeIndex==index?(
                  <p className='text-gray-700'>{testimonials.feedback}</p>
                ):(
                  <div className='particle-box'>
                    <p className='italic text-gray-500'>Click to reveal what they say...</p>
                    <div className='particles'>{generateParticles()}</div>
                  </div>
                )}
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection