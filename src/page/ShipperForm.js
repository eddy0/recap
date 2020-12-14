import React from 'react';
import {Button, Divider, Form, Grid, Header, Input} from "semantic-ui-react";
import MyTextInput from "../components/form/MyTextInput";

const ShipperForm = () => {
    return (
        <Grid stackable columns={2} centered>
            <Grid.Column>
                <Header as={'h1'}>Shipper Information</Header>
                <Divider/>
                <Form>
                    <MyTextInput
                        required={true}
                        label={'Company Name'}
                        name={'company_name'}
                        placeholder={'Please input company name'}
                    />
                    <MyTextInput
                        required={true}
                        label={'Address'}
                        name={'address'}
                        placeholder={'Please input address'}
                    />
                    <Form.Group widths={2}>

                        <MyTextInput
                            required={true}
                            label={'First Name'}
                            name={'first_name'}
                            placeholder={'First Name'}
                        />
                        <MyTextInput
                            required={true}
                            label={'Last Name'}
                            name={'last_name'}
                            placeholder={'Last Name'}
                        />
                    </Form.Group>
                    <Form.Group widths={3}>

                        <MyTextInput
                            required={true}
                            label={'Postal Code'}
                            name={'postal_code'}
                            placeholder={'Postal Code'}
                        />
                        <MyTextInput
                            required={true}
                            label={'City'}
                            name={'city'}
                            placeholder={'City'}
                        />
                        <MyTextInput
                            required={true}
                            label={'State'}
                            name={'state'}
                            placeholder={'State'}
                        />
                    </Form.Group>
                    <MyTextInput
                        required={true}
                        label={'Telephone'}
                        name={'telephone'}
                        placeholder={'Telephone'}
                    />

                    <MyTextInput
                        required={true}
                        label={'EIN'}
                        name={'ein'}
                        placeholder={'Max 12 number'}
                    />

                    <MyTextInput
                        label={'Schedule B Code (option)'}
                        name={'hs_code'}
                        placeholder={'Please input Schedule B Code'}
                    />

                    <MyTextInput
                        label={'Commodity (option)'}
                        name={'Commodity'}
                        placeholder={'Please input Commodity'}
                    />
                    <Form.Field position={'right'}>
                        <Button primary={true} type={'sumit'}>submit</Button>
                    </Form.Field>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default ShipperForm;