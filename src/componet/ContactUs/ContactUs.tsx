import React from 'react'
import styles from './ContactUs.module.css'
import Header from '../Header/Header'

const ContactUs = () => {
    return (
        <>
            <div className={styles.jj}>
                <Header />
            </div>
            <div className={styles.main_container}>
                <div>
                    <div className={styles.text}>
                        Contact Us
                    </div>
                    <div className={styles.conatainer}>
                        <div

                            className={
                                styles.get_in_touch
                            }>

                            MGLS Mining Compnay Private Limited
                        </div>

                        <div>
                            Address:- <span className={styles.s}> 3/58 Moti Nagar, New Delhi Pin-110015</span>
                        </div>
                        <div>
                            Branch office:- <span className={styles.s}> BH-94 Deen Dayal Nagar, Gwalior (M.P.) Pin-474001</span>

                        </div>
                        <div>
                            Email:- <span className={styles.link}>mglsmc2001@gmail.com</span>
                        </div>
                        <div>
                            Mobile:- <span className={styles.link}>+91-9236102001 </span>
                        </div>
                        <div>
                            Mobile:- <span className={styles.link}>+91-9425403492 </span>
                        </div>



                    </div>
                </div>
                {/* <div>
                <img
                    src={iron_ore_mines}
                    alt="Pictu"
                    className={styles.image}
                />
            </div> */}
                {/* <div className={styles.mail_container}>
                    <div
                        className={styles.mail_input}
                    >
                        <div className={styles.input_feild}>
                            Name
                        </div>
                        <div className={styles.input_feild}>
                            email
                        </div>
                    </div>
                    <div className={styles.input_feild_two}>

                    </div>
                    <button className={styles.button_style} type="submit">Send Message</button>
                </div> */}

            </div >
        </>
    )
}

export default ContactUs