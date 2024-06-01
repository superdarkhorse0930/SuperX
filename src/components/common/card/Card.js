import React from "react";
import { Row, Col, Image, Progress, Divider, Tabs, Button, ConfigProvider } from "antd";
import Heart from '../../../assets/heart@3x.png'

const Card = ({ leftIcon }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                Tabs: {
                    inkBarColor: '#151A1EB2',
                    itemHoverColor: '#151A1EB2',
                    itemSelectedColor: '#151A1EB2'
                },
                },
            }}
        >
            <div>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                    {
                        label: 'Matières',
                        key: '1',
                        children: (
                            <Row style={{ borderRadius: 8 }}>
                                <Col span={16}>
                                    <Row>
                                        <Col span={1}>
                                            <Image
                                                width={31}
                                                height={36}
                                                src={Heart}
                                                preview={false}
                                            />
                                        </Col>
                                        <Col span={23}>
                                            <div style={{ color: '#2F3037', fontWeight: '800', fontSize: 16.5 }}>Cardiologie</div>
                                            <Progress percent={80} showInfo={false} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row>
                                        <Col span={1}><Divider type="vertical" style={{ height: 64 }} /></Col>
                                        <Col span={23}>
                                            <div style={{ backgroundColor: '#FAFAFA' }}></div>
                                            <Row>
                                                <Col span={6}>
                                                    <div style={{ fontWeight: '700', fontSize: 12 }}>87%</div>
                                                    <div>completed</div>
                                                </Col>
                                                <Col span={6}>
                                                    <div style={{ fontWeight: '700', fontSize: 12 }}>12</div>
                                                    <div>questions</div>
                                                </Col>
                                                <Col span={10}>
                                                    <Button style={{ backgroundColor: '#6255E5' }} type="primary" shape="round" size='large'>
                                                        Start
                                                    </Button>                                                    
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )
                    },
                    {
                        label: 'Items',
                        key: '2',
                        children: 'Items',
                    }
                    ]}
                />
                
            </div>
        </ConfigProvider>
    )
}

export default Card;
