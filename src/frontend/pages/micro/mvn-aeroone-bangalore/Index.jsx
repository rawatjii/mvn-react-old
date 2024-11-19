import React, { Suspense } from "react";
import WebHero from "../../../components/Micro/WebHero";


const AeroOneBangalore = ()=>{
  
  return(
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <WebHero/>
      </Suspense>
    </>
  )
}

export default AeroOneBangalore;