import React from "react";
import { format } from "date-fns"; // Import date-fns for consistent date formatting

const OrdersTab = ({ userOrders }) => {
  if (!userOrders || userOrders.length === 0) {
    return (
      <div className="text-gray-400 text-center">
        <p>No orders found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {userOrders.map((order) => (
        <div key={order.id} className="bg-[#1a2235] rounded-lg p-6">
          {/* Order Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col space-x-2 space-y-2 items-baseline">
              <span className="text-gray-400 text-sm">Order #{order.orderNumber}</span>
              <span className="text-gray-400 text-xs">
                {format(new Date(order.createdAt), "MM/dd/yyyy")} {/* Consistent date format */}
              </span>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                order.status === "delivered"
                  ? "bg-green-100 text-green-800"
                  : order.status === "processing"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>

          {/* Order Items */}
          <div className="space-y-2 mb-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="flex justify-between pt-4 border-t border-gray-700">
            <span className="font-medium">Total</span>
            <span className="font-medium">${order.totalAmount.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersTab;