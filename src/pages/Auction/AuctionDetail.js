import React, { useEffect, useState } from 'react';
import './style/auctionDetail.scss';
import { withRouter, Link } from 'react-router-dom'
import monkey from './images/monkey.jpg'
import ArtDDICTLOGbw from './images/ArtDDICTLOGbw.svg'
import AuctionDetailcountDown from './components/AuctionDetailcountDown'
import useInterval from './components/useInterval'
import { Container, Row, Modal, Button, Collapse, } from 'react-bootstrap'
import minusButton from './images/minusButton.svg'
import webSocket from 'socket.io-client'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
  IoMdAdd,
  IoMdRemove,
} from 'react-icons/io'


//模擬伺服器端的資料
import { data } from './data/data.js'
import { array } from 'prop-types';

function AuctionDetail(props) {
  // console.log(props.match.params.id)
  //倒數計時器間隔
  const [delay, setDelay] = useState(1000);
  //倒數計時器停止與否  
  const [isRunning, setIsRunning] = useState(true);

  //是否要顯示倒數
  const [auctionRunning, setAuctionrunning] = useState(false)
  //是否還在loading 若loading 會給予空白 loading完成 render在螢幕上
  const [loading, setLoading] = useState('')

  //商品描述開關
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  //產品資料 id,aucClass,aucName,aucId,aucDes,aucDeadline,aucPriceNow,aucPriceStart
  const [aucDetailinfo, setAucDetailInfo] = useState([])

  //輸入的價錢
  const [inputbidPrice, setInputbidPrice] = useState([])

  //目前的出價(實時更新)
  const [immediatePrice, setImmediatePrice] = useState('')

  //出價資訊
  const [bidersInfo, setBidersInfo] = useState([])

  //假設會員id
  const [memberid, setMemberId] = useState(1)
  //現在的頁面
  const auc_Id = props.match.params.id

  //千分位逗號分隔的api
  const internationalNumberFormat = new Intl.NumberFormat('en-US')

  // Modal 顯示狀態
  const [show, setShow] = useState(false)
  // Modal 開關 function
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //剩餘時間
  const [auctionDetailcountdown, setAuctionDetailcountdown] = useState([0, 0, 0, -1])
  //預設資料物件
  const [aucProduct, setAucProduct] = useState(
    {
      aucId: 0,
      aucName: '',
      aucPriceNow: 1,
      deadline: 0,
    }
  )


  //socket
  const [socket, setSocket] = useState(null)
  const io = require("socket.io-client");

  useEffect(() => {
    setSocket(webSocket('http://localhost:3012'))
  }, [])

  useEffect(() => {
    if (socket) {
      //連線成功在 console 中打印訊息
      console.log('success connect!')
    }
  }, [socket])


  useEffect(() => {
    if (socket) {
      socket.on('Message', message => {
        if (message.inputbidPrice) {
          // console.log("設定即時價格", message)
          setImmediatePrice(message.inputbidPrice)
          // console.log("出價資料", message.b)
          setBidersInfo(message.auc_info)
        }
      })
    }
  }, [socket, bidersInfo])

  //發送出價消息
  const bidPrice = () => {
    console.log("inputbidPrice", inputbidPrice)
    console.log("immediatePrice", immediatePrice)
    if (inputbidPrice > immediatePrice) {
      socket.emit('bidPrice', { inputbidPrice, auc_Id, memberid })
    } else {
      console.log("輸入價錢過低")
      handleShow()
    }
  }
  const sendMessage = () => {
    //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
    console.log("for server message")
    socket.emit('test', { inputbidPrice, auc_Id, memberid })
  }


  /**************************************************** */

  let newAucProduct = [];
  async function getAucProDetailFromServer(aucId) {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/auctoin' + `?aucId=${aucId}`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    //輸入現在價位
    // console.log(data)
    setImmediatePrice(data[0].aucPriceNow)
    setAucDetailInfo(data[0])
    newAucProduct = data[0]
    console.log("新",newAucProduct)
    data.shift()
    setBidersInfo(data)
  }

  // console.log(props)

  // console.log('delay',delay,'auctionRunning',auctionRunning,'loading',loading,'isRunning',isRunning,'aucProduct',aucProduct)

  useEffect(() => {
    //從資料庫抓取資料
    getAucProDetailFromServer(props.match.params.id)
  }, [])

  //計算剩餘時間 
  function TimeRemaining(deadline) {
    //截止時間(毫秒)
    // 將資料拿到資料庫截止日期 從字串轉換成數字
    const deadlineMin = parseInt(deadline)

    //現在時間(毫秒)
    const timeRightNowA = new Date()
    const timeRightNow = timeRightNowA.getTime()

    const TimeRemaining = deadlineMin - timeRightNow

    const seconds = Math.floor((TimeRemaining / 1000) % 60);
    const minutes = Math.floor((TimeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((TimeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(TimeRemaining / (1000 * 60 * 60 * 24));
    // console.log(days, "天", hours, '小時', minutes, '分鐘', seconds, '秒')


    return [days, hours, minutes, seconds]

  }

  // 初始化倒數計時器 可以在第一瞬間顯示是否競標結束
  useEffect(() => {
    console.log(aucDetailinfo)
    let deadlineA = new Date(aucDetailinfo.aucDeadline).getTime()
    //第一次計算剩餘時間(不控制)
    let newAucProductTimeRemaining = TimeRemaining(deadlineA)
    // 第一次計算剩餘時間(react資料流)
    // TimeRemaining(aucProduct.deadline)
    // console.log("迅速")
    const cc = newAucProductTimeRemaining.reduce((a, b) => a + b)
    if (cc < 0) {
      console.log('競標結束')
      setLoading('競標結束')
      //結束計時器(雖然他還沒開始)
      setIsRunning(false)
    } else {
      // console.log('競標繼續')
    }
  }, [aucDetailinfo])

  //倒時計時器
  useInterval(() => {
    let deadlineA = new Date(aucDetailinfo.aucDeadline).getTime()
    //設立一個變數來避免 setstate非同步問題
    let TimeRemainingAA = TimeRemaining(deadlineA)
    //更改state狀態
    setAuctionDetailcountdown(TimeRemainingAA)
    //利用加總來計算時間是否歸0
    const bbb = TimeRemainingAA.reduce((a, b) => a + b)
    //當時間歸0 競價停止 倒數停止 
    if (bbb < 0) {
      setAuctionrunning(false)
      setIsRunning(false)
      setLoading('競標結束')
      console.log('bye')
    } else {
      // console.log("有進來嗎")
      setAuctionrunning(true)
    }
  }, isRunning ? delay : null)


  // console.log('--------------------')
  return (
    <>
      <div className="auctionDetailContent cn-font">
        <div className="auctionDetailleftContent">
          <div className="leftContent_firstpart">
            <div id="auctionDetailLOGO">
              <img src={ArtDDICTLOGbw} />
            </div>
            <div className="auctionDetailBreadcrumb">
              首頁/競標
            </div>
          </div>
          <div className="leftContent_secondpart">
            <div className="auctionDetailTitle">
              {aucDetailinfo.aucName}
            </div>
            <div className="currentPrice">
              目前出價:NT${internationalNumberFormat.format(immediatePrice)}
            </div>
            <div>
              {/* 最高出價者:{bidersInfo[0].name} */}
            </div>
          </div>
          <div className="leftContent_thirdpart">
            <div className="auctionDetailProductswitchTitle">
              <button
                className="auc-switch-buttom"
                onClick={() => setOpenOne(!openOne)}
                aria-controls="example-collapse-text"
                aria-expanded={openOne}
              >
                <span className="mr-auto">商品描述</span>
                <span>
                  <IoMdRemove />
                </span>
              </button>
            </div>
            <Collapse in={openOne}>
              <div id="example-collapse-text">
                <div className="auctionDetailProductDesContent">
                  {aucDetailinfo.aucDes}
                </div>
              </div>
            </Collapse>
          </div>
          <div className="leftContent_forthpart">
            <div className="auctionDetailProductswitchTitle">
              <button
                className="auc-switch-buttom"
                onClick={() => setOpenTwo(!openTwo)}
                aria-controls="example-collapse-text"
                aria-expanded={openTwo}
              >
                <span className="mr-auto">商品規格</span>
                <span>
                  <IoMdRemove />
                </span>
              </button>
            </div>
            <Collapse in={openTwo}>
              <div id="example-collapse-text">
                <div className="auctionDetailProductDesContent">
                  aaaa
                </div>
              </div>
            </Collapse>
          </div>
          <div className="leftContent_fifthpart">
            <div className="auctionDetailProductswitchTitle">
              <button
                className="auc-switch-buttom"
                onClick={() => setOpenThree(!openThree)}
                aria-controls="example-collapse-text"
                aria-expanded={openThree}
              >
                <span className="mr-auto">出價紀錄</span>
                <span>
                  <IoMdRemove />
                </span>
              </button>
            </div>
            <Collapse in={openThree}>
              <div id="example-collapse-text">
                <div className="auctionDetailProductDesContent">
                  <div className="aucD-PriceTitle">
                    <div>出價者</div>
                    <div>出價金額</div>
                  </div>
                  <div>
                    {/* {console.log(bidersInfo)} */}
                    {bidersInfo.map((biderInfoshow, i) => {
                      return (
                        <div className="aucD-PriceContent" key={i}>
                          <div className="aucD-bidder">{bidersInfo[i].name}</div>
                          <div className="aucD-bidAmount">{bidersInfo[i].Price}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        {/* <div className="auc-vh"> */}
        <div className="rightContentFix">
          <div className="auctionDetailrightContent">
            {/* {console.log('render一波')} */}
            <AuctionDetailcountDown
              aucDetailinfo={aucDetailinfo}
              setAucProduct={setAucProduct}
              TimeRemaining={TimeRemaining}
              auctionDetailcountdown={auctionDetailcountdown}
              setAuctionDetailcountdown={setAuctionDetailcountdown}
              auctionRunning={auctionRunning}
              loading={loading}
            />
            {/* {console.log("rneder二波")} */}
            <div className="auctionDetailPicture">
              <img src={`http://localhost:6005/aucpics/auc/${aucDetailinfo.aucImg}`} alt="Background" />
            </div>
            {isRunning ? (
            <>
            <div className="auctionDetailcurrentPriceInput">
              <div className="auctionDetailcurrentPriceAboveInput">
                目前出價:NT${internationalNumberFormat.format(immediatePrice)}
              </div>
              <div className="priceInput" >
                <input placeholder="請輸入下標價格"
                  value={inputbidPrice}
                  onChange={(event) => { setInputbidPrice(event.target.value) }} />
              </div>
            </div>
            <button className="auctionDetailButton " onClick={bidPrice}>
              下標
            </button></>):(<div/>)}
            {/* /***************************************** */}
            {/* 彈出視窗 */}
            <Modal
              centered
              show={show}
              onHide={handleClose}
              id="eventModal"
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  無法出價
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div>狀況1.您出的價錢並沒有高於目前最高價唷</div>
                  <div>狀況2.您已經是目前最高價囉~</div>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button
                  type="button"
                  className="e-btn-s e-modal-close"
                  onClick={handleClose}
                >
                  關閉
                </Button> */}
                <Button
                  type="button"
                  className="e-btn-s e-modal-del"
                  onClick={() => {
                    handleClose()
                  }}
                >
                  我瞭解了
                </Button>
              </Modal.Footer>
            </Modal>
            {/* /***************************************** */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default withRouter(AuctionDetail);

