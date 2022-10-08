import logo from '../assets/img/logo.svg'

const Navbar =()=>{
    return<>
      <div className="box">
            <nav>
                
                  <img src={logo} alt="" />
              
                      
                  <ul className="ul-1">
                    <li className="li-1"><a href="#">Beranda</a></li>
                    <li className="li-1"><a href="#">Koleksi</a></li>
                    <li className="li-1"><a href="#">Syarat dan Ketentuan</a></li>
                    <li className="li-1"><a href="#">Kontak</a></li>
                    <li className="lii-1"><a href="#">Masuk</a></li>
                  </ul>

            </nav>    
               
        

          </div>
    </>
}

export default Navbar