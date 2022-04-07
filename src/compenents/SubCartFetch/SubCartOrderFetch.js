const orderInfoG = async function (order_id) {
  const r1 = await fetch(
    `http://localhost:3001/api/sub/order-sub?order_id=${order_id}`,
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