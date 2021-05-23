import React from 'react'
import Country from '../Country/Country';

import { CountryProps } from '../Country/Country';

interface CountriesProps {
    countries: Array<CountryProps>
}

const CountriesList: React.FC<CountriesProps> = ({ countries }) => {
    return (
        <div className="countries-container grid md:grid-cols-4 sm:grid-cols-2 gap-10">
            {countries.map((country: any, index: number) => {
                return (
                    <Country
                        country={country}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default CountriesList;
