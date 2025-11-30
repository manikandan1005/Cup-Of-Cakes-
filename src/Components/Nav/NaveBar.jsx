import "./NaveBar.scss"
import Btn from '../Btn.jsx'
function NaveBar(){
    let title="";
    return(
       <>
    <div id="nav">
               <div className="text">
        <p>Upto Rs. 200 OFF on the First Order. T&C apply.</p>
       </div>
        <nav>
            <h1><span>C</span>up <span>O</span>f <span>C</span>akes</h1>
            <div>
                <a href="#Home">Home</a>
                <a href="#About">About Us</a>
                <a href="#Orders">Orders</a>
                <a href="#SpecialCake">Spical cake</a>
                <a href="#Contact">Contact</a>
                <Btn></Btn>
            </div>
        </nav>
    </div>
       
       </>
    );
}
export default NaveBar;