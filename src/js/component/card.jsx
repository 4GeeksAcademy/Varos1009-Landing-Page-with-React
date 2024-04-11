import React from "react";



const Card = (props) => {
return (
    <div className="card   col-md-3 p-0 " >
  <img src={props.image} className="card-img-top h-50 w-100 "  />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>

  </div>
  <a href="#" className="btn btn-primary">Find Out More!</a>
</div>
)
};

export default Card;