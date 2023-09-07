import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg bg-black p-0 shadow-lg navbar-text">
            <div className="container mx-auto">
                <a className="navbar-brand text-light"><img src="../assets/SarFume.png" alt="Icon" className="icon"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto ms-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item ms-0 me-2 me-lg-4">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ms-0 mx-2 mx-lg-4">
                            <a className="nav-link text-light" href="#">Perfumes</a>
                        </li>
                        <li className="nav-item ms-0 mx-2 mx-lg-4">
                            <a className="nav-link text-light" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mx-0 mx-lg-4 my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item mx-2 ms-0 ">
                            <div className="d-flex p-1 align-items-center">
                                <p className="text-light m-0"><i className="fa fa-shopping-cart"></i></p>
                            </div>
                        </li>
                        <li className="nav-item ms-0 mx-2 mx-lg-5">
                            <div className="d-flex p-1 align-items-center">
                                <p className="text-light m-0"><i className="fa fa-user"></i> My Account</p>
                            </div>
                        </li>
                    </ul>
                    <a className="nav-link text-light ms-auto my-1" href="#"><i className="fas fa-sign-out-alt"></i>Exit</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
