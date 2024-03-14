// pages/order.tsx

import React, { useState } from 'react';
import styles from '../styles/Form.module.css'; // Make sure to create a corresponding CSS module file

const OrderPage: React.FC = () => {
  const [order, setOrder] = useState({
    name: '',
    contactNumber: '',
    address: '',
    quantity: 1, // Default to 1 liter as per your product page
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the message
    const message = `Hello, I would like to place an order:\n- Name: ${order.name}\n- Contact Number: ${order.contactNumber}\n- Address: ${order.address}\n- Quantity: ${order.quantity} liters`;

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+923130794980&text=${encodedMessage}`; // Replace '1' with your own phone number

    // https://api.whatsapp.com/send?phone=+923130794980&text=Hi,%20I%20saw%20your%20website%20may%20I%20would%20like%20to%20order%20Goat%20Milk.
    // Redirect to the WhatsApp URL
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Order Pure Goat Milk</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>Name:</label>
          <input type="text" id="name" name="name" value={order.name} onChange={handleChange} required className={styles.formInput}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contactNumber" className={styles.formLabel}>Contact Number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" value={order.contactNumber} onChange={handleChange} required className={styles.formInput}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.formLabel}>Address:</label>
          <input type="text" id="address" name="address" value={order.address} onChange={handleChange} required className={styles.formInput}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="quantity" className={styles.formLabel}>Quantity (Liters):</label>
          <input type="number" id="quantity" name="quantity" value={order.quantity.toString()} onChange={handleChange} required min="1" className={styles.formInput}/>
        </div>
        <button type="submit" className={styles.submitButton}>Send on WhatsApp</button>
      </form>
    </div>
  );
};

export default OrderPage;
