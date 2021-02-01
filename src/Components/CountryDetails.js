import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'

class CountryDetails extends React.Component {

    render(){

        const country = countries.find(country => country.cca3 === this.props.match.params.id)

        return(
            <div className="CountryDetails">


                        <h1>{country.name.common}</h1>
                        <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                            <td >Capital</td>
                            <td>{country.capital}</td>
                            </tr>
                            <tr>
                            <td>Area</td>
                            <td>{country.area} km
                                <sup>2</sup>
                            </td>
                            </tr>
                            <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {country.borders.map((border, index)=>{
                                    const countryBorder = countries.find(country => country.cca3 === border)
                                    
                                    return (
                                        <li key={index}><Link  to={countryBorder.cca3}>{countryBorder.name.common}</Link></li>
                                    )
                                    
                                })}
                                </ul>
                            </td>
                            </tr>
                        </tbody>
                        </table>
            </div>
        )
    }
}

export default CountryDetails;