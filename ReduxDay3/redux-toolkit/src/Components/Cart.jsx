import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Features/Cart/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  return (
    <div className="mx-10">
      <h1 className="text-2xl text-center text-blue-600 font-semibold">
        My cart: {carts.length}
      </h1>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-orange-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#e9ffed] text-blue-500 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm  text-left rtl:text-right"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Food Image</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm  text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Food Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm  text-left rtl:text-right "
                    >
                      <span>Category</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm  text-left rtl:text-right "
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Quantity</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm  text-left rtl:text-right "
                    >
                      Price
                    </th>

                    <th className="px-4 py-3.5 text-sm  text-center rtl:text-right ">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 ">
                  {carts.map((food) => (
                    <tr key={food?._id}>
                      {/* Food image */}
                      <td className="px-2 ">
                        <div className="avatar">
                          <div className="mask mask-squircle md:w-[70px] md:h-[70px] w-12 h-12 mt-2 ml-3">
                            <img src={food?.image} alt="Art&Craft Image" />
                          </div>
                        </div>
                      </td>

                      {/* Food Name */}
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {food?.title}
                      </td>

                      {/* Food Category */}
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {food?.category}
                      </td>

                      {/* Food Origin */}
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {food?.food_origin}
                      </td>

                      {/* Price */}
                      <td className="px-4 py-4 text-sm text-orange-500  whitespace-nowrap">
                        $ {food?.price}
                      </td>

                      {/* Action button */}
                      <td className="px-4 py-4 text-sm  whitespace-nowrap">
                        <div className=" text-center">

                        <button
                        onClick={()=> dispatch(removeFromCart(food?._id))}
                        className="btn btn-sm">X</button>

                        </div>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
