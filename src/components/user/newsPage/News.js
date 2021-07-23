import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import New_box from './content/New_box';
import New_menu from './content/new_menu';
import Footer from '../homePage/content/footer/Footer';
import New_banner from './content/New_banner';

News.propTypes = {

};

function News(props) {
    return (
        <Fragment>
            <New_menu />
            <New_banner />
            <div className="box_container">

                <New_box id="hotnews"
                    title_left="Hot News" title=" Lớp học bị hư hại do mưa lớn kéo dài ở miền Trung Việt Nam – Chúng tôi cần sự hỗ trợ của bạn!"
                    image="https://hoatuoi360.vn/uploads/file/hoa-ly-13.jpg"
                    time="26/4/2021"
                    content="Từ đầu tháng 10 năm 2020 đến nay, người dân miền Trung Việt Nam đã phải hứng chịu những đợt thiên tai 
                    liên tiếp, bao gồm lũ lụt trên diện rộng, sạt lở đất và những cơn bão gây nhiều thiệt hại. Theo thông
                        cáo báo chí mới nhất từ UNICEF, ít nhất 135,000 hộ gia đình ở Trung đã bị thiệt hại nặng nề về tài 
                        sản và hơn 1,5 triệu trẻ em đang ở trong nguy cơ bị gián đoạn giáo dục."
                />

                <New_box id="difficulties"
                    title_left="Difficulties" title=" We started to offer American companies top-notch marketing services!"
                    image="https://hatgiongphuongnam.com/asset/upload/image/hat-giong-hoa-cuc-trang-1.1_1.jpg"
                    time="26/4/2021"
                    content="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

            </div>
            <Footer />

        </Fragment>
    );
}

export default News;