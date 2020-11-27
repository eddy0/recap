import React from 'react';
import {Table, Button} from "semantic-ui-react";

const ConsigneeDashBoard = ({consignees}) => {
    return (
        <Table striped celled compact selectable >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {consignees.map((consignee, index) => {
                    const {id, company_name, address, city, country_code} = consignee
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{company_name}</Table.Cell>
                            <Table.Cell>{address}</Table.Cell>
                            <Table.Cell>{city}, {country_code}</Table.Cell>
                            <Table.Cell>
                                {/*<Link href={`/consignee/${id}`}>*/}
                                    <Button as={'a'} size={'mini'} primary>
                                        update
                                    </Button>
                                {/*</Link>*/}
                                {/*<Link href={`/consignee/${id}`}>*/}
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

export default ConsigneeDashBoard;