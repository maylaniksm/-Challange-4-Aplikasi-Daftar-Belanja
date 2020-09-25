import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
    <div>
    <nav class="navbar navbar-dark bg-dark">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <img value src="image/fish-market.png" class="mr-3" width='80px' height='80px'/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item" class="btn btn-outline-primary">
    <a class="nav-link active " >
    <Link to="/">Beranda</Link></a>
    </li>
    <li class="nav-item" class="btn btn-outline-success">
    <a class="nav-link active " >
    <Link to="/pasar">Pasar</Link></a>
    </li>
      <li class="nav-item dropdown nav-link active">
        <a class="nav-link dropdown-toggle btn btn-outline-danger" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Daftar Belanjaan
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item"><Link to="/sayuran">Sayur-Sayuran</Link></a>
        <a class="dropdown-item"><Link to="/buah">Buah-Buahan</Link></a>
        <a class="dropdown-item"><Link to="/barang">Barang</Link></a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</nav>

    <div class="card-body">
    <p><Utama /></p>
    </div>
    <div>
    <div class="card text-center bg-dark">
</div>
            <footer class="page-footer teal bg-dark">
            <div class="card text-center bg-primary">
              
            <div class="card text-center">
  <div class="card-header bg-dark text-white">
    <h3>CONTACT US</h3>
  </div>
  <div class="card-body">
    <h3 class="card-title">Pasar Tradisional, Pilar Kebudayaan Khas Negeri Nusantara</h3>
    <p class="card-text">Pasar bebas segala aspirasi, sekaligus medan ilusi penobatan diri. Ada saatnya kita merindukan sebuah pasar tradisional. Dan bukan pasar malam.

Seolah kita sudah begitu modern dengan ruko, mall, supermarket, bahkan hipermarket sehingga perlu sebuah nostalgia; pasar. 
Seolah kita telah asing dengan tradisi blusukan belanja dan beralih ke tradisi pesan lewat telepon atau klik mouse: 
tunggu beberapa saat – datang – bayar.</p>
<img value src="image/facebook.png" class="mr-3" width='45px' height='45px'/>
<img value src="image/instagram.png" class="mr-3" width='45px' height='45px'/>
<img value src="image/gmail.png" class="mr-3" width='45px' height='45px'/>
<img value src="image/youtube.png" class="mr-3" width='45px' height='45px'/>
<img value src="image/twitter.png" class="mr-3" width='45px' height='45px'/>
  </div>
  <div class="card-footer text-muted bg-dark">
  <div class="footer-copyright">
   
                    <center><div class="container text-white">
                    ©2020 Copyright |
                    <a class="grey-text text-lighten-4 right text-info" href="https://instagram.com/maylaniksm?igshid=10ye8v8ikjeax"> @maylaniksm</a>
                    </div></center>
                </div>
  </div>
</div>
  
</div>
            </footer>
        </div>
     </div>
    
    );
  }
}

export default App;
