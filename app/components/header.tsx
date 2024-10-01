import React from 'react';
import ThemeController from './themeController';
import Link from 'next/link'

const Header: React.FC = () => {
    return (
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Ecogreen</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/nosotros">Nosotros</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                        <ThemeController />
                    </ul>
                </div>
            </div>
    );
};

export default Header;
export { Header };