import Footer from "./Footer";
import ProfileBanner from "./ProfileBanner";
import ProfleInformation from "./ProfleInformation";

const MainWrapper = () => {
  return (
    <main className="wrapper">
      <div className="container">
        <ProfileBanner />
        <ProfleInformation />
        <Footer />
      </div>
    </main>
  );
};

export default MainWrapper;
