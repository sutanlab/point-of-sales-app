import React from 'react'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Text } from 'native-base'
import Header from '../Components/Base/Header'

export default () => {
    return (
        <>
            <Header title="History" />
            <Grid style={{ padding: 50 }}>
                <Row>
                    <Col>
                        <Text>Hello from History</Text>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}