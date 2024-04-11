import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import { programs } from "./../data";

//create your first component
const Home = () => {
	return (
		<div className="home" >
			<Navbar/>
			<div className="container" >
				<Jumbotron/>
			<div className="row d-flex justify-content-center text-center mt-4 "  >
				<Card title={programs[0].title} description={programs[0].description} image={programs[0].image}/>
			    <Card title={programs[1].title} description={programs[1].description} image={programs[1].image}/>
			    <Card title={programs[2].title} description={programs[2].description} image={programs[2].image}/>
			    <Card title={programs[3].title} description={programs[3].description} image={programs[3].image}/>
				
			</div>
			
			</div>
			<Footer/>
			
		</div>
	);
};

export default Home;
