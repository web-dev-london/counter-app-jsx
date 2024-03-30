
import React from 'react';



const Navbar = ({ totalCounters }) => {



    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <button type="button" class="btn btn-primary fw-bold fs-5">
                        Navbar <span class="badge text-bg-secondary">{totalCounters}</span>
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar