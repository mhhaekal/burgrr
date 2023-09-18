const SortButton = () => {
    return (
        <div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn bg-green-600 hover:bg-green-600 text-white">Sort</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>A - Z</a></li>
                    <li><a>Z - A</a></li>
                </ul>
            </div>

        </div>
    )
}

export default SortButton