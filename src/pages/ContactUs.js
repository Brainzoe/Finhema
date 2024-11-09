import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact-us" className="p-6 bg-white shadow rounded mb-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="p-2 w-full border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 w-full border rounded" />
        <textarea placeholder="Your Message" className="p-2 w-full border rounded" rows={4}></textarea>
        <button type="submit" className="bg-blue-700 text-white p-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default ContactUs;
