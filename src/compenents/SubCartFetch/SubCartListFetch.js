const memberInfoG = async function (member_id) {
  const r1 = await fetch(
    `http://localhost:3001/api/cart-info/member?member_id=${member_id}`,
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

  const r1 = await fetch(`http://localhost:3001/api/sub/order-main`, {
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
const orderSubI = async function (order_id, sub_id, subtime_id, order_d_price) {
  function genSubTimeId(subtime_id) {
    if (subtime_id === 1) {
      return 1
    }
    if (subtime_id === 6) {
      return 2
    }
    if (subtime_id === 12) {
      return 3
    }
  }
  let subtime_id_new = genSubTimeId(subtime_id)
  function genSubIdArr(sub_id) {
    let new_sub_id = sub_id
      .map(function (item) {
        return item === '純米' ? 1 : item
      })
      .map(function (item) {
        return item === '純米吟釀' ? 2 : item
      })
      .map(function (item) {
        return item === '純米大吟釀' ? 3 : item
      })

    return '[' + new_sub_id.join(', ') + ']'
  }
  let sub_id_new = genSubIdArr(sub_id)
  let data = {
    order_id: order_id,
    sub_id: sub_id_new,
    subtime_id: subtime_id_new,
    order_d_price: order_d_price,
  }

  const r1 = await fetch(`http://localhost:3001/api/sub/order-sub`, {
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
    store_id: store_id ? store_id : 0,
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
export const orderSubInsert = orderSubI
export const shipmentInsert = shipmentI
export const paymentInsert = paymentI
