import NaveBar from './Components/Nav/NaveBar.jsx';
import Body from './Components/Home/Body.jsx';
import About from './Components/About/About.jsx';
import ProductList from './Components/ProductList/ProductList.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Login from './Components/Loginn/Login.jsx'
import Filter from './Components/Filter/Filter.jsx';
import './App.scss';
import SpecialCake from './Components/SpecialCake/SpecialCake.jsx'

function App() {
    return(
        <>
            <NaveBar />
            <section id='Home'>
                <Body />
            </section>
            <section className='About' id='About'>
                <About/>
            </section>
            <section id='Orders'>
                <h1 className=" text-center py-4" >Products</h1>
                <div className="orders">
                    <div className="filter">
                        <Filter/>
                    </div>
                    <ProductList/>
                </div>
            </section>
            <section id="SpecialCake">
                
                <h1 className="text-center py-4">Special Cake</h1>
                <SpecialCake/>
</section>

<section id="Contact">
        <Contact/>
</section>

        </>

// <Login/>
    );
}

export default App;
