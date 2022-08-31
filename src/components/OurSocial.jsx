import React from 'react'

export default function OurSocial() {
    const style = {
        fontSize: "25px"
    }

    return (
        <>
            <div className="row align-items-center">
                <div className="col-4">
                    <h4>Bizning sahifa</h4>
                </div>
                <div className="col-2">
                    <a href="">
                        <img className="w-100" src="../../img/Instagram.webp" alt="" />
                    </a>
                </div>
                <div className="col-2">
                    <a href="">
                        <img className="w-100" src="../../img/telegram.png" alt="" />
                    </a>
                </div>
                <div className="col-2">
                    <a href="">
                        <img className="w-100" src="../../img/facebook.png" alt="" />
                    </a>
                </div>
                <div className="col-2">
                    <a href="">
                        <img className="w-100" src="../../img/youtube.png" alt="" />
                    </a>
                </div>


                <div className="events-details-share d-flex justify-content-end mt-30">
                    <div className="events-details-title">
                        <span>Bizni sahifa</span>
                    </div>
                    <div className="events-details-socila-icon">
                        <ul>
                            <li><a href="#" style={style}><span className="ti-facebook"></span></a></li>
                            <li><a href="#" style={style}><span className="ti-instagram"></span></a></li>
                            <li><a href="#" style={style}><span className="ti-github"></span></a></li>
                            <li><a href="#" style={style}><span className="ti-google"></span></a></li>
                            <li><a href="#" style={style}><span className="ti-pinterest "></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
