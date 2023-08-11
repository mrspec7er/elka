import MainNavbar from "./components/navbar";
import MainFooter from "./components/footer";
import ThirdSection from "./layout/third-section";

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

function SecondSection() {
  return (
    <div className="relative">
      <div className="container mx-auto pl-3 flex flex-col-reverse md:flex-row items-center md:pl-[30vw] py-32 min-h-[85vh]">
        <div>
          <img
            className="absolute left-0 md:top-[30%] top-[15%] 2xl:w-[10vw] lg:w-[20vw] md:w-[30vw] w-[50vw]"
            src="/content2.png"
            alt="presentation"
          />
          <img
            className="absolute right-0 md:top-[10%] top-[45%] opacity-30 -z-10 2xl:w-[10vw] lg:w-[17vw] md:w-[25vw] w-[50vw]"
            src="/content3.png"
            alt="presentation"
          />
        </div>
        <div className="z-10 max-sm:pt-[42vh]">
          <p className="text-3xl mb-2">Company Tagline</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            voluptas similique, maxime, corrupti possimus fuga obcaecati
            architecto suscipit accusamus iusto alias explicabo, id voluptate
            nemo expedita dolores laudantium inventore minima! Alias adipisci
            molestiae optio. Doloremque voluptatem quam excepturi nisi,
            exercitationem earum quas? Perferendis ab velit dolorum illum
            quibusdam quam exercitationem!
          </p>
          <p className="text-3xl mt-5 mb-2">Our Clients</p>
          <div className="overflow-x-auto">
            <div className="flex">
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
              <img className="w-72 h-20" src="/logo.png" alt="clients" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
