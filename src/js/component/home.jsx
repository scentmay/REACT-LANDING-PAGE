import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Componente PRINCIPAL, ES EL QUE SE EXPORTA
//CERRAR ETIQUETAS DE IMÁGENES!!

const Home = () => {
	return (
		<div>
			<div id="head">
				<div id="navbar">
					<Navbar />
				</div>
			</div>
				<div id="body">
					<div id="Contenedor principal" className="container">
						<div id="body">
							<div id="upperBody">
								<Jumbotron />
							</div>
							<div id="lowerBody">
								<div class="row">
									<div className="col-md-6 col-lg-3"><Card /></div>
									<div className="col-md-6 col-lg-3"><Card /></div>
									<div className="col-md-6 col-lg-3"><Card /></div>
									<div className="col-md-6 col-lg-3"><Card /></div>	
								</div>
							</div>
						</div>
					</div>
				</div>
			
			<div id="footer">
				<div id="footer" className="container-fluid">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;

//COMPONENENTES SUELTOS

const Card = () => {
	return(
		<div className="card">
			<img src="https://picsum.photos/500/325" class="card-img-top" alt="..." /> 
			<div class="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
}

const Jumbotron = () => {
	return(
		<div class="h-100 p-5 bg-light border rounded-3">
          <h1>A warm welcome!</h1>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-primary" type="button">Call to action</button>
        </div>
	);
}

const Footer = () => {
	return(
		<div className="text-center py-3"><span>© 2022 Copyright:   </span>
  		  <a href="/">Sergio Centenera Mayoral</a>
  		</div>
	);
}

const Navbar = () => {
	return(
		<div className="container-fluid">
			<nav className="navbar navbar-expand-md navbar-dark">
				<a href="#" className="navbar-brand">Start Bootstrap</a>
				<button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menuNavegacion">
					<span className="navbar-toggler-icon "></span>
				</button>
				
				<div id="menuNavegacion" className="collapse navbar-collapse justify-content-end">
					<div className="navbar-nav">
						<a class="nav-item nav-link active" href="#">Home</a>
						<a class="nav-item nav-link" href="#">About</a>
						<a class="nav-item nav-link" href="#">Services</a>
						<a class="nav-item nav-link" href="#">Contact</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

