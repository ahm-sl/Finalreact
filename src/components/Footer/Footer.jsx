import React from 'react'
import myimg from '../../images/img2.8cb85cf795b2f83a1f2d.png'
import myimg2 from '../../images/img3.0c2077a99fda64594029.png'

export default function Footer() {
  return <>
  
  {/* <div className='bg-dark text-center text-bg-primary'>


  </div>
   */}
  <div className="  mx-auto p-5 bg-dark-subtle">
    <h2>Get the freshCartapp</h2>
    <p className="fs-4">we will send a link,open to your phone to download the app</p>
    <div className="row align-items-center justify-content-center">
      <div className="col-md-10">
        <input type="text" placeholder="Email" className="w-100 fs-2"/>
          </div>
          <div className="col-md-2">
            <button className="btn bg-main p-3 rounded-2 text-white fs-5 fw-bold">Share App Link</button>
            </div>
            <div className="row m-0 p-0 justify-content-between align-items-center">
              <div className="col-md-4 mt-2">
                <img src={myimg} alt="payments" className="w-100"/>
                  </div>
                  <div className="col-md-4 mt-2">
                    <img src={myimg2} alt="payments" className="w-100"/>
                      </div></div></div></div>
  
  </>
    
  
}
