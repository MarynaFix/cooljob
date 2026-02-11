import "./App.css";
import Header from "./components/header";
import WelcomeSection from "./components/welcomeSection";
import Partners from "./components/partners";
import CategorySection from "./components/categorySection";
import NewVacancySection from "./components/newVacancySection";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <section className="blueSection">
        <Header />
        <WelcomeSection />
      </section>
      <Partners />
      <CategorySection />
      <NewVacancySection />
      <Footer />
    </div>
  );
}
export default App;
