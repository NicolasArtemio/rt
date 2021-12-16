function NavBar (){
    return (
    <>
        <header>
                <div>
                    <a target="_blank" className="facebook" href="https://www.facebook.com/profile.php?id=100010447723135"><i className="fab fa-facebook"></i></a>
                    <a target="_blank" className="instagram" href="https://www.instagram.com/andreaguinder/"><i className="fab fa-instagram"></i></a>
                    <a target="_blank" className="behance" href="https://www.behance.net/andreaguinder"><i className="fab fa-behance"></i></a>
                    <p>Buscador</p>
                </div>
            <div>
                <img src="./components/img/logo-alyssa.png"/>
            </div>
                <nav>
                    <ul>
                        <li><a href="#"><i className="fas fa-user"></i></a></li>
                        <li><a href="#"><i className="fas fa-heart"></i></a></li>
                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </nav>
        </header>
    </>
    )
}

export default NavBar