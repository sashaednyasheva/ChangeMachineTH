import React from 'react'
import Table from 'react-bootstrap/Table'

function Header() {
    return (
        <div>
            <h3 style={{marginLeft:'40px'}}>Dashboard</h3>
            <Table>
            <thead>
                <tr>
                <th> % </th>
                <th> %</th> 
                <th> %</th>             
                </tr>
            </thead>
            {/* <tbody>
                <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                </tr>
            </tbody> */}
            </Table>



        </div>
    )
}

export default Header
