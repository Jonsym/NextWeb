import React from 'react'
import Headline from './Headline'
import Card from './Card'

const Product = () => {
  return (
    <section id='aplicacion' className='max-w-[1640px] mx-auto p-4 py-12'>
        <Headline title="Apps"/>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-16'>
          <Card image="/app1.jpg" title="Chard App"/>
          <Card image="/app2.jpg" title="Your Food"/>
          <Card image="/app3.jpg" title="Shoes Store App"/>
          <Card image="/app4.jpg" title="SoulFitness"/>
          <Card image="/app5.jpg" title="Pets App"/>
          <Card image="/app6.jpg" title="Clone Netflix"/>
        </div>
    </section>
  )
}

export default Product