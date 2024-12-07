import React, { useState } from 'react'
import cuteRobot1 from '../assets/images/cuteRobo1.png'
import '../style/priceStyle.css'

const PricingSection = () => {

  const [isYearly, setIsYearly] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const pricingPlans = [
    {
      title:"Basic",
      price: isYearly ? "$100/year": "$10/month",
      description: "Perfect for individuals just starting out.",
      features: ["Basic Support", "1 GB storage", "Single user access"],
    },
    {
      title: "Pro",
      price: isYearly ? "$200/year": "$20/month",
      description: "Ideal for small teams and professionals.",
      features: ["Priority Support", "10 GB storage", "Up to 5 users", "Customizable dashboard"],
    },
    {
      title: "Enterprise", 
      price: isYearly ? "$300/year": "$30/month",
      description: "Best for large organizations with advance needs",
      features: ["24/7 dedicated support", "Ultimate storage", "Ultimate users", "Advanced analytics"],
    },
  ]
  
  return (
    <section className='pricing-container relative'>
      <h2 data-content="PRICING PLANS" className=' uppercase'>Pricing <span className='text-coral-red'> Plans</span></h2>

      <div className='text-center mb-8'>
        <button onClick={()=>setIsYearly(!isYearly)}>
          Toggle {isYearly ? "Monthly": "Yearly"} Plans
        </button>
      </div>

      <div className='pricing-content'>
        {pricingPlans.map((plan, index)=>(
          <div key={index} className={`pricing-card ${activeCard===index? "active-card": ""}`}
          onClick={()=>setActiveCard(activeCard==index?null: index)}>
            <h3 className='text-xl font-semibold mb-4'>{plan.title}</h3>
            <p className='text-2xl font-bold mb-4'>{plan.price}</p>
            <p className='mb-4'>{plan.description}</p>
            <ul>
              {plan.features.map((feature, idx)=>(
                <li key={idx}> -{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      <div className='pricing-background'>
        <img src={cuteRobot1} alt="3D background" />
      </div>
    </section>
  )
}

export default PricingSection