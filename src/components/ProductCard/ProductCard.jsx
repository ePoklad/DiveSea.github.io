import classes from "./ProductCard.module.css";

export const ProductCard = ({ title, price, imageUrl }) => {
    return (
        <div className={`${classes.prod__card}`}>
            <img className={`${classes.prod__img}`} src={imageUrl} />
            <h2 className={`${classes.prod__title}`} >{title}</h2>
            <div className={`${classes.prod__info}`} >
                <div className={`${classes.prod__left}`}>
                    <p className={`${classes.prod__descr}`}>Current bid</p>
                    <p className={`${classes.prod__price}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.57786 1.91504L3.65625 8.50334L7.57786 10.8563L11.4995 8.50334L7.57786 1.91504ZM3.65625 9.28766L7.57786 14.7779L11.4995 9.28766L7.57786 11.6406L3.65625 9.28766Z" fill="#141416" />
                        </svg>{price}</p>
                </div>
                <div className={`${classes.prod__right}`}>
                    <button className={`${classes.prod__button}`}>place bid</button>
                </div>

            </div>

        </div>
    );
};