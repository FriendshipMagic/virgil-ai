import { Button, Col, message, Row } from 'antd'

export default function Home() {
    return (
        <Row justify="center" align="middle" className="h-screen">
            <Col>
                <Button
                    className="text-lg"
                    type="primary"
                    onClick={() => message.success('I am the storm that is approaching')}
                >
                    Virgil!
                </Button>
            </Col>
        </Row>
    )
}
