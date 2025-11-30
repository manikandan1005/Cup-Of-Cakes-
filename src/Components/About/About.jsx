import './About.scss';
// import './index.scss'

function About (){
    let text='Our journey started with a passion for creating happiness through baking.What began as a small kitchen dream has now grown into a trusted cake shop loved by many.We bake with heart, using recipes perfected over the years, blending tradition with a modern touch.Every cake we make carries our promise of freshness, taste, and love.We believe that a cake can make any moment magical, and we feel honored to be a part of your special days.From first birthdays to wedding celebrations, we craft cakes that create lasting me. At our cake shop, we believe great cakes create great moments. That’s why we bake everything fresh daily, using premium ingredients and modern techniques. We offer a wide range of flavors, designer collections, and custom-made cakes to match your celebration perfectly. Our mission is to make ordering cakes easy, affordable, and enjoyable with smooth online ordering and doorstep delivery. Each cake is crafted with attention to detail, ensuring it tastes as good as it looks. At our cake shop, we believe great cakes create great moments. That’s why we bake everything fresh daily, using premium ingredients and modern techniques.We offer a wide range of flavors, designer collections, and custom-made cakes to match your celebration perfectly.vOur mission is to make ordering cakes easy, affordable, and enjoyable with smooth online ordering and doorstep delivery.Each cake is crafted with attention to detail, ensuring it tastes as good as it looks. Your celebrations deserve the best — and we are here to deliver it.   web name bun butter';
    return(
        <>
            <div className='container-fluid px-3' id='About'>
                <div className="row">
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img className='img-fluid' src="./src/assets/logo.png" alt="" />
                    </div>
                    
                    <div  className='col-lg-6 col-md-6 col-12'>
                        <h1 className='m-3'>
                            ABOUT US
                        </h1>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;