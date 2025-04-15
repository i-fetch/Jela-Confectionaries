import { connectToDB } from "@/lib/ConnectDB";
import CartItem from "@/models/CartItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const cartItems = await CartItem.find({ user: session.user.id })
      .populate("product")
      .exec();

    return new Response(JSON.stringify(cartItems), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);
    const { productId, quantity, size, toppings } = await req.json();

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const existingItem = await CartItem.findOne({
      user: session.user.id,
      product: productId
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
    } else {
      await CartItem.create({
        user: session.user.id,
        product: productId,
        quantity,
        size,
        toppings
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}