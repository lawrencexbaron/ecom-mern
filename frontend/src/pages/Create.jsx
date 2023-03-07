import { React, useState } from "react";
import { useProductsStore } from "../store/useProductStore";
import Base64 from "../components/common/Base64";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const addProduct = useProductsStore((state) => state.addProduct);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle addproduct then alert success
    addProduct({ name, price, image, description });
    Alert({ title: "Product created successfully" });
    navigate("/");
    // reset form
    setName("");
    setPrice("");
    setImage("");
    setDescription("");
  };
  const Alert = ({ title }) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: title,
    });
  };
  return (
    <>
      <main className="px-8 py-6 flex justify-center content-center mx-auto">
        <div className="bg-white shadow-md rounded-md p-4 mx-auto w-full sm:w-1/2">
          <h2 className="text-2xl font-bold">Create</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                value={price}
                placeholder="Price"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                // value={image}
                onChange={(e) => handleImageUpload(e)}
                placeholder="Image"
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Create;
