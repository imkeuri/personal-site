export default function Card() {
  return (
    <>
      <div className="container m-auto grid grid-cols-1 gap-4 place-items-center">
          <img className="size-24" src="src/assets/logo-without-bg.png" />
          <div className=" ">Frontend</div>
          <div className=""> 
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </div>
          <div className="">Tech I use:</div>
          <div className="">HTML, React, Angular, CSS,TypeScript, Git</div>
      </div>
    </>
  );
}
