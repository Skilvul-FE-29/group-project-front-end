import React from 'react'
import '../styles/teacher-details.css'

const TeacherDetails = () => {
    return (
        <section id='teacher-details'>
            <img class="return-btn" src="../src/arrow btn.svg" alt="arrow btn" onclick="back()" />
            <section id="teacher-header" class="teacher-header">
                {/* <!-- ambil data teacher header --> */}
            </section>
            <section class="teacher-main">
                <div class="sub-navbar">
                    <ul class="sub-navbar-menu">
                        <li id="nav-profil" class="navbar-menu">Profil Diri</li>
                        <li id="nav-pengalaman" class="navbar-menu hidden">Pengalaman</li>
                        <li id="nav-ulasan" class="navbar-menu hidden">Ulasan</li>
                    </ul>
                </div>


                <section id="teacher-details">
                    <div id="profil-diri" class="sub-menu">
                        {/* <!-- ambil data profil dari API --> */}
                    </div>

                    <div id="pengalaman" class="sub-menu hidden">
                        <h2>Daftar Pengalaman</h2>
                        {/* <!-- ambil data pengalaman dari API --> */}
                    </div>

                    <div id="ulasan" class="sub-menu hidden">
                        <div id="rating-container" class="rating-pengajar">
                            <h2>Rating Pengajar</h2>
                            {/* <!-- ambil data review dari API --> */}
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default TeacherDetails