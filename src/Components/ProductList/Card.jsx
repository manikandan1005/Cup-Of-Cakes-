import './Card.scss'


function Card(props){
    return (

                           <div className="col-lg-3 col-md-4 col-6 div">
                        <div className="card my-3" style={{width:"18rem"}}>
                            <img src={props.image} className="card-img-top" alt="..." />
                              <div className="card-body">
                                 <h5 className="card-title">{props.name}</h5>
                                 {/* <p className="card-text">{props.description}</p> */}
                                 <p className="card-text">₹ {props.price}</p>
                                 
                                 <a href="#" className="btn btn-primary">Buy</a>
                            </div>
                        </div>
                   </div>


    );
}

export default Card;