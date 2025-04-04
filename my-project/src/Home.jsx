import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CiCircleCheck } from "react-icons/ci";
import { FaGlobe, FaBriefcase } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { PiAirplaneTiltFill } from "react-icons/pi";
import "./Styles.css";
// import "./Home.css"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const features = [
    {
      icon: <PiAirplaneTiltFill className="text-4xl text-green-500" />,
      title: "$15 (Lifetime Access)",
      description:
        "Enjoy seamless access to services worldwide with our efficient platform.",
    },
    {
      icon: <FaBriefcase className="text-4xl text-green-500" />,
      title: "No Professional Training Needed (We Train You FREE)",
      description:
        "We prioritize security, ensuring your data remains confidential and protected.",
    },
    {
      icon: <GiReceiveMoney className="text-4xl text-green-500" />,
      title: "Earn from Day 1 (Withdrawals in 24 hours)",
      description:
        "Access stunning visuals and high-resolution images for an immersive experience.",
    },
  ];

  const cashback = [
    {
      title1: "Dropshipping Goldmine:",
      discription1:
        "We hand you a Ready-to-Profit e-Commerce Store-No Stocking, No Shipping, just easy commissions!",
    },

    {
      title2: "25% Cashback on EVERYTHING:",
      discription2:
        "Buy Products for Yourself? Get 25% Cashback Instantly-like a Loyalty Reward on Steroids!",
    },
  ];

  const program = [
    {
      title1: "3 Tier Commissions (20%/15%/10%):",
      discription1:
        "Your Team's Purchases: Your Passive Income. Even your friend's friend's sales put money in your Pocket.",
    },

    {
      title2: "EARN FIRST, BUY LATER:",
      discription2:
        "Rare Peck! Withdraw Commissions before You even order Products. Money Upfront? Yes Please!",
    },
  ];

  const referral = [
    {
      title1: "100% Referral Bonuses:",
      discription1:
        "Every Person You Bring in? You Earn 100% of their Sign-Up Fee-Direct or Indirect.",
    },

    {
      title2: "Dual Incentive (Industry FIRST):",
      discription2:
        "Rank faster with Fewer Referrals than any other program! Less Effort, More Rewards!",
    },

    {
      title2: "PROFIT SHARE-No Recruiting Needed:",
      discription2:
        "Even if You Refer ZERO People, You still Earn from the Global Pool. Lazy Money-BEST Money!",
    },
  ];

  const images = ["Images/family.jpg", "Images/friends.jpg", "Images/men.jpg"];

  return (
    <div className="font-sans bg-blue-50">
      <nav className="bg-blue-50 h-25 text-gray-700 lg:p-2 lg:px-15 sticky top-0 z-50 scroll-m-96">
        <div className="container mx-auto flex justify-between items-center py-3 px-5 lg:p-0">
          <div className="w-50">
            <a href="#home">
              <img className="w-25" src="Images/logo.png" alt="" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-semibold text-gray-700 lg:text-xl">
            <li>
              <a href="#home" className="hover:text-green-600 lg:text-2xl">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-600 lg:text-2xl">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-green-600 lg:text-2xl">
                Services
              </a>
            </li>
            <button>
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 transition-all rounded-lg px-5 py-3 text-white lg:text-2xl"
              >
                Get in Touch
              </a>
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center justify-self-end space-y-15 bg-blue-50 p-4 rounded-lg text-gray-700 font-semibold lg:text-xl w-50 h-screen z-99999999">
            <li>
              <a
                href="#home"
                className="hover:text-green-600 lg:text-xl text-2xl"
                onClick={toggleSidebar}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-green-600 lg:text-xl text-2xl"
                onClick={toggleSidebar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-green-600 lg:text-xl text-2xl"
                onClick={toggleSidebar}
              >
                Services
              </a>
            </li>
            <button>
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 transition-all rounded-lg px-5 py-3 text-white lg:text-2xl text-xl"
              >
                Get in Touch
              </a>
            </button>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="h-screen bg-[url('/Images/team.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-zinc-900 bg-fixed  flex items-center justify-center text-white text-center p-10"
        id="home"
      >
        <div className="max-w-7xl">
          <h1 className="lg:text-5xl text-4xl font-bold text-transform: uppercase">
            The{" "}
            <span className="text-green-500 text-transform: italic">
              Network
            </span>{" "}
            Marketing Revolution is here.
          </h1>
          <p className="lg:text-xl mt-4">
            For Decades, MLM has trapped People with a broken system-PV Chasing,
            BV Quotas, and Fake Ranks…whiles the real profits went to the “Top
            1%. But Today…the System is Dead...
          </p>
          <p className="text-green-500 lg:text-5xl text-2xl mt-14 font-bold">
            ENOUGH
          </p>
        </div>
      </section>

      {/* first section */}
      <section className="px-10 py-20 lg:px-36 max-w-8xl mx-auto text-center bg-green-200">
        {/* Left Text Section */}
        <div className="flex flex-col md:flex-row gap-25 md:10">
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              BREAKING:
            </h2>
            <p className="text-gray-700 lg:text-xl">
              Rich & Well Wave 5 Model just made every Outdated MLM Introduction
              of the first true Evolution in Network Marketing. *NO PV *NO BV
              *NO Multiple Registrations *NO Monthly Targets *NO Inventory
              Loading *NO Forced Leg Balancing *NO Hype *NO False Promises *NO
              Fake Rank Promotions
            </p>
          </div>

          {/* Right Text Section */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Instead, we offer:
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              {[
                "Instant Commissions (No Waiting for Qualifications).",
                "Real Scalability (No Artificial Caps).",
                "Low Risk-High Reward (No Financial Traps).",
              ].map((feature, index) => (
                <>
                  <li
                    key={index}
                    className="flex items-center lg:text-xl gap-2"
                  >
                    <CiCircleCheck className="text-green-500" />
                    {feature}
                  </li>
                </>
              ))}
            </ul>
            <p className="lg:text-xl mt-7 text-gray-700">
              This isn't just another “Opportunity”-it's the end of the Old
              Game. It's the Biggest Shift in MLM History.
            </p>
          </div>
        </div>
        <button className="mt-16 px-6 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-lg text-white lg:text-xl">
          LOCK IN MY SPOT.
        </button>
      </section>

      {/* second section */}
      <section
        className="py-20 px-10 max-w-6xl mx-auto items-center"
        id="about"
      >
        {/* Text Section */}
        <div className="text-center max-w-5xl mb-15 mx-auto">
          <h2 className="lg:text-4xl text-3xl font-semibold text-gray-900 mb-6">
            TURN $15 INTO YOUR 24/7 MONEY MACHINE!
          </h2>
          <p className="text-gray-900 lg:text-xl">
            Here's the Deal: For less than the cost of a Pizza, you're Unlocking
            a Virtual ATM that Pays You in 7 Explosive Ways-with ZERO Inventory,
            ZERO Risk, and ZERO Excuses. <br />
          </p>
          <p className="mt-5 lg:text-xl">
            HERE'S HOW YOUR $15 WORKS HARDER THAN A 9-TO-5:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-18">
          <div className="md:w-1/2">
            <ul className="space-y-4 text-gray-700 font-bold lg:text-xl">
              {cashback.map((cashback, index) => (
                <>
                  <li key={index} className="flex items-center gap-2">
                    <CiCircleCheck className="text-green-700" />
                    {cashback.title1}
                    {cashback.title2}
                  </li>
                  <li className="lg:text-lg font-normal">
                    {cashback.discription1}
                  </li>
                  <li className="lg:text-lg font-normal">
                    {cashback.discription2}
                  </li>
                </>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <img
              src="Images/eletron.jpg"
              alt="Modern Apartment"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse gap-18 mt-25">
          <div className="md:w-1/2">
            <ul className="space-y-4 text-gray-700 font-bold lg:text-xl">
              {program.map((program, index) => (
                <>
                  <li key={index} className="flex items-center gap-2">
                    <CiCircleCheck className="text-green-700" />
                    {program.title1}
                    {program.title2}
                  </li>
                  <li className="lg:text-lg font-normal">
                    {program.discription1}
                  </li>
                  <li className="lg:text-lg font-normal">
                    {program.discription2}
                  </li>
                </>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <img
              src="Images/commission.jpg"
              alt="Modern Apartment"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-18 mt-25">
          <div className="md:w-1/2">
            <ul className="space-y-4 text-gray-700 font-bold lg:text-xl">
              {referral.map((referral, index) => (
                <>
                  <li key={index} className="flex items-center gap-2">
                    <CiCircleCheck className="text-green-700" />
                    {referral.title1}
                    {referral.title2}
                  </li>
                  <li className="lg:text-lg font-normal">
                    {referral.discription1}
                  </li>
                  <li className="lg:text-lg font-normal">
                    {referral.discription2}
                  </li>
                </>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <img
              src="Images/referral.jpg"
              alt="Modern Apartment"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-15  mx-auto text-center bg-green-200">
        <h3 className="mb-15 lg:text-2xl text-xl font-bold">
          WHY THIS BEATS EVERY “SIDE HUSTLE” OUT THERE:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-18 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-green-100"
            >
              {feature.icon}
              <h3 className="lg:text-xl text-lg text-gray-900 w-52 md:w-55 lg:w-70">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 p-8 text-center" id="service">
        <div className="max-w-6xl mx-auto mb-20 mt-10">
          <div>
            <h2 className="lg:text-4xl text-3xl font-semibold text-gray-900 mb-2 text-transform: uppercase">
              The METAMORPHOSIS Campaign.
            </h2>
            <p className="text-gray-900 lg:text-xl mb-3">
              A Revolutionary Movement for Wellness and Wealth.
            </p>
          </div>
          <p className="text-gray-900 lg:text-xl">
            Unlock the Power of Terahertz Technology- Your 24/7 Personal Home
            Doctor. No Appointments. No Waiting Rooms. No Bills. Just Instant
            Wellness at Your Fingertips-whenever, wherever. This isn't just a
            Device-it's a Wellness Revolution in Your Hands.
          </p>
          <p className="text-gray-900 lg:text-xl text-transform: italic mt-5">
            “The Future of Holistic Wellness isn't a phone call away-it's
            already in Your House”.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  text-center justify-center items-center gap-18">
          {/* First Item */}
          <div className="flex justify-center items-center">
            <img
              className="w-100 h-60 md:w-50  lg:w-70 lg:h-80 bg-gray-500 flex justify-center items-center shadow-lg transition-opacity duration-300 hover:opacity-70"
              src="Images/meta2.jpg"
              alt=""
              srcset=""
            ></img>
          </div>

          {/* Second Item (With Overlay on Hover) */}
          <div className="flex justify-center items-center">
            <img
              className="w-100 h-60 md:w-50  lg:w-70 lg:h-80 bg-gray-500 flex justify-center items-center shadow-lg transition-opacity duration-300 hover:opacity-70"
              src="Images/meta3.jpg"
              alt=""
              srcset=""
            ></img>
          </div>

          {/* Third Item */}
          <div className="flex justify-center items-center">
            <img
              className="w-100 h-60 md:w-50  lg:w-70 lg:h-80 bg-gray-500 flex justify-center items-center shadow-lg transition-opacity duration-300 hover:opacity-70"
              src="Images/meta1.jpg"
              alt=""
              srcset=""
            ></img>
          </div>
        </div>
      </section>

      <section className="h-max bg-[url('/Images/wealth.png')] bg-cover bg-center bg-blend-overlay bg-zinc-800 bg-no-repeat flex items-center justify-center text-white text-center py-50 mt-10">
        <div className="relative z-10 max-w-6xl text-left px-8">
          <h2 className="lg:text-4xl text-3xl font-semibold mb-6 text-transform: uppercase text-white">
            Transform Household Wellness into{" "}
            <span className="text-green-400">Wealth.</span>{" "}
          </h2>
          <p className="text-white lg:text-xl max-w-lg">
            Turn Healthier Living into Financial Empowerment. Join a Movement
            where Well-being generates Income, helping Families Thrive FREE from
            Sickness and Lack
          </p>
          <button className="mt-16 px-6 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-lg text-white lg:text-xl">
            LOCK IN MY SPOT.
          </button>
        </div>
      </section>

      <section className="items-center py-12 px-4 mt-14">
        <div className="mx-auto flex flex-col md:flex-2/12 md:h-fit lg:flex-row justify-between gap-10">
          <div className="w-0xl md:w-3xl lg:w-3xl text-left md:ps-18  pt-10 text-wrap">
            <h2 className="lg:text-4xl text-3xl font-semibold text-gray-900 mb-6 text-transform: uppercase">
              Embrace the Rich & Well Lifestyle
            </h2>
            <p className="text-gray-700 lg:text-lg mb-2">
              Evolve into a life of:
            </p>
            <ul className="space-y-4 text-gray-700 font-bold">
              {[
                "Optimal Health  (Vitality that Lasts)",
                "Financial Security (Stability in Uncertain Times!",
                "Personal Fulfilment (Purpose-Driven Success)",
                "Generosity & Legacy (Impact Beyond Yourself)",
                "Strong Connected Relationships (A Thriving Community)",
              ].map((feature, index) => (
                <>
                  <li
                    key={index}
                    className="flex items-center gap-2 lg:text-lg"
                  >
                    <CiCircleCheck className="text-green-700" />
                    {feature}:
                  </li>
                </>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-10 lg:gap-8 md:h-full">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative w-33 lg:w-50 lg:h-90m md:w-65 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "translate-y-6" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Fitness ${index + 1}`}
                  className="w-full h-100 object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-160 flex items-center justify-center bg-black text-white mt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-zinc to-transparent"></div>
          <img
            src="Images/femm.jpg"
            alt="Fitness Training"
            className="w-full h-full object-cover bg-center"
          />
        </div>
        <div className="relative z-10 max-w-4xl text-left px-8">
          <h2 className="lg:text-4xl text-3xl font-semibold text-white mb-2 text-transform: uppercase">
            Thrive in Any Economy,{" "}
            <span className="text-green-400">Flourish</span> in Every Situation
          </h2>
          <p className="text-white lg:text-xl max-w-lg mt-7">
            Equip Yourself with Resilient Strategies to Prosper-regardless of
            economic challenges. With Rich & Well, you don't just survive, You
            Rise, Conquer and Flourish.
          </p>
        </div>
      </section>

      <section className="px-10 py-12 lg:px-36 max-w-8xl mx-auto items-center bg-green-200 ">
        <div className="text-center max-w-5xl mb-15 mx-auto">
          <h2
            className="lg:text-4xl text-3xl font-semibold text-gray-900 mb-4 text-transform: uppercase"
            id="about"
          >
            Retire Rich & Early Initiative
          </h2>
          <p className="text-gray-900 lg:text-xl">
            Your Key to Generational Wealth-Zero Effort Required. <br />
          </p>
          <p className="mt-4 text-gray-900 lg:text-xl">
            As a Value Member of the Rich & Well METAMORPHOSIS Movement, We are
            Thrilled to Introduce an Exclusive Opportunity: Lifetime Dividends
            from the World's Most Lucrative Assests in High Performing
            Environments…
          </p>
          <p className="text-gray-900 lg:text-xl">
            With No Upfront Cost or Active Management on your part.
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-7">
            WHY THIS IS UNMATCHED:
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg text-center m-auto">
            {[
              "Instant Commissions (No Waiting for Qualifications).",
              "Real Scalability (No Artificial Caps).",
              "Low Risk-High Reward (No Financial Traps).",
            ].map((feature, index) => (
              <>
                <li key={index} className="flex items-center lg:text-xl gap-2">
                  <CiCircleCheck className="text-green-500" />
                  {feature}
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-10 py-12 lg:px-36 max-w-8xl mx-auto items-center">
        <div className="text-center max-w-5xl mb-15 mx-auto">
          <h2
            className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-7"
            id="about"
          >
            THE PROMISE
          </h2>
          <p className="text-gray-900 lg:text-xl">
            This isn't a Side Hustle-It's your Exit Ticket from the Grind.{" "}
            <br />
          </p>
          <p className="mt-4 text-gray-900 lg:text-xl">
            Retire Early,Retire Rich,and Leave a Legacy that Outlives You.
          </p>
        </div>
      </section>

      {/* Contact Us */}
      <footer className="bg-green-950 text-center" id="contact">
        <div className="flex flex-col md:flex-row gap-15 py-10 px-10 text-center">
          <div className="md:w-1/2 text-white text-left ps-7">
            <div className="w-60 mb-6">
              <img src="Images/official-logo.png" alt="" srcset="" />
            </div>
            <h2 className="lg:text-4xl text-3xl font-semibold mb-6 text-transform: uppercase">
              Call To Action
            </h2>
            <p className="lg:text-lg">What's Your $15 Doing Right Now?</p>
            <ul className="space-y-4 font-bold mt-4">
              <li className="lg:text-lg">Sitting Dead in Your Wallet?</li>
              <li className="lg:text-lg">
                OR Multiplying into $1000+ / Monthly?.
              </li>
            </ul>
            <p className="lg:text-xl mt-7">
              You're ONE Click from Changing Your Life <br /> You've 60 Seconds
              to Decide. TIME STARTS NOW!
            </p>
            <p className="lg:text-xl">
              This is Where Your Metamorphosis Begins
            </p>
            <p className="lg:text-xl mt-5">
              THE BEST ISN'T COMING…IT'S ALREADY HERE.
            </p>
          </div>

          <div className="md:w-1/2 mt-5">
            <h2 className="text-4xl font-semibold mb-6 text-white text-transform: uppercase">
              Get in Touch
            </h2>
            <form className="max-w-lg mx-auto bg-blue-50 p-6 rounded-lg shadow-md">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded mb-4 lg:text-xl max-w-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded mb-4 lg:text-xl max-w-lg"
              />

              <input
                type="number"
                placeholder="Your Phone Number"
                className="w-full p-3 border rounded mb-4 lg:text-xl max-w-lg"
              />
              <button className="mt-5 px-6 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-lg text-white lg:text-xl">
                LOCK IN MY SPOT.
              </button>
            </form>
          </div>
        </div>
        <p className=" text-white pb-5 font-light">
          All copyrights reserved @2025
        </p>
      </footer>
    </div>
  );
};

export default Home;
