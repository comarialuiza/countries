import React from 'react';

// import { Container } from './styles';

function Country({ country }) {
    return (
        <div>
            <p>{ country.name }</p>
            <p>{ country.native }</p>

            <span>{ country.emoji }</span>
        </div>
    );
}

export default Country;