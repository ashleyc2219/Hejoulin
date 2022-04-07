import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import NewsList from './pages/NewsList'
import NewsDetail from './pages/NewsDetail'
import SakeIntro from './pages/SakeIntro'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import SakeGuide from './pages/SakeGuide'
import Gift from './pages/Gift'
import MarkIntro from './pages/MarkIntro'
import MarkEdit from './pages/MarkEdit'
import MarkDone from './pages/MarkDone'
import SubPlan from './pages/SubPlan'
import SubTime from './pages/SubTime'
import SubConfirm from './pages/SubConfirm'
import SubCartInfo from './pages/SubCartInfo'
import SubCartList from './pages/SubCartList'
import SubCartVerify from './pages/SubCartVerify'
import SubCartOrder from './pages/SubCartOrder'
import EventList from './pages/EventList'
import EventDetail from './pages/EventDetail'
import CartList from './pages/CartList'
import CartInfo from './pages/CartInfo'
import CartVerify from './pages/CartVerify'
import CartOrder from './pages/CartOrder'
import RestaurantList from './pages/RestaurantList'
import RestaurantDetail from './pages/RestaurantDetail'
import MemberProfile from './pages/MemberProfile'
import MemberOrderList from './pages/MemberOrderList'
import MemberOrderListDetail from './pages/MemberOrderListDetail'
import MemberEventList from './pages/MemberEventList'
import MemberEventListDetail from './pages/MemberEventListDetail'
import MemberSubList from './pages/MemberSubList'
import MemberSubListDetail from './pages/MemberSubListDetail'
import MemberFav from './pages/MemberFav'
import MemberMark from './pages/MemberMark'
import Header from './compenents/Shared/Header'
import Footer from './compenents/Shared/Footer'
import { createContext, useState } from 'react'
export const CartCount = createContext(0)
export const CartSummary = createContext('default')
export const CartVerifyInfo = createContext('default')
export const SubCartVerifyInfo = createContext('default')

