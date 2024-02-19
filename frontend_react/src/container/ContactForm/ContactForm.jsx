import React, { useState } from 'react';
import './ContactForm.scss';
import { client } from '../../client';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object from the form
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
  
    // Now use formProps to access form values
    const contactFormData = {
      _type: 'contactFormSubmission',
      firstName: formProps['firstName'],
      lastName: formProps['lastName'],
      phoneNumber: formProps['phoneNumber'],
      email: formProps['email'],
      make: formProps['make'],
      model: formProps['model'],
      year: parseInt(formProps['year'], 10),
      mileage: parseInt(formProps['mileage'], 10),
      serviceType: formProps['serviceType'],
      vin: formProps['vin'],
      licensePlate: formProps['licensePlate'],
      additionalNotes: formProps['additionalNotes'],
    };
    
    try {
        const response = await client.create(contactFormData);
        console.log('Form submitted to Sanity', response);
  
        const emailParamsForBusiness = {
            to_name: 'Elevative Autoworks',
            from_name: `${contactFormData.firstName} ${contactFormData.lastName}`,
            message: `Contact Details:
                \nName: ${contactFormData.firstName} ${contactFormData.lastName}
                \nPhone Number: ${contactFormData.phoneNumber}
                \nEmail: ${contactFormData.email}
                \nMake: ${contactFormData.make}
                \nModel: ${contactFormData.model}
                \nYear: ${contactFormData.year}
                \nMileage: ${contactFormData.mileage}
                \nService Type: ${contactFormData.serviceType}
                \nVIN: ${contactFormData.vin}
                \nLicense Plate: ${contactFormData.licensePlate}
                \nAdditional Notes: ${contactFormData.additionalNotes}`,
        };
  
        await emailjs.send('service_e36p1lx', 'template_go08g6f', emailParamsForBusiness, 'GXQgG25fJdDiHOS4r');
        console.log('Email successfully sent to business!');
        
        // Use alert for submission message
        alert('Thank you for contacting us. We will get back to you soon.');
        e.target.reset(); // This clears the form.
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
  };
  
    return (
      <div>
        <div>

          <h2 className='head-text'><span>Contact Us</span> for a Quote</h2>
          <form onSubmit={handleSubmit}>
            <div className='app__footer-form app_flex'>
              <div className='app__flex'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="make">Make</label>
                <input type="text" id="make" name="make" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="model">Model</label>
                <input type="text" id="model" name="model" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="year">Year</label>
                <input type="number" id="year" name="year" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="mileage">Mileage</label>
                <input type="number" id="mileage" name="mileage" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="serviceType">Service Type</label>
                <select id="serviceType" name="serviceType" required>
                    <option value="oilChange">Oil Change</option>
                    <option value="serviceDue">Service Due</option>
                    <option value="brakes">Brakes</option>
                    <option value="diagnostic">Diagnostic (Check engine or other problems)</option>
                </select>
              </div>
              <div className='app__flex'>
                <label htmlFor="licensePlate">License Plate</label>
                <input type="text" id="licensePlate" name="licensePlate" required />
              </div>
              <div className='app__flex'>
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea id="additionalNotes" name="additionalNotes" />
              </div>
                <span className='button-container'>
                <button style={{margin:"0, 0, 0, 0"}} type="submit" className='p-text'>SUBMIT FOR A QUOTE</button>
                </span>
              </div>

          </form>
          {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
        </div>
      </div>
    )
}

export default ContactForm;
