
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useAuth } from "../context/AuthContext";
export default function ChangeQty({_id,changeQuantity,qty}){

const {token} = useAuth()
  return(<div class="product-quantity" data-cell="Quantity :">
  <div className="counter">
    <span
      style={{ color: qty < 2 ? "#d1d1d1" : "" }}
      onClick={() => {
        if (qty > 1)
          changeQuantity(_id, token, "decrement");
      }}
    >
      <RemoveCircleOutlineIcon />
    </span>
    <span className="displayQty">{qty}</span>
    <span
      onClick={() => {
        changeQuantity(_id, token, "increment");
      }}
    >
      <AddCircleOutlineIcon />
    </span>
  </div>
  </div>)

}