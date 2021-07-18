import React from 'react';
// import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';
import New_Item from './New_Item';
import SeeMore from '../button/SeeMore';

function New(props) {
    return (
        <Layout_homePage title="News" id="news">
            <div className="new_container ">
                <New_Item
                    img="assets/img/news/damage.jpg"
                    title="Lớp học bị hư hại do mưa lớn kéo dài ở miền Trung Việt Nam – Chúng tôi cần sự hỗ trợ của bạn!"
                    introduce="Từ đầu tháng 10 năm 2020 đến nay, người dân miền Trung Việt Nam đã phải hứng chịu những đợt thiên tai liên tiếp, bao gồm lũ lụt trên diện rộng, sạt lở đất và những cơn bão gây nhiều thiệt hại. Theo thông cáo báo chí mới nhất từ UNICEF, ít nhất 135,000 hộ gia đình ở miền Trung đã bị thiệt hại nặng nề về tài sản và hơn 1,5 triệu trẻ em đang ở trong nguy cơ bị gián đoạn giáo dục."
                    like="999"
                    comment="3"
                    date="7/5/2021" />
                <New_Item
                    img="assets/img/news/damage.jpg"
                    title="Lớp học bị hư hại do mưa lớn kéo dài ở miền Trung Việt Nam – Chúng tôi cần sự hỗ trợ của bạn!"
                    introduce="Từ đầu tháng 10 năm 2020 đến nay, người dân miền Trung Việt Nam đã phải hứng chịu những đợt thiên tai liên tiếp, bao gồm lũ lụt trên diện rộng, sạt lở đất và những cơn bão gây nhiều thiệt hại. Theo thông cáo báo chí mới nhất từ UNICEF, ít nhất 135,000 hộ gia đình ở miền Trung đã bị thiệt hại nặng nề về tài sản và hơn 1,5 triệu trẻ em đang ở trong nguy cơ bị gián đoạn giáo dục."
                    like="999"
                    comment="3"
                    date="7/5/2021" />
                <New_Item
                    img="assets/img/news/damage.jpg"
                    title="Lớp học bị hư hại do mưa lớn kéo dài ở miền Trung Việt Nam – Chúng tôi cần sự hỗ trợ của bạn!"
                    introduce="Từ đầu tháng 10 năm 2020 đến nay, người dân miền Trung Việt Nam đã phải hứng chịu những đợt thiên tai liên tiếp, bao gồm lũ lụt trên diện rộng, sạt lở đất và những cơn bão gây nhiều thiệt hại. Theo thông cáo báo chí mới nhất từ UNICEF, ít nhất 135,000 hộ gia đình ở miền Trung đã bị thiệt hại nặng nề về tài sản và hơn 1,5 triệu trẻ em đang ở trong nguy cơ bị gián đoạn giáo dục."
                    like="999"
                    comment="3"
                    date="7/5/2021" />
            </div>
            <div className="news_button">
                <SeeMore />
            </div>
        </Layout_homePage>
    );
}

export default New;