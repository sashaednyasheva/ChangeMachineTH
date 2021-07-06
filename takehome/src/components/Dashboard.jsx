import React, { Component } from 'react';
import ChangeMachineService from '../services/ChangeMachineService';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


export default class Dashboard extends Component {

    constructor (){
        super();
    }

    render(){ 
        return (
        <div>
            <h3 className="text-center">Table</h3>
            <div className = "row">
            <Table class="table table-dark" className="text-center"> 
            <thead>
                <tr>
                <th> TIME </th>
                <th> BUTTON CLICKED</th>                    
                </tr>
            </thead>
            <tbody>
                <tr>
                <td> 05:20:35 </td>
                <td> MACHINE</td>
                </tr>
                <tr>
                <td> 02:15:40 </td>
                <td> CHANGE</td>
                </tr>
            </tbody>
            </Table>
            </div>

            <Button variant="primary" size="sm" style={{marginLeft: "8px"}} > MACHINE </Button>
            <Button variant="primary" size="sm" style={{marginLeft: "8px"}} > CHANGE </Button>
            <Button variant="primary" size="sm" style={{marginLeft: "8px"}} > CHANGEMACHINE </Button>

        </div>
        )
    }
}


