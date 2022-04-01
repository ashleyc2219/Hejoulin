import React, { useState } from 'react'

import Answer from './Answer'

const Chosen = (props) => {
  const [answer, setAnswer] = useState('')
  const { id, setThickness, setSmooth, setSweet, setTemp, setGift } = props

  const setData = () => {
    switch (id) {
      case 1:
        setThickness(answer)
        localStorage.setItem('thick', answer)
        let item1 = localStorage.getItem('thick')
        console.log('thick')
        console.log(item1)
        break
      case 2:
        setSmooth(answer)
        localStorage.setItem('smooth', answer)
        let item2 = localStorage.getItem('smooth')
        console.log('smooth')
        console.log(item2)
        break
      case 3:
        setSweet(answer)
        console.log('sweet')
        localStorage.setItem('sweet', answer)
        let item3 = localStorage.getItem('sweet')
        console.log(item3)
        break
      case 5:
        setGift(answer)
        console.log('gift')
        localStorage.setItem('gift', answer)
        let item4 = localStorage.getItem('gift')
        console.log(item4)
        break
      case 6:
        setTemp(answer)
        console.log('temp')
        localStorage.setItem('temp', answer)
        let item5 = localStorage.getItem('temp')
        console.log(item5)
        break
      default:
        break
    }
  }

  return (
    <>
      <Answer id={id} setAnswer={setAnswer} setData={setData} />
    </>
  )
}

export default Chosen
