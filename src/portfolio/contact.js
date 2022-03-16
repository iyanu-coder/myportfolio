import React from 'react';
import './style/contact.css'



const Contact =()=>{

    return(
        <>
        <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"><img src="images/Locationicon.png"/></i>
                <h4>Location:</h4>
                <p> Oyo State, Nigeria</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"><img src="images/Messageicon.png"/></i>
                <h4>Email:</h4>
                <p>akinyemiiyanu45@gmail.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"><img src="images/phoneicon.png"/></i>
                <h4>Call:</h4>
                <p>+234 903 729 8121</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border: "0", width: "100%", height: "290px;"}} allowfullscreen></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="name">LinkIn</label>
                  <a className="link" href="https://www.linkedin.com/in/iyanu-akinyemi-15b670214/">
                    
                  <input type="button" name="name" value="https://www.linkedin.com/in/iyanu-akinyemi-15b670214/" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  </a>
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Github</label>
                  <a  className="link" href="https://github.com/iyanu-coder">

                  <input type="button" className="form-control" value="https://github.com/iyanu-coder" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  </a>
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Quora</label>
                  <a  className="link" href="https://www.quora.com/profile/Akinyemi-Iyanu-2/">

                  <input type="button" className="form-control" value="https://www.quora.com/profile/Akinyemi-Iyanu-2/" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  </a>
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">WhatsApp</label>
                  <a  className="link" href="https://wa.me/message/">

                  <input type="button" value="+2349037298121" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  </a>
                  <div className="validate"></div>
                </div>
              </div>
              {/* <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div> */}
            </form>
          </div>

        </div>

      </div>
    </section>
        
        </>
    )

}

export default Contact;