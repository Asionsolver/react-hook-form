import { useForm } from "react-hook-form";

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border-2 border-gray-300 p-2"
        {...register("productName", { required: "Product Name is required" })}
        placeholder="Product Name"
      />
      {errors.productName && <span>{errors.productName.message}</span>}

      <input
        className="border-2 border-gray-300 p-2"
        {...register("quantity", {
          required: "Quantity is required",
          min: { value: 1, message: "Quantity must be at least 1" },
        })}
        placeholder="Quantity"
        type="number"
      />
      {errors.quantity && <span>{errors.quantity.message}</span>}

      <input
        className="border-2 border-gray-300 p-2"
        {...register("shippingAddress", {
          required: "Shipping Address is required",
        })}
        placeholder="Shipping Address"
      />
      {errors.shippingAddress && <span>{errors.shippingAddress.message}</span>}

      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;
