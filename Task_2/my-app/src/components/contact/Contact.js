import React, { useState } from 'react';
import ContactTitle from './ContactTitle';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormText from './FormText';
import '../../styles/style_contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: ''
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } 
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'The message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setButtonText('Sending...');
    
    setTimeout(() => {
      setButtonText('Sent!');
      setTimeout(() => {
        setButtonText('Send Message');
        setIsSubmitting(false);
      }, 2000);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 1500);
  };

  const categoryOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Support' },
    { value: 'sales', label: 'Sales' }
  ];

  return (
    <div className="contact">
      <div className="container">
        <ContactTitle />
        <div className="contact__form-wrapper">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className={`contact__form-group ${errors.name ? 'input-error' : ''}`}>
                <FormInput
                  id="name"
                  label="Name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              <div className={`contact__form-group ${errors.email ? 'input-error' : ''}`}>
                <FormInput
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
            </div>
            <div className="contact__form-row">
              <div className={`contact__form-group ${errors.subject ? 'input-error' : ''}`}>
                <FormInput
                  id="subject"
                  label="Subject"
                  placeholder="Provide context"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <div className="error-message">{errors.subject}</div>}
              </div>
              <div className={`contact__form-group ${errors.category ? 'input-error' : ''}`}>
                <FormSelect
                  id="category"
                  label="Category"
                  value={formData.category}
                  onChange={handleChange}
                  options={categoryOptions}
                  required
                />
                {errors.category && <div className="error-message">{errors.category}</div>}
              </div>
            </div>
            <div className={`contact__form-group ${errors.message ? 'input-error' : ''}`}>
              <FormText
                id="message"
                label="Message"
                placeholder="Write your question here"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            <div className="contact__form-action">
              <button type="submit" className="button" disabled={isSubmitting}>{buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
