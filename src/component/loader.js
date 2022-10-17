import React from "react"
import { Audio } from 'react-loader-spinner';
import '../style/LoaderStyle.css'


const Loader = ()=>{

    return(
      <div className="loader">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="orange"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        </div>
    )

}

export default Loader;