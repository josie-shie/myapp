import React, { useState } from 'react';
import './style/auction.css'
import { withRouter } from 'react-router-dom'
import AuctionProductList from './components/AuctionProductList'

function Auction(props) {

    return (
        <>
            <div className="auctionPage">
                <div className="auctionHeroSection">
                    <div className="auctionHeroSectionLogo">
                        <svg id="Group_351" data-name="Group 351" xmlns="http://www.w3.org/2000/svg" width="270.569" height="63.652" viewBox="0 0 270.569 63.652">
                            <rect id="Rectangle_9" data-name="Rectangle 9" width="91.986" height="63.652" fill="#81fc4d" />
                            <g id="Rectangle_10" data-name="Rectangle 10" transform="translate(91.456)" stroke="#81fc4d" strokeMiterlimit="10" strokeWidth="2">
                                <rect width="179.113" height="63.652" stroke="none" />
                                <rect x="1" y="1" width="177.113" height="61.652" fill="none" />
                            </g>
                            <path id="Path_9" data-name="Path 9" d="M88.946,406.04,85.2,394.963H75.049L71.1,406.04h3.846v.974H67.1v-.974H69.51l13.076-35.232h4.205L99.716,406.04h2.358v.974H85.305v-.974ZM80.33,380.4l-4.82,13.436h9.282Z" transform="translate(-61.976 -357.544)" />
                            <path id="Path_10" data-name="Path 10" d="M126.108,385.957q-1.9,0-3.333,2.461a11.394,11.394,0,0,0-1.436,5.846v13.744h3.64v.923h-16v-.923H111.8V385.444h-2.821v-.923h12.359v4.923a6.954,6.954,0,0,1,2.564-4.026,7.033,7.033,0,0,1,4.308-1.41,5.655,5.655,0,0,1,3.923,1.359,4.906,4.906,0,0,1,1.513,3.846,5.759,5.759,0,0,1-1.128,3.82,4.283,4.283,0,0,1-3.462,1.333,3.94,3.94,0,0,1-3.437-1.538q-1.1-1.538-.281-4.257h1.846Q128.465,385.957,126.108,385.957Z" transform="translate(-68.06 -359.462)" />
                            <path id="Path_11" data-name="Path 11" d="M141.2,400.16V384.006h-2.821v-.923H141.2v-6.615l9.539-2.359v8.975H157.4v.923h-6.667v17.283a9.506,9.506,0,0,0,.487,3.538,1.974,1.974,0,0,0,2.027,1.128,3.325,3.325,0,0,0,2.691-1.539,8.908,8.908,0,0,0,1.513-4.205l.873.1a9.954,9.954,0,0,1-2.257,5.616q-1.846,2.077-6.1,2.077t-6.512-1.692Q141.2,404.622,141.2,400.16Z" transform="translate(-72.331 -358.023)" />
                            <path id="Path_12" data-name="Path 12" d="M213.157,388.5q0,10.565-5.949,14.718-5.489,3.846-15.077,3.846H177.617v-.974H181v-33.95h-3.386v-.974h15.847q9.848,0,14.77,4.026T213.157,388.5ZM191,406.092h1.949q5.178,0,7.41-3.667t2.231-12.282v-2.975q0-11.538-4.411-13.9a12.783,12.783,0,0,0-5.948-1.128H191Z" transform="translate(-78.032 -357.596)" fill="#81fc4d" />
                            <path id="Path_13" data-name="Path 13" d="M258.456,388.5q0,10.565-5.949,14.718-5.487,3.846-15.077,3.846H222.917v-.974H226.3v-33.95h-3.385v-.974h15.847q9.846,0,14.77,4.026T258.456,388.5ZM236.3,406.092h1.949q5.18,0,7.41-3.667t2.231-12.282v-2.975q0-11.538-4.41-13.9a12.79,12.79,0,0,0-5.949-1.128H236.3Z" transform="translate(-84.613 -357.596)" fill="#81fc4d" />
                            <path id="Path_14" data-name="Path 14" d="M268.456,371.168H284.1v.974h-2.821v33.95H284.1v.974H268.456v-.974h2.821v-33.95h-2.821Z" transform="translate(-91.229 -357.596)" fill="#81fc4d" />
                            <path id="Path_15" data-name="Path 15" d="M309.127,371.534q-7.95,0-7.949,15.334v4.051q0,7.282,2.1,11.41t6.205,4.128q5.64,0,10.359-10.975h.923l-.359,11.436h-.564a3.1,3.1,0,0,0-.564-.795,1.076,1.076,0,0,0-.744-.231,30.508,30.508,0,0,0-3.718.795,27.376,27.376,0,0,1-6.564.795q-8.359,0-12.949-4.513t-4.59-13.564q0-9.05,4.8-13.975t12.9-4.923a23.835,23.835,0,0,1,6.128.795,24.769,24.769,0,0,0,3.514.795,1.118,1.118,0,0,0,.768-.231,3.073,3.073,0,0,0,.564-.795h.564l.41,11.129h-.923a31.157,31.157,0,0,0-4.744-7.923A7.291,7.291,0,0,0,309.127,371.534Z" transform="translate(-94.463 -357.5)" fill="#81fc4d" />
                            <path id="Path_16" data-name="Path 16" d="M360.786,371.168l.512,12.872h-.974q-2.258-6.819-4-9.308a5.764,5.764,0,0,0-5.027-2.487h-.615V405.99h4.359v1.077H336.324V405.99h4.358V372.245h-.666a5.818,5.818,0,0,0-5.077,2.59q-1.8,2.591-3.949,9.205h-.974l.512-12.872Z" transform="translate(-100.172 -357.596)" fill="#81fc4d" />
                        </svg>
                    </div>
                    <div className="auctionTitleOne">
                        藝術競標
                    </div>
                    <div className="auctionTitleTwo">
                        ArtDDICT  相信藝術不只有單一價值
                    </div>
                    <div className="auctiondecorationA auctiondecoration">
                        A
                    </div>
                    <div className="auctiondecorationT auctiondecoration">
                        T
                    </div>
                    <div className="auctiondecorationR auctiondecoration">
                        R
                    </div>
                </div>
                <div className="auctionMarquee">
                    AUCTION  &nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="44.503" height="21.089" viewBox="0 0 44.503 21.089">
                        <g id="arror" transform="translate(0 0.354)">
                            <path id="Path_35" data-name="Path 35" d="M1897,872.5h43.8" transform="translate(-1897 -862.309)" fill="none" stroke="#000" strokeWidth="1" />
                            <path id="Path_36" data-name="Path 36" d="M0,10.191,10.191,0,20.382,10.191" transform="translate(43.796) rotate(90)" fill="none" stroke="#000" strokeWidth="1" />
                        </g>
                    </svg>
                    &nbsp;&nbsp;&nbsp;
                    ArtDDICT
                </div>
                <div className="auctionMain">
                    <div className="auctionMainWrap">
                        <div className="auctionMainFilter">
                            <div className="auctionMainFilterLeft">
                                <div className="auctionBreadcrumb">
                                    首頁/競標商品
                                </div>
                                <div className="auctionArrangement">
                                    排列
                                </div>
                                <div className="auctionArrangementInput">
                                    推薦
                                </div>
                                <div className="auctionNumberOfProduct">
                                    Showing 1-9 of 27
                                </div>
                            </div>
                            <div className="auctionMainFilterRight">

                            </div>
                        </div>
                        <div className="auctionMainContent">
                            <div className="auctionsidebar">
                                <div className="auctionsidebarTitle">美術館商品</div>
                                <ul>
                                    <li>新品上市</li>
                                    <li>暢銷商品</li>
                                    <li>服飾</li>
                                    <li>家飾</li>
                                    <li>文具</li>
                                    <li>書籍</li>
                                    <li>配件</li>
                                </ul>
                            </div>
                            <AuctionProductList
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(Auction);