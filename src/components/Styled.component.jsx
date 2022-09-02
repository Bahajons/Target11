import styled from "styled-components";

export  const About = styled.div`
background-image: url('img/bg/sayt.jpg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
h2{
  text-align: center;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
}
.info{
  background-color: #fff;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  background-size: cover;
  border-left: 20px solid #0287ff;
  div{
    width: 100%;
    margin: 0 auto;
  }
  h4{
    color: black;
    /* text-align: center; */
    font-weight: 600;
  }
}
@media screen and (max-width: 480px) {
background-image: linear-gradient(180deg,#002147,#004595);
background-repeat: no-repeat;
background-position: center;
background-size: cover;
h2{
  text-align: center;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 33px;
}
.info{
  background-size: cover;
  div{
    width: 85%;
    margin: 0 auto;
  }
  h4{
    color: black;
    font-size: 16px;
    font-weight: 500;
  }
}
}
`

export  const Project = styled.div`
background-image:url('img/bg/loyihalar.png');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
h2{
  text-align: center;
  color: #0177ea;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-top: 15px;
}
.loyiha{
  .row{
    border-radius: 30px;
    padding: 15px;
    margin-bottom: 24px;
    border: 3px solid #0177ea;
    font-size: 35px;
    font-weight: 700;
  }
}
@media screen and (max-width:480px) {
  .loyiha{
    .row{
      border-radius: 30px;
      border: 3px solid #0177ea;
      font-size: 20px;
      font-weight: 700;
    }
  }
}
`
export const Qadriyat = styled.div`
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
export const Fanlar = styled.div`
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