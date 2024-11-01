"use client";

import React from 'react';

export default function Payment() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Payment Form</h2>

                <div className="mb-5">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input
                        type="text"
                        placeholder="Enter your card number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <input
                        type="text"
                        placeholder="Enter your address"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="button"
                    onClick={() => window.location.href = '/payment/thankyou'}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Submit Payment
                </button>
            </form>
        </div>
    );
}
