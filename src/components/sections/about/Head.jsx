import Image from '../../../assets/food/food4.webp'
const Head = () => {
    return (
         <header className="reserve-table">
        <img
    className="header-reserve"
    src={Image}
    alt="Little Lemon Ingredients"
        ></img>
    <div className="reserve-header-text">
        <h1>About us</h1>
    </div>
</header>
    )
}
export default Head