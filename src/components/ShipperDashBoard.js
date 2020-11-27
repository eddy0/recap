import React from 'react';
import {Button, Table} from "semantic-ui-react";

const ShipperDashBoard = ({shippers}) => {
    return (
        <Table striped celled compact selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>EIN</Table.HeaderCell>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Telephone</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {shippers.map((shipper, index) => {
                    let {id, ein, company_name, address, telephone, first_name, last_name, city, state, postal_code} = shipper
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{ein}</Table.Cell>
                            <Table.Cell>{company_name}</Table.Cell>
                            <Table.Cell>{address}</Table.Cell>
                            <Table.Cell>{first_name} {last_name}</Table.Cell>
                            <Table.Cell>{city}, {state}, {postal_code}</Table.Cell>
                            <Table.Cell>{telephone}</Table.Cell>
                            <Table.Cell>
                                {/*<Link href={`/shipper/${id}`}>*/}
                                    <Button as={'a'} size={'mini'} primary>
                                        update
                                    </Button>
                                {/*</Link>*/}
                                {/*<Link href={`/shipper/${id}`}>*/}
                                    <Button as={'a'} size={'mini'} basic disabled>
                                        delete
                                    </Button>
                                {/*</Link>*/}
                            </Table.Cell>

                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    );
};

export default ShipperDashBoard;