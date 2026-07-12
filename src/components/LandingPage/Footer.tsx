import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#E9ECFF] p-4 max-w-[1484px] mx-auto min-h-[724px] md:min-h-[480px] flex flex-col justify-between">
      <div className="md:flex md:justify-between md:items-start">
        <div className="relative w-[140px] h-[140px] md:w-[250px] md:h-[140px] p-0">
          <Image
            src="/icons/logo.svg"
            alt="PrimalTraining Logo"
            fill
            sizes="(max-width: 768px) 140px, 250px"
            className="object-contain"
          />
        </div>

        <p className="font-instrument font-bold text-[40px] md:text-[60px] text-black tracking-tighter leading-none">
          PrimalTraining
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[auto_auto_auto] justify-between w-full">
        {/* Contact Us */}
        <section className="flex flex-col gap-4 w-[270px]">
          <h2 className="font-anek font-bold text-[24px] leading-none tracking-tighter">
            CONTACT
          </h2>
          <address className="text-[16px] font-bold">
            Email:
            <a
              className="text-black hover:text-black/40"
              href="mailto:hello@figma.com"
            >
              hello@figma.com
            </a>
            <br />
            Phone:
            <a className="text-black hover:text-black/40" href="tel:2035555555">
              (203) 555-5555
            </a>
          </address>
        </section>

        {/* Opening Hours */}
        <section className="flex flex-col gap-4 w-[270px]">
          <h2 className="font-anek font-bold text-[24px] leading-none tracking-tighter">
            OPENING HOURS
          </h2>
          <div className="font-geist font-bold text-[16px] w-[270px] space-y-1">
            <div className="flex justify-between">
              <span>MON - FRI</span>
              <span>5:00 - 23:00</span>
            </div>
            <div className="flex justify-between">
              <span>SATURDAYS</span>
              <span>8:00 - 16:00</span>
            </div>
            <div className="flex justify-between">
              <span>SUNDAYS</span>
              <span>8:00 - 13:00</span>
            </div>
            <div className="flex justify-between">
              <span>HOLIDAYS</span>
              <span>8:00 - 16:00</span>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section className="flex flex-col gap-4 w-[90px]">
          <h2 className="font-anek font-bold text-[24px] leading-none tracking-tighter">
            SOCIAL
          </h2>
          <nav>
            <ul className="font-bold text-[16px] flex flex-col justify-start items-start gap-0">
              <li className="font-geist text-black cursor-pointer hover:text-black/40">
                <a
                  className="underline"
                  href="https://www.instagram.com/?hl=en"
                  target='_blank'
                >
                  Instagram
                </a>
              </li>
              <li className="font-geist text-black cursor-pointer hover:text-black/40">
                <a className="underline" href="https://x.com/" target='_blank'>
                  X
                </a>
              </li>
              <li className="font-geist text-black cursor-pointer hover:text-black/40">
                <a className="underline" href="https://api.linkedin.com/login" target='_blank'>
                  LinkedIn
                </a>
              </li>
              <li className="font-geist text-black cursor-pointer hover:text-black/40">
                <a className="underline" href="https://open.spotify.com/" target='_blank'>
                  Spotify
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
