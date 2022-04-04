const memberInfoG = async function (member_id) {
  const r1 = await fetch(
    `http://localhost:3001/api/cart-info/member?member_id=4`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const obj = await r1.json()
  return obj[0]
}

const orderMainI = async function (
  member_id,
  order_name,
  order_mobile,
  order_email,
  used_code
) {
  let data = {
    member_id: member_id,
    order_name: order_name,
    order_mobile: order_mobile,
    order_email: order_email,
    used_code: used_code,
  }

  const r1 = await fetch(`http://localhost:3001/api/cart-order/order-main`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const obj = await r1.json()
  return obj
}
const orderSakeMarkI = async function (member_id, order_id) {
  let data = {
    member_id: member_id,
    order_id: order_id,
  }
  const r1 = await fetch(
    `http://localhost:3001/api/cart-order/order-sake-mark`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
  const obj = await r1.json()
  return obj
}
const orderGiftGdI = async function (member_id, order_id) {
  let data = {
    member_id: member_id,
    order_id: order_id,
  }
  const r1 = await fetch(`http://localhost:3001/api/cart-order/order-gift-d`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const obj = await r1.json()
  return obj
}
const cartSakeMarkD = async function (member_id) {
  let data = {
    member_id: member_id,
  }
  const r1 = await fetch(
    `http://localhost:3001/api/cart-order/cart-sake-mark`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
  const obj = await r1.json()
  return obj
}
const cartGiftGdD = async function (member_id, order_id) {
  let data = {
    member_id: member_id,
  }
  const r1 = await fetch(
    `http://localhost:3001/api/cart-order/cart-gift-gdtail`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
  const obj = await r1.json()
  return obj
}
const shipmentI = async function (
  order_id,
  shipment_method,
  store_id,
  receiver,
  receiver_mobile,
  shipment_address,
  shipment_note
) {
  let data = {
    order_id: order_id,
    shipment_method: shipment_method,
    store_id: store_id ? store_id : '',
    receiver: receiver,
    receiver_mobile: receiver_mobile,
    shipment_address: shipment_address,
    shipment_note: shipment_note ? shipment_note : '',
  }
  const r1 = await fetch(`http://localhost:3001/api/cart-info/shipment`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const obj = await r1.json()
  return obj
}
const paymentI = async function (order_id, card_num) {
  let data = {
    order_id: order_id,
    card_num: card_num,
  }
  const r1 = await fetch(`http://localhost:3001/api/cart-info/payment`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const obj = await r1.json()
  return obj
}

export const memberInfoGet = memberInfoG
export const orderMainInsert = orderMainI
export const orderSakeMarkInsert = orderSakeMarkI
export const orderGiftGdInsert = orderGiftGdI
export const cartSakeMarkDelete = cartSakeMarkD
export const cartGiftGdDelete = cartGiftGdD
export const shipmentInsert = shipmentI
export const paymentInsert = paymentI
