import React from 'react';
import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';
import About_item from './About_item';

About.propTypes = {

};

function About(props) {
    return (
        <Layout_homePage title="About Us" id="about">
            <div className="about_container">
                <div className="about_img"></div>
                <div className="about_content">
                    <div className="about_title">Bạn đồng lòng với sứ mệnh và mục tiêu của chúng tôi? </div>
                    <About_item
                        title="Quy trình tuyển sinh công bằng và nghiêm ngặt"
                        icon="far fa-edit"
                        content="Chủ yếu tập trung vào các vùng nghèo khó. Quy trình tuyển sinh diễn ra công bằng và nghiêm ngặt" />
                    <About_item
                        title="Chương trình đào tạo chuyên sâu"
                        icon="fas fa-chalkboard-teacher"
                        content="Chủ yếu tập trung vào các vùng nghèo khó. Quy trình tuyển sinh diễn ra công bằng và nghiêm ngặt" />
                    <About_item
                        title="Chương trình đào tạo và thực hành thiết thực"
                        icon="fas fa-laptop-code"
                        content="Chủ yếu tập trung vào các vùng nghèo khó. Quy trình tuyển sinh diễn ra công bằng và nghiêm ngặt" />
                    <About_item
                        title="Giáo dục và phát triển nhân cách"
                        icon="fas fa-chart-line"
                        content="Chủ yếu tập trung vào các vùng nghèo khó. Quy trình tuyển sinh diễn ra công bằng và nghiêm ngặt" />
                    <About_item
                        title="Hỗ trợ tìm kiếm việc làm"
                        icon="fas fa-search-location"
                        content="Chủ yếu tập trung vào các vùng nghèo khó. Quy trình tuyển sinh diễn ra công bằng và nghiêm ngặt" />
                </div>
            </div>
        </Layout_homePage>
    );
}

export default About;