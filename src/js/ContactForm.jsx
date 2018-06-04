import React from 'react';
import axios from 'axios';

const encodeForNetlify = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const FORM_NAME = 'contact';

const NetlifyHoneypot = () => [
  <input type="hidden" name="form-name" value={FORM_NAME} />,
  <span className="u-hidden" style={{ visibility: 'hidden' }}>
    <label htmlFor="bot-field">
      Do not fill this out if you are human <input name="bot-field" />
    </label>
  </span>
];

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    submitting: false,
    submitSuccessful: false
  };

  handleSubmit = e => {
    if (this.state.submitting || this.state.submitSuccessful) return;

    e.preventDefault();

    this.setState({ submitting: true });

    axios({
      url: '/', // Netlify form submission endpoint
      method: 'post',
      data: encodeForNetlify({
        'form-name': FORM_NAME,
        ...this.state
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(() => this.setState({ submitSuccessful: true, submitting: false }))
      .catch(error => console.error(error));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, message, submitting, submitSuccessful } = this.state;

    const submitSuccessMessage = (
      <div>
        <h3>Thanks for the message!</h3>
        <p>I{"'"}ll try to respond to you within 24 hours.</p>
      </div>
    );

    return (
      <form className="contactForm container" onSubmit={this.handleSubmit}>
        {submitSuccessful
          ? submitSuccessMessage
          : <div>
              <NetlifyHoneypot />
              <h3 className="contactForm-title">Contact Me</h3>
              <div className="field">
                <label className="label" htmlFor="contact-name">
                  Name:
                </label>
                <div className="control">
                  <input
                    className="input"
                    name="name"
                    id="contact-name"
                    type="text"
                    value={name}
                    placeholder="Jackie Chan"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="contact-email">
                  Email:
                </label>
                <div className="control">
                  <input
                    className="input"
                    name="email"
                    id="contact-email"
                    type="email"
                    value={email}
                    placeholder="jackie@chan.com"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="contact-message">
                  Message:
                </label>
                <div className="control">
                  <textarea
                    name="message"
                    className="textarea"
                    id="contact-message"
                    value={message}
                    placeholder="Hi there!"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="u-textCenter">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  disabled={submitting}
                >
                  Send Message
                </button>
              </div>
            </div>}
      </form>
    );
  }
}

export default ContactForm;
