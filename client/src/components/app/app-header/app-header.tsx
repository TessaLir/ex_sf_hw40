import React from "react";

import svgLogo from "./../../images/logo.svg";

import styleClass from "./app-header.module.css";

const AppHeader = () => {
    return <header className={styleClass["header"]}>
        <nav className={styleClass["nav"]}>
            <a className={styleClass["nav-logo"]} href="#">
                <img src={svgLogo} alt="logo" />
                <span>Bicycle Theft Alert</span>
            </a>
            <ul className={styleClass["nav-menu"]}>
                <li><a className={styleClass["nav-menu--item"]} href="#">главная</a></li>
                <li><a className={styleClass["nav-menu--item"]} href="#">сообщения</a></li>
                <li><a className={styleClass["nav-menu--item"]} href="#">пользователи</a></li>
            </ul>
        </nav>
    </header>;
}

export default AppHeader;