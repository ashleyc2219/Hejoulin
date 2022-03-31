import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from 'reactjs-credit-card/form'
import Card from 'reactjs-credit-card/card'
import { useCardForm } from 'reactjs-credit-card'
import { useState } from 'react'
import './../Cart/InfoCreditCard.scss'

function InfoCreditCard() {
  //useCardForm is a hook which returns a function.If this function calls,function returns credit card form data values and their validations
  const getFormData = useCardForm()
  const [numberValid, setNumberValid] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    const [data, isValid] = getFormData()
    console.log(data, isValid)
    if (!data.number.isValid) setNumberValid(false) //we'll set a hook to show a error if card number is invalid

    if (!isValid)
      alert(
        `${data.holder.value} form data values invalid :) and holder also ${
          data.holder.isValid ? 'valid' : 'invalid'
        }`
      )
  }

  //We can set any form element attribute
  function handleFocus() {
    setNumberValid(true)
  }

  return (
    <div className="credit-card-container">
      <Card fixClass="fix-new" cardClass="card-new" />

      <div className="form-box">
        <form onSubmit={handleSubmit}>
          {/* //If numberValid state is false then show a error */}
          <CardNumber
            placeholder="信用卡號"
            className={`input-customize input-text${
              !numberValid ? ' error' : ''
            }`}
            onFocus={handleFocus}
          />
          <CardHolder
            placeholder="持卡人姓名"
            className="input-customize input-text"
          />
          <div className=" flex-wrapper">
            <div className="wrapper-customize semi flex-wrapper">
              <ValidThruMonth className="input-text semi" />
              <ValidThruYear className="input-text semi" />
            </div>
            <CardSecurityCode
              placeholder="CVV"
              className="input-customize input-text semi"
            />
          </div>
        </form>
      </div>
      {/* //fixClass property is used to change all card components sizes by
      changing font-size //default fonts-size 11px. */}
    </div>
  )
}

export default InfoCreditCard
