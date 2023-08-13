export default function SecondSection() {
  return (
    <div className="relative">
      <div className="container mx-auto pl-3 flex flex-col-reverse md:flex-row items-center md:pl-[30vw] py-32 min-h-[85vh]">
        <div>
          <img
            className="absolute left-0 md:top-[30%] top-[15%] 2xl:w-[15vw] lg:w-[20vw] md:w-[30vw] w-[50vw]"
            src="/content2.png"
            alt="presentation"
          />
          <img
            className="absolute right-0 md:top-[10%] top-[45%] opacity-30 -z-10 2xl:w-[15vw] lg:w-[17vw] md:w-[25vw] w-[50vw]"
            src="/content3.png"
            alt="presentation"
          />
        </div>
        <div className="z-10 max-sm:pt-[42vh]">
          <p className="text-3xl mb-2">Company Tagline</p>
          <p className="text-lg w-full">
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
            <div className="flex gap-3">
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
              <img className="w-72 h-20" src="/bricks.png" alt="clients" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
