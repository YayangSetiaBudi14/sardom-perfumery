function Navbar() {
  return <>
    <nav class="navbar navbar-expand-lg bg-black p-0 shadow-lg">
        <div class="container-md">
            <a class="navbar-brand text-light" href="#">Navbar scroll</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto ms-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item ms-2 me-4">
                        <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link text-light" href="#">Perfumes</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a class="nav-link text-light" href="#">Contact</a>
                    </li>
                </ul>
                <ul class="navbar-nav me-auto ms-5 my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item d-flex align-items-center justify-content-center">
                        <a class="nav-link disabled text-light" aria-disabled="true"><i class="fa fa-shopping-cart"
                                aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item mx-5">
                        <div class="d-flex border">
                            <p class="text-light navbar-text border"><i class="fa fa-user"></i> My Account</p>
                        </div>
                    </li>
                </ul>
                <a class="nav-link text-light ms-auto" href="#"><i class="fas fa-sign-out-alt"></i>Exit</a>
            </div>
        </div>
    </nav>
    </>
}

export default Navbar;