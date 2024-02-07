import "./Home.css";
import profile from "/src/assets/profile.png";
import BasicText from "../components/navbar/BasicText";
import Card from "../components/cards/Cards";
import Panel from "../components/panel/panel";

function Home() {
  const introduction = {
    employees: [
      {
        title: "Software Developer",
        description:
          "Experienced Software Developer based in the United States. Proficient in .NET Core, React and Azure Development.",
        titleColor: "text-gray-900",
        descriptionColor: "text-gray-600",
      },
      {
        title: "Hey, I'm Keuri, it's a pleasure to connect with you",
        description: "Put some description here ahahahaha",
        titleColor: "text-white",
        descriptionColor: "text-white",
      },
    ],
  };

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-14 sm:py-48 lg:py-48">
          <div className="flex justify-center items-center">
            <img
              src={profile}
              className="rounded-full w-32 h-32 object-cover"
              alt="Circular Image"
            />
          </div>

          <BasicText {...introduction.employees[0]}></BasicText>
        </div>
      </div>

      <div className="mx-auto bg-blue-400 py-12 h-80">
        <BasicText {...introduction.employees[1]}></BasicText>
      </div>

      <Card />
      <Panel />

      <section className="bg-[#ffffff] flex font-medium items-center justify-center h-96  ">
        <div className="mt-8">
          <h2 className="text-black font-bold text-2xl tracking-wide">
            Companies I collaborated
          </h2>
          <div className="grid grid-flow-col gap-10">
            <img
              className="mt-8"
              src="https://evopoint.do/assets/images/logo-evopoint.svg"
            />
            <img
              className="mt-8"
              src="https://evopoint.do/assets/images/logo-evopoint.svg"
            />
            <img
              className="mt-8"
              src="https://evopoint.do/assets/images/logo-evopoint.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
