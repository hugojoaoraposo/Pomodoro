import logo from "../../../src/img/logo.png";
import NavBar from "../navbar/Navbar";
import Timer from "../timer/Timer";

export default function Pomodoro() {
    //ler a rota atual
  return (
    <div>
      <div className="flex flex-col pt-14 items-center pb-8">
        <img src={logo} width={80} alt="Logo" />
      </div>
      <div >
        <Timer/>
        <NavBar />
        {/* <NavBar selected={
            //rota atual
        }/> */}
      </div>
    </div>
  );
}
