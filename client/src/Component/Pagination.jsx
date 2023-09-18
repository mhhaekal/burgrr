import { IoArrowBackOutline } from 'react-icons/io5';
import { IoArrowForwardOutline } from 'react-icons/io5';

const Pagination = () => {
    return (
        <div>
            <div className="flex justify-center items-center w-full py-3 border border-white ">
                <button className="bg-green-600 hover:bg-green-600 join-item btn">
                    <div>
                        <IoArrowBackOutline className="text-xl text-white" />
                    </div>

                </button>

                <button className="bg-green-600 hover:bg-green-600 join-item btn">
                    <IoArrowForwardOutline className="text-xl text-white" />
                </button>
            </div>
        </div>
    )
}

export default Pagination