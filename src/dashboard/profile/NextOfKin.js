import React from'react';


const NextOfKin = ()=>{
    return(
        <div style={{ height: "100%" }}>
        
        <div className="row col-md-12 d-flex justify-content-center">
        <button type="button" className="butGroup col-md-3 col-sm-3">Profile</button>
        <button type="button" className="butGroup col-md-3 col-sm-3">Next of kin</button>
        <button type="button" className="butGroup col-md-3 col-sm-3">Bank Details</button>
        </div>

        <div className="col-md-12 d-flex justify-content-center mt-1">
        <div className="meProfile">

        </div>
        </div>
        <p className="col-md-12 text-center">Nnamdi Emeka<br/>
        <small className="col-md-12 d-flex justify-content-center">User@gmail.com</small>
        </p>




       <div className="formCard">
        <div className="profForm">
            <div>
            <label for="exampleFormControlInput1" >First Name</label>
            <input type="text" class="form-control"/>
            </div>

            <div>
            <label for="exampleFormControlInput1">Middle Name</label>
            <input type="text" class="form-control"/>
            </div>
        </div>

        <div className="profForm">
            <div>
            <label for="exampleFormControlInput1" >Email</label>
            <input type="email" class="form-control"/>
            </div>

            <div>
            <label for="exampleFormControlInput1">Phone Number</label>
            <input type="text" class="form-control"/>
            </div>
        </div>

        <div className="profForm">
                    <div>
                    <label for="exampleFormControlInput1" >Address</label>
                    <input type="text" class="form-control"/>
                    </div>

                    <div style={{visibility:'hidden'}}>
                    <label for="exampleFormControlInput1">Middle Name</label>
                    <input type="text" class="form-control"/>
                    </div>
        </div>

        <div className="profForm">
                <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: 300}}>
                        <span>
                        <button className="formBut1">Save Changes</button>
                        </span>
                        <span>
                        <button className="formBut2">Edit here</button>
                        </span>   
                    </div> 

                    <div style={{visibility:'hidden'}}>
                    <label for="exampleFormControlInput1">Middle Name</label>
                    <input type="text" class="form-control"/>
                    </div>
                </div>
          
       </div>
</div>
    )
}


export default NextOfKin;