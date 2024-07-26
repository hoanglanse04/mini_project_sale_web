import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <div className="container">
        <h2 className="mt-5">CONTACT US</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form style={{padding:'15px',border:'1px solid rgb(199, 202, 203)'}}>
              <div className="form-group">
                <label htmlFor="name">Full Name <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span></label>
                <input type="tel" className="form-control" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments <span style={{ color: 'red' }}>*</span></label>
                <textarea className="form-control" id="comments" rows="4" required></textarea>
              </div>
              <button style={{backgroundColor:'#444444',marginTop:'10px'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <div className="map text-center mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6327987253203!2d105.82215011012306!3d21.00735158843409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8109765ba5%3A0xd84740ece05680ee!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2k!5e0!3m2!1svi!2s!4v1721752810143!5m2!1svi!2s"
            style={{ border: 0 }}
            width="80%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
