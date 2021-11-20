/** @format */
import React, { memo, useState } from 'react';
import styles from './styles.module.css';

export const ContentModal = memo(({ handleClose, item }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [nameError, setNameError] = useState('This field in required');
  const [numberError, setNumberError] = useState('This field in required');

  const handleBlur = (evt) => {
    switch (evt.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'number':
        setNumberDirty(true);
        break;
    }
  };
  const clearName = () => {
    setName('');
    setNameDirty(false);
    setNameError('This field in required');
  };
  const clearNumber = () => {
    setNumber('');
    setNumberDirty(false);
    setNumberError('This field in required');
  };
  const handleClearName = () => {
    clearName();
  };

  const handleClearNumber = () => {
    clearNumber();
  };

  const handleFocus = (evt) => {
    switch (evt.target.name) {
      case 'name':
        clearName();
        break;
      case 'number':
        clearNumber();
        break;
    }
  };

  const handleName = ({ currentTarget: { value } }) => {
    setName(value);
    if (!value.match(/[a-zA-Zа-яА-Я]+$/g)) {
      setNameError('Only letters allowed');
      if (!value) {
        setNameError('This field in required');
      }
    } else {
      setNameError('');
    }
  };

  const handleNumber = ({ currentTarget: { value } }) => {
    setNumber(value);
    if (!value.match(/^[0-9]*$/gm)) {
      setNumberError('Only numbers allowed');
      if (!value) {
        setNumberError('This field in required');
      }
    } else if (value.length !== 12) {
      setNumberError('Should contain 12 characters');
      if (!value) {
        setNumberError('This field in required');
      }
    } else {
      setNumberError('');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setNameDirty(true);
    setNumberDirty(true);
    if (!nameError && !numberError) {
      console.log('Name: ', name);
      console.log('Number: ', number);
      handleClose();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.button_close} onClick={handleClose} />
      <p className={styles.category}>{item.category}</p>
      <p className={styles.name}>{item.name}</p>
      <div className={styles.cost}>
        <p className={styles.symbol}>$</p>
        <p className={styles.price}>{item.price}</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input_block}>
          <input
            className={
              nameDirty && nameError
                ? styles.input + ' ' + styles.input_invalid
                : styles.input + ' ' + styles.input_valid
            }
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleName}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {nameDirty && nameError && (
            <>
              <div className={styles.button_clear} onClick={handleClearName} />
              <div className={styles.error}>{nameError}</div>
            </>
          )}
        </div>
        <div className={styles.input_block}>
          <input
            className={
              numberDirty && numberError
                ? styles.input + ' ' + styles.input_invalid
                : styles.input + ' ' + styles.input_valid
            }
            type="text"
            placeholder="Number"
            name="number"
            value={number}
            onChange={handleNumber}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {numberDirty && numberError && (
            <>
              <div className={styles.button_clear} onClick={handleClearNumber} />
              <div className={styles.error}>{numberError}</div>
            </>
          )}
        </div>
        <button className={styles.button_order}>Order</button>
      </form>
    </div>
  );
});
