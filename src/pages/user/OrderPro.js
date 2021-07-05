import React from 'react'
import './styles/OrderPro.scss'
import Menu from './components/Menu'
import { Link } from 'react-router-dom'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import { Container } from 'react-bootstrap'

function OrderPro() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu />
        </div>
        <Container fluid>
          <div className="u-row d-flex justify-content-around">
            <div className="u-userPro">
              <Link to="/user-orderpro">商品</Link>
            </div>
            <div className="u-userTic">
              <Link to="/user-ordertic">票券</Link>
            </div>
          </div>
          <div className="u-progress">
            <div className="pr-3 pl-3">進度查詢</div>
            <select
              className="user-select pl-3"
              name=""
              id=""
            >
              <option style={{ color: '#707070' }} value="">
                請選擇
              </option>
              <option value="">全部</option>
              <option value="">待出貨</option>
              <option value="">已完成</option>
              <option value="">取消紀錄</option>
              <option value="">退貨紀錄</option>
            </select>
          </div>

          <div class="u-table">
            <div class="u-th d-flex justify-content-around">
              <div class="u-orderId">訂單編號</div>
              <div class="u-orderDate">訂單日期</div>
              <div class="u-payType">付款狀態</div>
              <div class="u-price">總價</div>
              <div class="u-orderType">訂單狀態</div>
              <div class="u-bt col-2"></div>
            </div>
            <div class="u-tb d-flex justify-content-around">
              <div class="u-orderId  mt-4">訂單編號</div>
              <div class="u-orderDate mt-4">訂單日期</div>
              <div class="u-payType c mt-4">付款狀態</div>
              <div class="u-price mt-4">總價</div>
              <div class="u-orderType mt-4">訂單狀態</div>
              <div class="u-bt col-2">
                <div className="u-Bbtn">
                  <button class="btn btn btn-dark">
                    <Link
                      className="u-link"
                      to="/user-orderpro/detail"
                      style={{ textDecoration: 'none' }}
                    >
                      詳細資料
                    </Link>
                  </button>
                </div>
                <div className="u-Lbtn">
                  <button class="btn btn btn-light">
                    取消
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default OrderPro
