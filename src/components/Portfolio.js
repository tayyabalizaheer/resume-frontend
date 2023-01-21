import React from 'react'
import { asset } from '../Helper';
export default function Portfolio(props) {
  var data = props.data; 
  return (
      <section id="portfolio" data-title="Portfolio" className="pt-page pt-page-portfolio pt-page-current pt-page-relative pt-page-moveFromRight pt-page-ontop">
          <div className="section-inner custom-page-content">
              <div className="page-header">
                  <h2 className="section-title">Portfolio</h2>
              </div>
              <div className="page-content">
                  <div className="fw-page-builder-content">
                      <section className="fw-main-row ">
                          <div className="fw-container">
                              <div className="row">
                                  <div className=" col-xs-12 col-sm-12 ">
                                      <div id="col_inner_id-63c4fb1511470" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="portfolio-content" >
                                              <div className="portfolio-grid three-columns active">
                                                  {data.projects ? data.projects.map((e, index) => (
                                                      <figure key={e._id} className="item">
                                                          <img width="1280" height="853"
                                                              src={asset(e.thumbnail ?? "")}
                                                              className="attachment-portfolio-image-three-c size-portfolio-image-three-c wp-post-image"
                                                              alt={e.title} loading="lazy" />
                                                          <a href="" className="ajax-page-load"></a>
                                                          <div className="portfolio-preview-desc">
                                                              <div className="portfolio-preview-desc-inner">
                                                                  <h5 className="view-more btn btn-outline-dark">View more</h5>
                                                              </div>
                                                          </div>
                                                          <h4 className="name">{e.title}</h4>
                                                      </figure>

                                                  ))
                                                      :
                                                      <strong>Loading..</strong>
                                                  }
                                                  
                                              </div>

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
