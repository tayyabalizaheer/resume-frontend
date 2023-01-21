import React from 'react'

export default function Contact(props) {
  var data = props.data;
  return (
      <section id="contact" data-title="Contact" className="pt-page pt-page-contact pt-page-current pt-page-relative pt-page-rotatePullLeft">
          <div className="section-inner custom-page-content">
              <div className="page-header">
                  <h2 className="section-title">Contact</h2>
              </div>
              <div className="page-content">
                  <div className="fw-page-builder-content">
                      <section className="fw-main-row ">
                          <div className="fw-container">
                              <div className="row">


                                  <div className=" col-xs-12 col-sm-6 ">
                                      <div id="col_inner_id-63c4fb151dd0d" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title">
                                              <h3>Get in<span> Touch</span></h3>
                                          </div>
                                          <div className="fw-map"
                                              data-locations="[{&quot;title&quot;:&quot;&quot;,&quot;url&quot;:&quot;&quot;,&quot;thumb&quot;:false,&quot;coordinates&quot;:{&quot;lat&quot;:34.0522342,&quot;lng&quot;:-118.2436849},&quot;description&quot;:&quot;&quot;}]"
                                              data-map-type="ROADMAP" data-map-height="180"
                                              data-gmap-key="AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o"
                                              data-disable-scrolling="" data-map-zoom="16">
                                              <div className="fw-map-canvas"></div>
                                          </div>
                                          <div className="fw-divider-space" ></div>

                                          <div id="info-list-63c4fb151e048" className="info-list-w-icon">

                                              <div className="info-block-w-icon">
                                                  <div className="ci-icon">
                                                      <div className="ci-icon">
                                                          <i className="fa fa-map-marker"></i>
                                                      </div>
                                                  </div>
                                                  <div className="ci-text">
                                                      <h5>{data.setting?.address ?? ""}</h5>
                                                  </div>
                                              </div>
                                              <div className="info-block-w-icon">
                                                  <div className="ci-icon">
                                                      <div className="ci-icon">
                                                          <i className="fa fa-envelope"></i>
                                                      </div>
                                                  </div>
                                                  <div className="ci-text">
                                                      <h5><a href={data.setting?.email ? 'mailto:' + data.setting?.email : ''}
                                                          className="__cf_email__">{data.setting?.email ?? ""}</a>
                                                      </h5>
                                                  </div>
                                              </div>
                                              <div className="info-block-w-icon">
                                                  <div className="ci-icon">
                                                      <div className="ci-icon">
                                                          <i className="fa fa-phone"></i>
                                                      </div>
                                                  </div>
                                                  <div className="ci-text">
                                                      <h5>{data.setting?.phone ?? ""}</h5>
                                                  </div>
                                              </div>

                                              <div className="info-block-w-icon">
                                                  <div className="ci-icon">
                                                      <div className="ci-icon">
                                                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                                      </div>
                                                  </div>
                                                  <div className="ci-text">
                                                      <h5>{data.setting?.phone ?? ""}</h5>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>


                                  <div className=" col-xs-12 col-sm-6 ">
                                      <div id="col_inner_id-63c4fb151e09c" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title">
                                              <h3>Contact<span> Form</span></h3>
                                          </div>

                                          <form id="contact_form_63c4fb151e13b" className="contact-form"
                                              action="#" method="post">

                                              <div className="messages"></div>

                                              <div className="controls">
                                                  <div className="form-group form-group-with-icon">
                                                      <i className="form-control-icon fa fa-user"></i>
                                                      <label>Full Name</label>
                                                      <input id="form_name" type="text" name="name"
                                                          className="form-control" required="required"
                                                          data-error="Name is required." />
                                                      <div className="form-control-border"></div>
                                                      <div className="help-block with-errors"></div>
                                                  </div>

                                                  <div className="form-group form-group-with-icon">
                                                      <i className="form-control-icon fa fa-envelope"></i>
                                                      <label>Email Address</label>
                                                      <input id="form_email" type="email" name="email"
                                                          className="form-control" required="required"
                                                          data-error="Valid email is required." />
                                                      <div className="form-control-border"></div>
                                                      <div className="help-block with-errors"></div>
                                                  </div>

                                                  <div className="form-group form-group-with-icon">
                                                      <i className="form-control-icon fa fa-comment"></i>
                                                      <label>Message for Me</label>
                                                      <textarea id="form_message" name="message"
                                                          className="form-control" rows="4"
                                                          required="required"
                                                          data-error="Please, leave me a message."></textarea>
                                                      <div className="form-control-border"></div>
                                                      <div className="help-block with-errors"></div>
                                                  </div>

                                                  <div className="g-recaptcha"
                                                      data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI">
                                                  </div>

                                                  <input type="submit" className="button btn-send"
                                                      value="Send message" />
                                              </div>
                                          </form>

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
