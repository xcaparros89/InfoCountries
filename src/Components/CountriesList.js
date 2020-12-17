import React from 'react'
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return(
              <div className="col-5" style={{maxHeight:'90vh', overflowY:'scroll'}}>
              <div className="list-group">
              <h2>Countries:</h2>
              {props.countries && props.countries.map((country, index) => {
                return (
                  <div key={index} className="list-group-item list-group-item-action">
                    <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.name.common} />
                    <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
                  </div>
                );
              })}
            </div>
            </div>
          );
}

export default CountriesList
