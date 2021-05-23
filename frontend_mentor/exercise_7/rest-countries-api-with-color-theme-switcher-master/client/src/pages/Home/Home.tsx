import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CountriesList from '../../components/CountriesList/CountriesList';
import ScrollTopButton from '../../components/ScrollTop/ScrollTop';

const Home: React.FC = () => {

    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [countries, setCountries] = useState([]);
    const [showScrollButton, setShowScrollButton] = useState(false);

    type Option = {
        label: string;
        value: string;
    }

    const options: Array<Option> = [
        { label: 'Africa', value: 'Africa' },
        { label: 'Americas', value: 'Americas' },
        { label: 'Asia', value: 'Asia' },
        { label: 'Europe', value: 'Europe' },
        { label: 'Oceania', value: 'Oceania' }
    ];

    const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCountry(e.target.value);
    }

    const onChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setRegion(e.target.value);
        let selectedCountry = e.target.value;
        const url = `https://restcountries.eu/rest/v2/region/${selectedCountry}`
        axios.get(url)
            .then(data => {
                setCountries(data.data);
            }).catch(err => {
                console.log(err)
            })
    }

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (country.length <= 3) return
        const url = `https://restcountries.eu/rest/v2/name/${country}`
        axios.get(url)
            .then(data => {
                setCountries(data.data);
            }).catch(err => {
                if (err) {
                    console.log(err);
                }
            })
    }

    const getAllCountries = () => {
        const url = `https://restcountries.eu/rest/v2/all`
        axios.get(url)
            .then(data => {
                setCountries(data.data);
            }).catch(err => {
                console.log(err)
            })
    }

    const clearScrollButtonAtTop = (): void => {
        window.addEventListener('scroll', () => {
            setShowScrollButton(true);
            if (window.pageYOffset === 0) { // If we reach the top
                setShowScrollButton(false); // hide the button
            }
        })
    }

    useEffect((): void => {
        getAllCountries();
        clearScrollButtonAtTop();
    }, [])
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between flex-wrap my-4">
                    <div className="pt-2 text-gray-600">
                        <form onSubmit={onSubmit}>
                            <input
                                className="shadow-md bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none search-bar-w dark:bg-gray-700 dark:text-white"
                                type="text"
                                name="search"
                                placeholder="Search for a country..."
                                onChange={onChangeCountry}
                                value={country}
                            />
                        </form>
                    </div>
                    <select
                        className="shadow-md px-4 cursor-pointer focus:outline-none rounded-lg dark:bg-gray-700 dark:text-white" name="region"
                        value={region}
                        onChange={onChangeRegion}
                    >
                        <option disabled>Filter by region</option>
                        {options.map((option: Option, index: number) =>
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        )}
                    </select>
                </div>

                <CountriesList countries={countries} />

                {showScrollButton ? (
                    <ScrollTopButton />
                ) : null}

            </div>
        </div>
    )
}

export default Home