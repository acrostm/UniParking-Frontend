// ESLint Validated

import React from "react";

import { Table, Tr } from 'styled-table-component';
import { getAllUsers } from "../../api";

class AllUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: [],
        };
    }

    // get a list of all users and set the state variable to store the user list
    async  fetchUsers() {
        const data = await getAllUsers();
        this.setState({ users: data, isLoaded: true });
    }

    componentDidMount() {
        this.fetchUsers();
    }

    // render a HTML table with user information
    render() {

        const { error, isLoaded, users } = this.state;
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
                                {/* <th scope="col">User ID</th> */}
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((value, key) => {
                                return <Tr active key={key}>
                                    {/* <td>
                                        <a href={value._id}>{value._id}</a>
                                    </td> */}
                                    <td>{value["username"]}</td>
                                    <td>{value["password"]}</td>
                                </Tr>;
                            })}
                        </tbody>
                    </Table>
                </div>

            );
        }
    }
}

export default AllUsers;