import {Routes,Route} from "react-router-dom";
import Home from '../page/Home'
import About from '../page/About'
import Login from '../page/Login'
import Booking from '../page/Booking'
import Order from '../page/Order'
import OrderConfirm from '../page/OrderConfirm'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/confirmation" element={<OrderConfirm/>}/>
        </Routes>
    )
}
export default Routing;