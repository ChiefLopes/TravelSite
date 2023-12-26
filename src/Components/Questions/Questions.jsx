import "./Questions.scss" 

const Questions = () => {
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>

      <div className="sceContainer grid">
        <div className="accordion grid"></div>

        <div className="form">
          <div className="secHeading">
                      <h4>Do You Have any specific questions?</h4>
                      <p>
                          Please fill the form below and our dedicated team will get in touch with you as soon as possible.
                      </p>
                  </div>
                  
                  <div className="formContent grid">
                      <input type="email" placeholder="Enter e-mail address" />
                      <textarea placeholder="Enter Your question here"></textarea>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Questions