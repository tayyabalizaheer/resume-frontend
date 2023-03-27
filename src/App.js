import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import VersionControl from 'react-version-control';
import Cookies from 'universal-cookie';
import './css/custom.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Services from './components/Services'; 
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import renderUpdateContent from './components/renderUpdateContent';
import Contact from './components/Contact';
import { api } from "./Helper";
import $ from 'jquery';
import Data from './data.json';
import Layout from "./Layout";

function App() {
  const cookies = new Cookies();
  const [data, setData] = useState(Data.data);
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    const getData = async () => {
      $('#updating').show();
      try {
        const url = api("home");
        const response = await fetch(url);
        const dataJson = await response.json();
        console.log(response, response.code);
        if (response.status === 200) {
          setData(dataJson.data);
          var appVersion = cookies.get('appVersion');
          $('#updating').html("v" + appVersion ? appVersion:'');
        } 
      } catch (error) {
        console.error(error); 
        // You might send an exception to your error tracker like AppSignal
        $('#updating').html('cached data');
      }
    };
    getData();
  }, []);
  function checkVersion() {
    if (!cookies.get('appVersion')){
      cookies.set('appVersion', process.env.REACT_APP_VERSION, { path: '/'});
    }
    if (cookies.get('appVersion') != process.env.REACT_APP_VERSION){
      window.setLoadUpdate();
      cookies.set('appVersion', process.env.REACT_APP_VERSION, { path: '/' });
    }
  }
  $(function () {
    const location = window.location;
    var currentPage = location.pathname == '/' ? '#home' : location.pathname;
    if (animation) {
      renderPage(currentPage);
      setAnimation(false);
    }
    $('#nav a').on('click tap', function () {
      $(window).scrollTop(0);
      var nextPage = $(this).attr('href');
      nextPage = (nextPage == '/') ? '#home' : nextPage
      if (nextPage !== currentPage) {
        renderPage(nextPage);
        currentPage = nextPage;
      }
    });
    function renderPage(page) {
      $('#nav > li').removeClass('active');
      $(`a[href='${page}']`).parent().attr('class', 'active');
    }
  });
  $(window).on('scroll',function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
      $("header").addClass("sticky-top");
    } else {
      $("header").removeClass("sticky-top");
    }
  });
  return (  
    <VersionControl
      getLatestVersion={() => '1.0.0'}
      version={process.env.REACT_APP_VERSION}
      enabled
      debug
      checkVersion={checkVersion}
      renderHotUpdate={renderUpdateContent}
    >
      <Router>
        <Layout data={data}>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/resume" element={<Resume data={data} />} />
            <Route path="/services" element={<Services data={data} />} />
            <Route path="/portfolio" element={<Portfolio data={data} />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contact" element={<Contact data={data} />} />
          </Routes>
        </Layout>
      </Router>
    </VersionControl>
    
  );
}

export default App;
