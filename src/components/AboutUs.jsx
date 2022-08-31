import React from 'react'

export default function AboutUs() {
  return (
    <>
      <div className="slider-area">
        <div className="pages-title">
          <div className="single-slider slider-height slider-height-breadcrumb d-flex align-items-center"
            style={{ backgroundImage: "url('img/bg/future.jpg')" }}>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-12">
                  <div className="slider-content slider-content-breadcrumb text-center">
                    <h1 className="white-color f-700">Biz haqimizda</h1>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about start --> */}
      <div id="about" className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="about-img mb-55">
                <img src="img/bg/future1.png" alt="" />
              </div>
              <div className="about-title-section about-title-section-2 mb-30">
                <h1>Who We Are</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad miniveniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea consequatur? Quis autem vel eum iure reprehenderit.</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="about-img mb-55">
                <img src="img/bg/future2.png" alt="" />
              </div>
              <div className="about-title-section about-title-section-2 mb-30">
                <h1>Our MIssion Vission</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.</p>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-xl-12">
              <div className="university-banner mb-30">
                <img src="img/bg/future4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about end --> */}

    </>
  )
}
