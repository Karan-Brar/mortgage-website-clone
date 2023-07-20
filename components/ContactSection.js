import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import ContactForm from "./ContactForm";
const ContactSection = () => {
  return (
    <section
      className="items-center font-franklin hover:bottom-0 bg-slate-50"
      id="contact-section"
    >
      <div>
        <ContactForm />

        <div className="flex flex-col items-center justify-center w-full py-10">
          <div className="flex items-center justify-between mt-4 lg:w-2/6">
            <Popover>
              <PopoverHandler>
                <button className="m-3">
                  <Image
                    priority
                    quality={30}
                    width={60}
                    height={60}
                    src="/assets/icon/call.png"
                  />
                </button>
              </PopoverHandler>
              <PopoverContent className="p-5 bg-slate-50">
                (431) 997-1277
              </PopoverContent>
            </Popover>

            <Link
              href="https://instagram.com/mortgagesbyarmaan?igshid=MTIzZWMxMTBkOA=="
              className="m-3"
            >
              <Image
                priority
                quality={30}
                width={60}
                height={60}
                src="/assets/icon/instagram.png"
              />
            </Link>

            <Link
              href="https://www.facebook.com/armaanpreetbrarmortgage?mibextid=LQQJ4d"
              className="m-3"
            >
              <Image
                priority
                quality={30}
                width={60}
                height={60}
                src="/assets/icon/facebook.png"
              />
            </Link>

            <Popover>
              <PopoverHandler>
                <button className="m-3">
                  <Image
                    priority
                    quality={30}
                    width={60}
                    height={60}
                    src="/assets/icon/mail.png"
                  />
                </button>
              </PopoverHandler>
              <PopoverContent className="p-5 bg-slate-50">
                armaan.mortgage@gmail.com
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
