import MainNavbar from "./components/navbar";
import MainFooter from "./components/footer";

import ThirdSection from "./landing/third-section";
import SecondSection from "./landing/second-section";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </main>
      <MainFooter />
    </>
  );
}

function FirstSection() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover min-h-[85vh] bg-gray-900 relative">
      <div className="container mx-auto pl-3 flex flex-col md:flex-row justify-center items-center text-white min-h-[85vh]">
        <div className="md:w-3/5 z-10">
          <p className="text-3xl mb-2">Elka Code</p>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
            corrupti perspiciatis. Alias fugit ad laborum laboriosam architecto
            eligendi similique perferendis nesciunt? Dolore consectetur
            voluptates quisquam aperiam amet?
          </p>
        </div>
        <div>
          <img
            className="h-[100%] absolute -bottom-[15%] right-0"
            src="/content1.png"
            alt="company"
          />
        </div>
      </div>
    </div>
  );
}
