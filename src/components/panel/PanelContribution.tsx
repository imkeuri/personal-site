import personImage from '../../assets/Person.webp'; // Updated import to follow naming conventions

const PanelContribution = () => (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold mb-4">Software Development</h1>
            <img src={personImage} alt="Software Development" className="mx-auto md:mx-0 w-full max-w-sm" />
          </div>

          <div>
            <p className="mb-5">
              As a developer specializing in C#, React, and Azure, I offer a comprehensive skill set that drives innovation and efficiency.
            </p>
            <h2 className="text-blue-500 font-semibold mb-3">How I Can Contribute:</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Backend Development with C#</li>
              <li>Frontend Development with React</li>
              <li>Cloud Solutions with Azure</li>
              <li>Security and Compliance</li>
            </ul>
            <p className="mt-5">
              Collaboration and knowledge sharing: I excel in working across teams to translate business needs into technical solutions, fostering a culture of continuous improvement and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
);

export default PanelContribution;
