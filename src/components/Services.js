import React from 'react'
import { asset } from '../Helper';
export default function Services(props) {
    var data = props.data; 
  return (
      <section id="services" data-title="Services" className="pt-page pt-page-services pt-page-current pt-page-relative pt-page-scaleUp">
          <div className="section-inner custom-page-content">
              <div className="page-header">
                  <h2 className="section-title">Services</h2>
              </div>
              <div className="page-content">
                  <div className="fw-page-builder-content">
                      <section className="fw-main-row ">
                          <div className="fw-container">
                              <div className="row">


                                  <div className=" col-xs-12 col-sm-12 ">
                                      <div id="col_inner_id-63c4fb150e694" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title">
                                              <h3>My<span> Services</span></h3>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="row">

                                  {data.abilities ? data.abilities.map((e, index) => (
                                      <div key={e._id} className=" col-xs-12 col-sm-3 ">
                                          <div id={'col_inner_id-'+e._id} className="fw-col-inner"
                                              data-paddings="0px 0px 0px 0px">
                                              <div className="service-block">
                                                  <div className="service-info">
                                                      <div className="service-image">
                                                          <img src={asset(e.image ?? "")} alt="" />
                                                      </div>
                                                      <h4>{e.title}</h4>
                                                      <p>{e.description}</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  ))
                                      :
                                      <strong>Loading..</strong>
                                  }
                                  


                                  
                              </div>

                              {/* <div className="row">


                                  <div className=" col-xs-12 col-sm-12 ">
                                      <div id="col_inner_id-63c4fb150ea36" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title">
                                              <h3>Clients<span></span></h3>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="row">


                                  <div className=" col-xs-12 col-sm-2 ">
                                      <div id="col_inner_id-63c4fb150eafb" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <div className="client-block">
                                              <a href="#" target="_self"><img
                                                  src="wp-content/uploads/2017/10/client_1-80x80.png"
                                                  alt="https://lmpixels.com/wp/aveo/wp-content/uploads/2017/10/client_1-80x80.png"
                                                  width="80" height="80" /></a>
                                          </div>
                                      </div>
                                  </div>


                                  <div className=" col-xs-12 col-sm-2 ">
                                      <div id="col_inner_id-63c4fb150ef2d" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <div className="client-block">
                                              <a href="#" target="_self"><img
                                                  src="wp-content/uploads/2017/10/client_2-80x80.png"
                                                  alt="https://lmpixels.com/wp/aveo/wp-content/uploads/2017/10/client_2-80x80.png"
                                                  width="80" height="80" /></a>
                                          </div>
                                      </div>
                                  </div>


                                  <div className=" col-xs-12 col-sm-2 ">
                                      <div id="col_inner_id-63c4fb150f2d5" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <div className="client-block">
                                              <a href="#" target="_self"><img
                                                  src="wp-content/uploads/2017/10/client_3-80x80.png"
                                                  alt="https://lmpixels.com/wp/aveo/wp-content/uploads/2017/10/client_3-80x80.png"
                                                  width="80" height="80" /></a>
                                          </div>
                                      </div>
                                  </div>


                                  <div className=" col-xs-12 col-sm-2 ">
                                      <div id="col_inner_id-63c4fb150f664" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <div className="client-block">
                                              <a href="#" target="_self"><img
                                                  src="wp-content/uploads/2017/10/client_4-80x80.png"
                                                  alt="https://lmpixels.com/wp/aveo/wp-content/uploads/2017/10/client_4-80x80.png"
                                                  width="80" height="80" /></a>
                                          </div>
                                      </div>
                                  </div>


                                  <div className=" col-xs-12 col-sm-2 ">
                                      <div id="col_inner_id-63c4fb150f9f1" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <div className="client-block">
                                              <a href="#" target="_self"><img
                                                  src="wp-content/uploads/2017/10/client_5-80x80.png"
                                                  alt="https://lmpixels.com/wp/aveo/wp-content/uploads/2017/10/client_5-80x80.png"
                                                  width="80" height="80" /></a>
                                          </div>
                                      </div>
                                  </div>


                                  <div className=" col-xs-12 col-sm-2 ">
                                      <div id="col_inner_id-63c4fb150fd81" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">
                                          <div className="client-block">
                                              <a href="#" target="_self"><img
                                                  src="wp-content/uploads/2017/10/client_6-80x80.png"
                                                  alt="https://lmpixels.com/wp/aveo/wp-content/uploads/2017/10/client_6-80x80.png"
                                                  width="80" height="80" /></a>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="row">


                                  <div className=" col-xs-12 col-sm-12 ">
                                      <div id="col_inner_id-63c4fb151018e" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="fw-divider-space" ></div>

                                          <div className="block-title">
                                              <h3 className="testimonials-slider-title">Testimonials</h3>
                                          </div>

                                          <div id="testimonials_11a4cebd80e9b39ef606f6ff53b0a42a"
                                              className="testimonials owl-carousel" data-mobile-items="1"
                                              data-tablet-items="2" data-items="2">

                                              <div
                                                  className="testimonial-item testimonial-testimonials-63c4fb151026c">

                                                  <div className="testimonial-credits">
                                                      <div className="testimonial-picture">
                                                          <img src="wp-content/uploads/2017/10/testimonial_photo_1.jpg"
                                                              alt="Maria Richardson" />
                                                      </div>
                                                      <div className="testimonial-author-info">
                                                          <p className="testimonial-author">Maria Richardson
                                                          </p>
                                                          <p className="testimonial-firm"><a
                                                              href="#">Lindsley&#039;s Lumber</a></p>
                                                      </div>
                                                  </div>

                                                  <div className="testimonial-content">
                                                      <div className="testimonial-text">
                                                          <p>&quot;Phasellus eu nunc tincidunt, ultricies
                                                              elit vitae, pretium eros. Sed sed ipsum sed
                                                              massa.&quot;</p>
                                                      </div>
                                                  </div>

                                              </div>
                                              <div
                                                  className="testimonial-item testimonial-testimonials-63c4fb151026c">

                                                  <div className="testimonial-credits">
                                                      <div className="testimonial-picture">
                                                          <img src="wp-content/uploads/2017/10/testimonial_photo_2.jpg"
                                                              alt="John Doe" />
                                                      </div>
                                                      <div className="testimonial-author-info">
                                                          <p className="testimonial-author">John Doe</p>
                                                          <p className="testimonial-firm"><a href="#">Apple
                                                              Inc.</a></p>
                                                      </div>
                                                  </div>

                                                  <div className="testimonial-content">
                                                      <div className="testimonial-text">
                                                          <p>&quot;Vivamus porta dapibus tristique.
                                                              Suspendisse et arcu eget nisi convallis
                                                              eleifend nec ac lorem.</p>
                                                      </div>
                                                  </div>

                                              </div>
                                              <div
                                                  className="testimonial-item testimonial-testimonials-63c4fb151026c">

                                                  <div className="testimonial-credits">
                                                      <div className="testimonial-picture">
                                                          <img src="wp-content/uploads/2017/10/testimonial_photo_3.jpg"
                                                              alt="George McQueen" />
                                                      </div>
                                                      <div className="testimonial-author-info">
                                                          <p className="testimonial-author">George McQueen</p>
                                                          <p className="testimonial-firm"><a href="#">Harmony
                                                              House</a></p>
                                                      </div>
                                                  </div>

                                                  <div className="testimonial-content">
                                                      <div className="testimonial-text">
                                                          <p>&quot;Aliquam congue auctor lectus sed
                                                              fermentum. Nulla ultricies tellus quis
                                                              sapien lacinia egestas.&quot;</p>
                                                      </div>
                                                  </div>

                                              </div>
                                          </div>

                                          <div className="fw-divider-space" ></div>
                                      </div>
                                  </div>
                              </div>

                              <div className="row">


                                  <div className=" col-xs-12 col-sm-12 ">
                                      <div id="col_inner_id-63c4fb1510396" className="fw-col-inner"
                                          data-paddings="0px 0px 0px 0px">

                                          <div className="block-title">
                                              <h3>Pricing<span></span></h3>
                                          </div>
                                          <div className="fw-pricing clearfix">
                                              <div className="fw-package-wrap fw-col-md-4 default-col ">
                                                  <div className="fw-package">
                                                      <div className="fw-heading-row">
                                                          <span>
                                                              Plan 1 </span>
                                                      </div>
                                                      <div className="fw-pricing-row">
                                                          <span>
                                                              $64 </span>
                                                          <small>
                                                          </small>
                                                      </div>
                                                      <div className="fw-button-row">
                                                          <a href="#" target="_self"
                                                              id="button_6eed4388ce3c3bdb9bd6d6aacbae281b"
                                                              className="btn btn-primary" data-mtop="0"
                                                              data-mbottom="0">Free Trial</a>
                                                      </div>
                                                      <div className="fw-default-row">
                                                          Lorem ipsum dolor </div>
                                                      <div className="fw-default-row">
                                                          Pellentesque scelerisque </div>
                                                      <div className="fw-default-row">
                                                          Morbi eu sagittis </div>
                                                      <div className="fw-default-row">
                                                      </div>
                                                      <div className="fw-default-row">
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="fw-package-wrap fw-col-md-4 highlight-col ">
                                                  <div className="fw-package">
                                                      <div className="fw-heading-row">
                                                          <span>
                                                              Plan 2 </span>
                                                      </div>
                                                      <div className="fw-pricing-row">
                                                          <span>
                                                              $128 </span>
                                                          <small>
                                                          </small>
                                                      </div>
                                                      <div className="fw-button-row">
                                                          <a href="#" target="_self"
                                                              id="button_0e0c9001772057802bab7a7f351c4f47"
                                                              className="btn btn-primary" data-mtop="0"
                                                              data-mbottom="0">Free Trial</a>
                                                      </div>
                                                      <div className="fw-default-row">
                                                          Lorem ipsum dolor </div>
                                                      <div className="fw-default-row">
                                                          Pellentesque scelerisque </div>
                                                      <div className="fw-default-row">
                                                          Morbi eu sagittis </div>
                                                      <div className="fw-default-row">
                                                          Donec non diam </div>
                                                      <div className="fw-default-row">
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="fw-package-wrap fw-col-md-4 default-col ">
                                                  <div className="fw-package">
                                                      <div className="fw-heading-row">
                                                          <span>
                                                              Plan 3 </span>
                                                      </div>
                                                      <div className="fw-pricing-row">
                                                          <span>
                                                              $256 </span>
                                                          <small>
                                                          </small>
                                                      </div>
                                                      <div className="fw-button-row">
                                                          <a href="#" target="_self"
                                                              id="button_71eff56984c67bc0dd15d8376d0c5b1a"
                                                              className="btn btn-primary" data-mtop="0"
                                                              data-mbottom="0">Free Trial</a>
                                                      </div>
                                                      <div className="fw-default-row">
                                                          Lorem ipsum dolor </div>
                                                      <div className="fw-default-row">
                                                          Pellentesque scelerisque </div>
                                                      <div className="fw-default-row">
                                                          Morbi eu sagittis </div>
                                                      <div className="fw-default-row">
                                                          Donec non diam </div>
                                                      <div className="fw-default-row">
                                                          Aenean nec libero </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div> */}

                          </div>
                      </section>
                  </div>
              </div>
          </div>
      </section>
  )
}
