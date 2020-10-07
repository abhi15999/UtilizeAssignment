import React from 'react'
import GoogleLogin from 'react-google-login'

 
function FrontPage() {
    const responseGoogle = response =>{
        console.log(response);
    }
    
    return (
        <div className="container">
           <div className="text-center px-5 py-5">
                <h1>Utilize Assignment</h1>
           </div>
               
           <div className="text-center">
           <GoogleLogin className="rounded"
                clientId="448128940514-s81lunfmgmshv561dmp99q5dt1pcu550.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
           </div>
        </div>
    )
}

export default FrontPage
