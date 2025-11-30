import NaveBar from './Components/Nav/NaveBar.jsx';
import Body from './Components/Home/Body.jsx';
import About from './Components/About/About.jsx';
import ProductList from './Components/ProductList/ProductList.jsx'
import './App.scss'

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
                <h1 className="text-center py-4">Products</h1>
                <ProductList/>
            </section>
            <section id="SpecialCake">
    {/* Your special cake component */}
</section>

<section id="Contact">
    {/* Your contact component */}
</section>

        </>
    );
}

export default App;
