import person from "../../assets/Person.webp";

export default function Panel() {
  return (
    <section className="bg-[#20354b] pt-20 p-10 text-white">
      <div className="m-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {/* Left Column for Title and Image */}
        <div className="">
          <h1 className="text-white font-bold text-xl mb-3">
            Software Development
          </h1>
          <img src={person} alt="Software Development" className="w-[32rem]" />
        </div>

        {/* Right Column for Text and List */}
        <div className="mt-9">
          <p>
            As a developer specializing in C#, React, and Azure, I offer a
            comprehensive skill set that can drive innovation and efficiency
            within your company.
          </p>

          <h2 className="text-emerald-400 font-bold mt-4 mb-2">
            Here's how I can contribute:
          </h2>

          <ul className="list-disc pl-5">
            <li>Backend Development with C#</li>
            <li>Frontend Development with React</li>
            <li>Cloud Solutions with Azure</li>
            <li>Security and Compliance</li>
          </ul>

          <p className="mt-4">
            Collaboration and Knowledge Sharing: My ability to work across teams
            helps translate business needs into technical solutions, fostering a
            culture of continuous improvement and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
