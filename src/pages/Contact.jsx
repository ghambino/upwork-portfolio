import { Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let messageObj = {
      name,
      email,
      category,
      message,
    };

    emailjs
      .sendForm(
        "service_lm38g6r",
        "template_cbny9wo",
        e.target,
        "VA3wS7A__P424XAAs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully")
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setCategory("");
    setMessage("");
  };

  return (
    <div className="">
      <section className="w-[90%] lg:w-[65%] mx-auto pb-[32px]">
        <h2 className="font-bold lg:text-[36px] text-center uppercase mt-[46px] mb-[24px]">
          Get in touch<span>👇</span>
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="grid md:grid-cols-2 gap-[16px] mb-[1rem]">
            <div className="flex flex-col gap-[9px]">
              <label htmlFor="name" className="font-bold text-[18px]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={({ target }) => setName(target.value)}
                placeholder="edafee john"
                className="border-2 border- rounded py-3 pl-6 focus:outline-none "
              />
            </div>
            <div className="flex flex-col gap-[9px]">
              <label htmlFor="email" className="font-bold text-[18px]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                placeholder="alexifrontner@gmail.com"
                className="border-2 border- rounded py-3 pl-6 focus:outline-none "
              />
            </div>
            <div className="flex flex-col gap-[9px]">
              <label htmlFor="category" className="font-bold text-[18px]">
                Job Category
              </label>
              <select
                value={category}
                onChange={({ target }) => setCategory(target.value)}
                id="category"
                name="category"
                className="border-2 border-input-gray rounded py-3 pl-6 pr-3 focus:outline-none "
              >
                <option value=""></option>
                <option value="website-development">website</option>
                <option value="web-application">web application</option>
                <option value="ecommerce">Ecommerce</option>
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
              <label htmlFor="message" className="font-bold text-[18px]">
                Project Details
              </label>
              <Textarea
                value={message}
                onChange={({ target }) => setMessage(target.value)}
                name="message"
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
          <input
            type={"submit"}
            value="send"
            className="py-3 px-12 rounded-lg text-white uppercase mx-auto bg-[#0F3D3E] mb-[40px]"
          ></input>
        </form>

        <div className="flex gap-[2rem]">
          <a
            href="https://www.linkedin.com/in/abbas-abdulwahab"
            target={"_blank"}
          >
            linkedin
          </a>
          <a href="https://github.com/ghambino" target={"_blank"}>
            Github
          </a>
          <a href="abdulwahababbas300@gmail.com" target={"_blank"}>
            Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
