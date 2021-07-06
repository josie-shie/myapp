import { React, useEffect, useState, useRef } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import $ from 'jquery'

// Component
import EHeader from './components/Darkheader'
import EDetailCaro from './components/EDetailCaro'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
} from 'react-icons/io'
import { FaFilter } from 'react-icons/fa'

// Pictures
import EdListCardPic from './images/event/006.jpg'

// styles
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/eventList.scss'

function EventList() {
  const [events, setEvents] = useState([])

  async function getEventServer() {
    const url = 'http://localhost:6005/event/event-list'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setEvents(data)
  }

  useEffect(() => {
    getEventServer()
  }, [])

  // useEffect(() => {
  //   getEventServer()
  // }, [events])

  const eventDisplay = events.map((event) => {
    return (
      <Link
        to="/event/event-list/detail"
        style={{ textDecoration: 'none' }}
        className="ed-list-card col-4 my-3 "
        key={event.id}
      >
        <img
          className="col-12 p-0"
          src={`http://localhost:6005/eventpic/event/${event.eventImg}`}
          alt="/"
        />
        <h6 className="col-12 p-0 cn-font my-2">
          {event.eventName}
        </h6>
        <div className="d-flex">
          <div className="col-8 p-0">
            <p>{event.eventCity}</p>
            <p>時間：JUN</p>
          </div>
          <div className="col-4 p-0">
            <button className="border-right col-4 text-center">
              <IoIosHeart />
            </button>
            <button className="col-8 text-center">
              MORE+
            </button>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <>
      <div className="reduce-width overflow-hidden">
        <EHeader />

        {/* HERO Section 輪播牆 */}
        <Container fluid className="ed-hero">
          <Row>
            <h1 className="col-12 p-0 eng-font-regular e-detail-title text-center py-4">
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              EXHIBITION AND WORK SHOP
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
            </h1>
          </Row>

          <EDetailCaro />
          <Row className="mt-2 pb-5 ed-type">
            <button className="col-6 e-detail-class cn-font border-left-0 py-4 shadow-none">
              藝文活動展
              <IoIosArrowRoundDown />
            </button>
            <button className="col-6 e-detail-class cn-font py-4 border-right-0">
              活動工作坊
              <IoIosArrowRoundDown />
            </button>
          </Row>
        </Container>
        <Container className="ed-list both-padding" fluid>
          <Row className="mb-4">
            <form
              className="ed-filter col-12 px-0 d-flex justify-content-between my-5 pb-5"
              action=" "
            >
              {/* 地區選單 */}
              <div
                className="ed-select-box cn-font col-2 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  地區
                </h6>
                <select
                  className="ed-select col-7"
                  name=""
                  id=""
                >
                  <option value="">請選擇</option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              {/* 城市選單 */}
              <div
                className="ed-select-box cn-font col-2 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  城市
                </h6>
                <select
                  className="ed-select col-7"
                  name=""
                  id=""
                >
                  <option value="">請選擇</option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              {/* 美術館選單 */}
              <div
                className="ed-select-box cn-font col-3 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  美術館
                </h6>
                <select
                  className="ed-select col-7"
                  name=""
                  id=""
                >
                  <option value="">請選擇</option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              {/* 時間選單 */}
              <div
                className="ed-select-box cn-font col-2 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  時間
                </h6>
                <select
                  className="ed-select col-7"
                  name=""
                  id=""
                >
                  <option value="">請選擇</option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              <button
                className="ed-list-btn col-1 p-0"
                type="submit"
              >
                <FaFilter />
              </button>
            </form>
            <div className="my-5"></div>

            {/* 第二行表單 */}
            <form className="col-12 d-flex p-0" action="">
              {/* 排序選單 */}
              <div
                className="ed-select-box cn-font col-2 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  排序
                </h6>
                <select
                  className="ed-select col-7"
                  name=""
                  id=""
                >
                  <option value="">最近</option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              <button
                className="ed-list-btn2 col-1"
                type="submit"
              >
                <IoIosSearch />
              </button>
            </form>
          </Row>
          <Row className="ed-list-card justify-content-between flex-wrap cn-font">
            {/* test node area */}
            {eventDisplay}
            {/* test node area */}
            <Link
              to="/event/event-list/detail"
              style={{ textDecoration: 'none' }}
              className="ed-list-card col-4 my-3 "
            >
              <img
                className="col-12 p-0"
                src={EdListCardPic}
                alt=""
              />
              <h6 className="col-12 p-0 cn-font my-2">
                我是活動標題
              </h6>
              <div className="d-flex">
                <div className="col-8 p-0">
                  <p>地點：台北市</p>
                  <p>時間：JUN</p>
                </div>
                <div className="col-4 p-0">
                  <button className="border-right col-4 text-center">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 text-center">
                    MORE+
                  </button>
                </div>
              </div>
            </Link>

            <Link
              to="/event/event-list/detail"
              style={{ textDecoration: 'none' }}
              className="ed-list-card col-4 my-3"
            >
              <img
                className="col-12 p-0"
                src={EdListCardPic}
                alt=""
              />
              <h6 className="col-12 p-0 cn-font my-2">
                我是活動標題
              </h6>
              <div className="d-flex">
                <div className="col-8 p-0">
                  <p>地點：台北市</p>
                  <p>時間：JUN</p>
                </div>
                <div className="col-4 p-0">
                  <button className="border-right col-4 text-center">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 text-center">
                    MORE+
                  </button>
                </div>
              </div>
            </Link>

            <Link
              to="/event/event-list/detail"
              style={{ textDecoration: 'none' }}
              className="ed-list-card col-4 my-3"
            >
              <img
                className="col-12 p-0"
                src={EdListCardPic}
                alt=""
              />
              <h6 className="col-12 p-0 cn-font my-2">
                我是活動標題
              </h6>
              <div className="d-flex">
                <div className="col-8 p-0">
                  <p>地點：台北市</p>
                  <p>時間：JUN</p>
                </div>
                <div className="col-4 p-0">
                  <button className="border-right col-4 text-center">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 text-center">
                    MORE+
                  </button>
                </div>
              </div>
            </Link>

            <Link
              to="/event/event-list/detail"
              style={{ textDecoration: 'none' }}
              className="ed-list-card col-4 my-3 "
            >
              <img
                className="col-12 p-0"
                src={EdListCardPic}
                alt=""
              />
              <h6 className="col-12 p-0 cn-font my-2">
                我是活動標題
              </h6>
              <div className="d-flex">
                <div className="col-8 p-0">
                  <p>地點：台北市</p>
                  <p>時間：JUN</p>
                </div>
                <div className="col-4 p-0">
                  <button className="border-right col-4 text-center">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 text-center">
                    MORE+
                  </button>
                </div>
              </div>
            </Link>

            <Link
              to="/event/event-list/detail"
              style={{ textDecoration: 'none' }}
              className="ed-list-card col-4 my-3"
            >
              <img
                className="col-12 p-0"
                src={EdListCardPic}
                alt=""
              />
              <h6 className="col-12 p-0 cn-font my-2">
                我是活動標題
              </h6>
              <div className="d-flex">
                <div className="col-8 p-0">
                  <p>地點：台北市</p>
                  <p>時間：JUN</p>
                </div>
                <div className="col-4 p-0">
                  <button className="border-right col-4 text-center">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 text-center">
                    MORE+
                  </button>
                </div>
              </div>
            </Link>

            <Link
              to="/event/event-list/detail"
              style={{ textDecoration: 'none' }}
              className="ed-list-card col-4 my-3"
            >
              <img
                className="col-12 p-0"
                src={EdListCardPic}
                alt=""
              />
              <h6 className="col-12 p-0 cn-font my-2">
                我是活動標題
              </h6>
              <div className="d-flex">
                <div className="col-8 p-0">
                  <p>地點：台北市</p>
                  <p>時間：JUN</p>
                </div>
                <div className="col-4 p-0">
                  <button className="border-right col-4 text-center">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 text-center">
                    MORE+
                  </button>
                </div>
              </div>
            </Link>
          </Row>
          <Row className="justify-content-center eng-font-regular mt-5 py-5">
            <Link className="ed-pagenum mx-3">
              <IoIosArrowBack />
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>1</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>2</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>3</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>4</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>5</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <IoIosArrowForward />
            </Link>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default withRouter(EventList)