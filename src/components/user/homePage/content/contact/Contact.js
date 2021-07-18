import React from 'react';
// import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';

Contact.propTypes = {

};

function Contact(props) {
  return (
    <Layout_homePage title="Contact Us" id="contact">
      <section className="contact">
        <div className="contact container" data-aos="fade-up">
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-6">
              <div className="contact-box mb-4">
                <i className="bx bx-map" />
                <h3>Our Address</h3>
                <p>99 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact-box  mb-4">
                <i className="bx bx-envelope" />
                <h3>Email Us</h3>
                <p>info.vietnam@passerellesnumeriques.org</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact-box  mb-4">
                <i className="bx bx-phone-call" />
                <h3>Call Us</h3>
                <p>+84 236 3888 503</p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-6 ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.11033609749!2d108.24146331536099!3d16.059763193956062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f2ced6d8b%3A0xeac35f2960ca74a4!2zOTkgVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu5tjIE3hu7ksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1624717153380!5m2!1svi!2s" frameBorder={0} style={{ border: 0, width: '100%', height: '384px' }} allowFullScreen />
            </div>
            <div className="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                </div>

                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout_homePage>
  );
}

export default Contact;