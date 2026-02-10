import "./App.css";
import Header from "./components/header";
import WelcomeSection from "./components/welcomeSection";
import Partners from "./components/partners";
import CategorySection from "./components/categorySection";
import NewVacancySection from "./components/newVacancySection";
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
    </div>
  );
}
export default App;
