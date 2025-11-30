import NaveBar from './Components/Nav/NaveBar.jsx';
import Body from './Components/Home/Body.jsx';
import About from './Components/About/About.jsx';
import ProductList from './Components/ProductList/ProductList.jsx'
import './App.scss'

function App() {
    return(
        <>
            <NaveBar />
            <section>
                <Body />
            </section>
            <section className='About'>
                <About/>
            </section>
            <section>
                <ProductList/>
            </section>
        </>
    );
}

export default App;
