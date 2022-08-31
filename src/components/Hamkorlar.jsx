import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BaseApi from '../BaseApi'

export default function Hamkorlar() {
  const [partner, setPartner] = useState([])

  useEffect(() => {
    GetPartner()

  }, [])


  async function GetPartner() {
    await axios.get(`${BaseApi}partners/`)
      .then(res => {
        console.log(res.data);
        setPartner(res.data)
      })
      .catch(err => { console.log(err); })
  }



  return (
    <>
      {/* <!-- brand start --> */}
      <div className="brand-area pt-80 pt-80 pb-80">
        <h1 className="text-center py-5">Hamkorlarimiz</h1>
        <div className="container">
          <div className="row justify-content-center">
            {partner.map((item, index) => (
              <div className="col-md-2 my-2 col-4" key={index}>
                <img className='w-100' src={item.logo} alt="" />
              </div>
            ))}



            {/* <div className="col-xl-12">
              <div className="brand-list">
                <ul>
                  <li></li>
                  <li><img src="img/brand/brand2.png" alt="" /></li>
                  <li><img src="img/brand/brand3.png" alt="" /></li>
                  <li><img src="img/brand/brand4.png" alt="" /></li>
                  <li><img src="img/brand/brand5.png" alt="" /></li>
                  <li><img src="img/brand/brand6.png" alt="" /></li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- brand end --> */}
    </>
  )
}
