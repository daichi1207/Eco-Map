import React from 'react'
import ItemContainer from "./ItemContainer"

let config = { sdgsInfo: "SDGs stands for Sustainable Development Goals. To learn more about the 17 goals click on the one you want to learn about." }

const Main: React.FC = () => {
  return (
    <div>
      <div className="my-5" style={{ textAlign: 'center' }}><h1>Learn</h1></div>
      <div className="my-5" style={{ textAlign: 'center' }}>{config.sdgsInfo}</div>
      <div><ItemContainer /></div>
    </div>



  )
}

export default Main
