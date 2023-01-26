import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'
function NavAndFooter() {
    return (
        <>
            <div id="content-wrapper" class="d-flex flex-column">

                <div id="content">
                    <Navbar/>
                    {/* Content */}
                    <Content/>
                </div>

                {/* <!-- Footer --> */}
                <Footer/>s

            </div>
        </>
    )
}

export default NavAndFooter