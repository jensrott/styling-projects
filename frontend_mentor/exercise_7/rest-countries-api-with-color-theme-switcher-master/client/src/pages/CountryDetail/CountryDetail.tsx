import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    code: string;
}

interface CountryDetailProps {
    flag: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: Array<String>
    currencies: Array<Currency>;
    languages: Array<Language>
    borders: Array<String>
}

type Currency = {
    code: string;
    name: string;
    symbol: string;
}

type Language = {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

const CountryDetail: React.FC<RouteComponentProps<MatchParams>> = (props) => {

    const [country, setCountry] = useState<CountryDetailProps>({} as CountryDetailProps);

    const { code } = props.match.params;

    const getCountryDetails = () => {
        const url = `https://restcountries.eu/rest/v2/alpha/${code}`
        axios.get(url)
            .then(data => {
                console.log(data.data);
                setCountry(data.data);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCountryDetails();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container mx-auto px-4">
            <div className="flex my-12">
                <Link className="shadow-md rounded-lg px-10 py-1 dark:bg-gray-700 dark:text-white" to="/">
                    <i className="fas fa-arrow-left mr-2"></i>Back
                </Link>
            </div>
            <div className="flex justify-between items-center dark:text-white">
                <img className="w-6/12" src={country.flag} alt="flag" />
                <h1 className="text-2xl font-bold mb-8">{country.name}</h1>
                <div className="flex justify-evenly">
                    <div className="font-semibold mx-5">
                        <p>Native Name: <span className="font-thin">{country.nativeName}</span></p>
                        <p>Population: <span className="font-thin">{country.population ? country.population.toLocaleString() : null}</span></p>
                        <p>Region: <span className="font-thin">{country.region}</span></p>
                        <p>Sub Region: <span className="font-thin">{country.subregion}</span></p>
                        <p>Capital: <span className="font-thin">{country.capital}</span></p>
                    </div>
                    <div className="font-semibold">
                        {country.topLevelDomain ? <p>Top Level Domain: <span className="font-thin"> {country.topLevelDomain[0]}</span></p> : null}
                        {country.currencies ? <p>Currencies: <span className="font-thin">{country.currencies[0].name}</span></p> : null}
                        {country.languages ? country.languages.map((language) => (
                            <p>Currencies: <span className="font-thin">{language.name}</span></p>
                        )) : null}
                    </div>
                </div>


            </div>
            <div className="flex justify-end">
                <p className="dark:text-white font-bold">Border Countries: </p>
                {country.borders ? country.borders.map((border) => (
                    <p className="shadow-md rounded px-10 py-1 mx-2 dark:bg-gray-700 dark:text-white">{border}</p>
                )) : <p>Not found</p>}
            </div>
        </div>
    )
}

export default CountryDetail;
