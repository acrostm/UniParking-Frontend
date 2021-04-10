// ESLint Validated

import React from "react";

import { Table, Tr } from 'styled-table-component';
import { getAllParks } from "../../api";

class AllParks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            parks: [],
        };
    }

    // get a list of all parks and set the state variable to store the park list
    async  fetchParks() {
        const data = await getAllParks();

        this.setState({ parks: data, isLoaded: true });
    }

    componentDidMount() {
        this.fetchParks();
    }

    // render a HTML table with park information
    render() {

        const { error, isLoaded, parks } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Table simple>
                        <thead>
                            <tr>
                                {/* <th scope="col">Park ID</th> */}
                                <th scope="col">Carpark Name</th>
                                <th scope="col">Current Crowdness</th>
                                <th scope="col">Carpark Address</th>
                                <th scope="col">Carpark Cost</th>
                                <th scope="col">Height Limit(meters)</th>


                            </tr>
                        </thead>
                        <tbody>
                            {parks.map((value, key) => {
                                return <Tr active key={key}>
                                    {/* <td>
                                        <a href={value._id}>{value._id}</a>
                                    </td> */}
                                    <td>{value["parkName"]}</td>
                                    <td>{value["parkCrowdness"]}</td>
                                    <td>{value["parkAddress"]}</td>
                                    <td>{value["parkCost"]}</td>
                                    <td>{value["parkHeight"]}</td>
                                </Tr>;
                            })}
                        </tbody>
                    </Table>
                </div>

            );
        }
    }
}

export default AllParks;