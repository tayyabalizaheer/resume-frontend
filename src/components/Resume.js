import React from 'react'
import { asset } from '../Helper';
export default function Resume(props) {
    var data = props.data;
  return (
      <section id="resume" data-title="Resume" className="pt-page pt-page-resume pt-page-current pt-page-relative pt-page-flipInLeft">
          <div className="section-inner custom-page-content">
              <div className="page-header">
                  <h2 className="section-title">Resume</h2>
              </div>
              <div className="page-content">
                  <div className="fw-page-builder-content">
                      <section className="fw-main-row ">
                          <div className="fw-container">
                              <div className="row">


                                  <div className=" col-xs-12 col-sm-6 ">
                                      <div id="col_inner_id-63c4fb150c9af" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title fw-timeline-title">
                                              <h3>Experience</h3>
                                          </div>

                                          <div className="timeline" id="timeline-63c4fb150c9ff">
                                              {data.experience ? data.experience.map((e, index) => (
                                                  <div key={e._id} className="timeline-item">
                                                      <h4 className="item-title">{e.title ?? ""}</h4>
                                                      <span className="item-period">{e.year ?? ""}</span>
                                                      <span className="item-small">{e.company ?? ""}</span>
                                                      <p>{e.description ?? ""}</p>
                                                  </div>

                                              ))
                                                  :
                                                  <strong>Loading..</strong>
                                              }
                                          </div>

                                          <div className="fw-divider-space" ></div>
                                      </div>
                                      <div id="col_inner_id-63c4fb150c85a" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title fw-timeline-title">
                                              <h3>Education</h3>
                                          </div>

                                          <div className="timeline" id="timeline-63c4fb150c8ca">
                                              {data.education ? data.education.map((e, index) => (
                                                <div key={e._id} className="timeline-item">
                                                      <h4 className="item-title">{e.title??""}</h4>
                                                      <span className="item-period">{e.year ?? ""}</span>
                                                      <span className="item-small">{e.institute ?? ""}</span>
                                                      <p>{e.description ?? ""}</p>
                                                </div>
                                                  
                                              )) 
                                                  :
                                                  <strong>Loading..</strong>
                                              }
                                          </div>

                                          <div className="fw-divider-space" ></div>
                                      </div>
                                      <div id="col_inner_id-63c4fb150c85a" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title fw-timeline-title">
                                              <h3>Certification</h3>
                                          </div>

                                          <div className="timeline" id="timeline-63c4fb150c8ca">
                                              {data.certifications ? data.certifications.map((e, index) => (
                                                  <div key={e._id} className="timeline-item">
                                                      <h4 className="item-title">{e.title ?? ""}</h4>
                                                      <span className="item-period">{e.year ?? ""}</span>
                                                      <span className="item-small">{e.institute ?? ""}</span>
                                                      <p>{e.description ?? ""}</p>
                                                  </div>

                                              ))
                                                  :
                                                  <strong>Loading..</strong>
                                              }
                                          </div>

                                          <div className="fw-divider-space" ></div>
                                      </div>
                                      
                                  </div>


                                  <div className=" col-xs-12 col-sm-6 ">
                                      <div id="col_inner_id-63c4fb150cb09" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title">
                                              <h3>Skills</h3>
                                          </div>


                                          <div className="skills-info" id="skills-63c4fb150cbb2">
                                              
                                              {data.skills ? data.skills.map((e, index) => (
                                                  <div key={e._id} >
                                                      <h4>{e.title ??""}</h4>
                                                      <div id={'skill-'+e._id}
                                                          data-value={e.percentage ?? "85"} className="skill-container">
                                                          <div className="skill-percentage" style={{width : e.percentage+"%" ?? "85%"}}></div>
                                                      </div>
                                                  </div>

                                              ))
                                                  :
                                                  <strong>Loading..</strong>
                                              }
                                          </div>

                                          <div className="fw-divider-space" ></div>
                                      </div>
                                  </div>
                              </div>


                              <div className="row">


                                  <div className=" col-xs-12 col-sm-12 center">
                                      <div id="col_inner_id-63c4fb150cd86" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <a href={asset(data.setting?.cv ?? "")}
                                              target="_blank" 
                                              className="btn btn-secondary" >Download Resume</a>
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
