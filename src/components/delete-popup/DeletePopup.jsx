import React from "react";
import styles from "./deletepopup.module.css";
import { Cross } from "../../components/svg-component/index";

const DeletePopup = ({ isOpen, setIsOpen, handleDelete }) => {
  return (
    <div className={styles.deleteUserWrapper}>
      <div className={styles.deleteUserBoxWrapper}>
        <span className={styles.crossIcon} onClick={() => setIsOpen(false)}>
          <Cross />
        </span>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Are you sure want to delete this user ?
          </h1>
          <button
            className={styles.submitButton}
            onClick={(id) => handleDelete(id)}
          >
            Yes
          </button>
          <button
            className={styles.canelButton}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
