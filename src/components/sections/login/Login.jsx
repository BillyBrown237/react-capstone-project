import Image from "../../../assets/food/food4.webp";
const  LoginView =() =>{
    return (
        <header className="reserve-table">
            <img
                className="header-reserve"
                src={Image}
                alt="Little Lemon Ingredients"
            ></img>
            <div className="reserve-header-text">
                <h1>Login</h1>
            </div>
        </header>
    );
}
export default LoginView