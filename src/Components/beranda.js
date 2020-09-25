import React from 'react'
import Carousel from "react-bootstrap/Carousel"

class Beranda extends React.Component {

    render(){
        return(
            <div>
               <div class="alert alert-danger" role="alert">
  <center><h2>SELAMAT DATANG DI PASAR TRADISIONAL</h2></center></div>

  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      value src="image/slide1.jpg" class="mr-3" width='1250px' height='525px'
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      value src="image/slide2.jpg" class="mr-3" width='1250px' height='525px'
      alt="Second slide"
    />
    <Carousel.Caption>
    <a class="btn btn-danger" href="https://24hoursworship.com/pasar-rindu/" role="button">Pasar Rindu</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      value src="image/slide3.jpg" class="mr-3" width='1250px' height='525px'
      alt="Third slide"
    />
    <Carousel.Caption>
    <a class="btn btn-info" href="https://www.idntimes.com/travel/destination/reza-iqbal/7-pasar-tradisional-terbaik-di-dunia-1/5" role="button">Pasar Dunia</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel><br></br>
<div class="jumbotron bg-dark">
  <h1 class="text-white">Pasar Tradisional</h1>
  <p class="text-white">
  Pasar Tradisional merupakan tempat bertemunya penjual dan pembeli serta ditandai dengan adanya transaksi penjual pembeli secara langsung dan biasanya ada proses tawar-menawar, 
  bangunan biasanya terdiri dari kios-kios atau gerai, los dan dasaran terbuka yang dibuka oleh penjual maupun suatu pengelola pasar. Kebanyakan menjual kebutuhan sehari-hari seperti 
  bahan-bahan makanan berupa ikan buah. sayur-sayuran telur daging kain pakaian barang elektronik jasa dan lain-lain. Selain itu, ada pula yang menjual kue-kue dan barang-barang lainnya. 
  Pasar seperti ini masih banyak ditemukan di Indonesia Pada umumnya terletak dekat kawasan perumahan agar memudahkan pembeli untuk mencapai pasar. Beberapa pasar tradisional yang "legendaris" 
  antara lain adalah Pasar Beringharjo di Yogyakarta, Pasar Klewer di Solo, Pasar Johar di Semarang. Pasar tradisional di seluruh Indonesia
   </p>
  <p>
  <a class="btn btn-primary btn-lg" href="https://id.wikipedia.org/wiki/Pasar_tradisional" role="button">Learn more</a>
  </p>
</div>
<div class="card bg-dark text-white">
  <img  value src="image/bg.jpg" class="mr-3" width='1225px' height='400px'/>
  <div class="card-img-overlay">
    <center><h1 class="card-title text-light">Sejarah Pasar Tradisional</h1>
    <h6><p class="card-text">Setelah mengerti apa yang dimaksud dengan pengertian pasar, 
    tentunya akan sangat menarik jika Anda juga memperkaya informasi terkait dengan sejarah pasar. 
    Sejak zaman dahulu, sebenarnya manusia sudah berkaitan erat dengan pusat kegiatan komersil dengan sebutan pasar. 
    Awalnya, pasar di zaman prasejarah menggunakan sistem barter yakni menukarkan satu barang dengan barang lainnya. 
    Selama perkembangannya, sistem barter ini mengalami banyak sekali kendala. Salah satunya adalah nilai barang yang 
    tidak sesuai dengan barang yang ditukarkan. Masalah lainnya adalah waktu dan jarak tempuh yang sangat mempersulit masyarakat dalam menukarkan dan memindahkan barang-barangnya.</p>

<p>Tempat yang dipakai untuk menukarkan barang tersebutlah yang kemudian dikenal dengan istilah pasar. 
Saat uang mulai muncul, manusia menukarkan barangnya dengan sistem jual beli. Jika dulu masyarakat 
pergi ke pasar pulang dan pergi sesuai dengan kebutuhan, kini sudah banyak individu atau sekelompok 
individu yang sengaja menggeluti bidang perdagangan. Dimana mereka sengaja membuat tempat permanen untuk 
menjajakan barang dagangannya.</p></h6></center>
 
  </div>
</div><br></br>
<center><div class="card-group">
  <div class="card">
  <img  value src="image/fungsi.jpg" class="mr-3" width='650px' height='300px'/>
    <div class="card-body bg-danger">
      <h3 class="card-title text-white">Fungsi Pasar Tradisional</h3>
      <p class="card-text text-white">Pasar sebagai sumber retribusi daerah</p>
      <p class="card-text text-white">Pasar sebagai tempat pertukaran barang</p>
      <p class="card-text text-white">Pasar sebagai pusat pengembangan ekonomi rakyat</p>
      <p class="card-text text-white">Pasar sebagai pusat perputaran uang daerah pasar sebagai lapangan pekerjaan
</p>
    </div>
  </div>
  <div class="card">
  <img  value src="image/ciri.jpg" class="mr-3" width='610px' height='300px'/>
    <div class="card-body bg-primary">
      <h3 class="card-title text-white">Ciri Pasar Tradisional</h3>
      <p class="card-text text-white">Adanya sistem tawar-menawar antara penjual dan pembeli.</p>
      <p class="card-text text-white">Pasar tradisional dimiliki, dibangun, dan dikelola oleh pemerintah daerah.</p>
      <p class="card-text text-white">Tempat usaha beragam dan menyatu dalam lokasi yang sama.</p>
      <p class="card-text text-white">Sebagian besar barang dan jasa ditawarkan adalah produksi lokal.
</p>
    </div>
  </div>
</div></center>

  </div>
  
        )
    }
}
export default Beranda;

