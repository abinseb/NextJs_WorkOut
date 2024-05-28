import React from 'react';
import { useParams } from 'next/navigation';
  const Dynamic = () => {
    const params = useParams();
    const { id } = params;
  
    return (
      <div>
         <h1>Post ID: {id}</h1>
       Dynamic
       
      </div>
    )
  }
  
  export default Dynamic