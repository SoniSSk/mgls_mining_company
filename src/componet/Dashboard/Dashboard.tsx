import React from 'react';
import styles from './Dashboard.module.css';
import ImageWithTextContainer from '../ImageWithTextContainer/ImageWithTextContainer';
import enviornment from '../../assets/images/envior.jpeg';
import mission from '../../assets/images/kkkkkkk.jpeg';
import imgg from '../../assets/images/kkkkkl.jpeg';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
// import ImageWrapper from './ImageWrapper';

const Dashboard: React.FC = () => {
    const constainers = [
        {
            image: imgg,
            heading: "Company Overview",
            text: "M/S MGLS Mining Company is committed to responsible resource extraction, with decades of experience in global mining. Sustainability and environmental stewardship remain central to our mission.",
            link: "/mgls_mining_company/about/"
        },
        {
            image: mission,
            heading: "Our Mission",
            text: "Our mission is mining industry leadership with a focus on safety, environmental responsibility, and community well-being. We provide high-quality minerals and metals for global needs.",
            link: "/mgls_mining_company/about/"
        },
        {
            image: enviornment,
            heading: "CSR Activity",
            text: "We're committed to responsible resource exploration and extraction with a decades-long legacy. Our steadfast presence in mining contributes to global development while emphasizing sustainability and environmental stewardship.",
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
                    <div style={{ width: "500px " }}>M/S MGLS Mining Compnay </div>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.ttext}>
                    Who We Are ?
                </div>
                <div className={styles.inner_text}>
                    <b>M/S MGLS Mining Compnay </b>,
                    we are unwavering in our commitment to the conscientious exploration and extraction of Earth's invaluable resources. With a heritage spanning decades, our company has stood as a stalwart in the mining industry, making significant contributions to global development. We prioritize sustainability and environmental stewardship, ensuring that our operations meet the world's resource demands responsibly. Our legacy is built on a foundation of respect for the environment and the well-being of the communities where we operate. We continue to forge a path of responsible mining, reflecting our dedication to a balanced and sustainable approach in the industry. <span
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
