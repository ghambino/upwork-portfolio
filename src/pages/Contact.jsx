import { Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [addedInfo, setAddedInfo] = useState("");
  return (
    <div className="">
      <section className="w-[90%] lg:w-[65%] mx-auto pb-[32px]">
        <h2 className="font-bold lg:text-[36px] text-center uppercase mt-[46px] mb-[24px]">
          Get in touch<span>👇</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-[16px] mb-[1rem]">
          <div className="flex flex-col gap-[9px]">
            <label htmlFor="email" className="font-bold text-[16px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="alexifrontner@gmail.com"
              className="border-2 border- rounded py-3 pl-6 focus:outline-none "
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <label htmlFor="category" className="font-bold text-[12px]">
              Job Category
            </label>
            <select
              value={category}
              onChange={({ target }) => setCategory(target.value)}
              id="category"
              className="border-2 border-input-gray rounded py-3 pl-6 pr-3 focus:outline-none "
            >
              <option value=""></option>
              <option value="website-development">website</option>
              <option value="web-app">web application</option>
              <option value="ecomm">Ecommerce</option>
              <option value="mobile-app">Mobile application</option>
            </select>
            {/* type="text"
              id="name"
              placeholder="Alexei Ward"
              className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none "
            /> */}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[9px] mb-[32px]">
            <label htmlFor="message" className="font-bold text-[12px]">
              Project Information
            </label>
            <Textarea
              value={addedInfo}
              onChange={({ target }) => setAddedInfo(target.value)}
              placeholder="Brief description of the project and preferred stacks"
              size="lg"
              className="border-2 border-black"
            ></Textarea>
            {/* type=""
              id="name"
              placeholder="Alexei Ward"
              className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none "
            /> */}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button className="py-3 px-12 rounded-lg text-white uppercase mx-auto bg-[#4c1d95] mb-[40px]">
            send
          </button>
          <div className="flex gap-[2rem]">
            <a href="https://www.linkedin.com/in/abbas-abdulwahab" target={"_blank"}>linkedin</a>
            <a href="https://github.com/ghambino" target={'_blank'}>Github</a>
            <a href="abdulwahababbas300@gmail.com" target={"_blank"}>Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
