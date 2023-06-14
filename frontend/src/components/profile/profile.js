import pic from "../../img/gustavosantos.png";
import DayIcon from "../../icons/today_icon.png";
import WeekIcon from "../../icons/week_icon.png";
import MonthIcon from "../../icons/month_icon.png";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="flex flex-col items-center pt-20">
        <img className="rounded-full" src={pic} width={80} alt="pic" />
        <h1 className="pt-5">Gustavo Santos</h1>
        <div className="w-screen h-72 flex items-center">
          <ul className="space-y-10 list-none no-underline">
            <li>
              <img className="today" src={DayIcon} alt="Today" />
              Today:
            </li>
            <li>
              <img className="week" src={WeekIcon} alt="This Week" />
              This Week:
            </li>
            <li>
              <img className="month" src={MonthIcon} alt="This Month" />
              This Month:
            </li>
          </ul>
        </div>
        <a href="/pomodoro" className="return-button">Logout</a>
      </div>
    </div>
  );
}
