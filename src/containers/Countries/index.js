import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from './../../graphql/getCountries';

import Country from './../../components/Country';

// import { Container } from './styles';

function Countries() {
    const { data, loading } = useQuery(GET_COUNTRIES);

    return (
        <div>
            { loading && <p>Loading...</p> }

            { data && 
                <div>
                    { data.countries.map(country => <Country key={ country.code } country={ country } />) }
                </div>    
            } 
        </div>
    );
}

export default Countries;