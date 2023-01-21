import React from 'react'
import Header from './components/Header';

export default function Layout({ children , data }) {
  return (
      <React.Fragment>
          <div className="home page-template page-template-page-templates page-template-template-aveo-vcard page-template-page-templatestemplate-aveo-vcard-php page page-id-5 custom-background masthead-fixed full-width grid">
              {/* <div className="preloader">
            <div className="preloader-animation">
              <div className="preloader-spinner">
              </div>
            </div>
          </div> */}
              <Header data={data} />
              <div id="page" className="page-layout">
                  <div id="main" className="site-main">
                      <div className="pt-wrapper container">

                          <div className="subpages">
                              {children}
                          </div>
                      </div>
                  </div>

                  <div className="app-arrows-nav">
                      <div className="app-arrow-left">
                          <i className="fa fa-angle-left" aria-hidden="true"></i>
                      </div>
                      <div className="app-arrow-right">
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </div>
                  </div>

              </div>
              <footer>
                  <span id="updating">Updating <i className="fa fa-spinner" aria-hidden="true"></i> </span>
                  <div className="copyrights">© {new Date().getFullYear()} {data.setting?.name ?? ""} All rights reserved.  </div>
              </footer>

          </div>
      </React.Fragment>
  )
}
