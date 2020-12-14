import React from 'react'
import {Button, Divider, Form, Grid, Header} from 'semantic-ui-react'
import MyTextInput from '../components/form/MyTextInput'
import MySelectInput from '../components/form/MySelectInput'
import {countryData} from '../utils/countryData'


const ConsigneeForm = () => {
    return (
        <Grid stackable columns={2} centered>
            <Grid.Column>
                <Header as={'h1'}>Consignee Information</Header>
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
                    <MySelectInput
                        required={true}
                        label={'country'}
                        name={'country_code'}
                        placeholder={'Country'}
                        data={countryData}
                    />

                    <Form.Field position={'right'}>
                        <Button primary={true} type={'sumit'}>submit</Button>
                    </Form.Field>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default ConsigneeForm