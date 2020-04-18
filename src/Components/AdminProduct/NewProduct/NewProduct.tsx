import React from "react";
import { Modal } from "@material-ui/core";
import styles from "./NewProduct.styles";
import {
  CancelButton,
  SaveButton,
} from "../../../Global/Button/Buttons";
import {
  ICategory,
  IProduct,
} from "../../../../types/Store";
import ImageInput from "../../../Global/ImageInput/ImageInput";
import ProductForm from "../../../Containers/Forms/ProductForm/ProductForm";

const NewProduct = ({
  show,
  handleClose,
  newProductSaved,
  defaults,
}: NewProductProps) => {
  const classes = styles();

  const getImage = (file: File) => {
    console.log(file);
  };

  return (
    <Modal
      // open={show}
      open={show}
      onClose={handleClose}
      className={classes.root}
    >
      <div className={classes.paper}>
        {!defaults?.name ? (
          <ImageInput
            getImageToParent={getImage}
          />
        ) : null}
        <ProductForm defaults={defaults} />
        <div className={classes.buttons}>
          <CancelButton />
          <SaveButton />
        </div>
      </div>
    </Modal>
  );
};

interface NewProductProps {
  show: boolean;
  handleClose: () => void;
  newProductSaved: (product: IProduct) => void;
  defaults?: {
    name: string;
    category: ICategory;
    price: number;
    description: string;
  };
}

export default NewProduct;
