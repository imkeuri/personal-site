export default function Card() {
  const dummie = {
    skills: [
      {
        image: "https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe",
        title: "Jonathan Smith",
        description: "I do this blah blah",
        middleTitle: "Languages I speak",
        middleDescription: "HTML, CSS, JavaScript, TypeScript",
        endTitle: "Usefull Tools",
        endDescription: "Blah",
      },
      {
        image: "https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe",
        title: "Jonathan Smith",
        description: "I do this blah blah",
        middleTitle: "Languages I speak",
        middleDescription: "HTML, CSS, JavaScript, TypeScript",
        endTitle: "Usefull Tools",
        endDescription: "Blah",
      },
      {
        image: "https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe",
        title: "Jonathan Smith",
        description: "I do this blah blah",
        middleTitle: "Languages I speak",
        middleDescription: "HTML, CSS, JavaScript, TypeScript",
        endTitle: "Usefull Tools",
        endDescription: "Blah",
      },
    ],
  };

  const card = dummie.skills.map((skill) => (
    <section className="m-4 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg ">
     
      <div className="flex items-center justify-end">
        <span className="text-emerald-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </span>
      </div>

      <div className="mt-6 w-fit mx-auto">
        <img
          src={skill.image}
          className="rounded-full w-28"
          alt="profile picture"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-white font-bold text-2xl tracking-wide">
          {skill.title}
        </h2>
        <p className="text-white text-2xl tracking-wide">{skill.description}</p>
      </div>

      <div className="mt-8">
        <p className="text-emerald-400 font-semibold mt-2.5">
          {skill.middleTitle}
        </p>
        <p className="text-white text-2xl tracking-wide mt-2.5">
          {skill.middleDescription}
        </p>
      </div>

      {/* End section */}
      <div className="mt-8">
        <p className="text-emerald-400 font-semibold mt-2.5">
          {skill.endTitle}
        </p>
        <p className="text-white text-2xl tracking-wide mt-2.5">
          {skill.endDescription} {/* This should likely be endDescription */}
        </p>
      </div>
    </section>
  ));

  return (
    <>
      <section className="bg-[#071e34] font-medium grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {card}
      </section>
    </>
  );
}
