import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const ProductModal = (props) => {
  return (
    <>
      <Dialog className="productModal" open={true} onClose={() => props.closeProductModal(false)}>
        <Button className="close_">

          <IoCloseSharp onClick={() => props.closeProductModal(false)} />
        </Button>
        <h4>All Natural Italian-Style Chicken Meatballs</h4>
        <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
                <span>BRANDS: </span><span>Welch's</span>
            </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
