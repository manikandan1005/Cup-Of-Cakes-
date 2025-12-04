import "./Filter.scss";

function Filter(){
    return(
        <div className="Filter">
        <div className="div">
            <h3>Price</h3>
            <div>
                <div className="btn">Below 499</div>
                <div className="btn">499 - 1000</div>
                <div className="btn">1000 - 1500</div>
                <div className="btn">1500 - 2000</div>
            </div>
        </div>
        <div className="div">
            <h3>Weight</h3>
            <div>
                <div className="btn">Below 1kg</div>
                <div className="btn">1kg</div>
                <div className="btn">1.5kg</div>
                <div className="btn">2 kg</div>
            </div>
        </div>
        <div className="div">
            <h3>Flavour </h3>
            <div>
                <div className="btn">Berry cakes</div>
                <div className="btn">Chocolate</div>
                <div className="btn">Mango</div>
                <div className="btn">Vanilla</div>
                <div className="btn">Velvet Cake</div>
            </div>
        </div>
        </div>
    );
}
export default Filter;