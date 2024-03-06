import { AiOutlineTool } from 'react-icons/ai'; // Importing construction icon from React Icons

const PageInProgress = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <AiOutlineTool className="text-6xl text-gray-800" />
            <h2 className="mt-4 text-xl font-bold text-gray-800">Page Under Construction</h2>
            <p className="mt-2 text-center text-gray-600">We're working hard to bring you the best experience. Check back soon!</p>
        </div>
    );
};

export default PageInProgress;
