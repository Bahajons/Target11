import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'
import { maqsad } from '../Data'
export default function Qadriyat() {


  const Qadriyat = styled.div`
  background-image: url('img/bg/loyihalar.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 25px;
    h1{
      text-transform:uppercase;
      color: #0072e3;
      text-align: center;
    }
    .box{
      background-color: #0072e3;
      border-radius: 50px;
      padding: 0 0 25px 0;
      div{
        width: 90%;
        border-radius: 35px;
        background-color: #fff;
        padding:30px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        margin: 15px auto;
        p{
          font-size: 45px;
          color: #0072e3;
          line-height: 48px;
          text-align: center;
          font-weight: 600;
        }
      }
    }
    .col-md-6{
      padding-top: 25px;
      .blue{
        background-color: #0072e3;
        background-position: center;
        background-size: cover;
        padding: 0 25px 25px 25px;
        border-radius: 0 30px 0 30px;
        .white{
          background-color: white;
          border-radius: 30px;
          padding: 25px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
          p{
            font-size: 23px;
            line-height: 1.4;
            color: #0072e3;
          }
        }
      }
    }
    @media screen and (max-width:480px) {
      background-image: url('img/bg/loyihalar.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
    h1{
      text-transform:uppercase;
      color: #0072e3;
      font-size: 33px;
      text-align: center;
    }
    .box{
      background-color: #0072e3;
      border-radius: 50px;
      padding: 0 0 15px 0;
      div{
        width: 90%;
        border-radius: 35px;
        background-color: #fff;
        padding:20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        margin: 10px auto;
        p{
          font-size: 20px;
          color: #0072e3;
          line-height: 20px;
          text-align: center;
          font-weight: 600;
        }
      }
    }
    .col-md-6{
      padding-top: 25px;
      .blue{
        background-color: #0072e3;
        background-position: center;
        background-size: cover;
        padding: 0 25px 25px 25px;
        border-radius: 0 30px 0 30px;
        .white{
          background-color: white;
          border-radius: 30px;
          padding: 25px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
          p{
            font-size: 16px;
            line-height: 1.4;
            color: #0072e3;
          }
        }
      }
    }
    }
  `
  const Fanlar = styled.div`
    background-image: url('img/bg/project.png');
    background-size: cover;
    background-position: center;
    padding-bottom: 30px;
    h1{
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      padding: 15px 0;
    }
    @media screen and (max-width:480px) {
      h1{
        font-size: 28px;
      }
    }
  `

  return (
    <>
      <Qadriyat>
        <div className="container">
          <h1 className='py-md-5 pt-4 pb-2'>bizning oliy maqsadimiz</h1>
          <div className='box'>
            <div>
              <p>Xalqimizga ilm-tarbiya berish va ish bilan ta`minlash orqali  qadrini va sha`nini oshirish</p>
            </div>
          </div>
          <div className="row">
            {maqsad.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className='blue'>
                  <div className='white'>
                    <p>{item}</p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>

      </Qadriyat>
      <Fanlar>
        <div className="container">
          <h1>Chuqurlashtirilgan fanlar</h1>
          <div>
            <div className="row my-2 align-items-center">
              <div className="col-md-4">
                <img src="img/bg/fan1.png" className='w-100' alt="" />
              </div>
              <div className="col-md-4">
                <img src="img/bg/ingliztili.png" className='w-100' alt="" />
              </div>
            </div>
            <div className="row my-2 align-items-center">
              <div className="col-md-4 my-2 offset-md-2 offset-0">
                <img src="img/bg/matematika.png" className='w-100' alt="" />
              </div>
              <div className="col-md-4">
                <img src="img/bg/fan2.png" className='w-100' alt="" />
              </div>
            </div>
            <div className="row my-2 align-items-center">
              <div className="col-md-4 offset-md-4 offset-0">
                <img src="img/bg/fan3.png" className='w-100' alt="" />
              </div>
              <div className="col-md-4 my-2">
                <img src="img/bg/mantiqiy.png" className='w-100' alt="" />
              </div>
            </div>
          </div>
          <h1>NEGA AYNAN TARGET</h1>
          <img src="img/bg/negatarget.png" className='w-100' alt="" />
        </div>
      </Fanlar>
    </>
  )
}