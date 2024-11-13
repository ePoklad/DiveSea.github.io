
import HeroSection from '../components/HeroSection/HeroSection'
import TopSection from '../components/TopSection/TopSection.jsx'
import InnerSection from '../components/InnerSection/InnerSection.jsx'
import { products } from '../products.js';

export default function MainPage() {
    return (
        <>
            <HeroSection />
            <TopSection products={products} />
            <InnerSection />
        </>
    )

}
