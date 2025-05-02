"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Order from "@/models/Order";

export async function getUserOrder(userId) {
  try {
    await connectToDB(); // Ensure the database connection is established

    // Find all orders for the given user ID
    const orders = await Order.find({ user: userId })
      .populate("items.product", "name price") // Populate product details
      .lean();

    return orders.map((order) => ({
      id: order._id.toString(),
      orderNumber: order.orderNumber,
      items: order.items.map((item) => ({
        productId: item.product._id.toString(),
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
      totalAmount: order.totalAmount,
      status: order.status,
      deliveryDate: order.deliveryDate,
      deliveryAddress: order.deliveryAddress,
      notes: order.notes,
      createdAt: order.createdAt,
    }));
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw new Error("Failed to fetch user orders");
  }
}