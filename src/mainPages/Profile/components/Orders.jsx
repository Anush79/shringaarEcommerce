import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useCart , useData} from "../../../";
import Loader from "../../../components/Loader";


export default function Orders() {
  const navigate = useNavigate();
  const {
    cartManager: { orderPlaced, loading },
  } = useCart();
const {getSingleProduct} = useData()

  return (
    <div className="ordersContainer">
      <h2>Orders</h2>
      <div className="allOrders">
        {orderPlaced.length > 0 ? (
          loading ? (
            <Loader />
          ) : (
            <div className="viewOrders">
              <h5>Your Recent orders</h5>
              {orderPlaced.map((item) => {
                const {
                  id,
                  fullName,
                  home,
                  work,
                  streetName,
                  mobile,
                  building,
                  town,
                  districtName,
                  pincode,
                  state,
                } = item.address;
                const showAddress = false;
                return (
                  <>
                    <div className="placedOrderSummary" key={item.orderId}>
                      <h5>
                        Order Id : <small>{item.orderId}</small>
                      </h5>
                      <p>Total Amount: $ {item.amount}</p>
                      <p>Mode of Payment : {item.payBy}</p>
                      <p>Delivery by : {item.deliveryDate}</p>

                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          show Address
                        </AccordionSummary>
                        <AccordionDetails>
                          <div key={id} className="addressContainer">
                            <div className="addressText">
                              <p className="addType">
                                <small>
                                  {home ? "Home" : work ? "Work" : null}
                                </small>
                              </p>
                              <p>
                                <b>
                                  {fullName}
                                  <span style={{ width: "20px" }}> ... </span>
                                  {mobile}
                                </b>
                              </p>
                              <p>House Number: {building}</p>
                              <p>{streetName}</p>
                              <p>
                                {town},{districtName}
                              </p>
                              <p>
                                {state} - <b>{pincode}</b>
                              </p>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      {item.orders.map((item) => (
                        <div
                          className="productCartCard"
                          style={{ cursor: "pointer" }}
                          key={item.id}
                          onClick={() => {
                            getSingleProduct(item._id)
                            navigate(`/products/${item._id}`);
                          }}
                        >
                          <span>
                            <img
                              src={item.product_image}
                              alt="product image"
                              width="70px"
                            />
                            <span>
                              {item.product_name.slice(0, 15)} x {item.qty}
                            </span>
                          </span>
                          <span>${item.product_price * item.qty}</span>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })}
            </div>
          )
        ) : (
          <div>
            <p> "No orders yet , please shop something"</p>
            <button onClick={()=>{navigate("/browse")}}>Shop Now</button>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 *    orderId: uuid(),
        orders: cartData,
        address:selectedAddress,
        amount:(totalPrice - 250 )+ 1,
        payBy: paymentSelected,
        deliveryDate: todate.slice(0, 15),
 */
/**
 * deliveryDate
: 
"Sun Jun 04 2023"
orderId
: 
"68890be0-9b77-4fb1-91fc-7863fd86fadb"
orders
: 
Array(2)
0
: 
{_id: 'd62d8658-4990-416c-b383-9a6b67d0d4d1', product_name: 'dictumst morbi', product_description: 'Nullam sit amet turpis elementum ligula vehicula c…cus. Morbi quis tortor id nulla ultrices aliquet.', product_price: 1256.04, product_category: 'necklace', …}
1
: 
{_id: 'ecbab380-2fd1-4f34-b604-ecf21e7f9838', product_name: 'porttitor lacus at', product_description: 'In quis justo. Maecenas rhoncus aliquam lacus. Mor…ris viverra diam vitae quam. Suspendisse potenti.', product_price: 1189.75, product_category: 'necklace', …}
length
: 
2
[[Prototype]]
: 
Array(0)
payBy
: 
"Cash on delivery"
 */
