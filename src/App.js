import React from 'react';
import './App.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Row,
  Col,
  Image,
  Card,
  Container
} from 'react-bootstrap';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';

function Header(){
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img 
          alt="codepolitan-logo"
          src="https://www.codepolitan.com/img/codepolitan.3c0d1796.png"
          width="240"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <button type="button" className="font-weight-bold btn btn-for-header" style={{
            backgroundColor: '#6DC7C5', 
            color: 'white', 
            borderRadius: '.65rem'
            }} href="#membership">PREMIUM MEMBERSHIP</button>
          <Nav.Link href="#onlinecourse">ONLINE COURSE</Nav.Link>
          <Nav.Link href="#articles">ARTICLES</Nav.Link>
          <Nav.Link href="#forum">FORUM</Nav.Link>
          <NavDropdown title="PROGRAM" id="basic-nav-dropdown">
            <NavDropdown.Item href="#developerschool">Developer School</NavDropdown.Item>
            <NavDropdown.Item href="#geekmentor">GeekMentor</NavDropdown.Item>
            <NavDropdown.Item href="#kampuscoding">Kampus Coding</NavDropdown.Item>
        </NavDropdown>
          <button type="button" className="btn btn-light border border-dark font-weight-bold" style={{width: '10rem', borderRadius: '6px'}} href="#memberarea">MEMBER AREA</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

function Intro(){
  return(
    <Card className="bg-light text-dark">
      <Card.Img src="https://www.codepolitan.com/img/jumbotron.a019acb2.png" alt="info-banner" />
      <Card.ImgOverlay>
        <h3 className="font-weight-bold" style={{marginTop: '5rem'}}>Belajar Coding dengan <br/> Standar Kompetensi Kerja </h3>
        <p className="text-muted" style={{marginTop: '2rem'}}>Kembangkan karirmu sebagai developer profesional <br /> dengan keahlian coding yang dibutuhkan di dunia industri </p>
      </Card.ImgOverlay>
  </Card>
  );
}

function Info() {
  return(
    <div className="bg-for-info pt-5 pb-5 white-text" style={{
      color: 'white', 
      backgroundColor: '#07A6A3'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-3 col-6">
            <div className='text-center'>
              <h4 className="font-weight-bold">128.114</h4>
              <h5 className="font-weight-bold">Member Aktif</h5>
            </div>
          </div>
          <div className="col-md-3 mb-3 col-6">
            <div className='text-center'>
              <h4 className="font-weight-bold">51</h4>
              <h5 className="font-weight-bold">Kelas Online</h5>
            </div>
          </div>
          <div className="col-md-3 mb-3 col-6">
            <div className='text-center'>
              <h4 className="font-weight-bold">1.339</h4>
              <h5 className="font-weight-bold">Materi Belajar</h5>
            </div>
          </div>
          <div className="col-md-3 mb-3 col-6">
            <div className='text-center'>
              <h4 className="font-weight-bold">135</h4>
              <h5 className="font-weight-bold">Jam pelajaran</h5>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

function NewClasses(){
  const KelasBaru = (props) => {
    return(
      <div className="box-kelasbaru text-lg-left text-xl-left" style={{marginTop: '3rem'}}>
        <Card style={{ width: '15rem', height: '10rem', display: 'flex'}}>
          <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <p className="text-muted mb-0" style={{textAlign: 'left', width: '5rem'}}>{props.modul}</p>
              <p className="text-muted mb-0" style={{textAlign: 'right', marginLeft: '8rem'}}>{props.siswa}</p>
              <Navbar.Brand style={{color: '#07A6A1'}} href="#harga1">{props.harga1}</Navbar.Brand>
            </Card.Body>
        </Card>
      </div>
    );
  }
  
  return(
  <div className="kelas-baru">
      <h3 className="font-weight-bold" style={{textAlign: 'center',  marginTop: '3rem'}}>KELAS ONLINE TERBARU</h3>
    <Row>
      <Col>
        <KelasBaru 
          image = "https://apps.codepolitan.com/sites/learn/uploads/original/10/Setup_Server_dengan_Alibaba_Cloud_Elastic_Compute_Service_300.jpg"
          title = "Setting Up Server dengan Alibaba Cloud Elastic Compute Service"
          modul = "13 Modul"
          siswa = "18 Siswa"
          harga1 = "Rp 250.000"
        />
      </Col>
      <Col>
        <KelasBaru 
          image = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Membuat_Game_Tanpa_Coding_dengan_Construct_3.jpg"
          title = "Membuat Game Tanpa Coding dengan Construct 3"
          modul = "17 Modul"
          siswa = "43 Siswa"
          harga1 = "Rp 250.000"
        />
      </Col>
      <Col>
        <KelasBaru 
          image = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Penggunaan_Database_MySQL_pada_Pemrograman_PHP2.jpg"
          title = "Pengenalan Database Menggunakan MySQL"
          modul = "22 Modul"
          siswa = "126 Siswa"
          harga1 = "Rp 200.000"
        />
      </Col>
      <Col>
        <KelasBaru 
          image = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Cara_kerja_Development_Team.jpg"
          title = "Cara kerja Development Team"
          modul = "16 Modul"
          siswa = "156 Siswa"
          harga1 = "Rp 200.000"
        />
      </Col>
    </Row>
  </div>
  );
}

function PopularClasess(){
  const KelasPopular = (props) => {
    return(
      <div className="box-kelaspopular text-lg-left text-xl-left" style={{marginTop: '3rem'}}>
        <Card style={{ width: '15rem', height: '30rem', display: 'flex'}}>
          <Card.Img variant="top" src={props.image1} />
            <Card.Body>
              <Card.Title>{props.title1}</Card.Title>
              <p className="text-muted mb-0" style={{textAlign: 'left', width: '5rem'}}>{props.modul1}</p>
              <p className="text-muted mb-0" style={{
                textAlign: 'right', 
                width: '6rem', 
                marginLeft: '100px', 
                marginBottom: '20px',
                color: '#07a6a1'}}>{props.siswa1}</p>
              <Navbar.Brand style={{color: '#07A6A1', marginBottom: '3rem'}} href="#harga2">{props.harga2}</Navbar.Brand>
            </Card.Body>
        </Card>
      </div>
    );
  }

  return(
    <div className="kelas-popular">
      <h3 className="font-weight-bold" style={{textAlign: 'center',  marginTop: '22rem'}}>KELAS ONLINE POPULER</h3>
    <Row>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Study_Kasus_Web_Geolocation_Dengan_Laravel_Dan_Here_Maps2.jpg"
          title1 = "Studi Kasus Web Geolocation dengan Laravel dan HERE Maps"
          modul1 = "18 Modul"
          siswa1 = "1,966 Siswa"
          harga2 = "Rp 249.000"
        />
      </Col>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Membangun_Website_Toko_Online_Berbasis_CodeIgniter2.jpg"
          title1 = "Membangun Website Toko Online Berbasis CodeIgniter"
          modul1 = "87 Modul"
          siswa1 = "1,616 Siswa"
          harga2 = "Rp 350.000"
        />
      </Col>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Membuat_Sistem_Informasi_Perpustakaan_Menggunakan_Laravel_62.jpg"
          title1 = "Membuat Sistem Informasi Perpustakaan Menggunakan Laravel 6"
          modul1 = "55 Modul"
          siswa1 = "1,221 Siswa"
          harga2 = "Rp 375.000"
        />
      </Col>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Belajar_Cepat_Vuejs1.jpg"
          title1 = "Belajar Cepat Vue.js"
          modul1 = "44 Modul"
          siswa1 = "931 Siswa"
          harga2 = "Rp 350.000"
        />
      </Col>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Belajar_Cepat_Membuat_Web_App_Berbasis_React2.jpg"
          title1 = "Belajar Cepat Membuat Web App Berbasis React"
          modul1 = "43 Modul"
          siswa1 = "1,252 Siswa"
          harga2 = "Rp 380.000"
        />
      </Col>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Menguasai_Framework_CodeIgniter2.jpg"
          title1 = "Menguasai Framework CodeIgniter"
          modul1 = "24 Modul"
          siswa1 = "1,970 Siswa"
          harga2 = "Rp 275.000"
        />
      </Col>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Membuat_Toko_Online_dengan_Laravel_LiveWire_dan_Payment_Gateway3.jpg"
          title1 = "Membuat Toko Online dengan Laravel LiveWire dan Payment Gateway"
          modul1 = "25 Modul"
          siswa1 = "440 Siswa"
          harga2 = "Rp 330.000"
        />
      </Col>
      <Col>
        <KelasPopular
          image1 = "https://cdn-cdpl.sgp1.digitaloceanspaces.com/original/10/Dasar-dasar_Framework_Laravel_62.jpg"
          title1 = "Dasar-dasar Framework Laravel 6"
          modul1 = "45 Modul"
          siswa1 = "1,806 Siswa"
          harga2 = "Rp 350.000"
        />
      </Col>
    </Row>
    <div className="text-center">
      <Button variant="light" size="md" href="#button" style={{
        marginTop: '3rem', 
        marginBottom: '3rem', 
        borderColor: 'grey'}}>LIHAT KELAS LAINNYA</Button>
    </div>
  </div>
  );
}

function Benefit(){
 const Keuntungan = (props) => {
   return(
      <div className="keuntungan-belajar col-12">
        <img src={props.image2} style={{textAlign: 'right', maxWidth: '100%', height: 'auto'}} />
        <h2 style={{fontWeight: 'bold', justifyContent: 'left'}}>{props.point1}</h2>
        <p className="text-muted" style={{justifyContent: 'right'}}>{props.point2}</p>
      </div>
   );
 }

 return(
    <Row style={{marginBottom: '3rem'}}>
      <Col>
        <Keuntungan 
          image2 = "https://www.codepolitan.com/img/Lebih%20Cepat.b1d222a4.png?__WB_REVISION__=b1d222a4e508108fd4a80d2fe517c60c"
          point1 = "Belajar Coding 100% Lebih Cepat dan Terarah"
          point2 = "Bagaimana jika kamu bisa menghemat waktu belajarmu dan biarkan kami menyiapkan alur belajar terbaik untukmu? 100% lebih terarah."
        />
      </Col>
      <Col>
        <Keuntungan 
          image2 = "https://www.codepolitan.com/img/Tentukan%20Waktu%20Sendiri.4a224391.png?__WB_REVISION__=4a224391d107a0174f8dfcc6d9013b22"
          point1 = "Kamu yang Tentukan Sendiri Waktu Belajarmu"
          point2 = "Tak perlu khawatir dengan aktivitasmu saat ini. Bekerja, kuliah ataupun sekolah? Kamu bisa ikut belajar di sini."
        />
      </Col>
      <Col>
        <Keuntungan 
          image2 = "https://www.codepolitan.com/img/Study%20Kasus.66698fed.png?__WB_REVISION__=66698feda350366777e8fe9532a34ff3"
          point1 = "Belajar Langsung dari Project Studi Kasus"
          point2 = "Tidak hanya membahas teori, di sini kamu juga akan belajar bagaimana caranya menggunakan teknologi yang sedang kamu pelajari dalam sebuah project nyata."
        />
      </Col>
      <Col>
        <Keuntungan 
          image2 = "https://www.codepolitan.com/img/Seasyik_Game.58c85828.png?__WB_REVISION__=58c8582814de2fb4410905e691d9df28"
          point1 = "Belajar Coding Asyik Seperti Bermain Game"
          point2 = "Belajar coding juga bisa menyenangkan seperti bermain game online. Selesaikan misi, kumpulkan point dan tingkatkan rank belajarmu. Kapan lagi push rank bisa sambil belajar dan meningkatkan skill coding."
        />
      </Col>
    </Row>
 );
}

function Footer() {
  return(
    <div className="space--sm border-top pb-4" >
      <Row>
        <Col>
          <Row>
            &copy; 2018 CodePolitan. All rights reserved
          </Row>
        </Col>
        <Row  style={{width: '20%'}}>
        <Col>
          <FaFacebookF style={{width: '20%'}} />
          <FaInstagram  style={{width: '20%'}} />
          <FaTwitter style={{width: '20%'}} />
          <FaLinkedinIn style={{width: '20%'}} />
          <FaYoutube style={{width: '20%'}} />
        </Col>
        </Row>
      </Row>
    </div>
  );
}

function App(){
  return(
    <Container>
      <Header />
      <Intro />
      <Info />
      <NewClasses />
      <PopularClasess />
      <Benefit />
      <Footer />
    </Container>
  );
}

export default App;