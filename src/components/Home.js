import React from 'react'
import { asset } from '../Helper';
export default function Home(props) {
    var data = props.data;
  return (
      <section id="home" data-title="Home" className="pt-page pt-page-home pt-page-current pt-page-relative pt-page-moveFromRight">
          <div className="section-inner start-page-content">

              <div className="page-header">
                  <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-4">
                          <div className="photo">
                              <a href="index.htm">
                                  <img src={asset(data.setting?.profile ?? "")} alt="" />
                              </a>
                          </div>
                      </div>

                      <div className="col-sm-8 col-md-8 col-lg-8">
                          <div className="title-block">
                              <h2>{data.setting?.name ?? ""}</h2>
                              <div className="owl-carousel text-rotation">
                                  <div className="item">
                                      <div className="sp-subtitle">{data.setting?.career_title ?? ""}</div>
                                  </div>
                              </div>
                          </div>

                          <div className="social-links">
                              <a href="#" target="_blank" title="Twitter">
                                  <i className="fa fa-twitter"></i>
                              </a>
                              <a href="#" target="_blank" title="Facebook">
                                  <i className="fa fa-facebook"></i>
                              </a>
                              <a href="#" target="_blank" title="Instagram">
                                  <i className="fa fa-instagram"></i>
                              </a>
                              <a href="#" target="_blank" title="LinkedIn">
                                  <i className="fa fa-linkedin"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="page-content">
                  <div className="fw-page-builder-content">
                      <section className="fw-main-row ">
                          <div className="fw-container">
                              <div className="row">


                                  <div className=" col-xs-12 col-sm-6 ">
                                      <div id="col_inner_id-63c4fb150b488" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title">
                                              <h3>About<span> Me</span></h3>
                                          </div>
                                          {data.setting?.about ?? ""}
                                          <br />
                                          <a href={asset(data.setting?.cv ?? "")}
                                            target="_blank" id="button_f5776ea5255d3cd91c8cbbfe56a2c79f"
                                            className="btn btn-secondary" data-mtop="15"
                                            data-mbottom="0">Download Resume</a>
                                      </div>
                                  </div>


                                  <div className=" col-xs-12 col-sm-6 ">
                                      <div id="col_inner_id-63c4fb150b59f" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <div className="block-title">
                                              <h3>Personal<span> Info</span></h3>
                                          </div>
                                          <div id="info-list-63c4fb150b60b" className="info-list">

                                              <ul className="fw-info-list info-list">
                                                 
                                                  <li><span className="title">Address</span>
                                                      <span className="value">{data.setting?.address ?? ""}</span>
                                                  </li>
                                                  <li><span className="title">e-mail</span>
                                                      <span className="value">
                                                          <a href={data.setting?.email ? 'mailto:'+data.setting?.email: ''}
                                                              target="_self">
                                                              <span className="__cf_email__">{data.setting?.email ?? ""}</span>
                                                          </a>
                                                      </span>
                                                  </li>
                                                  <li><span className="title">Phone</span>
                                                      <span className="value">{data.setting?.phone ?? ""}</span>
                                                  </li>
                                                  <li><span className="title">Nationality</span>
                                                      <span className="value">{data.setting?.nationality ?? ""}</span>
                                                  </li>
                                                  <li><span className="title">Languages</span>
                                                      <span className="value">{data.setting?.languages ?? ""}</span>
                                                  </li>
                                                  
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </section>
                  </div>
              </div>
          </div>
      </section>
  )
}
