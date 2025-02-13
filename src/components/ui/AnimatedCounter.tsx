'use client'
import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({amount}:{amount:number}) {
  return (
    <div>
        <CountUp 
        duration={2} 
        decimals={2}
        decimal='.'
        prefix='Rs.'
        end={amount} 
         />
        </div>
  )
}

export default AnimatedCounter