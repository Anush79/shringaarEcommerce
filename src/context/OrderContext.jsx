import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export function OrdersProvider({ children }) {
  const [placedOrdersList, setPlacedOrdersList] = useState();
  return (
    <OrderContext.Provider value={{ placedOrdersList, setPlacedOrdersList }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
