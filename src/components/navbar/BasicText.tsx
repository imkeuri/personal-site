import devices from "/src/assets/devices.svg";

interface BasicTextParams {
  title: string;
  description: string;
  descriptionColor: string;
  titleColor: string;
}

function BasicText(props: BasicTextParams) {
  return (
    <div className="text-center">
      <h1
        className={`text-4xl font-bold tracking-tight ${props.titleColor} sm:text-6xl`}
      >
        {props.title}
      </h1>
      <p className={`mt-6 text-lg leading-8 ${props.descriptionColor}`}>
        {props.description}
      </p>
      {/* <div>
        <img src={devices} className="mx-auto" alt="Circular Image" />
      </div> */}
    </div>
  );
}

export default BasicText;
