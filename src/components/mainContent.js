import React from "react"
import { useRef, createRef, useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

import Video from "../components/youtube"

import * as containerStyles from "../components/mainContent.module.css"

const sideScroll = (element, speed, distance,step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
};

export default function MainContent() {
    const contentWrapper = useRef(null);
    const contentWrapperRel = useRef(null);
    const [ showVideo, setShowVideo ] = useState(false);
    const videoLoad = createRef();

    useEffect(() => {
        const videoObserver = new IntersectionObserver(onVideoIntersection, {
        rootMargin: '500px 500px',
        threshold: 0.1
        });

        function onVideoIntersection(entries) {
            if (!entries || entries.length <= 0) {
                return;
            }

            if (entries[0].isIntersecting) {
                setShowVideo(true);
                videoObserver.disconnect();
            }
        }

        if (window && 'IntersectionObserver' in window) {
            if (videoLoad && videoLoad.current) {
                videoObserver.observe(videoLoad.current);
            } else {
                setShowVideo(true);
            }
        }
    }, [videoLoad]);

    return (
        <div className={containerStyles.container}>
            <div className={containerStyles.bigColumn}>
                <div className={containerStyles.youtubeVideoContainer} ref={videoLoad}>
                    <h3>Youtube NBA</h3>
                    <div className={containerStyles.borderline}></div>
                    <div className={containerStyles.scrollOverlay}>
                        <button className={containerStyles.scrollButtons} aria-label="Scroll Left" onClick={() => { 
                            sideScroll(contentWrapper.current, 25, 100, -10); 
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} className={containerStyles.scollIcon} aria-hidden="true" />
                        </button>
                        <div className={containerStyles.youtubeVideos} ref={contentWrapper}>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined 
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined 
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined 
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined 
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined 
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                        </div>
                        <button className={containerStyles.scrollButtons} aria-label="Scroll Right" onClick={() => {
                            sideScroll(contentWrapper.current, 25, 100, 10);
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronRight} className={containerStyles.scollIcon} aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className={containerStyles.postListFeaturedContainer}>
                    <h3>NBA Restart 2020</h3>
                    <div className={containerStyles.borderline}></div>
                    <div className={containerStyles.postsContainer}>
                        <div className={containerStyles.featuredPost}>
                            <StaticImage src="../images/blackmamba.jpg" alt="Kobe Bryant" className={containerStyles.featuredImage} />
                            <h2>Baschetul De Play-off A Revenit! Ce S-a Intamplat?</h2>
                            <p>Play-off-ul NBA 2020 S-a Reluat După O Pauză De Două Zile! Cine S-a Mai Calificat În Semifinalele Conferinței?</p>
                        </div>
                        <div className={containerStyles.postList}>
                            <p>Cine Merge Mai Departe In Play-off-ul NBA 2020?</p>
                            <p>Minnesota Va Avea Prim Selectie In NBA Draft 2020</p>
                            <p>Donovan Mitchell Da Startul Unui Play-off NBA Istoric</p>
                            <p>Portland Este Ultima Echipa Calificata In</p>
                        </div>
                    </div>
                </div>
                <div className={containerStyles.youtubeVideoContainer} ref={videoLoad}>
                    <h3>Youtube NBA</h3>
                    <div className={containerStyles.borderline}></div>
                    <div className={containerStyles.scrollOverlay}>
                        <button className={containerStyles.scrollButtons} aria-label="Scroll Left" onClick={() => { 
                            sideScroll(contentWrapperRel.current, 25, 100, -10); 
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} className={containerStyles.scollIcon} aria-hidden="true" />
                        </button>
                        <div className={containerStyles.youtubeVideos} ref={contentWrapperRel}>
                            <div className={containerStyles.video} >
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                            <div className={containerStyles.video}>
                                { showVideo ? <Video 
                                    videoURL="//www.youtube.com/embed/7m0L5QUqWTI"
                                    videoTitle="Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021"
                                    /> : undefined
                                }<span>Stephen Curry Asteapta Cu Nerabdare Noul Sezon 2021</span>
                            </div>
                        </div>
                        <button className={containerStyles.scrollButtons} aria-label="Scroll Right" onClick={() => {
                            sideScroll(contentWrapperRel.current, 25, 100, 10);
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronRight} className={containerStyles.scollIcon} aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className={containerStyles.columnPostsListContainer}>
                    <h3>Istoria NBA</h3>
                    <div className={containerStyles.borderline}></div>
                    <div className={containerStyles.columnPost}>
                        <StaticImage src="../images/blackmamba.jpg" alt="Kobe Bryant" className={containerStyles.columnImage} />
                        <div className={containerStyles.content}>
                            <h2>Povestea Nespusa A Lui Michael "Air" Jordan</h2>
                            <p>Odată cu cel de-al 100-lea articol, NBA Baschet vă prezintă o poveste specială despre cel mai bun baschetbalist și unul dintre cei mai buni sportivi ai tuturor timpurilor – Michael „Air” Jordan.</p>
                            <span>27 Martie 2012</span>
                        </div>
                    </div>
                    <div className={containerStyles.columnPost}>
                        <StaticImage src="../images/blackmamba.jpg" alt="Kobe Bryant" className={containerStyles.columnImage} />
                        <div className={containerStyles.content}>
                            <h2>Povestea Nespusa A Lui Michael "Air" Jordan</h2>
                            <p>Odată cu cel de-al 100-lea articol, NBA Baschet vă prezintă o poveste specială despre cel mai bun baschetbalist și unul dintre cei mai buni sportivi ai tuturor timpurilor – Michael „Air” Jordan.</p>
                            <span>27 Martie 2012</span>
                        </div>
                    </div>
                    <div className={containerStyles.columnPost}>
                        <StaticImage src="../images/blackmamba.jpg" alt="Kobe Bryant" className={containerStyles.columnImage} />
                        <div className={containerStyles.content}>
                            <h2>Povestea Nespusa A Lui Michael "Air" Jordan</h2>
                            <p>Odată cu cel de-al 100-lea articol, NBA Baschet vă prezintă o poveste specială despre cel mai bun baschetbalist și unul dintre cei mai buni sportivi ai tuturor timpurilor – Michael „Air” Jordan.</p>
                            <span>27 Martie 2012</span>
                        </div>
                    </div>
                    <div className={containerStyles.columnPost}>
                        <StaticImage src="../images/blackmamba.jpg" alt="Kobe Bryant" className={containerStyles.columnImage} />
                        <div className={containerStyles.content}>
                            <h2>Povestea Nespusa A Lui Michael "Air" Jordan</h2>
                            <p>Odată cu cel de-al 100-lea articol, NBA Baschet vă prezintă o poveste specială despre cel mai bun baschetbalist și unul dintre cei mai buni sportivi ai tuturor timpurilor – Michael „Air” Jordan.</p>
                            <span>27 Martie 2012</span>
                        </div>
                    </div>     
                </div>
            </div>
            <div className={containerStyles.smallColumn}>
                <div className={containerStyles.smallColumnContainer}>
                    <h3>Noutati</h3>
                    <p>Minnesota Va Avea Prima Selectie In NBA Draft 2020</p>
                    <p>Echipele De Top Au Probleme In Play-off-ul NBA 2020</p>
                    <p>Donovan Mitchell Da Startul Unui Play-off NBA Istoric</p>
                    <p>Portland Este Ultima Echipa Calificata In Play-off</p>
                    <p>Cine Sunt Echipele De Baraj Din Bula NBA?</p>
                    <p>Sunteti Pregatiti Pentru Un Baraj De Play-off In NBA?</p>
                    <p>NBA A Dezvaluit Finalistii Pentru Trofeul De MVP 2020</p>
                </div>
            </div>
        </div>
    )
}