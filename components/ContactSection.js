import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import ContactForm from "./ContactForm";
import ContactOptions from "./ContactOptions";

const ContactSection = () => {

  const [component, setComponent] = useState("option-buttons");

    return (
      <section
        className="items-center font-franklin hover:bottom-0"
        id="contact-section"
      >
        <div className="flex flex-col items-center justify-center w-full py-10 bg-slate-50">
          <h1 className="mb-4 font-bold tracking-tight heading">
            Contact Information
          </h1>
          <div className="flex items-center justify-between lg:w-2/5 mt-4">
            <Popover>
              <PopoverHandler>
                <button className="m-5">
                  <Image
                    priority
                    quality={30}
                    width={80}
                    height={80}
                    src="/assets/icon/phone2.png"
                  />
                </button>
              </PopoverHandler>
              <PopoverContent className="p-5 bg-slate-50">
                (431) 997-1277
              </PopoverContent>
            </Popover>

            <Link
              href="https://instagram.com/mortgagesbyarmaan?igshid=MTIzZWMxMTBkOA=="
              className="m-5"
            >
              <Image
                priority
                quality={30}
                width={80}
                height={80}
                src="/assets/icon/instagram.png"
              />
            </Link>

            <Link
              href="https://www.facebook.com/armaanpreetbrarmortgage?mibextid=LQQJ4d"
              className="m-5"
            >
              <Image
                priority
                quality={30}
                width={80}
                height={80}
                src="/assets/icon/facebook.png"
              />
            </Link>

            <Popover>
              <PopoverHandler>
                <button className="m-5">
                  <Image
                    priority
                    quality={30}
                    width={80}
                    height={80}
                    src="/assets/icon/email2.png"
                  />
                </button>
              </PopoverHandler>
              <PopoverContent className="p-5 bg-slate-50">
                armaan.mortgage@gmail.com
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          {component === "option-buttons" && (
            <ContactOptions
              showComponent={() => setComponent("contact-form")}
            />
          )}
          {component === "contact-form" && (
            <ContactForm showComponent={() => setComponent("option-buttons")} />
          )}
        </div>
      </section>
    );
}

export default ContactSection