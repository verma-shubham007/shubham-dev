import myAvatar from "../../assets/images/my-avatar.jpeg";
import myAvatar1 from "../../assets/images/my-avatar1.png";
import myAvatar2 from "../../assets/images/my-avatar2.png";
const Sidebar = () => {
    return (
        <aside className="sidebar active">

        <div className="sidebar-info">

            <figure className="avatar-box">
                <img src={myAvatar1} alt="Shubham Verma" width="80" />
            </figure>

            <div className="info-content">
                <h1 className="name" title="Richard hanrick">Shubham Verma</h1>

                <p className="title">Technical Lead</p>
            </div>

            <button className="info_more-btn">
                <span>Show Contacts</span>

                <ion-icon name="chevron-down"></ion-icon>
            </button>

        </div>

        <div className="sidebar-info_more">

            <div className="separator"></div>

            <ul className="contacts-list">

                <li className="contact-item">

                    <div className="icon-box">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Email</p>

                        <a href="mailto:verma_shubham@outlook.com" className="contact-link">verma_shubham@outlook.com</a>
                    </div>

                </li>

                <li className="contact-item">

                    <div className="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Phone</p>

                        <a href="tel:+918010481221" className="contact-link">+91-8010481221</a>
                    </div>

                </li>

                <li className="contact-item">

                    <div className="icon-box">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Birthday</p>

                        <time dateTime="1982-06-23">July 20, 1995</time>
                    </div>

                </li>

                <li className="contact-item">

                    <div className="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Location</p>

                        <address>New Delhi, India</address>
                    </div>

                </li>

            </ul>

            <div className="separator"></div>

            <ul className="social-list">

                {/*<li className="social-item">*/}
                {/*    <a href="#" className="social-link">*/}
                {/*        <ion-icon name="logo-facebook"></ion-icon>*/}
                {/*    </a>*/}
                {/*</li>*/}

                {/*<li className="social-item">*/}
                {/*    <a href="#" className="social-link">*/}
                {/*        <ion-icon name="logo-twitter"></ion-icon>*/}
                {/*    </a>*/}
                {/*</li>*/}

                <li className="social-item">
                    <a href="https://www.linkedin.com/in/shubham-verma-9bb147131/" target="_blank" className="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>

            </ul>

        </div>

    </aside>);
}

export default Sidebar;

