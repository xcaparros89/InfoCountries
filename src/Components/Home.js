import React from 'react'

export default function Home() {
        return (
            <div className="col-7">
            <h1>{'Click a country'}</h1>
            <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width:'40%'}}>Capital</td>
                <td>----</td>
            </tr>
            <tr>
              <td>Area</td>
             <td>----</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                    <p>----</p>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}