function App() {
  const [compare, setCompare] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [memberId, setMemberId] = useState({})
  // 訂單詳細資料
  const [detailData, setDetailData] = useState({})
  // 活動詳細資料
  const [eventDetailData, setEventDetailData] = useState({})
  // subPlan, subTime 溝通用的state
  const [subPlan, setSubPlan] = useState([])
  const [subPlanTotal, setSubPlanTotal] = useState(0)
  // subTime subConfirm溝通用的state
  const [subTimeTotal, setSubTimeTotal] = useState(0)
  const [subTimeMonth, setSubTimeMonth] = useState(0)
  // 購物車之間溝通的state
  const [cartSummary, setCartSummary] = useState({
    district: '',
    method: '',
    subtotal: '',
    discountCode: '',
    shipFee: '',
    allTotal: '',
    order_main_id: '',
  })
  const [cartVerifyInfo, setCartVerifyInfo] = useState({
    cardNum: '',
    total: '',
    email: '',
  })
  // 訂閱 購物車之間溝通的state
  const [subCartVerifyInfo, setSubCartVerifyInfo] = useState({
    cardNum: '',
    total: '',
    email: '',
  })
  // 加入購物車的提示光箱
  const [addcartmodal, setAddcartmodal] = useState(false)
  // 登入會員的側邊選單
  const [sidebar, setSidebar] = useState(false)
  // 登入會員的alert光箱
  const [loginModal, setLoginModal] = useState(false)
  return (
    <Router>
      <>
        <CartCount.Provider value={cartCount}>
          <Header
            setCartCount={setCartCount}
            addcartmodal={addcartmodal}
            sidebar={sidebar}
            setSidebar={setSidebar}
          />
        </CartCount.Provider>
        <Switch>
          <Route exact path="/news/detail/:id">
            <NewsDetail />
          </Route>
          <Route exact path="/news/list">
            <NewsList />
          </Route>
          <Route exact path="/sake-intro">
            <SakeIntro />
          </Route>
          <Route exact path="/product/detail/:id">
            <CartCount.Provider value={cartCount}>
              <ProductDetail
                compare={compare}
                setCompare={setCompare}
                setCartCount={setCartCount}
                setAddcartmodal={setAddcartmodal}
                sidebar={sidebar}
                setSidebar={setSidebar}
                loginModal={loginModal}
                setLoginModal={setLoginModal}
              />
            </CartCount.Provider>
          </Route>
          <Route exact path="/product/list">
            <CartCount.Provider value={cartCount}>
              <ProductList
                compare={compare}
                setCompare={setCompare}
                setCartCount={setCartCount}
                setAddcartmodal={setAddcartmodal}
                sidebar={sidebar}
                setSidebar={setSidebar}
                loginModal={loginModal}
                setLoginModal={setLoginModal}
              />
            </CartCount.Provider>
          </Route>
          <Route exact path="/sake-guide">
            <SakeGuide />
          </Route>
          <Route exact path="/gift">
            <Gift
              setCartCount={setCartCount}
              setAddcartmodal={setAddcartmodal}
            />
          </Route>
          <Route exact path="/mark/intro">
            <MarkIntro />
          </Route>
          <Route exact path="/mark/edit">
            <MarkEdit />
          </Route>
          <Route exact path="/mark/done">
            <MarkDone />
          </Route>
          <Route exact path="/sub/plan">
            <SubPlan
              subPlan={subPlan}
              setSubPlan={setSubPlan}
              subPlanTotal={subPlanTotal}
              setSubPlanTotal={setSubPlanTotal}
            />
          </Route>
          <Route exact path="/sub/time">
            <SubTime
              subPlan={subPlan}
              subPlanTotal={subPlanTotal}
              setSubTimeTotal={setSubTimeTotal}
              setSubTimeMonth={setSubTimeMonth}
            />
          </Route>
          <Route exact path="/sub/confirm">
            <SubConfirm
              subPlan={subPlan}
              subTimeTotal={subTimeTotal}
              subTimeMonth={subTimeMonth}
            />
          </Route>
          <Route exact path="/sub/cart-list">
            <SubCartList />
          </Route>
          <Route exact path="/sub/cart-info">
            <SubCartInfo setSubCartVerifyInfo={setSubCartVerifyInfo} />
          </Route>
          <Route exact path="/sub/cart-verify">
            <SubCartVerifyInfo.Provider value={subCartVerifyInfo}>
              <SubCartVerify />
            </SubCartVerifyInfo.Provider>
          </Route>
          <Route exact path="/sub/cart-order">
            <SubCartOrder />
          </Route>
          <Route exact path="/event/detail/:id">
            <EventDetail />
          </Route>
          <Route exact path="/event/list">
            <EventList />
          </Route>
          <Route exact path="/cart/list">
            <CartList
              setCartSummary={setCartSummary}
              loginModal={loginModal}
              setLoginModal={setLoginModal}
              setSidebar={setSidebar}
            />
          </Route>
          <Route exact path="/cart/info">
            <CartSummary.Provider value={cartSummary}>
              <CartInfo
                setCartVerifyInfo={setCartVerifyInfo}
                setCartSummary={setCartSummary}
              />
            </CartSummary.Provider>
          </Route>
          <Route exact path="/cart/verify">
            <CartVerifyInfo.Provider value={cartVerifyInfo}>
              <CartVerify />
            </CartVerifyInfo.Provider>
          </Route>
          <Route exact path="/cart/order">
            <CartSummary.Provider value={cartSummary}>
              <CartOrder />
            </CartSummary.Provider>
          </Route>
          <Route exact path="/restaurant/detail/:id">
            <RestaurantDetail />
          </Route>
          <Route exact path="/restaurant/list">
            <RestaurantList />
          </Route>
          <Route exact path="/member/profile">
            <MemberProfile />
          </Route>
          <Route exact path="/member/order-list/detail">
            <MemberOrderListDetail
              detailData={detailData}
              setDetailData={setDetailData}
            />
          </Route>
          <Route exact path="/member/order-list">
            <MemberOrderList />
          </Route>
          <Route exact path="/member/event-list/detail">
            <MemberEventListDetail
              eventDetailData={eventDetailData}
              setEventDetailData={setEventDetailData}
            />
          </Route>
          <Route exact path="/member/event-list">
            <MemberEventList />
          </Route>
          <Route exact path="/member/sub-list/detail/:id">
            <MemberSubListDetail />
          </Route>
          <Route exact path="/member/sub-list">
            <MemberSubList />
          </Route>
          <Route exact path="/member/fav">
            <CartCount.Provider value={cartCount}>
              <MemberFav
                compare={compare}
                setCompare={setCompare}
                setCartCount={setCartCount}
              />
            </CartCount.Provider>
          </Route>
          <Route exact path="/member/mark">
            <MemberMark />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
