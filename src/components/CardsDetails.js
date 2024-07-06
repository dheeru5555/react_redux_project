import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT,ADD,REMOVE } from '../redux/actions/action'


const CardsDetails = () => {

  

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {/* {
            data.map((ele)=>{
              return (
                <>
                <div className="items_img">
              <img src={ele.imgdata} alt="" />
            </div> */}

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : qe</p>
                    <p> <strong>Price</strong>  : ₹ 111</p>
                    <p> <strong>Dishes</strong>  : 121</p>
                    <p> <strong>Total</strong>  :₹  22</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} >-</span>
                    <span style={{fontSize:22}}>da</span>
                    <span style={{fontSize:24}} >+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> ★	</span></p>
                    <p><strong>Order Review :</strong> <span >	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          
                {/* </>
              )
            })
          } */}
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails