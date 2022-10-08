import React from 'react';

import '../Assets/css/components/Loading.css';

export const Loading = () => {
    return (
        <div class='loaderComponentContainer loaderThemeDark'>
            <div class='lds-dual-ring-dark'></div>
        </div>
    )
}