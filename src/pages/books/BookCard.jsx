import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-64 sm:justify-center gap-4">
        <div className="sm:h-64 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between h-full">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-lg font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-base mb-3">
            {book?.description.length > 60
              ? `${book?.description.slice(0, 60)}...`
              : book?.description}
          </p>

          <div className="mt-2">
            <p className="font-medium mb-3">
              ${book?.newPrice}{" "}
              <span className="line-through font-normal ml-2">
                ${book?.oldPrice}
              </span>
            </p>
            <button
              onClick={() => handleAddToCart(book)}
              className="btn-primary px-6 space-x-1 flex items-center gap-1 mb-2"
            >
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
