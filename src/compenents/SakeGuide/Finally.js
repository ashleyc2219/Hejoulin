import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Finally = (props) => {
  const { taste, temp, minPrice, maxPrice, gift } = props
  const [content, setContent] = useState([])

  const url2 = `http://localhost:3001/api/product_guide?pro_taste=${taste}&pro_temp=${temp}&pro_price_low=${minPrice}&pro_price_high=${maxPrice}&pro_gift=${gift}`
  const sake = content.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <div className="box">
          <Link to={'/product/detail/' + v.pro_id}>
            <div className="sth">
              <img
                src={'http://localhost:3001/images/pro_img/' + v.pro_img}
                alt=""
              />
              <span>{v.pro_name}</span>
            </div>
          </Link>
          <div className="sake_circle uno"></div>
        </div>
      </React.Fragment>
    )
  })
  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(url2)
      const data = await res.json()
      setContent(data)
    }
    fetchItem()
  }, [taste, temp, minPrice, maxPrice, gift])

  return (
    <>
      <div className="sakes">{sake}</div>
    </>
  )
}

export default Finally
