import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'

class CountryDetails extends React.Component {

    country = countries.find(country => country.cca3 === this.props.match.params.id)

    render(){
        return(
            <div className="CountryDetails">


                        <h1>{this.country.name.common}</h1>
                        <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                            <td >Capital</td>
                            <td>{this.country.capital}</td>
                            </tr>
                            <tr>
                            <td>Area</td>
                            <td>{this.country.area} km
                                <sup>2</sup>
                            </td>
                            </tr>
                            <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {this.country.borders.map((border, index)=>{
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