import React from 'react'

const CheckOut = () => {
  return (
 <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">User name</label>
                                    <input type="text" placeholder="First name" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">&nbsp;</label>
                                    <input type="text" placeholder="Last name" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Country</label>
                                    <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                        <option>Select...</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Region/State</label>
                                    <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                        <option>Select...</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                        <option>Select...</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox"/>
                                    <span className="ml-2">Ship into different address</span>
                                </label>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Payment Option</h2>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                                <div className="flex flex-col items-center">
                                    <i className="fas fa-dollar-sign text-2xl"></i>
                                    <label className="mt-2">
                                        <input type="radio" name="payment" className="form-radio"/>
                                        <span className="ml-2">Cash on Delivery</span>
                                    </label>
                                </div>
                                <div className="flex flex-col items-center">
                                    <i className="fab fa-vimeo-v text-2xl"></i>
                                    <label className="mt-2">
                                        <input type="radio" name="payment" className="form-radio"/>
                                        <span className="ml-2">Venmo</span>
                                    </label>
                                </div>
                                <div className="flex flex-col items-center">
                                    <i className="fab fa-paypal text-2xl"></i>
                                    <label className="mt-2">
                                        <input type="radio" name="payment" className="form-radio"/>
                                        <span className="ml-2">Paypal</span>
                                    </label>
                                </div>
                                <div className="flex flex-col items-center">
                                    <i className="fab fa-amazon text-2xl"></i>
                                    <label className="mt-2">
                                        <input type="radio" name="payment" className="form-radio"/>
                                        <span className="ml-2">Amazon Pay</span>
                                    </label>
                                </div>
                                <div className="flex flex-col items-center">
                                    <i className="fas fa-credit-card text-2xl"></i>
                                    <label className="mt-2">
                                        <input type="radio" name="payment" className="form-radio" checked/>
                                        <span className="ml-2">Debit/Credit Card</span>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Expire Date</label>
                                    <input type="text" placeholder="MM/YY" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">CVC</label>
                                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Order Notes (Optional)</label>
                                <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <img src="https://placehold.co/50x50" alt="Printing Shirt 1" className="w-12 h-12 mr-4"/>
                                    <div>
                                        <p className="text-sm">Printing Shirt</p>
                                        <p className="text-sm text-gray-500">1 x $70</p>
                                    </div>
                                </div>
                                <p className="text-sm">$70</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <img src="https://placehold.co/50x50" alt="Printing Shirt 2" className="w-12 h-12 mr-4"/>
                                    <div>
                                        <p className="text-sm">Printing Shirt</p>
                                        <p className="text-sm text-gray-500">3 x $280</p>
                                    </div>
                                </div>
                                <p className="text-sm">$280</p>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm">Sub-total</p>
                                    <p className="text-sm">$350</p>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm">Shipping</p>
                                    <p className="text-sm">Free</p>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm">Discount</p>
                                    <p className="text-sm">-$24</p>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm">Tax</p>
                                    <p className="text-sm">$21.99</p>
                                </div>
                                <div className="flex justify-between items-center font-semibold text-lg">
                                    <p>Total</p>
                                    <p>$357.99 USD</p>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700">
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            );
        };


  


export default CheckOut