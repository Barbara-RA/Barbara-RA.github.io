import React, { useState, useEffect } from "react";
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header.jsx";
import AboutMeSection from './components/Section/AboutMeSection/AboutMeSection';
import AuthoritySection from './components/Section/AuthoritySection/AuthoritySection';
import DescriptionSection from "./components/Section/DescriptionSection/DescriptionSection.jsx";
import FAQSection from './components/Section/FAQSection/FAQSection';
import HomeSection from "./components/Section/HomeSection/HomeSection.jsx";
import PortfolioSection from './components/Section/PortfolioSection/PortfolioSection';
import SocialProofSection from './components/Section/SocialProofSection/SocialProofSection';
import Whatsapp from './components/Section/Whatsapp/Whatsapp';
import Loader from "./components/Loader/Loader";
import './css/global.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => setIsLoading(false), 300);
        };

        if (document.readyState === "complete") {
            handlePageLoad();
        } else {
            window.addEventListener("load", handlePageLoad);
        }

        return () => window.removeEventListener("load", handlePageLoad);
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && (
                <>
                    <Header />
                    <HomeSection />
                    <DescriptionSection />
                    <PortfolioSection />
                    <AuthoritySection />
                    <AboutMeSection />
                    <SocialProofSection />
                    <FAQSection />
                    <Whatsapp />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
