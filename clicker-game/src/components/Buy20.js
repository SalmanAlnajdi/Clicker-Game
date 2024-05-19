import React from 'react'

const Buy20 = (fils,{buy}) => {

    


   function userClick(num){
          num = num - 20
          buy = fils
          return buy
   }

  return (
    <div className='shopCard'>
        <h1>Boost you number in 20 Fils</h1>
        <button onClick={userClick(fils)}>Click Here</button>
    </div>
  )
}

export default Buy20