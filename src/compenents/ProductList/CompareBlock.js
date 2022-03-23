import React, { useEffect ,useState } from 'react'
import './../../compenents/ProductList/CompareBlock.scss'

const CompareBlock = ({ up, compare }) => {
const [comparePro , setComparePro] = useState([])

  /* const fetchCompare = async () => {
    const url = 'http://localhost:3001/api/products-sake/item-detail?pro_id=' + 
    const res = await fetch(
      'http://localhost:3001/api/products-condition/random-three'
    )
    const fetchedData = await res.json()
    const test = fetchedData
    setComparePro(test)
  } */

useEffect(() => {
  console.log(compare)
}, [compare])

  return (
    <>
      <div className={up ? 'compare-block up' : 'compare-block'}>
        <div className="compare-wrap">
          <div className="product">
            <img src="/ProductList/product.png" alt="" />
            <p className="name">篠峯 雄町純米大吟醸</p>
            <div className="shadow"></div>
            <img src="/ProductList/remove.svg" alt="" className="remove" />
          </div>
          <div className="product">
            <img src="/ProductList/product.png" alt="" />
            <p className="name">篠峯 雄町純米大吟醸</p>
            <div className="shadow"></div>
            <img src="/ProductList/remove.svg" alt="" className="remove" />
          </div>
          <div className="product">
            <img src="/ProductList/product.png" alt="" />
            <p className="name">篠峯 雄町純米大吟醸</p>
            <div className="shadow"></div>
            <img src="/ProductList/remove.svg" alt="" className="remove" />
          </div>
          <button className="compare btn-primary btn-sm btn">比較</button>
        </div>
      </div>
    </>
  )
}

export default CompareBlock
