import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div class="header-blue">
                <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div class="container"><a class="navbar-brand" href="#">Company Name</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1" aria-controls="navcol-1" aria-expanded="false" aria-label="Toggle navigation"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse"
                            id="navcol-1">
                            <ul class="nav navbar-nav">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" href="#">Home</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" href="#">Shop</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="form-inline mr-auto" target="_self">
                                <div class="form-group">
                                    <label for="search-field">
                                        <i class="fa fa-search"></i>
                                    </label>
                                    <input class="form-control search-field" type="search" name="search" id="search-field" />
                                </div>
                            </form>

                            <div class="navbar-text lg:mr-7">
                                <div class=" position-relative">
                                    <i class="fas fa-cart-plus mt-2.5"></i>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                            </div>

                            <div class="navbar-text log lg:mr-7">
                                <a class=" dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="usericon"><i class="far fa-user-circle"></i></span>
                                </a>



                                <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Change Password</a></li>
                                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>

                            {/* <span class="navbar-text">
                                <a href="#" class="login">Log In</a>
                            </span><a class="btn btn-light action-button" role="button" href="#">Sign Up</a> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;