import './Loader.css';

const Loader = () => {
    return (
        <div>
            <div className="loader">
                <div className="truckWrapper">
                    <div className="truckBody">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 198 93"
                            className="trucksvg"
                        >
                            <path
                                strokeWidth="3"
                                stroke="#282828"
                                fill="#F83D3D"
                                d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
