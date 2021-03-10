import React from 'react'; 
import emailjs from 'emailjs-com';

function Contactform()
{
    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('loading').className='loading1';
        emailjs.sendForm('service_c05mitq', 'template_8mh6mkf', e.target, 'user_XWvrVq4ZJFOyLaLzubDhj')
          .then((result) => {
              //console.log(result.text);
              document.getElementById('loading').className='loading';
              document.getElementById('successmsg').style.display='block';
          }, (error) => {
              //console.log(error.text);
              document.getElementById('loading').className='loading';
              document.getElementById('errmsg').innerHTML=error.text;
              document.getElementById('errmsg').style.display='block';
          });
          e.target.reset();
      }

    return(
            <>
                <div  className="col-lg-6">
                    <form method="post" role="form"  className="php-email-form" onSubmit={sendEmail}>
                        <div  className="row">
                            <div  className="col-md-6 form-group">
                                <input type="text" name="from_name"  className="form-control" placeholder="Your Name" required />
                            </div>
                            <div  className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email"  className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div  className="form-group mt-3">
                            <input type="text"  className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div  className="form-group mt-3">
                            <textarea  className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div  className="my-3">
                            <div  className="loading" id="loading">Loading..</div>
                            <div  className="error-message" id="errmsg"></div>
                            <div  className="sent-message" id="successmsg">Your message has been sent. Thank you!</div>
                        </div>
                        <div  className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </>
    );
}


    
export default Contactform;