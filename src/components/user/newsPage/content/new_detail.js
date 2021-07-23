import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Menu from '../../homePage/content/menu/Menu';
import Footer from '../../homePage/content/footer/Footer';

const New_detail = (props) => {
     const { id } = useParams();
     const [results, setResults] = useState([]);

     const get = () => {
          axios({
               method: 'get',
               url: 'http://localhost:8000/api/news/' + id,
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

     return (
          <Fragment>
               <Menu />
               <div className="main">
                    <div className="detail">
                         <p>{results.title}</p>
                    </div>
                    <div className="d-flex ml-2v">
                         <Link to="/news" color="red" >
                              <img src="https://image.flaticon.com/icons/png/512/0/340.png" style={{ height: '20px' }} />
                         </Link>
                         <p className="detail_date">{results.updated_at}</p>
                    </div>
                    <hr />
                    <div className="content">
                         <img src={results.img} style={{ width: '100%' }} />
                         <h4>{results.shortContent}</h4>
                         <p>{results.content}</p>
                    </div>
                    <div className="row">
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://i1.wp.com/hocjavascript.net/wp-content/uploads/2021/05/Math.random-co-thuc-su-la-random-hay-khong.png" alt="Mountains" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum dolor sit amet, tempor prodesset eos no.
                                        Temporibus necessitatibus sea ei, at tantas oporteat
                                        nam. Lorem ipsum dolor sit amet, tempor prodesset eos
                                        no.
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                        Lorem ipsum dolor sit amet, tempor prodes
                                   </p>
                              </div>
                         </div>
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg" alt="Lights" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum ipsum dolor sit amet, dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                              </div>
                         </div>
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg" alt="Lights" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum dolor  ipsum dolor sit amet, ipsum dolor sit amet, sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                              </div>
                         </div>
                         <div className="detail_column">
                              <div className="content">
                                   <Link to="/new_detail"  >
                                        <img className="content_img" src="https://i0.wp.com/static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Among-Us-Random-Name-Generator.jpg?w=750&ssl=1" alt="Nature" style={{ width: '100%' }} />
                                   </Link>
                                   <Link to="/new_detail"  >
                                        <h5>Hoa nở trong bão</h5>
                                   </Link>
                                   <p className="content_bottom">Lorem ipsum dolor sit ametipsum dolor sit amet,, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="main_comment">
                    <div className="new_comment">
                         <div className="new_comment_image">
                              <img className="new_comment_img" src="https://baokhanhhoa.vn/dataimages/201909/original/images5377069_hoa.jpg" alt="Nature" />
                         </div>
                         <div className="new_comment_content">
                              <div className="new_comment_name">name</div>
                              <div className="new_comment_name_content">

                                   Good job !
                                   Great!!!!
                                   Good job !
                                   

                              </div>
                         </div>
                    </div>
               </div>

               <div className="main_comment">
                    <div className="new_comment">
                         <div className="new_comment_image">
                              <img className="new_comment_img" src="https://baokhanhhoa.vn/dataimages/201909/original/images5377069_hoa.jpg" alt="Nature" />
                         </div>
                         <div className="new_comment_content">
                              <div className="new_comment_name">name</div>
                              <div className="new_comment_name_content">
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   Good job !
                                   Great!!!!
                                   Good job !
                                   

                              </div>
                         </div>
                    </div>
               </div>
               <div className="main_comment">
                    <form className="main_comment_form">
                         <div>
                              {/* <label htmlFor="subject">Comment</label> */}
                         </div>
                         <div>
                              <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '100px' }} defaultValue={""} />
                         </div>
                         <div>
                              <input type="submit" defaultValue="Submit" />
                         </div>
                    </form>
               </div>

               <Footer />
          </Fragment>
     );

}

export default New_detail;