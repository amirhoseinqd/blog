// styles
import "@/public/styles/globals.scss";

// components
import Navigation from "./components/navigaion/Navigation";
import Footer from "./components/footer/Footer";
import AboutContainer from "./components/about-container/AboutContainer";
import ResumeContainer from "./components/resume-container/ResumeContaner";
import MainContainer from "./components/main-container/MainContainer";

export const metadata = {
  title: "Amirhosein Qadamgahi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AboutContainer />
        <MainContainer>
          <Navigation />
          {children}
          <Footer />
        </MainContainer>
        <ResumeContainer />
      </body>
    </html>
  );
}
