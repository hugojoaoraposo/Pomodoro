import logo from "../../../src/img/logo.png";
import CountdownCircle from "../countdownCircle/CountdownCircle";
import NavBar from "../navbar/Navbar";
import Timer from "../timer/Timer";

export default function Pomodoro() {
    //ler a rota atual
  return (
    <div className="bg-[#f4f4f9] h-[100vh]">
      <div className="flex flex-col pt-14 items-center pb-8">
        <img src={logo} width={80} alt="Logo" />
      </div>
      <div >
        <Timer/>
       
        <NavBar />
      </div>
    </div>
  );
}
