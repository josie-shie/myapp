import React, { useState, useEffect } from 'react'
// import { Accordion } from 'react-bootstrap'
import './styles/OrderProDetail.scss'
import Accordion from 'react-bootstrap/Accordion'
import { Card, Button, Container } from 'react-bootstrap'
import {
  withRouter,
  Link,
  useHistory,
} from 'react-router-dom'
import Logoheader from './components/Logoheader'

function OrderProDetail(props) {
  const id = props.match.params.id
  let history = useHistory()

  // 付款資訊
  const [orderPay, setOrdrPay] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpdate, setCardExpdate] = useState('')
  const [orderPrice, setOrderPrice] = useState('')

  // 收件人資訊
  const [name, setName] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [orderShip, setOrderShip] = useState('')

  // 商品細節
  const [proImg, setProImg] = useState('')
  const [proName, setProName] = useState('')
  const [proId, setProId] = useState('')
  const [orderSpec, setOrderSpec] = useState('')
  const [orderQty, setOrderQty] = useState('')

  async function getUserOrderProDetail() {
    const url = `http://localhost:6005/users/getOrderProDetail/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    console.log(`id = ${id}`)

    const response = await fetch(request)
    const data = await response.json()

    console.log(`data[0] = ${data[0]}`)
    console.log(`data[1] = ${data[1]}`)

    setOrdrPay(data[0].orderPay)
    setCardNumber(data[0].cardNumber)
    setCardExpdate(data[0].cardExpdate)
    setOrderPrice(data[0].orderPrice)
    setName(data[0].name)
    setUserAddress(data[0].userAddress)
    setUserPhone(data[0].userPhone)
    setOrderShip(data[0].orderShip)
    setProImg(JSON.parse(data[0].proImg))
    setProName(data[0].proName)
    setProId(data[0].proId)
    setOrderSpec(data[0].orderSpec)
    setOrderQty(data[0].orderQty)
  }

  useEffect(() => {
    getUserOrderProDetail()
  }, [])

  return (
    <>
      <div className="u-body">
        <Logoheader />
        <Container fluid>
          <div className="u-box">
            <div className="u-creditNews col">付款資訊</div>
            <div className="u-creditType">
              <div className="col">
                信用卡別：{orderPay}
              </div>
            </div>

            <div className="u-creditNum">
              <div className="col">
                信用卡號：{cardNumber}
              </div>
            </div>

            <div className="u-creditDate">
              <div className="col">
                有效期限： {cardExpdate}
              </div>
            </div>

            <div className="u-creditNT">
              <div className="col">
                刷卡金額： {orderPrice}
              </div>
            </div>
          </div>

          <div className="u-box">
            <div className="u-creditNews col">收件資訊</div>
            <div className="u-creditType">
              <div className="col">收件人：{name}</div>
            </div>
            <div className="u-creditNum">
              <div className="col">
                收件地址： {userAddress}
              </div>
            </div>
            <div className="u-creditDate">
              <div className="col">
                聯絡電話：{userPhone}
              </div>
            </div>
            <div className="u-creditNT d-flex">
              <div className="col">
                寄送方式：{orderShip}
              </div>
            </div>
          </div>

          <div className="u-boxPro d-flex justify-content-between">
            {/* <div className="proBtn col-1 "></div> */}
            <div className="u-proImg">
              <img
                src={`http://localhost:6005/productpics/${proImg}`}
                alt="商品圖"
              />
            </div>
            <div className="u-proText col-2">
              <div className="u-proName ">{proName}</div>
              <div className="u-proId">{proId}</div>
            </div>
            <div className="u-proSize d-flex col-2">
              <div className="">規格：</div>
              <div className="">{orderSpec}</div>
            </div>
            <div className="u-proQty d-flex col-2">
              <div className="">數量：</div>
              <div className="">{orderQty}</div>
            </div>
            {/* <div className="u-proTotalPrice d-flex col-2">
              <div className="">NT $</div>
              <div className="col">{proPrice}</div>
            </div> */}
            <div className="u-goEVAL">
              <Link
                to={`/product/product-list/product-detail/${id}`}
                style={{ textDecoration: 'none' }}
              >
                前往評價
              </Link>
            </div>
          </div>
          {/* <div>
            <Accordion>
              <Card className="u-Card">
                <Card.Header className="u-CardHeader">
                  <Accordion.Toggle
                    className="u-myEVAL"
                    as={Button}
                    variant="link"
                    eventKey="0"
                    style={{ textDecoration: 'none' }}
                  >
                    我的評價
                  </Accordion.Toggle>
                 
                </Card.Header>

                <Accordion.Collapse
                  className="u-collapse"
                  eventKey="0"
                >
                  <Card.Body className="u-CardBody">
                    <div className="u-card-body d-flex">
                      <div className="u-evaluation col-2 ml-0">
                        <div className="u-start">★★★★★</div>
                        <div className="u-evalDate">
                          2021-11-23
                        </div>
                      </div>
                      <div className="u-evalText col-6">
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div> */}
          {/* <div className="u-goEVAL">
            <Link
              to={`/product/product-list/product-detail/${id}`}
              style={{ textDecoration: 'none' }}
            >
              前往評價
            </Link>
          </div> */}

          <div className="u-back">
            <Link
              className="u-goback"
              // onClick={() => {
              //   props.history.push(
              //     `/user-orderpro/${props.userid}`
              //   )
              // }}
              onClick={() => {
                history.goBack()
              }}
              style={{ textDecoration: 'none' }}
            >
              回訂單查詢
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default withRouter(OrderProDetail)
