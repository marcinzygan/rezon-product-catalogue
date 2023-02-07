import React from "react";
import classes from "./productModal.module.css";
import { closeModal } from "@/state/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductModal = () => {
  const modalData = useSelector((state) => state.modal.modalContent);
  console.log(modalData);
  const dispatch = useDispatch();
  return (
    <div className={classes.modal} id="modal">
      ProductModal
      <button onClick={() => dispatch(closeModal())}>CLOSE MODAL</button>
    </div>
  );
};

export default ProductModal;
