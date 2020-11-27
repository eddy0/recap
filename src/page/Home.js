import React, {useEffect, useState} from 'react';
import {Grid} from "semantic-ui-react";
import ShipperDashBoard from "../components/ShipperDashBoard";
import ConsigneeDashBoard from "../components/ConsigneeDashBoard";
import FetchApi from "../api/baseApi";

const Home = () => {
    const [data, setData] = useState({shippers: [], consignees: []})
    useEffect(() => {
        new FetchApi().get('/todo')
            .then((res) => {
                let {shippers, consignees} = res
                setData({
                    shippers,
                    consignees,
                })
            })
    }, [])

    const {shippers, consignees} = data

    return (
        <Grid container={true}>
            <Grid.Column>
                <ShipperDashBoard shippers={shippers}/>
                <ConsigneeDashBoard consignees={consignees}/>
            </Grid.Column>
        </Grid>
    );
};

export default Home;