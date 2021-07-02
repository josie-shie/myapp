import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import '../../bootstrap/css/bootstrap.css'
import { Card, Button } from 'react-bootstrap'
//----------icon and css and slick----------
import {} from 'react-icons/cg'
import { MdKeyboardArrowRight } from 'react-icons/md'

import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './style/Product.css'

//-------test-----
import Testcard from './compoenents/testCard'
// -----picturre--------
import logo from './svg/logo.svg'
import arddictCircleG from './svg/arddictCircleG.svg'
import arddictEyeG from './svg/arddictEyeG.svg'
import leftArrow from './svg/leftArrow.svg'
import upLogo from './img/upLogo.png'
import homepic1 from './img/homepic1.jpeg'
import homepic2 from './img/homepic2.png'
import homepic3 from './img/homepic3.png'
import homepic4 from './img/homepic4.png'
import museumGif from './img/museumGif.gif'
import slickA1 from './img/slickA1.jpeg'
import slickA2 from './img/slickA2.jpeg'
import slickA3 from './img/slickA3.jpeg'
import slickA4 from './img/slickA4.jpeg'
import slickA5 from './img/slickA5.jpeg'
import slickA6 from './img/slickA6.jpeg'
import slickA7 from './img/slickA7.jpeg'

function Product() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
        }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
        }}
        onClick={onClick}
      />
    )
  }

  return (
    <>
      <div className="pro-outside">
        <div className="row">
          <div className="homepageA-left">
            <div className="ArtLogoDiv">
              <img src={logo} alt="" />
            </div>
            <div className="upLogoDiv">
              <img className="upLogo" src={upLogo} alt="" />
            </div>
            <div className="homepageA-word-div">
              <h1 className="homepageA-word">鹽田千春</h1>
            </div>
            <div className="homepageA-wordB-div">
              <p className="homepageA-wordB">
                現在藝術大師鹽田千春
                <br />
                2021『這樣的千春』展覽系列商品
                <br />
                只有在———
                <span className="pro-English">
                  ARTDDICT
                </span>
              </p>
            </div>
            <button
              onclick="javascript:location.href='productList'"
              className="homepageA-box btn-lg pro-English "
            >
              Go Shop
            </button>
          </div>
          <div className="homepageA-right">
            <div className="homepageA-right-box d-flex">
              <div className="homepageA-right-box-picA">
                <img
                  className="homepageA-right-picA"
                  src={homepic1}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picB">
                <img
                  className="homepageA-right-picB"
                  src={homepic2}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picC">
                <img
                  className="homepageA-right-picC"
                  src={homepic3}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picD">
                <img
                  className="homepageA-right-picD"
                  src={homepic4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="arddictCircleG"
          src={arddictCircleG}
          alt=""
        />
        <img
          className="arddictEyeG"
          src={arddictEyeG}
          alt=""
        />
      </div>
      {/* -----------------------首頁第一頁 以下第二頁 */}
      <div className="pro-outside2">
        <div className="row">
          <div className="homepageB-left">
            <p className="pro-English homepageB-left-word">
              TO DRAW, <br />
              YOU MUST CLOSE <br /> YOUR EYES
              <br /> AND SING
              <br />
              ——PABLO PICASSO
            </p>
            <div className="pro-gif">
              <img
                className="museumGif"
                src={museumGif}
                alt=""
              />
            </div>
          </div>
          <div className="homepageB-right"> </div>
        </div>
      </div>
      {/* --------------------------homepage3 */}
      <div className="pro-outside3">
        <div className="homepage3 d-flex">
          <div className="homepage3-NewArrival-box">
            <h1 className="homepage3-NewArrival">
              NEW <br />
              ARRIVAL
            </h1>
          </div>
          <div className="pro-green"></div>
          <div className="homepage3-left-box">
            <p className="homepage3-word">
              藝術——————新品上架
              <br />
              <Link
                to="/"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                className="homepage3-more"
              >
                MORE
              </Link>
            </p>
            {/* <div className="switchLeftRight">
              <button className="switchLeftBtn">
                <IoIosArrowRoundBack size={50} />
              </button>
              <button className="switchRightBtn">
                <IoIosArrowRoundForward size={50} />
              </button>
            </div> */}
          </div>

          <div className="homepage3-right-box">
            <div className="pro-arrow">
              <marquee scrollamount="10" direction="right">
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
              </marquee>
            </div>
            <div className="slickWidth">
              {/* <div className="switchLeftBtn">
                <IoIosArrowRoundBack size={70} />
              </div>
              <div className="switchRightBtn">
                <IoIosArrowRoundForward size={70} />
              </div> */}
              <Slider {...settings}>
                <div className="slickPic1">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA6} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic2">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA3} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic3">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA2} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic4">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA4} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic5">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA5} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic6">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA1} alt="" />
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
