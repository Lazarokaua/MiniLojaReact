

const SkeletonCard = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative animate-pulse">
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div> {/* Image placeholder */}
            <div className="p-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div> {/* Title line 1 */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div> {/* Title line 2 */}

                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div> {/* Price placeholder */}

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/5 mb-6"></div> {/* Rating placeholder */}

                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div> {/* Button placeholder */}
            </div>
        </div>
    );
};


export default SkeletonCard
