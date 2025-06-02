import Styles from '@/constants/Styles'
import React from 'react'
import Title from './Title'
import { exploreWorld } from '@/constants/AppData'
import ExploreCards from './ExploreCards'

export default function Explore() {
  return (
    <div className='px-6 py-10'>
      <div className={`${Styles.innerWidth} mx-auto flex flex-col`}>
        <Title title={
          <span className='font-extrabold text-gray-900'>Why ride with us</span>
        }/>
      </div>
      <div className='flex flex-col lg:flex-row min-h-[50vh] m-9 lg:mx-32 gap-8'>
        {
          exploreWorld.map((world,index)=>(
            <ExploreCards key={index} world={world}/>
          ))
        }
      </div>
    </div>
  )
}
