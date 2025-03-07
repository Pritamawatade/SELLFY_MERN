import React, { useContext, useEffect, useState } from 'react';
import { fetchdatafromapi } from '../../utils/api';
import { myContext } from '../../App';
import { Link } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchdatafromapi(`/api/orders`).then((res) => {
      setOrders(res);
      setLoading(false);
    }).catch(err => {
      console.error("Error fetching orders:", err);
      setLoading(false);
    });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const toggleOrderDetails = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-700 mt-12 text-white dark:text-red-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Your Orders</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">No orders found</h3>
              <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
              <Link to="/products" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white dark:bg-slate-800 dark:text-black rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b dark:bg-slate-800 dark:text-white">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm dark:text-white text-gray-500 mb-1">ORDER PLACED</p>    
                      <p className="font-medium">{formatDate(order.date)}</p>
                    </div>
                    <div>
                      <p className="text-sm dark:text-white text-gray-500 mb-1">TOTAL</p>
                      <p className="font-bold text-xl">₹{order.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm dark:text-white text-gray-500 mb-1">ORDER ID</p>
                      <p className="font-medium text-gray-800">{order._id}</p>
                    </div>
                    <div>
                      <p className="text-sm dark:text-white text-gray-500 mb-1">PAYMENT ID</p>
                      <p className="font-medium text-gray-800">{order.paymentId}</p>
                    </div>
                    <button 
                      onClick={() => toggleOrderDetails(order._id)}
                      className="ml-auto px-4 py-2 bg-blue-100 text-blue-700 rounded-md font-medium hover:bg-blue-200 transition-colors flex items-center"
                    >
                      {expandedOrder === order._id ? 'Hide Details' : 'View Details'}
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform ${expandedOrder === order._id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {expandedOrder === order._id && (
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p><span className="font-medium">Name:</span> {order.name}</p>
                        <p><span className="font-medium">Email:</span> {order.email}</p>
                        <p><span className="font-medium">Phone:</span> {order.phone}</p>
                        <p><span className="font-medium">Address:</span> {order.address}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-4">Order Items</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Product
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {order.products.map((product) => (
                            <tr key={product._id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-16 w-16 rounded border overflow-hidden">
                                    <img className="h-full w-full object-cover" src={product.image} alt={product.productTitle} />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900 line-clamp-2 max-w-xs">
                                      {product.productTitle}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      ID: {product.productId}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <div className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString()}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                  {product.quantity}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">
                                ₹{product.subTotal.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="bg-gray-50">
                          <tr>
                            <td colSpan="3" className="px-6 py-4 text-right font-bold">
                              Total:
                            </td>
                            <td className="px-6 py-4 text-right text-lg font-bold text-blue-700">
                              ₹{order.amount.toLocaleString()}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Orders;