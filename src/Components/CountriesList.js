import React from 'react'

import {Link} from 'react-router-dom'

class CountriesList extends React.Component {

    // state={
    //     countriesList: countries
    // }

    render(){
        return (
            <div className="CountriesList">


                        <div className="list-group">
                            {this.props.countriesList.map((country, index)=>(
                                <Link to={country.cca3} key={index} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
                            ))}
                        </div>

            </div>
        )
    }
}

export default CountriesList;