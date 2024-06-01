import React, { useState } from "react";
import Accordion from "../accordion/Accordion";
import { Progress, Tabs, Image, ConfigProvider, Button, Row, Col, Divider, Table, Tag, Input } from "antd";
import Heart from '../../assets/heart.png'
import Orthopedic from '../../assets/orthopedic.png'
import Dermatology from '../../assets/dermatology.png'
import Home from '../../assets/homeGray.png'
import RightArrow from '../../assets/rightArrow.png'
import Eye from '../../assets/eye.png'
import EyeBlue from '../../assets/eyeBlue.png'
import Edit from '../../assets/edit.png'
import Question from '../../assets/question.png'
import Status from '../../assets/state.png'
import Search from '../../assets/search.png'
import EditBlue from '../../assets/editBlue.png'
import { colors } from "../../theme/globals";
import styles from './Library.module.css'


const Library = () => {
    const [toggleAccordion, setToggleAccordion] = useState([false, false, false])

    const columns = [
        {
          title: 'Items',
          dataIndex: 'item',
          key: 'item',
          width: '45%',
          render: (item) => <span style={{ backgroundColor: '#F3F3F4', padding: 12, borderRadius: 24, borderWidth: 1, borderColor: '#F3F3F4' }}><span style={{ backgroundColor: 'white', color: 'black', marginLeft: 5, marginRight: 5, padding: 4 }}>126</span>{item}</span>
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: '10%',
          render: (_, { status }) => (
            <>
              {status.map((tag) => {
                let color = '';
                if (tag === 'fair') {
                  color = 'volcano';
                } else if (tag === 'fait') {
                 color = 'green'   
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Questions',
          dataIndex: 'question',
          key: 'question',
          width: '15%',
          render: (question) => <span style={{ color: colors.gray }}>{question}</span>
        },
        {
          title: 'Progress',
          key: 'progress',
          dataIndex: 'progress',
          width: '30%',
          render: (progress) => (
            <Row>
                <Col span={12}><Progress percent={progress} showInfo={false} strokeColor={colors.black} size='large' /></Col>
                <Col span={6}><span style={{ color: colors.gray, marginLeft: 20 }}> {progress}%</span></Col>
                <Col span={6}><img src={EditBlue} /></Col>
            </Row>
        )
        }
      ];
      const data = [
        {
          key: '1',
          item: 'Trouble de l’érection',
          status: [],
          question: '10 questions',
          progress: 20
        },
        {
          key: '2',
          item: 'Myasthénie',
          status: [],
          question: '10 questions',
          progress: 78
        },
        {
          key: '3',
          item: 'Lithiase urinaire',
          status: [],
          question: '10 questions',
          progress: 12
        },
        {
          key: '4',
          item: 'Hémorragies méningées',
          status: ['fair'],
          question: '10 questions',
          progress: 47
        },
        {
          key: '5',
          item: 'Protéinurie et syndrome néphrotique chez l’adulte et l’enfant',
          status: ['fait'],
          question: '10 questions',
          progress: 0
        },
      ];

      const handleAccordionExpand = (currentIndex) => {
        const prevAccordionList = [...toggleAccordion];
        const prevExpanded = prevAccordionList.findIndex(accordion => accordion);
        prevAccordionList[prevExpanded] = !prevAccordionList[prevExpanded];
        prevAccordionList[currentIndex] = !prevAccordionList[currentIndex];
        setToggleAccordion(prevAccordionList)
      }
      

    const RenderMatier = ({ leftIcon, matieresTitle, progressIndicator, numberQuestion, id }) => {
        return (
            <div style={{ backgroundColor: 'white', marginTop: 20, padding: 16, borderRadius: 8 }}>
                <Row>
                    <Col span={16}>
                        <Row>
                            <Col span={1}>
                                <Image
                                    width={31}
                                    height={36}
                                    src={leftIcon}
                                    preview={false}
                                />
                            </Col>
                            <Col span={23}>
                                <div style={{ color: '#2F3037', fontWeight: '800', fontSize: 16.5 }}>{matieresTitle}</div>
                                <Progress size='small' showInfo={false} strokeColor={colors.blue} percent={progressIndicator} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={1}><Divider type="vertical" style={{ height: 64 }} /></Col>
                            <Col span={23}>
                                <div style={{ backgroundColor: '#FAFAFA', borderWidth: 1, borderRadius: 6, borderColor: '#FAFAFA' }}></div>
                                <Row>
                                    <Col span={6}>
                                        <img src={Status} />
                                        <div style={{ fontWeight: '700', fontSize: 12 }}>{progressIndicator}%</div>
                                        <div style={{ color: colors.gray }}>completed</div>
                                    </Col>
                                    <Col span={6}>
                                        <img src={Question} />
                                        <div style={{ fontWeight: '700', fontSize: 12 }}>{numberQuestion}</div>
                                        <div style={{ color: colors.gray }}>questions</div>
                                    </Col>
                                    <Col span={10}>
                                        <Button style={{ backgroundColor: colors.bg2 }} type="primary" shape="round" size='large'>
                                            Start
                                        </Button>                                                    
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: colors.lightGray, padding: 10 }}>
                    <Col span={24}>
                        <Accordion title='Details' childContent={<Table columns={columns} dataSource={data} />} expanded={toggleAccordion[id]} id={id} handleAccordion={handleAccordionExpand}  />
                    </Col>
                </Row>
            </div>
        )
    }

    const RenderItem = ({ itemTitle, progressIndicator, eyeIcon }) => {
        return (
            <div style={{ backgroundColor: 'white', marginTop: 20, padding: 16, borderRadius: 8 }}>
                <Row>
                    <Col span={20}>
                        <Row>
                            <Col span={24}>
                                <div style={{ color: '#2F3037', fontWeight: '800', fontSize: 16.5 }}>{itemTitle}</div>
                                <Progress percent={progressIndicator} showInfo={false} strokeColor={colors.blue} size='small' />
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <img src={Status} width={13} height={13} />
                                        <div style={{ marginLeft: 12, color: '#85868E' }}>0% completed</div>
                                        <img src={Question} width={13} height={13} style={{ marginLeft: 16 }} />
                                        <div style={{ marginLeft: 12, color: '#85868E' }}>187 Questions</div>
                                    </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <Row>
                            <Col span={1}><Divider type="vertical" style={{ height: 64 }} /></Col>
                            <Col span={23}>
                                <div style={{ backgroundColor: '#FAFAFA' }}></div>
                                <Row>
                                    <Col span={6}>
                                    </Col>
                                    <Col span={6}>
                                        <img src={eyeIcon} width={26} height={26} />
                                    </Col>
                                    <Col span={6}>
                                        <img src={Edit} width={26} height={26} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

    const matieresCards = [
        <RenderMatier
            leftIcon={Heart}
            matieresTitle='Cardiologie'
            progressIndicator={87}
            numberQuestion={12}
            id={0}
        />,
        <RenderMatier
            leftIcon={Orthopedic}
            matieresTitle='Orthopedic'
            progressIndicator={53}
            numberQuestion={89}
            id={1}
        />,
        <RenderMatier
            leftIcon={Dermatology}
            matieresTitle='Dermatology'
            progressIndicator={10}
            numberQuestion={45}
            id={2}
        />

    ]

    const itemCards = [
        <RenderItem
            itemTitle='129. Syndromes coronariens aigus'
            progressIndicator={60}
            eyeIcon={Eye}
        />,
        <RenderItem
            itemTitle='138. Péricardite aiguë'
            progressIndicator={97}
            eyeIcon={Eye}
        />,
        <RenderItem
            itemTitle='165. Insuffisance cardiaque'
            progressIndicator={15}
            eyeIcon={EyeBlue}
        />,
        <RenderItem
            itemTitle='245. Fibrillation atriale'
            progressIndicator={55}
            eyeIcon={Eye}
        />,
        <RenderItem
            itemTitle='336. Myocardite '
            progressIndicator={0}
            eyeIcon={Eye}
        />

    ]

    const renderMatieres = () => {
        return (
            matieresCards.map(item => item)
        )
    } 

    const renderItems = () => {
        return (
            itemCards.map(item => item)
        )
    } 



    const items = [
        {
            label: 'Matières',
            key: 'matier',
            children: renderMatieres()
        },
        {
            label: 'Items',
            key: 'item',
            children: renderItems()
        }
    ]
    
    return (
        <ConfigProvider
            theme={{
                components: {
                Tabs: {
                    inkBarColor: '#151A1EB2',
                    itemHoverColor: '#151A1EB2',
                    itemSelectedColor: '#151A1EB2',
                    titleFontSize: 17,
                    titleFontWeight: '700'
                },
                },
            }}
        >
            <div style={{ marginTop: '40px' }}>
                <Row>
                    <Col span={1}>
                    <img width={15} height={15} src={Home} />
                    </Col>
                    <Col span={1}><img src={RightArrow} /></Col>
                    <Col span={22} style={{ fontWeight: '600', fontSize: 16, height: 22 }}>Library</Col>
                </Row>
                <Row style={{ marginTop: 18 }}>
                    <Col span={24}>
                        <Input style={{ borderRadius: 18 }} size="large" placeholder="Search an item" prefix={<img src={Search} />} />
                    </Col>
                </Row>
                <h1 className={styles.heading}>Library</h1>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                />
                
            </div>
        </ConfigProvider>
    )
}

export default Library;
