import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Smart Queue
            <span className="text-red-500"> Management</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl">
            A modern, user-friendly queue management system designed to reduce
            waiting time and improve customer experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/queue"
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-red-600 transition"
            >
              Join a Queue
            </Link>

            <Link
              href="/login"
              className="border border-red-500 text-red-500 px-6 py-3 rounded-lg font-medium text-center hover:bg-red-100 transition"
            >
              Admin Login
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">
          <img
            src="/home.png"
            alt="Queue Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>

  );
}
