import Banner from "@/components/Banner/Banner";
import CareerFredom from "@/components/CareerFredom/CareerFredom";
import CareerPath from "@/components/CareerPath/CareerPath";
import ChooseOver from "@/components/ChooseOver/ChooseOver";
import DoorCareer from "@/components/DoorCareer/DoorCareer";
import DreamJob from "@/components/DreamJob/DreamJob";
import Footer from "@/components/Footer/Footer";
import ConsultationForm from "@/components/ConsultationForm/ConsultationForm";
//import ConsultationForm from "@/components/FreeConsultation/ConsultationForm";
import GotAnswer from "@/components/GotAnswer/GotAnswer";
import Navbar from "@/components/Navbar/Navbar";
import SecureFuture from "@/components/SecureFuture/SecureFuture";
import SuccessStoriesSection from "@/components/SuccessStories/SuccessStoriesSection";
//import RealStories from "@/components/RealStories/RealStories";
//import RealStories from "@/components/RealStories/RealStories";
import TicketToSuccess from "@/components/TicketToSuccess/TicketToSuccess";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <TicketToSuccess />
      <CareerPath />
      <DreamJob />
      <SuccessStoriesSection />
      <ChooseOver />
      <CareerFredom />
      <GotAnswer />
      <ConsultationForm />
      <DoorCareer />
      <SecureFuture />
      <Footer />
    </div>
  );
};

export default HomePage;
