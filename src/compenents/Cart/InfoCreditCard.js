import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from 'reactjs-credit-card/form'
import Card from 'reactjs-credit-card/card'
import { useCardForm } from 'reactjs-credit-card'
import { useEffect } from 'react'
import './../Cart/InfoCreditCard.scss'

function InfoCreditCard(props) {
  const {
    cardNum,
    setCardNum,

    // infoCreditCard 元件 檢查用的 onchange就會檢查 (因為檢查func元件裡面)
    setNumberValid,
    // cartInfo 按了確認付款會檢查numberValid
    passCardNum,
    passCardHolder,
    passCardCvv,
    // 接資料用的
    cardHolder,
    cardMonth,
    cardYear,
    setCardHolder,
    setCardMonth,
    setCardYear,
    setCardCvv,
    warning,
  } = props

  //useCardForm is a hook which returns a function.If this function calls,function returns credit card form data values and their validations
  const getFormData = useCardForm()

  function handleSubmit(e) {
    // e.preventDefault()
    const [data, isValid] = getFormData()
    // console.log(data, isValid)
    if (!data.number.isValid) {setNumberValid(true)
    }else{
      setNumberValid(false)
    }
  }

  //We can set any form element attribute
  function handleFocus() {
    setNumberValid(true)
  }
  useEffect(() => {
    handleSubmit()
  }, [cardNum, cardHolder, cardMonth, cardYear])

  return (
    <div className="credit-card-container">
      <Card fixClass="fix-new" cardClass="card-new" />

      <div className="form-box">
        <form>
          {/* //If numberValid state is false then show a error onSubmit={handleSubmit}*/}
          <CardNumber
            placeholder="信用卡號"
            className={`input-customize input-text${
              !passCardNum && warning === 'red' ? ' red' : ''
            }`}
            onFocus={handleFocus}
            onChange={(e) => {
              setCardNum(e.target.value)
            }}
          />
          <CardHolder
            placeholder="持卡人姓名"
            className={`input-customize input-text${
              !passCardHolder && warning === 'red' ? ' red' : ''
            }`}
            onChange={(e) => {
              setCardHolder(e.target.value)
            }}
          />
          <div className=" flex-wrapper">
            <div className="wrapper-customize semi flex-wrapper">
              <ValidThruMonth
                className="input-text semi"
                onChange={(e) => {
                  setCardMonth(e.target.value)
                }}
              />
              <ValidThruYear className="input-text semi" />
            </div>
            <CardSecurityCode
              placeholder="CVV"
              className={`input-customize input-text semi${
                !passCardCvv && warning === 'red' ? ' red' : ''
              }`}
              onChange={(e) => {
                setCardCvv(e.target.value)
              }}
            />
          </div>
          {/* <button className="btn btn-primary">Submit</button> */}
        </form>
      </div>
      {/* //fixClass property is used to change all card components sizes by
      changing font-size //default fonts-size 11px. */}
    </div>
  )
}

export default InfoCreditCard
