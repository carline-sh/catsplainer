import { Link } from "@tanstack/react-router";
import { FaBackspace } from "react-icons/fa";

export const BackButton = () => {
    return (
        <Link to="/" className="flex items-center gap-2 px-4 py-2 border-2 border-pink-100 hover:border-pink-500 rounded-md text-pink-800 w-fit hover:bg-pink-100">
            <FaBackspace className="text-pink-500 text-2xl" />
            Back
        </Link>
    );
};