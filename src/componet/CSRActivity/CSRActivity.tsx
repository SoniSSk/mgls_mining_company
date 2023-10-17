
import React from 'react'
import styles from './CSRActivity.module.css'
import Header from '../Header/Header'
import enviornment from "../../../src/assets/images/envior.png"

const CSRActivity = () => {
    return (
        <>
            <div className={styles.jj}>
                <Header />
            </div>
            <div className={styles.main_container}>
                <div>
                    <div className={styles.text}>
                        CSR Activity
                    </div>
                    <div style={{
                        padding: '20px',
                        display: "flex",
                        gap: "150px"
                    }}>
                        <div style={{ width: '50%', textAlign: 'justify', padding: "50px 0px" }}>
                            Environment
                            We at MGLS Mining Compnay Private Limited, we take minimum disturbance to environment as a key responsibility. To ensure this happen we bring into force serval environments activities into our Job schedules.

                            Efficient energy usage, Waste management, and reduction of green house gases in our working process are some in the things that we consider in making our policies.

                            Abiding to the rules and regulations of respective countries where we work and the global environment rules. A constant review of these guidelines is habit that we inculcated in our organisational process that helps in a sustainable performance in the industry
                        </div>

                        <div>
                            <img src={enviornment} alt="ss" width={400} height={300} style={{ borderRadius: "10px" }} />
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default CSRActivity