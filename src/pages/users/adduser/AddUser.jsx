import React from "react";
import { useForm } from "react-hook-form";
import { addUserValidation } from "../../../formValidators/AddUserValidation";
import { useDispatch, useSelector } from "react-redux";
import { AddNewUser } from "../../../redux/features/user/userSlice";
import styles from "./adduser.module.css";
import { Cross } from "../../../components/svg-component";

const AddUser = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  //Fetch data from store
  const { userList } = useSelector((state) => state.user);

  //use-form hook is used for handel form  and errors
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    //Dispatched action to reducer
    //id: userList?.length + 1 is added for identify the user by id
    dispatch(
      AddNewUser({
        ...data,
        id: userList?.length + 1,
        address: { city: data.address },
      })
    );
    //After form submission form will clear
    reset();
    setIsOpen(false);
  };

  return (
    <div className={styles.addUserWrapper}>
      <div className={styles.addUserFormWrapper}>
        <span className={styles.crossIcon} onClick={() => setIsOpen(false)}>
          <Cross />
        </span>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Add User</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.addUserForm}
          >
            <div className={styles.formFields}>
              <label className={styles.label}>Name:</label>
              <input
                type="text"
                {...register("name", addUserValidation.name)}
                onKeyUp={() => {
                  trigger("name");
                }}
                className={styles.input}
              />
              {errors.name && (
                <div className={styles.error}>{errors.name.message}</div>
              )}
            </div>
            <div className={styles.formFields}>
              <label className={styles.label}>Email:</label>
              <input
                type="text"
                {...register("email", addUserValidation.email)}
                onKeyUp={() => {
                  trigger("email");
                }}
                className={styles.input}
              />
              {errors.email && (
                <div className={styles.error}>{errors.email.message}</div>
              )}
            </div>
            <div className={styles.formFields}>
              <label className={styles.label}>City:</label>
              <input
                type="text"
                {...register("address", addUserValidation.address)}
                onKeyUp={() => {
                  trigger("address");
                }}
                className={styles.input}
              />
              {errors.address && (
                <div className={styles.error}>{errors.address.message}</div>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <button type="reset" className={styles.resetButton}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
