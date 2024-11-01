export const metadata = {
    title: "Toyota Corolla"
}
export default function card1() {
    return (
        <div>
            <div className=" flex items-center justify-center text-3xl text-nowrap text-black font-calibri font-bold h-9 w-[700px] text-center mt-10 ml-80">
                <h1>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            </div>
            <div>
                <a className="flex justify-center border mt-3 w-[700px] mx-auto rounded-lg shadow-lg">
                    <img className="max-w-full rounded-t-lg w-96 mt-2" src="/cardi.jpg" alt="image" />
                </a>
            </div>
            <div className="gap-3 w-full justify-center flex mt-4 ">
                <button className="bg-purple-600 hover:bg-purple-700 rounded-md w-40 h-10 items-center text-sm text-white">Book A Test Drive</button>
                <button className="bg-purple-600 rounded-md w-40 h-10 hover:bg-purple-700  items-center text-sm text-white text-nowrap">Request Bank Finance</button>
                <button className="bg-purple-600 rounded-md w-40 h-10 hover:bg-purple-700  items-center text-sm text-white">Visit plce</button>
                <button className="bg-purple-600 rounded-md w-40 h-10 hover:bg-purple-700  items-center text-sm text-white">Car Inspection</button>
            </div>
            <div className="bg-white mt-4 border mx-auto w-[700px] text-center dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
                <h3 className="text-slate-900 dark:text-white text-base font-bold tracking-tight">Toyota Corolla one of the most popular Car in Pakistan</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                    My instructor, Ali Jawad, is an exceptional teacher who has made learning Next.js.
                </p>
                <p className="text-green-600 dark:text-white text-2xl font-bold">
                    PKR 59,70,000
                </p>
                <a href="/payment">
                    <button className="bg-blue-600 hover:bg-blue-700 mt-4 rounded-md w-40 h-10 items-center text-sm text-white">Make Payment</button>
                </a>
            </div>
        </div>
    );
}
