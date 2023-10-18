import React from 'react'
import styles from './Footer.module.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const footerOption = [
        { name: 'Home', link: '/mgls_mining_company' },
        { name: 'About Us', link: '/mgls_mining_company/about' },
        { name: 'Services', link: '/mgls_mining_company/services' },
        { name: 'Certificates', link: '/mgls_mining_company/certificate' },
        { name: 'CSR Activity', link: '/mgls_mining_company/csr-activity' },
        { name: 'Contact Us', link: '/mgls_mining_company/contact' },
    ];
    const navigate = useNavigate();
    return (
        <div className={styles.main}>
            <div className={styles.section1}>
                <div className={styles.company_name}>M/S MGLS Mining Compnay </div>
                <div className={styles.text}>
                    mglsmc2001@gmail.com
                </div>
                <div className={styles.divider}></div>
                <div className={styles.text}> Copyright Dotcreativemarket  </div>
            </div>
            <div>
                <div>
                    <div className={styles.second_heading}>Sitemap
                    </div>
                    <div className={styles.sitemap_container}>
                        {
                            footerOption.map((item, index) => {
                                return (
                                    <div onClick={() => {
                                        navigate(item.link);
                                        window.scrollTo(0, 0)
                                    }}>
                                        {item.name}
                                    </div>

                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className={styles.second_heading}>Contact</div>
                    <div className={styles.text}>Email:- mglsmc2001@gmail.com</div>
                    <div className={styles.text}>Mobile:- +91-9236102001, +91-9425403492</div>
                </div>

            </div>

        </div>
    )
}


export default Footer