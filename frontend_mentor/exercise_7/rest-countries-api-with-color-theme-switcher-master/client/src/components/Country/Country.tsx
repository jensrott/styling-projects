import React from 'react';
import { Link } from 'react-router-dom';

export interface CountryProps {
    country: {
        alpha3Code: string;
        flag: string;
        name: string;
        population: number;
        region: string;
        capital: string;
    }
}

const Country: React.FC<CountryProps> = ({ country }) => {
    return (
        <Link to={`/country/${country.alpha3Code}`} className="country bg-white border-gray-50 shadow-md dark:bg-gray-700 dark:text-white">
            <img className="w-full h-48" src={country.flag} alt="flag" />
            <div className="p-4">
                <h1 className="font-bold text-lg mb-4">{country.name}</h1>
                <div className="mb-6">
                    <p><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
                    <p><span className="font-bold">Region:</span> {country.region}</p>
                    <p><span className="font-bold">Capital:</span> {country.capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default Country;
