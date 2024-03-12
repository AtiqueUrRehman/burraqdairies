import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async () => {
    setError("");
    setSuccessMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-mail", {
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = await res.json();
      if (result.success) {
        setSuccessMessage("Message sent successfully.");
        setError("");
      } else {
        setError("There was an error sending your message.");
      }
    } catch (error) {
      setError("There was an error sending your message");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="mt-3 sm:flex">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          name="email"
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full py-3 px-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-red-500 focus:border-red-500 sm:flex-1 border border-gray-200"
          placeholder="Enter your email"
        />
        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
        >
          Notify me
        </button>
      </form>
      <div>
        {error && (
          <p className="mt-3 sm:flex text-red-600">
            There was an error sending your email.
          </p>
        )}
        {successMessage && (
          <p className="mt-3 sm:flex text-green-600">
            Email has been been sent successfully
          </p>
        )}
      </div>
    </div>
  );
}
