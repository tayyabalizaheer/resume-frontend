import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api, asset } from '../Helper';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import DefaultImage from '../image/default.png';
export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getProject = async () => {
            console.log(id);
            const url = api("project/" + id);
            const response = await fetch(url);
            const dataJson = await response.json();
            console.log(response, response.code);
            if (response.status === 200) {
                setProject(dataJson.data.project);
                setImages(dataJson.data.images);
                setLoading(false);
            }

        };
        getProject();
    }, []);
    return (
        <section id="project" data-title="project" className="pt-page pt-page-project pt-page-current pt-page-relative pt-page-moveFromRight pt-page-ontop">
            
            <article id="post-75"
                className="post-75 fw-portfolio type-fw-portfolio status-publish has-post-thumbnail hentry fw-portfolio-category-media">
                <div className="entry-content">
                    <div id="portfolio-page" className="portfolio-page-content">
                        <div className="portfolio-page-wrapper p-3">
                            <div className="portfolio-page-title">
                                <h1>{project?.title}</h1>
                            </div>
                            <div className="row">
                                {
                                loading ?
                                    <div className="preloader vh-100">
                                        <div className="preloader-animation">
                                            <div className="preloader-spinner">
                                            </div>
                                        </div>
                                    </div>
                                :
                                    <>
                                        
                                        <div className="col-sm-12 col-md-8 portfolio-block">
                                            <Carousel>
                                                <div>
                                                    <img src={asset(project.thumbnail ? project.thumbnail : "")} />
                                                </div>
                                                {images ? images.map((e, index) => (
                                                    <div>
                                                        <img src={asset(e.path ? e.path : "")} />
                                                    </div>
                                                ))
                                                    :
                                                    <div>
                                                        <img src={DefaultImage} />
                                                    </div>
                                                }
                                            </Carousel>
                                        </div>

                                        <div className="col-sm-12 col-md-4 portfolio-block">
                                            <div className="block-title">
                                                <h3>Description</h3>
                                            </div>
                                            <ul className="project-general-info">
                                                <li>

                                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> <b>Region:</b> {project?.region} </p>
                                                </li>

                                                <li>
                                                    <p><i className="fa fa-globe"></i> <a href={project?.link}
                                                        target="_blank">{project?.link}</a></p>
                                                </li>
                                            </ul>

                                            <div className="text-justify">
                                                <p>{project?.description}</p>
                                            </div>

                                            <div className="tags-block">
                                                <div className="block-title">
                                                    <h3>Technology</h3>
                                                </div>
                                                <ul className="tags">

                                                    {project?.technology ? project?.technology?.split(',').map((e, index) => (
                                                        <li><a>{e}</a></li>

                                                    ))
                                                        :
                                                        <li><a></a></li>
                                                    }


                                                </ul>
                                            </div>

                                            <div className="btn-group share-buttons">
                                                <div className="block-title">
                                                    <h3>Share</h3>
                                                </div>
                                                <a href={`https://twitter.com/share?url=${window.location.href}`}
                                                    onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                                                    className="btn" target="_blank" title="Share on Twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                                <a href={`https://plus.google.com/share?url=${window.location.href}`}
                                                    onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                                                    className="btn" title="Share on Google+">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                                                    onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                                                    className="btn" title="Share on LinkedIn">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                            
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
                
            
            
        </section>
    )
}
