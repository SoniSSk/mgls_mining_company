import React from 'react';
import styles from './ImageWithTextContainer.module.css';
import { useNavigate } from 'react-router-dom';

const ImageWithTextContainer = (props: any) => {
    const {
        image,
        heading,
        text,
        link
    } = props;
    const navigate = useNavigate();

    return (
        <div className={styles.contaoner}>
            <img
                src={image}
                alt="ss"
                width={200}
                className={styles.img_st}
            />
            <div className={styles.text_he}>
                {heading}
            </div>
            <div className={styles.text_cont}>
                <p>{text} <span
                    className={styles.read_more}
                    onClick={() => {
                        navigate(link);
                        window.scrollTo(0, 0)
                    }}>
                    read more...
                </span></p>
            </div>
        </div>
    );
}

export default ImageWithTextContainer;