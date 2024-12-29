/* import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg" */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Code, Send, Phone, GraduationCap } from "lucide-react";
import Footer from "../components/layout/Footer";
import { Controller, useForm } from "react-hook-form";
import {
  faqItems,
  modulesCovered,
  preferredTracks,
  whatWeOffer,
  whyChooseUs,
} from "../utils/staticData";
import RQGetExperienceLevel from "../utils/queries/RQGetExperienceLevel";
import RQGetEducationLevel from "../utils/queries/RQGetEducationLevel";
import RQGetPaymentSchedule from "../utils/queries/RQGetPaymentSchedule";
import RQSignIn from "../utils/query-mutations/RQSignIn";
import LoadingComponent from "../components/LoadingComponent";
import { camelCaseToSentence, currency, toSentenceCase } from "../utils/helper";
import { MdPayment } from "react-icons/md";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";

const Mentorship = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const notify = (message, type, theme = "colored") =>
    toast?.[type](message, {
      theme: theme,
      autoClose: 10000,
    });

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      preferredTrack: [],
    },
  });

  const onSuccess = (data) => {
    if (data?.code === 0) {
      notify(
        "Your details have been submitted successfully",
        "success",
        "colored"
      );
      reset();
      setValue("preferredTrack", null);
      return;
    }
    notify(
      "Failed to submit details, please try again later",
      "error",
      "colored"
    );

    console.log(data);
  };
  const onError = () => {
    notify("An error occured while submitting details", "error", "colored");
  };

  const { data: experienceLevels, isLoading: isLoadingExperienceLevels } =
    RQGetExperienceLevel();
  const { data: educationLevels, isLoading: isLoadingEducationLevels } =
    RQGetEducationLevel();
  const { data: paymentSchedules, isLoading: isLoadingPaymentSchedules } =
    RQGetPaymentSchedule();

  const { mutate: signUpStudent, isLoading: isSigningUpStudent } = RQSignIn(
    onSuccess,
    onError
  );

  const handleToggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleSubmitForm = (data) => {
    const formObject = {
      firstName: data?.firstName,
      lastName: data?.otherNames,
      emailAddress: data?.email,
      phoneNumber: data?.phoneNumber,
      experienceLevel: data?.experienceLevel,
      educationLevel: data?.educationLevel,
      paymentSchedule: data?.paymentSchedule,
      preferredTrack: data?.preferredTrack
        ?.map((track) => track?.label)
        .join(", "),
    };

    signUpStudent(formObject);
  };

  const text =
    "Accelerate your career in tech with guidance from industry experts";

  const handleToggle = (index) => {
    setExpandedModule(expandedModule === index ? null : index); // Toggle the current module
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsLoading(
      isLoadingExperienceLevels ||
        isLoadingEducationLevels ||
        isLoadingPaymentSchedules ||
        isSigningUpStudent
    );
  }, [
    isLoadingExperienceLevels,
    isLoadingEducationLevels,
    isLoadingPaymentSchedules,
    isSigningUpStudent,
  ]);

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className="relative text-neutral-dark">
        <div className="fixed inset-0">
          <img
            src="https://res.cloudinary.com/dkwu8nd4d/image/upload/f_auto,q_auto/v1731039879/sean-pollock-PhYq704ffdA-unsplash_fjdmrv.jpg"
            alt="backgroundImage"
            className="object-cover w-full h-full brightness-50"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          {/* Dark overlay */}
        </div>

        <div className="absolute z-10 w-full mx-auto flex flex-col">
          <section className="text-center bg-transparent ">
            <h1 className="text-4xl font-bold text-neutral-light mt-20">
              Practical Web Application Development
            </h1>
            <motion.p
              className="text-lg text-neutral-light text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.3,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.p>
          </section>
          <div className="w-full mx-auto ">
            <section className="grid md:grid-cols-2 gap-12 bg-neutral-light p-2 sm:p-4">
              <motion.div className="space-y-8">
                <motion.section
                  className="bg-white shadow-lg rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About Our Tech Mentorship
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our mentorship program is designed to help aspiring tech
                    professionals accelerate their career growth. With guidance
                    from experienced industry leaders, you&apos;ll gain valuable
                    insights, expand your network, and develop the cutting-edge
                    skills needed to succeed in the fast-paced world of
                    technology.
                  </p>
                </motion.section>

                <section className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What We Offer
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {whatWeOffer.map((offering, index) => (
                      <motion.div
                        key={index}
                        className="flex  space-x-4 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover="hover"
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="flex-shrink-0"
                          variants={{ hover: { scaleX: -1 } }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <offering.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {offering.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {offering.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
                <section className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
                    Modules Covered
                  </h2>
                  <div className="space-y-4">
                    {modulesCovered.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col p-4 rounded-lg border border-gray-300 bg-gradient-to-r from-violet-50 via-transparent to-primary-dark bg-[length:200%_100%] bg-left transition-all duration-500 ease-in-out"
                        initial={{ backgroundPosition: "left" }}
                        whileHover={{ backgroundPosition: "right" }}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleToggle(index)}
                      >
                        <div
                          onClick={() => handleToggle(index)}
                          className="flex justify-between items-center cursor-pointer"
                        >
                          <h3 className="text-lg font-bold text-gray-800 flex items-center">
                            <div className="w-1 h-4 bg-primary mr-3 sm:block hidden" />
                            {index + 1}. {item.module}
                          </h3>
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{
                              rotate: expandedModule === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="transition-transform"
                          >
                            ▼
                          </motion.div>
                        </div>

                        {/* Show this section only if this module is expanded */}
                        {expandedModule === index && (
                          <motion.div
                            className="mt-2 pl-2 sm:pl-4"
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            transition={{ duration: 0.3 }}
                            exit={{ height: 0 }}
                          >
                            <p className="text-sm sm:text-base text-gray-600 mb-2">
                              {item.description}
                            </p>
                            {/* <div>
                              <p className="text-sm sm:text-base font-semibold text-gray-700">
                                Mentor: {item.mentor}
                              </p>
                              <p className="text-sm sm:text-base text-gray-600">
                                {item.bio}
                              </p>
                            </div> */}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white shadow-lg rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sign Up for Tech Mentorship
                </h2>
                <form
                  onSubmit={handleSubmit(handleSubmitForm)}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="mt-1 block w-full border pl-10 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                        {...register("firstName", {
                          required: "Please enter your first name",
                        })}
                      />
                    </div>
                    {errors?.firstName && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.firstName?.message}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="other_names"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Other names
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="other_names"
                        name="otherNames"
                        className="mt-1 block w-full border pl-10 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                        {...register("otherNames", {
                          required: "Please enter your other names",
                        })}
                      />
                    </div>
                    {errors?.otherNames && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.otherNames?.message}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Send className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                        {...register("email", {
                          required: "Your email address is required",
                        })}
                      />
                    </div>
                    {errors?.email && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.email?.message}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="mt-1 block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                        {...register("phoneNumber", {
                          required: "Please enter your phone number",
                        })}
                      />
                    </div>
                    {errors?.phoneNumber && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.phoneNumber?.message}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="educationLevel"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Highest Level of Education
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="educationLevel"
                        name="educationLevel"
                        className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                        {...register("educationLevel", {
                          required: "Select your education level to proceed",
                        })}
                      >
                        <option value="">Select your education level</option>
                        <hr />
                        {educationLevels?.data?.map((educationLevel, index) => (
                          <option value={educationLevel} key={index}>
                            {camelCaseToSentence(educationLevel)}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors?.educationLevel && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.educationLevel?.message}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="experienceLevel"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How would you rate your programming skills?
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Code className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="experienceLevel"
                        name="experienceLevel"
                        className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                        {...register("experienceLevel", {
                          required:
                            "Please select your programming skill level",
                        })}
                      >
                        <option value="">Select your skill level</option>
                        <hr />
                        {experienceLevels?.data?.map(
                          (experienceLevel, index) => (
                            <option value={experienceLevel} key={index}>
                              {toSentenceCase(
                                experienceLevel?.replace("_", " ")
                              )}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    {errors?.experienceLevel && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.experienceLevel?.message}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTrack"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Which track are you more inclined to <br />
                      <span className="italic text-slate-500 text-sm">
                        (You can select more than one)
                      </span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Code className="h-5 w-5 text-gray-400" />
                      </div>
                      <Controller
                        name="preferredTrack"
                        control={control}
                        rules={{
                          required:
                            "Please select at leasr one preferred track",
                        }}
                        id="preferredTrack"
                        render={({ field }) => (
                          <CreatableSelect
                            {...field}
                            isClearable={true}
                            placeholder="Select Preferred Track"
                            className="react-select-container"
                            isMulti
                            classNamePrefix="react-select"
                            options={preferredTracks}
                          />
                        )}
                      />
                    </div>
                    {errors?.preferredTrack && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.preferredTrack?.message}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="paymentSchedule"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Which Payment schedule would you prefer?
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdPayment className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="paymentSchedule"
                        name="paymentSchedule"
                        className="mt-1 pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-accent"
                        {...register("paymentSchedule", {
                          required:
                            "Please select the payment schedule you would prefer",
                        })}
                      >
                        <option value="">
                          Select your preferred payment schedule{" "}
                        </option>
                        <hr />
                        {paymentSchedules?.data?.map(
                          (paymentSchedule, index) => (
                            <option value={paymentSchedule?.name} key={index}>
                              {toSentenceCase(
                                paymentSchedule?.name?.replace("_", " ")
                              )}{" "}
                              at: KES{" "}
                              {currency(paymentSchedule.details?.amount)}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    {errors?.paymentSchedule && (
                      <div className="text-sm text-red-500 italic">
                        <span>{errors?.paymentSchedule?.message}</span>
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Apply for Tech Mentorship
                  </motion.button>
                </form>
                <section className="bg-white shadow-md rounded-lg sm:p-6 p-3 mt-5 sm:mt-14">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 ">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4 cursor-pointer">
                    {faqItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className="border-b py-4 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => handleToggleFAQ(index)}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.question}
                          </h3>
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{
                              rotate: expandedFAQ === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="transition-transform"
                          >
                            ▼
                          </motion.div>
                        </div>

                        {expandedFAQ === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 text-sm sm:text-base text-gray-600"
                          >
                            {item.answer}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            </section>

            <section className="pb-6 sm:p-2">
              <h2 className="text-3xl font-bold text-neutral-light mb-6 text-center">
                Why Choose Our Tech Mentorship?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:p-4 w-[95%] mx-auto">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/95 rounded-lg text-center shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-14 w-14 mx-auto mb-4">{item.icon}</div>{" "}
                    <h3 className="text-lg font-semibold text-neutral-text">
                      {item.title}
                    </h3>
                    <p className="text-neutral-dark mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          <Footer />
          {isScrolled && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-2 p-3 bg-primary-dark text-white rounded-full shadow-lg hover:bg-primary transition-colors"
            >
              <span className="hidden sm:block">Apply now</span>
              <svg
                className="w-6 h-6 block sm:hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Mentorship;
