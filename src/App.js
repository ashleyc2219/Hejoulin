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

function App() {
  return (

    <Router>
      <>
      <Header />
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
            <ProductDetail />
          </Route>
          <Route exact path="/product/list">
            <ProductList />
          </Route>
          <Route exact path="/sake-guide">
            <SakeGuide />
          </Route>
          <Route exact path="/gift">
            <Gift />
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
            <SubPlan />
          </Route>
          <Route exact path="/sub/time">
            <SubTime />
          </Route>
          <Route exact path="/sub/confirm">
            <SubConfirm />
          </Route>
          <Route exact path="/sub/cart-list">
            <SubCartList />
          </Route>
          <Route exact path="/sub/cart-info">
            <SubCartInfo />
          </Route>
          <Route exact path="/sub/cart-verify">
            <SubCartVerify />
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
            <CartList />
          </Route>
          <Route exact path="/cart/info">
            <CartInfo />
          </Route>
          <Route exact path="/cart/verify">
            <CartVerify />
          </Route>
          <Route exact path="/cart/order">
            <CartOrder />
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
          <Route exact path="/member/order-list/detail/:id">
            <MemberOrderListDetail />
          </Route>
          <Route exact path="/member/order-list">
            <MemberOrderList />
          </Route>
          <Route exact path="/member/event-list/detail/:id">
            <MemberEventListDetail />
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
            <MemberFav />
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
