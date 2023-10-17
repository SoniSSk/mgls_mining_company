import React from 'react';
import styles from './Dashboard.module.css';
import ImageWithTextContainer from '../ImageWithTextContainer/ImageWithTextContainer';
import enviornment from '../../assets/images/envior.png';
import mission from '../../assets/images/kkkk.png';
import imgg from '../../assets/images/0.jpg';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
// import ImageWrapper from './ImageWrapper';

const Dashboard: React.FC = () => {
    const constainers = [
        {
            image: imgg,
            heading: "Company Overview",
            text: "MGLS Mining Compnay Private Limited, we are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship.",
            link: "/mgls_mining_company/about/"
        },
        {
            image: mission,
            heading: "Our Mission",
            text: "Our mission is to be a leader in the mining industry, known for our commitment to safety, environmental responsibility, and the well-being of the communities where we operate. We strive to deliver the highest quality minerals and metals to meet the world's growing demands.",
            link: "/mgls_mining_company/about/"
        },
        {
            image: enviornment,
            heading: "CSR Activity",
            text: "We are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship.",
            link: "/mgls_mining_company/csr-activity/"
        },


    ]

    const navigate = useNavigate();

    return (
        <div className={styles.jjs}>

            <div className={styles.jj}>
                <Header />
                <div
                    className={styles.banner_text}
                >
                    <div style={{ width: "500px " }}>MGLS Mining Compnay Private Limited</div>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.ttext}>
                    Who We Are ?
                </div>
                <div className={styles.inner_text}>
                    <b>MGLS Mining Compnay Private Limited</b>,
                    we are dedicated to the responsible exploration and extraction
                    of the Earth's valuable resources. With a legacy dating back decades,
                    our company has been a stalwart in the mining industry, contributing to
                    global development while prioritizing sustainability and environmental
                    stewardship. <span
                        className={styles.read_more}
                        onClick={() => {
                            navigate("/mgls_mining_company/about");
                            window.scrollTo(0, 0)
                        }
                        }

                    > read more...</span>
                </div>
            </div>

            <div className={styles.colo}>
                {
                    constainers.map((container, index) => (
                        <div

                        >
                            <ImageWithTextContainer
                                image={container.image}
                                heading={container.heading}
                                text={container.text}
                                link={container.link}
                            />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Dashboard;
