import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleSignUpClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Countries of the World</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore the diverse countries around the globe.
      </p>
      <div className="max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our website, where you can discover fascinating information
          about countries from all over the world. Whether you're interested in
          their history, culture, or natural wonders, we've got you covered.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignUpClick}>
          {user ? "Go to Dashboard" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
