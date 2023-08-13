import React, { useState } from 'react'
import Navbar from '../navbar/page'

const SignleProduct = () => {
    const [data,setData] = useState("")
    console.log("Input data",data)

const recieveDataFromChild = (input) => {
      setData(input)
}

  return (
    <div>
        <Navbar sendDataToParent={recieveDataFromChild}/>
    </div>
  )
}

export default SignleProduct