import React, { useContext } from 'react'

import { AuthContext } from '../../contex/AuthContext'
import { CirclesWithBar } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'

export default function Profile() {


    const{usarDate} = useContext(AuthContext)

    if(!usarDate){
        return <>
        <div className="d-flex vh-100 bg-primary bg-opacity-50 justify-content-center align-items-center">
              <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                
                />
            </div>
        
        
        
        </>

        
    }
  return<>
  
  <Helmet>
      <title> profile</title>
      </Helmet>
  
  <h2> Haloo {usarDate.name}</h2>
  
  
  
  
  
  </>
}
