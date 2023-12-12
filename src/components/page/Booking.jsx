import Heading from '../sections/reservation/Heading'
import BookingForm from '../sections/reservation/BookingForm'
import {useReducer} from "react";
import {fetchAPI} from "../../utils/booking";

const Booking = ()=>{
    function updateTime(date){
        return fetchAPI(date);
    }
    const output = fetchAPI((new Date()))
    const [availableTime, dispatch] = useReducer(updateTime,output)
    return (
        <>
            <Heading />
            <BookingForm availableTime={availableTime} updateTime={dispatch} />
        </>
    )
}
export default Booking