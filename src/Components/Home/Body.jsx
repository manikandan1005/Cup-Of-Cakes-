import './Body.scss'
import Btn from '../Btn.jsx'

function Body() {
  return (
    <div className="textContainer" id="Home">
      <div className="bgLayer"></div>
      <div>
        <h1>Cake Delivery in Chennai</h1>
        <p>
          Any celebration, whether a cozy gathering or an extravagant party, is
          incomplete without cake! 
        </p>
        <p>
          We offer a wide range of handcrafted speciality cakes that are a treat to the eyes and also the taste buds.
        </p>
        <div className="login mb-3">
          <input type="email" className="form-control" placeholder="name@example.com" />
          <Btn className="btn" />
        </div>
      </div>
    </div>
  )
}

export default Body
