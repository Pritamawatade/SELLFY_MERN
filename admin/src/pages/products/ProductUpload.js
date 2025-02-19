import { CiImageOn } from "react-icons/ci";
import * as React from "react";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App.js";
import { fetchdatafromapi } from "../../utils/api.js";

const ProductUpload = () => {
  let audio;
  try {
     audio = new Audio(require('../../asset/audio/woosh.mp3'));
  } catch (error) {
    console.error("Failed to load audio:", error);
  }
  const [selectedImages, setSelectedImages] = useState([]);
  const [featureValue, setFeatureValue] = useState(false);
  const [categoryValue, setCategoryValue] = useState([]);
  const [subCategoryValue, setSubCategoryValue] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [rating, setRating] = useState();
  const loadingBar = useRef(null);
  const navigate = useNavigate();
  const context = React.useContext(myContext);

  const [discount, setDiscount] = useState("");
  const [productRAMS, setProductRAMS] = useState([]);
  const [productSIZE, setProductSIZE] = useState([]);
  const [productWEIGHT, setProductWEIGHT] = useState([]);
  const [productRAMS2, setProductRAMS2] = useState([]);
  const [productSIZE2, setProductSIZE2] = useState([]);
  const [productWEIGHT2, setProductWEIGHT2] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    oldPrice: "",
    countInStock: "",
    numReviews: "0",
    catName:"",
    rating: "",
    discount: "",
    subCatId:""
  });

    const selectCat = (cat) =>{
      formData.catName = cat;
      console.log(cat);
      

        // alert(formData.catName)

    }

 const fetchProductRAM = async () => {
  try{
    fetchdatafromapi('/api/productRAM').then(data =>{
      setProductRAMS2(data);
      
    })

  }
  catch (error) {
    console.error('Error fetching product RAM:', error);
  }
}
 const fetchProductSIZE = async () => {
  try{
    fetchdatafromapi('/api/productSIZE').then(data =>{
      setProductSIZE2(data);
      
    })

  }
  catch (error) {
    console.error('Error fetching product RAM:', error);
  }
}
 const fetchProductWEIGHT = async () => {
  try{
    fetchdatafromapi('/api/productWEIGHT').then(data =>{
      setProductWEIGHT2(data);
      
    })

  }
  catch (error) {
    console.error('Error fetching product RAM:', error);
  }
}

  useEffect(() => {

    fetchProductRAM();    
    fetchProductSIZE();
    fetchProductWEIGHT();
    setSubCategories(context.subCategories);
    setCategories(context.categories);
  
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const handleFeaturedChange = (e) => {
    setFeatureValue(e.target.value === "true");
  };

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
    
  };

  const handleSubCategoryChange = (e) => {
    setSubCategoryValue(e.target.value);
    formData.subCatId = e.target.value;
  };

  const handleproductramchange = (e) => {
    setProductRAMS(e.target.value);
  };

  const handleproductsizechange = (e) => {
    setProductSIZE(e.target.value);
  };

  const handleproductweightchange = (e) => {
    setProductWEIGHT(e.target.value);
  };

  const handlediscountchange = (e) => {
    setDiscount(e.target.value);
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => {
      const newImages = [...prevImages];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("Product name is required");
      audio.play();
      
      return;
    }
    if (!formData.description) {
      toast.error("Product description is required");
      audio.play();
      return;
    }
    if (!formData.brand) {
      toast.error("Product brand is required");
      audio.play();
      return;
    }
    if (!formData.price) {
      toast.error("Product price is required");
      audio.play();
      return;
    }
    if (!formData.oldPrice) {
      toast.error("Product old price is required");
      audio.play();
      return;
    }
    if (!formData.countInStock) {
      toast.error("Product stock count is required");
      audio.play();
      return;
    }
    if (!formData.rating) {
      toast.error("Product rating is required");
      audio.play();
      return;
    }
    if (!formData.numReviews) {
      toast.error("Number of reviews is required");
      audio.play();
      return;
    }
    if (categoryValue == "") {
      toast.error("Product category is required");
      audio.play();
      return;
    }
    if (subCategoryValue == "") {
      toast.error("Product subcategory is required");
      audio.play();
      return;
    }


    
    // if (!productRAMS) {
    //   toast.error("Product RAM is required");
    //   audio.play();
    //   return;
    // }
    // if (!productSIZE) {
    //   toast.error("Product Size is required");
    //   audio.play();
    //   return;
    // }
    // if (!productWEIGHT) {
    //   toast.error("Product Weight is required");
    //   audio.play();
    //   return;
    // }
    // if (!discount) {
    //   toast.error("Product discount is required");
    //   audio.play();
    //   return;
    // }
    if (selectedImages.length === 0) {
      toast.error("Product images are required");
      audio.play();
      return
    }
    
    
    try {
      loadingBar.current.continuousStart();
      
      const formDataToSend = new FormData();
      
      // Add basic form fields
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("brand", formData.brand);
      
      // Add numeric fields with proper conversion
      formDataToSend.append("price", Number(formData.price) || 0);
      formDataToSend.append("oldPrice", Number(formData.oldPrice) || 0);
      formDataToSend.append("countInStock", Number(formData.countInStock) || 0);
      formDataToSend.append("numReviews", Number(formData.numReviews) || 0);
      formDataToSend.append("rating", Number(formData.rating) || 0);
      formDataToSend.append("discount", Number(discount) || 0);
      formDataToSend.append("catName", formData.catName);
      formDataToSend.append("subCatId", formData.subCatId);
      
      // Add rating from star component (0-5)
      
      // Add isFeatured as boolean
      formDataToSend.append("isFeatured", featureValue);
      formDataToSend.append("category", categoryValue);
      formDataToSend.append("subCategory", subCategoryValue);
      if(productRAMS != ""){

        formDataToSend.append("productRAMS", productRAMS);
      }
      if(productSIZE != ""){

        formDataToSend.append("productSIZE", productSIZE);
      }
      if(productWEIGHT != ""){

        formDataToSend.append("productWEIGHT", productWEIGHT);
      }
      // Append images
      selectedImages.forEach((image, index) => {
        formDataToSend.append("images", image.file);
      });
      
      const response = await fetch(
        "http://localhost:4000/api/products/create",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();
      
      if (data.success) {
        toast.success("Product created successfully!");
        audio.play();
        setFormData({
          name: "",
          description: "",
          brand: "",
          price: "",
          oldPrice: "",
          countInStock: "",
          numReviews: "0",
          rating: "",
          discount: "",
          catName:""
        });
        setSelectedImages([]);
        setCategoryValue("");
        setSubCategoryValue("");
        setRating(0);
        setDiscount("");
        setProductRAMS("");
        setProductSIZE("");
        setProductWEIGHT("");
        
      } else {
        toast.error(data.message || "Failed to create product");
        audio.play();
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product");
    } finally {
      loadingBar.current.complete();
      setTimeout(() => {
        navigate("/product");
      }, 3000);
    }
  };

  return (
    <>
      <LoadingBar color="#f11946" ref={loadingBar} shadow={true} />
      <div className="right-content w-100">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <motion.div
          className="p-6 md:p-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="header bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-[#ffffff] font-bold text-2xl md:text-3xl flex items-center gap-3">
              <FaCloudUploadAlt className="text-3xl" />
              Product Upload
            </h3>
          </div>
        </motion.div>

        <form className="px-4 md:px-8 pb-8" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-grow lg:w-3/4">
              <motion.div
                className="card bg-white dark:bg-[#1E293B] dark:text-white rounded-2xl shadow-xl p-6 md:p-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="basic-info space-y-6">
                  <motion.h5
                    className="mb-6 text-gray-900 dark:text-white font-bold text-2xl md:text-3xl border-b dark:border-gray-700 pb-4"
                    variants={itemVariants}
                  >
                    Basic Information
                  </motion.h5>

                  <motion.div className="form-group" variants={itemVariants}>
                    <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                      TITLE
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter product title"
                    />
                  </motion.div>

                  <motion.div className="form-group" variants={itemVariants}>
                    <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                      DESCRIPTION
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      rows="4"
                      placeholder="Enter product description"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        CATEGORY
                      </label>
                      <select
                        className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={categoryValue}
                        onChange={(e) => {
                          handleCategoryChange(e);
                          const selectedCategory = categories.find(category => category._id === e.target.value);
                          if (selectedCategory) {
                            selectCat(selectedCategory.name);
                          }
                        }}
                      >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}
                          >
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        {" "}
                        SUBCATEGORY
                      </label>
                      <select
                        className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={subCategoryValue}
                        onChange={handleSubCategoryChange}
                      >
                        <option value="">Select Subcategory</option>
                        {subCategories.map((subcategory) => (
                          <option key={subcategory._id} value={subcategory._id}>
                            {subcategory.subCategory}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        BRAND
                      </label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter brand"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                      is Featured
                    </label>
                    <select
                      className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      value={featureValue.toString()}
                      onChange={handleFeaturedChange}
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        PRICE
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        OLD PRICE
                      </label>
                      <input
                        type="number"
                        name="oldPrice"
                        value={formData.oldPrice}
                        onChange={handleInputChange}
                        className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="0.00"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        Product stock
                      </label>
                      <input
                        type="number"
                        name="countInStock"
                        value={formData.countInStock}
                        onChange={handleInputChange}
                        className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        Rating (0-5 Stars)
                      </label>
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg ">
                        <input
                          className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          type="number"
                          onChange={handleInputChange}
                          name="rating"
                          value={formData.rating}
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        Discount
                      </label>
                      <input
                        type="number"
                        name="discount"
                        value={discount}
                        onChange={handlediscountchange}
                        className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        Product Ram
                      </label>
                      <select
                        className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={productRAMS}
                        onChange={handleproductramchange}
                      >
                        <option value="">Select RAM</option>

                        {
                            productRAMS2?.length >0 && productRAMS2?.map((ram, index) => (
                                <option key={index} value={ram._id}>
                                    {ram.productRAM}
                                </option>
                            ))
                        }
                      </select>
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        Product Weight
                      </label>
                      <select
                        className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={productWEIGHT}
                        onChange={handleproductweightchange}
                      >
                        <option value="">Select Weight</option>

                     
                        {
                            productWEIGHT2?.length >0 && productWEIGHT2?.map((ram, index) => (
                                <option key={index} value={ram._id}>
                                    {ram.productWeight}
                                </option>
                            ))
                        }
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                        Product Size
                      </label>
                      <select
                      className="form-select bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      value={productSIZE}
                      onChange={handleproductsizechange}
                    >
                        <option value="">Select size</option>

                        {
                            productSIZE2?.length >0 && productSIZE2?.map((ram, index) => (
                                <option key={index} value={ram._id}>
                                    {ram.productSize}
                                </option>
                            ))
                        }
                    </select>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="text-gray-700 dark:text-gray-300 mb-2 font-semibold text-sm uppercase tracking-wider">
                      Number of Reviews
                    </label>
                    <input
                      type="number"
                      name="numReviews"
                      value={formData.numReviews}
                      onChange={handleInputChange}
                      className="form-control bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0"
                      min="0"
                    />
                  </motion.div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group flex items-center w-100 overflow-x-auto">
                        {selectedImages.map((image, index) => (
                          <div key={index} className="h-56 w-52 p-3 relative">
                            <img
                              src={image.preview}
                              alt=""
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="absolute top-4 right-4 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ))}
                        <div className="h-56 w-52 p-3 inputimg relative">
                          <CiImageOn className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full h-full object-cover absolute inset-0 z-10 opacity-0"
                            multiple
                          />
                          <p className="pt-16 absolute inset-0 z-0 top-14 left-1/2 transform -translate-x-1/2 font-bold text-gray-600 dark:text-gray-400 opacity-50">
                            Upload Image
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div variants={itemVariants} className="mt-8">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl"
                    >
                      <FaCloudUploadAlt className="text-2xl" />
                      Publish Product
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/4">
              <div className="sticky top-32">
                <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-xl p-6">
                  <h6 className="text-gray-900 dark:text-white font-semibold mb-4">
                    Product Images
                  </h6>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image.preview}
                          alt=""
                          className="w-full h-24 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                  {selectedImages.length === 0 && (
                    <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                      No images added yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
