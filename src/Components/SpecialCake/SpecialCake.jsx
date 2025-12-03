import "./SpecialCake.scss";
function SpecialCake(){
    return(
        <div className="container">
            <div className="row ">

                <div class="mb-3 col-lg-6">
                    <label for="Name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="Name" placeholder=""/>
                </div>
                <div class="mb-3 col-lg-6">
                    <label for="Phone Numbe" class="form-label">Phone Numbe</label>
                    <input type="text" class="form-control" id="Phone Numbe" placeholder=""/>
                </div>
                <div class="mb-3 col-lg-6">
                    <label for="Occasion" class="form-label">Occasion</label>
                    <input type="text" class="form-control" id="Occasion" placeholder="Occasion"/>
                </div>
                <div class="mb-3 col-lg-6">
                    <label for="Event date" class="form-label">Event date</label>
                    <input type="date" class="form-control" id="Event date" placeholder="Event date"/>
                </div>



                <div className="button col-lg-12 md-12 ">
                    <button className="btn">Submit</button>
                </div>

            </div>
        </div>
    );
}
export default SpecialCake;