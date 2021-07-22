

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import New_menu from './new_menu';
import Footer from '../../homePage/content/footer/Footer';

New_detail.propTypes = {
     title_left: PropTypes.string,
     title: PropTypes.string,
     image: PropTypes.string,
     time: PropTypes.string,
     content: PropTypes.string,
     id: PropTypes.string,
};

New_detail.defaultProps = {
     title_left: '',
     title: '',
     image: '',
     time: '',
     content: '',
     id: ''
}



function New_detail(props) {

     const { id, title, image, time, content, title_left, children } = props;


     return (


          <Fragment>


               <div className="main">
                    <Link to="/news"  >
                         <img className="icon_return" src="https://media.istockphoto.com/vectors/returned-vector-icon-vector-id900591912?k=6&m=900591912&s=612x612&w=0&h=m2jg9POG2RZ_fMOHUWRLQzALovkNQiZVtPkA6m0qCwg=" />
                    </Link>

                    <h1>Thách thức từ COVID-19 và những giải pháp sáng tạo của chúng tôi</h1>
                    <hr />
                    <h3>Difficulties</h3>
                    <p>20/02/2021</p>
                    <div className="content">
                         <img src="https://i.ibb.co/7GrQvPT/News-from-the-field-2-1-1080x450.png" style={{ width: '100%' }} />
                         <h4>COVID-19 là thách thức cho tất cả chúng tôi – các nhân viên lẫn sinh viên của Passerelles numériques: nó thử thách sứ mệnh của chúng tôi, thay đổi thói quen làm việc và đặt ra câu hỏi về cách vận hành của tổ chức. Hôm nay, chúng tôi xin phép được chia sẻ với bạn về cách PN đã vượt qua những khó khăn ấy, cùng với những câu chuyện về tinh thần sáng tạo, kiên nhẫn và chuyên nghiệp của các nhân viên và sinh viên trong thời điểm khó khăn này.</h4>
                         <p>Học từ xa

                         Tại Passerelles numériques, chúng tôi đã gặp phải nhiều khó khăn trong trận đại dịch COVID-19 này. Một trong số đó chính là việc duy trì chương trình đào tạo. Nhưng làm thế nào đây?
                         Đội ngũ PN Campuchia đã phát triển chương trình học trực tuyến, với mục đích đảm bảo chương trình đào tạo và giáo dục của chúng tôi được xuyên suốt. Các nhân viên đã tạo ra những video cũng như những bản thu âm với nhiều chủ đề khác nhau như nhận thức về môi trường, năng lượng tái tạo hoặc quản lý dự án. Sau khi xem video, các sinh viên sẽ trả lời những câu hỏi nhất định để có thể đánh giá được mức độ hiểu của các em, sau đó các em sẽ làm một bài luận nhỏ.
                         Nhờ những sáng kiến tuyệt vời ấy, PN đã suy nghĩ đến việc phát triển một mục học trực tuyến của riêng mình.

                         Mặt khác, PN Việt Nam cũng đã khởi xướng một cuộc thi video về sư phạm mang tên “Cuộc thi Video cho Corona”. Mỗi sinh viên đã tạo ra một video bằng tiếng Anh về một chủ đề bất kì đã được học, hoặc về việc tập thể thao hay thậm chí là yoga. Bằng cách đó, các sinh viên vừa có thể tương tác với nhau, vừa thực hành tiếng Anh và cũng là cách để các em cảm nhận được sự gắn kết trong thời gian tự cách ly.
                         </p>
                    </div>
                    <div className="row">
                         <div className="column">
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
                         <div className="column">
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
                         <div className="column">
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
                         <div className="column">
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
                    <form className="main_comment_form">
                         <div>
                              <label htmlFor="subject">Comment</label>
                         </div>
                         <div>
                              <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} defaultValue={""} />
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