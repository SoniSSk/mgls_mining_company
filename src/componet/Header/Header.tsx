import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const headerOptions = [
        { name: 'Home', link: '/mgls_mining_company' },
        { name: 'About Us', link: '/mgls_mining_company/about' },
        { name: 'Services', link: '/mgls_mining_company' },
        { name: 'Certificates', link: '/mgls_mining_company' },
        { name: 'CSR Activity', link: '/mgls_mining_company/csr-activity' },
        { name: 'Contact Us', link: '/mgls_mining_company/contact' },
    ];

    const navigate = useNavigate();;


    return (
        <div className={styles.main_container}>
            <div
                onClick={() => {
                    navigate("/mgls_mining_company")
                }}
                className={styles.gomti}>M/S MGLS <span className={styles.infra}>  Mining Compnay  </span> </div>
            <div className={styles.option_container}>
                {headerOptions.map((option, index) => (
                    <div key={index}>
                        <div onClick={() => {
                            navigate(option.link);
                            window.scrollTo(0, 0)
                        }}>
                            {option.name}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Header;
