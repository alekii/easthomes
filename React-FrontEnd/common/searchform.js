import React from 'react'
import '../css/styles.css';
import PropertySearchForm from '../components/propertysearchform';

function MobileSearch({searchform}) { 
  return (
    <div className={searchform?"propertysearchform searchformopen":"propertysearchform"}>
        <PropertySearchForm>
            
        </PropertySearchForm>
    </div>
  )
}

export default MobileSearch