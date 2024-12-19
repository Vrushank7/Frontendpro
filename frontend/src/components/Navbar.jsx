import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/india.png';
import '../App.css';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const handleMenuHover = (menu) => {
        setActiveMenu(menu);
    };
    const handleMenuLeave = () => {
        setActiveMenu(null);
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleMobileSubmenu = (menu) => {
        setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
    };

    return (
        <div className="header">
            <div className="innerHeader">
                <img src={logo} width="85px" alt="Logo" className="logo" />
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </div>
                <ul className="menuItems desktop-menu">
                    <li onMouseEnter={() => handleMenuHover('men')}
                        onMouseLeave={handleMenuLeave}
                        className={activeMenu === 'men' ? 'active-men' : ''}>
                        <a className="megaMenuLi menMenuLi" href="#!">  Men <FontAwesomeIcon icon={faCaretDown} /></a>
                        <div className="megaMenu menMegaMenu">
                            <ul className="megaMenuItems menMegaMenuItems">
                                <h4 className="menHeading">Indian & Fusion Wear</h4>
                                <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                <li><a href="/sarees">Sarees</a></li>
                                <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                <li><a href="/dress-materials">Dress Materials</a></li>
                                <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                <li><a href="/jackets">Jackets</a></li>
                            </ul>
                            <ul className="megaMenuItems menMegaMenuItems">
                                <h4 className="menHeading">Western Wear</h4>
                                <li><a href="/dresses">Dresses</a></li>
                                <li><a href="/tops">Tops</a></li>
                                <li><a href="/jeans">Jeans</a></li>
                                <li><a href="/trousers">Trousers</a></li>
                                <li><a href="/tshirts">T-Shirts</a></li>
                                <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                <li><a href="/playsuits">Playsuits</a></li>
                                <li><a href="/coats-jackets">Coats & Jackets</a></li>
                            </ul>
                        </div>
                    </li>
                    <li onMouseEnter={() => handleMenuHover('women')}
                        onMouseLeave={handleMenuLeave}
                        className={activeMenu === 'women' ? 'active-women' : ''} >
                        <a className="megaMenuLi" href="#!"> Women <FontAwesomeIcon icon={faCaretDown} /></a>
                        <div className="megaMenu">
                            <ul className="megaMenuItems">
                                <h4>Indian & Fusion Wear</h4>
                                <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                <li><a href="/sarees">Sarees</a></li>
                                <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                <li><a href="/dress-materials">Dress Materials</a></li>
                                <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                <li><a href="/jackets">Jackets</a></li>
                            </ul>
                            <ul className="megaMenuItems">
                                <h4>Western Wear</h4>
                                <li><a href="/dresses">Dresses</a></li>
                                <li><a href="/tops">Tops</a></li>
                                <li><a href="/jeans">Jeans</a></li>
                                <li><a href="/trousers">Trousers</a></li>
                                <li><a href="/tshirts">T-Shirts</a></li>
                                <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                <li><a href="/playsuits">Playsuits</a></li>
                                <li><a href="/coats-jackets">Coats & Jackets</a></li>
                            </ul>
                            <ul className="megaMenuItems">
                                <h4>Winter</h4>
                                <li><a href="/dresses">Dresses</a></li>
                                <li><a href="/tops">Tops</a></li>
                                <li><a href="/jeans">Jeans</a></li>
                                <li><a href="/trousers">Trousers</a></li>
                                <li><a href="/tshirts">T-Shirts</a></li>
                                <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                <li><a href="/playsuits">Playsuits</a></li>
                                <li><a href="/coats-jackets">Coats & Jackets</a></li>
                            </ul>
                        </div>
                    </li>
                    <li onMouseEnter={() => handleMenuHover('kids')}
                        onMouseLeave={handleMenuLeave}
                        className={activeMenu === 'kids' ? 'active-kids' : ''}>
                        <a className="megaMenuLi kidsMenuLi" href="#!"> Kids <FontAwesomeIcon icon={faCaretDown} /></a>
                        <div className="megaMenu kidsMegaMenu">
                            <ul className="megaMenuItems kidsMegaMenuItems">
                                <h4 className="kidsHeading">Indian & Fusion Wear</h4>
                                <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                <li><a href="/sarees">Sarees</a></li>
                                <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                <li><a href="/dress-materials">Dress Materials</a></li>
                                <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                <li><a href="/jackets">Jackets</a></li>
                            </ul>
                            <ul className="megaMenuItems kidsMegaMenuItems">
                                <h4 className="kidsHeading">Western Wear</h4>
                                <li><a href="/dresses">Dresses</a></li>
                                <li><a href="/tops">Tops</a></li>
                                <li><a href="/jeans">Jeans</a></li>
                                <li><a href="/trousers">Trousers</a></li>
                                <li><a href="/tshirts">T-Shirts</a></li>
                                <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                <li><a href="/playsuits">Playsuits</a></li>
                                <li><a href="/coats-jackets">Coats & Jackets</a></li>
                            </ul>
                        </div>
                    </li>
                    <li onMouseEnter={() => handleMenuHover('beauty')}
                        onMouseLeave={handleMenuLeave}
                        className={activeMenu === 'beauty' ? 'active-beauty' : ''}>
                        <a className="megaMenuLi beautyMenuLi" href="#!"> Beauty <FontAwesomeIcon icon={faCaretDown} /></a>
                        <div className="megaMenu beautyMegaMenu">
                            <ul className="megaMenuItems beautyMegaMenuItems">
                                <h4 className="beautyHeading">Indian & Fusion Wear</h4>
                                <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                <li><a href="/sarees">Sarees</a></li>
                                <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                <li><a href="/dress-materials">Dress Materials</a></li>
                                <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                <li><a href="/jackets">Jackets</a></li>
                            </ul>
                            <ul className="megaMenuItems beautyMegaMenuItems">
                                <h4 className="beautyHeading">Western Wear</h4>
                                <li><a href="/dresses">Dresses</a></li>
                                <li><a href="/tops">Tops</a></li>
                                <li><a href="/jeans">Jeans</a></li>
                                <li><a href="/trousers">Trousers</a></li>
                                <li><a href="/tshirts">T-Shirts</a></li>
                                <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                <li><a href="/playsuits">Playsuits</a></li>
                                <li><a href="/coats-jackets">Coats & Jackets</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-menu-items">
                        <li className="mobile-menu-section">
                            <div className="mobile-menu-header" onClick={() => toggleMobileSubmenu('men')} >Men <FontAwesomeIcon icon={faCaretDown}
                                className={`dropdown-icon ${activeMobileSubmenu === 'men' ? 'rotate' : ''}`} />
                            </div>
                            {activeMobileSubmenu === 'men' && (<div className="mobile-submenu">
                                <div className="mobile-submenu-section">
                                    <h4 className="menHeading">Indian & Fusion Wear</h4>
                                    <ul>
                                        <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                        <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                        <li><a href="/sarees">Sarees</a></li>
                                        <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                        <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                        <li><a href="/dress-materials">Dress Materials</a></li>
                                        <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                        <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                        <li><a href="/jackets">Jackets</a></li>
                                    </ul>
                                </div>
                                <div className="mobile-submenu-section">
                                    <h4 className="menHeading">Western Wear</h4>
                                    <ul>
                                        <li><a href="/dresses">Dresses</a></li>
                                        <li><a href="/tops">Tops</a></li>
                                        <li><a href="/jeans">Jeans</a></li>
                                        <li><a href="/trousers">Trousers</a></li>
                                        <li><a href="/tshirts">T-Shirts</a></li>
                                        <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                        <li><a href="/playsuits">Playsuits</a></li>
                                        <li><a href="/coats-jackets">Coats & Jackets</a></li>
                                    </ul>
                                </div>
                            </div>
                            )}
                        </li>
                        <li className="mobile-menu-section">
                            <div className="mobile-menu-header" onClick={() => toggleMobileSubmenu('women')}>Women <FontAwesomeIcon icon={faCaretDown}
                                className={`dropdown-icon ${activeMobileSubmenu === 'women' ? 'rotate' : ''}`} />
                            </div>
                            {activeMobileSubmenu === 'women' && (<div className="mobile-submenu">
                                <div className="mobile-submenu-section">
                                    <h4>Indian & Fusion Wear</h4>
                                    <ul>
                                        <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                        <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                        <li><a href="/sarees">Sarees</a></li>
                                        <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                        <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                        <li><a href="/dress-materials">Dress Materials</a></li>
                                        <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                        <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                        <li><a href="/jackets">Jackets</a></li>
                                    </ul>
                                </div>
                                <div className="mobile-submenu-section">
                                    <h4>Western Wear</h4>
                                    <ul>
                                        <li><a href="/dresses">Dresses</a></li>
                                        <li><a href="/tops">Tops</a></li>
                                        <li><a href="/jeans">Jeans</a></li>
                                        <li><a href="/trousers">Trousers</a></li>
                                        <li><a href="/tshirts">T-Shirts</a></li>
                                        <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                        <li><a href="/playsuits">Playsuits</a></li>
                                        <li><a href="/coats-jackets">Coats & Jackets</a></li>
                                    </ul>
                                </div>
                                <div className="mobile-submenu-section">
                                    <h4>Winter</h4>
                                    <ul>
                                        <li><a href="/dresses">Dresses</a></li>
                                        <li><a href="/tops">Tops</a></li>
                                        <li><a href="/jeans">Jeans</a></li>
                                        <li><a href="/trousers">Trousers</a></li>
                                        <li><a href="/tshirts">T-Shirts</a></li>
                                        <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                        <li><a href="/playsuits">Playsuits</a></li>
                                        <li><a href="/coats-jackets">Coats & Jackets</a></li>
                                    </ul>
                                </div>
                            </div>
                            )}
                        </li>
                        <li className="mobile-menu-section">
                            <div className="mobile-menu-header" onClick={() => toggleMobileSubmenu('kids')}>Kids <FontAwesomeIcon icon={faCaretDown}
                                className={`dropdown-icon ${activeMobileSubmenu === 'kids' ? 'rotate' : ''}`} />
                            </div>
                            {activeMobileSubmenu === 'kids' && (<div className="mobile-submenu">
                                <div className="mobile-submenu-section">
                                    <h4 className="kidsHeading">Indian & Fusion Wear</h4>
                                    <ul>
                                        <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                        <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                        <li><a href="/sarees">Sarees</a></li>
                                        <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                        <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                        <li><a href="/dress-materials">Dress Materials</a></li>
                                        <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                        <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                        <li><a href="/jackets">Jackets</a></li>
                                    </ul>
                                </div>
                                <div className="mobile-submenu-section">
                                    <h4 className="kidsHeading">Western Wear</h4>
                                    <ul>
                                        <li><a href="/dresses">Dresses</a></li>
                                        <li><a href="/tops">Tops</a></li>
                                        <li><a href="/jeans">Jeans</a></li>
                                        <li><a href="/trousers">Trousers</a></li>
                                        <li><a href="/tshirts">T-Shirts</a></li>
                                        <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                        <li><a href="/playsuits">Playsuits</a></li>
                                        <li><a href="/coats-jackets">Coats & Jackets</a></li>
                                    </ul>
                                </div>
                            </div>
                            )}
                        </li>
                        <li className="mobile-menu-section">
                            <div className="mobile-menu-header" onClick={() => toggleMobileSubmenu('beauty')}>Beauty <FontAwesomeIcon icon={faCaretDown}
                                className={`dropdown-icon ${activeMobileSubmenu === 'beauty' ? 'rotate' : ''}`} />
                            </div>
                            {activeMobileSubmenu === 'beauty' && (<div className="mobile-submenu">
                                <div className="mobile-submenu-section">
                                    <h4 className="beautyHeading">Indian & Fusion Wear</h4>
                                    <ul>
                                        <li><a href="/kurtas-suits">Kurtas & Suits</a></li>
                                        <li><a href="/kurtis-tops">Kurtis, Tunics & Tops</a></li>
                                        <li><a href="/sarees">Sarees</a></li>
                                        <li><a href="/ethnic-wear">Ethnic Wear</a></li>
                                        <li><a href="/leggings">Leggings, Salwars & Churidars</a></li>
                                        <li><a href="/dress-materials">Dress Materials</a></li>
                                        <li><a href="/lehenga-cholis">Lehenga Cholis</a></li>
                                        <li><a href="/dupattas">Dupattas & Shawls</a></li>
                                        <li><a href="/jackets">Jackets</a></li>
                                    </ul>
                                </div>
                                <div className="mobile-submenu-section">
                                    <h4 className="beautyHeading">Western Wear</h4>
                                    <ul>
                                        <li><a href="/dresses">Dresses</a></li>
                                        <li><a href="/tops">Tops</a></li>
                                        <li><a href="/jeans">Jeans</a></li>
                                        <li><a href="/trousers">Trousers</a></li>
                                        <li><a href="/tshirts">T-Shirts</a></li>
                                        <li><a href="/shorts-skirts">Shorts & Skirts</a></li>
                                        <li><a href="/playsuits">Playsuits</a></li>
                                        <li><a href="/coats-jackets">Coats & Jackets</a></li>
                                    </ul>
                                </div>
                            </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;