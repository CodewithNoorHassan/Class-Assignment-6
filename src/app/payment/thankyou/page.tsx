export const metadata = {
    title: "Thank you"
};
export default function thankyou() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white rounded-lg shadow-lg p-10 border border-gray-300">
                <h1 className="text-7xl text-green-700 font-calibri font-bold italic mb-4">Thank you for Shopping!!!</h1>
                <h2 className="text-4xl text-blue-700 font-calibri border-b-4 border-purple-600 pb-4 mb-4">Your order will be delivered in 3 business days</h2>
                <p className="text-lg text-gray-600">We appreciate your business and look forward to serving you again!</p>
            </div>
        </div>
    );
}
