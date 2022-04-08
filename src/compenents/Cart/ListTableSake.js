import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ListTableSake.scss'
import ChooseCartMarkModal from './ChooseCartMarkModal'
import CartMarkModal from './CartMarkModal'

const ListTableSake = (props) => {
  const {
    index,
    sakeIncart,
    setSakeIncart,
    sakeInfo,
    memberId,
    sakeTotal,
    setSakeTotal,
  } = props
  
  // setMarkPic(sakeInfo.pics)

  const [chooseModalShow, setChooseModalShow] = useState(false)
  const [markModalShow, setMarkModalShow] = useState(false)
  const [markPic, setMarkPic] = useState(sakeInfo.pics)
  const fetchURL = 'http://localhost:3001/api/cart-list/sake'
  const [quantity, setQuantity] = useState(sakeInfo['cart_quantity'])
  let pro_gift = 'false'
  let gift_text = '不提供禮盒'
  useEffect(() => {
    setQuantity(sakeInfo['cart_quantity'])
    setMarkPic(sakeInfo.pics)
  }, [sakeInfo])
  
  const markRender = (markPic) => {
    if (markPic && sakeInfo.pro_mark === 1) {
      return (
        <div className="item item-mark true">
          <img
            onClick={() => {
              setMarkModalShow(true)
            }}
            src={'http://localhost:3001/images/mark_pic/' + markPic}
            alt=""
          />
        </div>
      )
    }
    if (markPic == null && sakeInfo.pro_mark === 1) {
      return (
        <div className="item item-mark true">
          <p
            onClick={() => {
              setChooseModalShow(true)
            }}
          >
            製作客製化酒標
          </p>
        </div>
      )
    } else {
      return <div className="item item-mark"></div>
    }
  }

  if (sakeInfo.pro_gift !== 0) {
    pro_gift = 'true'
    gift_text = '製作禮盒'
  }
  let data = {
    member_id: memberId,
    cart_sake_id: sakeInfo.cart_sake_id,
    pro_id: sakeInfo.pro_id,
  }
  // 更新總價
  function updateSakeTotal(price, action) {
    let newSakeTotal = sakeTotal
    if (action === 'add') {
      newSakeTotal += price
    }
    if (action === 'minus') {
      newSakeTotal -= price
    }
    if (action === 'del') {
      newSakeTotal -= price
    }
    setSakeTotal(newSakeTotal)
  }
  // 刪除商品
  const delSakeItem = async () => {
    const r1 = await fetch(fetchURL, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    const newSakeInCart = sakeIncart.filter(
      (sake) => sake['cart_sake_id'] !== sakeInfo.cart_sake_id
    )
    setSakeIncart(newSakeInCart)
    updateSakeTotal(sakeInfo.pro_price * quantity, 'del')
  }
  // 商品數量-1
  const minusQuantity = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      let data = {
        cart_quantity: quantity - 1,
        member_id: memberId,
        cart_sake_id: sakeInfo.cart_sake_id,
        pro_id: sakeInfo.pro_id,
      }
      const r1 = await fetch(fetchURL, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const obj = await r1.json()
      updateSakeTotal(sakeInfo.pro_price, 'minus')
    }
  }
  // 商品數量+1
  const plusQuantity = async () => {
    setQuantity(quantity + 1)
    let data = {
      cart_quantity: quantity + 1,
      member_id: memberId,
      cart_sake_id: sakeInfo.cart_sake_id,
      pro_id: sakeInfo.pro_id,
    }
    const r1 = await fetch(fetchURL, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    updateSakeTotal(sakeInfo.pro_price, 'add')
  }
  useEffect(() => {
    markRender()
  }, [quantity, markPic])

  return (
    <>
      {chooseModalShow ? (
        <ChooseCartMarkModal
          sakeInfo={sakeInfo}
          setChooseModalShow={setChooseModalShow}
          setMarkPic={setMarkPic}
          memberId={memberId}
        />
      ) : (
        ''
      )}
      {markModalShow ? (
        <CartMarkModal
          sakeInfo={sakeInfo}
          setMarkModalShow={setMarkModalShow}
          setMarkPic={setMarkPic}
          markPic={markPic}
        />
      ) : (
        ''
      )}
      <div className="table-item sake-table-item">
        <div className="item item-del">
          <img src="/CartList/trash.png" alt="" onClick={delSakeItem} />
        </div>
        <div className="item item-product-img">
          <img
            src={'http://localhost:3001/images/pro_img/' + sakeInfo.pro_img}
            alt=""
          />
        </div>
        <div className="item item-product-info">
          <h5>{sakeInfo.pro_name}</h5>
          <p className="ml">{sakeInfo.pro_capacity}</p>
          <p className="price">{sakeInfo.pro_price}</p>
          <Link to="/gift" className={pro_gift}>
            {gift_text}
          </Link>
          <div className="quantity-container">
            <img
              src="/CartList/minus-circle.svg"
              alt=""
              onClick={minusQuantity}
            />
            <p>{sakeInfo.cart_quantity}</p>
            <img
              src="/CartList/plus-circle.svg"
              alt=""
              onClick={plusQuantity}
            />
            <img className="trash" src="/CartList/trash.png" alt="" />
          </div>
        </div>
        {markRender(markPic)}
        <div className="item item-quantity">
          <div className="quantity-container">
            <img
              src="/CartList/minus-circle.svg"
              alt=""
              onClick={minusQuantity}
            />
            <p>{quantity}</p>
            <img
              src="/CartList/plus-circle.svg"
              alt=""
              onClick={plusQuantity}
            />
          </div>
        </div>
        <div className="item item-subtotal">
          <p>{quantity * sakeInfo.pro_price}</p>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default ListTableSake
