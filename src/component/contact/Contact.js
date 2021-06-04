import React, { Component } from "react";
import emailjs from 'emailjs-com';

class Contact extends Component {

    

    render() {


        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_5q9220h', 'template_r4nalq6', e.target, 'user_FMcHQJXZttlMb1aB7CfYL')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });

              e.target.reset();
          }
        
        return (
            <div >
  

<div className="contact_container">
<div id="contact_content" className="space-top-none">
  <div className="space50">&nbsp;</div>
  <div className="row">
    <div className="col-sm-8 contact_bac">
      <h2 className="contact_title">Contact Us</h2>
      
    
      <form  method="post" className="contact-form col-sm-8" onSubmit={sendEmail}>	

        <div className="form-group">
          <input name="your_name" className="form-control" type="text" placeholder="Your Name (required)" />
        </div>
        <div className="form-group">
          <input name="to_email" className="form-control" type="email" placeholder="Your Email (required)" />
        </div>
        <div className="form-group">
          <input name="subject" className="form-control" type="text" placeholder="Subject" />
        </div>
        <div className="form-group">
          <textarea name="message" className="form-control" placeholder="Your Message" defaultValue={""} />
        </div>
        <div className="form-group">
          <button type="submit" className="beta-btn primary contact_button">Send Message </button>
        </div>

      </form>
    </div>
    <div className="col-sm-4 contact_bac">
      <h2>Contact Information</h2>
      <div className="space20">&nbsp;</div>
      <h6 className="contact-title">Address</h6>
      <p>
       68 Tôn Đức Thắng - Liên Chiểu - Đà Nẵng
      </p>

      <div className="space20">&nbsp;</div>
      <h6 className="contact-title">Restaurant</h6>
      <p>
      Luxury, Delecious, Happy <br />
         Follow us on Facebook, Instagram, Twitter<br />
       
      </p>
     
    </div>
  </div>
</div> {/* #content */}
</div> {/* .container */}

            </div>
        );
    }
}


export default Contact;


