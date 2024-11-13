
import classes from './HeroSection.module.css'
import heroBg from '../../assets/hero-header.png'



export default function HeroSection() {
    return (
        <section className={`${classes.hero}`} >
            <div className={` ${classes.container}`}>
                <div className={`${classes.hero__content} `}>
                <h1 className={`${classes.hero__title}`} >Discover And&nbsp; Create NFTs</h1>
                <p className={`${classes.hero__descr}`}>Discover, Create and Sell NFTs On Our NFT Marketplace
                    With Over Thousands Of NFTs And Get a
                    <span className={`${classes.hero__note}`}> $20 bonus.</span> </p>
                <div className={`${classes.hero__btns}`}>
                    <button className={`${classes.button}`} style={{ marginRight: '20px'}}>Explore More</button>
                    <button className={`${classes.button__lite}`}>create NFT</button>
                </div>
                <ul className={`${classes.hero__list}`}>
                    <li className={`${classes.hero__item}`} >
                        <p className={`${classes.item__score}`}>430K+</p>
                        <span className={`${classes.item__descr}`}>Art Works</span>
                    </li>
                    <li className={`${classes.hero__item}`} >
                    <p className={`${classes.item__score}`}>159K+</p>
                    <span className={`${classes.item__descr}`}>Creators</span>
                    </li>
                    <li className={`${classes.hero__item}`} >
                    <p className={`${classes.item__score}`}>87K+</p>
                    <span className={`${classes.item__descr}`}>Collections</span>
                    </li>
                </ul>
                </div>
            </div>
            <div className={`${classes.hero__img}`}>
            <img src={heroBg} alt="" />
            </div>
        </section>
    )

}
