import React from 'react'
import styles from './AboutUs.module.css'
import Header from '../Header/Header'

const AboutUs = () => {

    const abloutUs = [
        {
            heading: "Company Overview",
            content: 'At MGLS MINING COMPANY PRIVATE LIMITED, we are dedicated to the responsible exploration and extraction of the Earths valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship.'
        },
        {
            heading: "Our Mission",
            content: "Our mission is to be a leader in the mining industry, known for our commitment to safety, environmental responsibility, and the well-being of the communities where we operate. We strive to deliver the highest quality minerals and metals to meet the world's growing demands."
        },
        {
            heading: "Our Commitment to Sustainability",
            content: "Environmental responsibility is at the core of our operations. We employ state-of-the-art technologies and practices to minimize our ecological footprint. From reclamation efforts to water and energy conservation, we are dedicated to leaving a positive impact on the environment."
        },
        {
            heading: "Our Commitment to Safety",
            content: "The safety of our employees and partners is non-negotiable. We maintain the highest safety standards and continuously invest in training and resources to ensure that everyone who works with us returns home safely."
        },
        {
            heading: "Our Community Engagement",
            content: "We believe in being good neighbors. We work closely with local communities to create shared value. Through job opportunities, education, and community projects, we aim to be a catalyst for progress and development in the areas we operate."
        },
        {
            heading: 'Innovation and Technology',
            content: 'We are always at the forefront of innovation. Our commitment to cutting-edge technology not only improves efficiency but also helps us reduce the environmental impact of our mining activities.'
        },
        {
            heading: 'Quality Assurance',
            content: 'Delivering top-tier products is our promise. We have rigorous quality control processes in place to ensure that the minerals and metals we extract meet the highest industry standards.'
        },
        {
            heading: 'A Bright Future',
            content: 'The mining industry is constantly evolving, and so are we. We are committed to adapting to new challenges and opportunities, while adhering to the principles that have made us a respected name in the mining sector.'
        }
    ]
    return (
        <>
            <div className={styles.jj}>
                <Header />
            </div>
            <div className={styles.main_container}>

                <div>
                    <div className={styles.text}>
                        About us
                    </div>
                    <div className={styles.container_aaaa} >
                        <div className={styles.bbbb} >
                            {
                                abloutUs.map((about, index) => (
                                    <div key={index}>
                                        <div className={styles.main_texts}>
                                            {about.heading}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.aaaa} >
                            {
                                abloutUs.map((about, index) => (
                                    <div key={index}>
                                        <div className={styles.main_text}>
                                            {about.heading}
                                        </div>
                                        <div className={styles.ss}>
                                            {about.content}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUs