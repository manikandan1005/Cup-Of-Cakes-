import "./NaveBar.scss"
import Btn from '../Btn.jsx'
function NaveBar(){
    let title="";
    return(
       <>
       <div className="text">
        <p>Upto Rs. 200 OFF on the First Order. T&C apply.</p>
       </div>
        <nav>
            <h1><span>C</span>up <span>O</span>f <span>C</span>akes</h1>
            <div>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Cakes</a>
                <a href="">Spical cake</a>
                <a href="">Contact</a>
                <Btn></Btn>
            </div>
        </nav>
       
       </>
    );
}
export default NaveBar;