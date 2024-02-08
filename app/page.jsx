// components
import MainContainer from './components/main-container/MainContainer'
import AboutContainer from './components/about-container/AboutContainer'
import ResumeContainer from './components/resume-container/ResumeContaner'

export default function Home() {
  return (
    <main>
      <AboutContainer />
      <MainContainer />
      <ResumeContainer />
    </main>
  );
}
