import React from 'react';

function Resume({idOrden}) {
  return <div className='loaderHearts'>
    <div className='success'>
      <p>Tu compra fue realizada! 
       El id es: {idOrden}
      </p>
    </div>
  </div>;
}

export default Resume;
