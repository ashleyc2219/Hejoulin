import React from 'react'

const ResultButton = (props) => {
  const {
    minPrice,
    maxPrice,
    thickness,
    smooth,
    sweet,
    taste,
    temp,
    gift,
    sakeId,
    setSakeId,
  } = props

  const data = {
    pro_taste: `${thickness}` + `${smooth}` + `${sweet}`,
    pro_temp: temp,
    pro_price_low: minPrice,
    pro_price_high: maxPrice,
    pro_gift: gift,
  }
  console.log(data)

  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
}
