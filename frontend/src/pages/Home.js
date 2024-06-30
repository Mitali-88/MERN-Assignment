import React from 'react'

import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>




      <VerticalCardProduct category={"Homemade"} heading={"Homemade"} />
      <VerticalCardProduct category={"ChocolateCake"} heading={"Chocolate - Cake"} />
      <VerticalCardProduct category={"Truffle"} heading={"Truffle - Love"} />
      <VerticalCardProduct category={"Vanilla"} heading={"Vanilla"} />
      {/* <VerticalCardProduct category={"Butterscotch"} heading={"Butterscotch"} />
      <VerticalCardProduct category={"Strawberry"} heading={"Strawberry"} />
      <VerticalCardProduct category={"RedVelvet"} heading={"RedVelvet"} />
      <VerticalCardProduct category={"BlueBerry"} heading={"BlueBerry"} /> */}



    </div>
  )
}

export default Home