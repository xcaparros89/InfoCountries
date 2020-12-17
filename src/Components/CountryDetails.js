import React from 'react'
import { Link } from 'react-router-dom';

export const CountryDetails = (props) => {
        let getCountry = cca3 => props.countries.find(obj => obj.cca3 === cca3);
        const {params} = props.match;
        const country = getCountry(params.cca3)
        return (
                <div className="col-7">
                <h1>{country.name.common}</h1>
                <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                    <td>{country.capital[0]}</td>
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
                        let borderCountry = getCountry(border)
                        return (<li key={index}><Link to={`/countries/${border}`}>{borderCountry.name.common}</Link></li>)
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
        )
}

export default CountryDetails
