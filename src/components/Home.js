
const Home = () =>{
    return (
        <>
       <nav class="navbar navbar-expand-lg bg-body-teritary bg-danger ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Travel  Life</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li> class="dropdown-divider"</li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        label/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 
 <br/>
 <h2>ABOUT US :-</h2>
 <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?size=626&ext=jpg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter_335224-427.jpg?size=626&ext=jpg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?size=626&ext=jpg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/hawa-mahal-palace-winds-jaipur-india_57665-10458.jpg?size=626&ext=jpg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/medium-shot-women-posing-with-lighthouse_23-2150608295.jpg?size=626&ext=jpg&ga=GA1.2.145335311.1689247691&semt=sph" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/view-travel-items-assortment-still-life_23-2149617645.jpg?size=626&ext=jpg&ga=GA1.2.145335311.1689247691&semt=sph" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}
export default Home;