import React, { useEffect, useState } from 'react'
import axios from 'axios';
import baseUrl from './utils/baseUrl';
import { FollowerList } from './utils/Followers';
import BarChartGraphic from './BarChartGraphic';

const Graphic = () => {
  const [follower, setFollower] = useState([])
 
  const functionList = async() => {
    let seguidores = await FollowerList()
    setFollower(seguidores)
  }
  useEffect(() => {
    functionList()
  }, [])
  
  return (
    <div>
      <BarChartGraphic follower={follower}/>
    </div>
  )
}

export default Graphic