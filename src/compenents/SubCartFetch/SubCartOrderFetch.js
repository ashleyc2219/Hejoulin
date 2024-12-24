const orderInfoG = async function (order_id) {
  const r1 = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}}/api/sub/order-sub?order_id=${order_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const obj = await r1.json()
  return obj
}

export const orderInfoGet = orderInfoG