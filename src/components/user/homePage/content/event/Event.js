import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Layout_homePage from '../layout/Layout_homePage';


const Event = (props) => {
    const [results, setResults] = useState([]);

    const get = () => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/event',
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        get();
    }, [])

    const element = results.map((result, index) => {
        if (index % 2 == 0) {
            return <div key={index} className="timeline__item-wrap-old multi-carousel-item">
                <article className="timeline__item">
                    <div className="timeline__item-header">
                        <h5>{result.time}</h5>
                    </div>
                    <div className="timeline__item-main">
                        <img src={result.img} alt="" width="93" height="86" />
                        <p>{result.title}</p>
                    </div>
                </article>
            </div>
        } else {
            return <div key={index} className="timeline__item-wrap-even multi-carousel-item">
                <article className="timeline__item">
                    <div className="timeline__item-header">
                        <h5>{result.time}</h5>
                    </div>
                    <div className="timeline__item-main">
                        <img src={result.img} alt="" width="93" height="86" />
                        <p>{result.title}</p>
                    </div>
                </article>
            </div>
        }
    })

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Layout_homePage title="Our Event" id="event">
            <Carousel responsive={responsive} className="timeline">
                {element}
            </Carousel>
            {/* <div className="multi-carousel px-3" data-items={3}>
                <div className="multi-carousel-inner timeline">
                   
                   
                </div>
                <a className="carousel-control-prev" tabIndex={0} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" tabIndex={0} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </a>
            </div> */}
        </Layout_homePage>
    );
}

export default Event;