import Calendar from "./Calendar";
import Note from "./Note";
import Picture from "./Picture";
import Search from "./Search";
import "./Main.css";
const Menu = () => {
  return (
    <div className="whole">
      <div className="leftSide">
        <Picture />
        <Search />
        <Note />
      </div>
      <div className="rightSide">
        <Calendar />
      </div>
    </div>
  );
};

export default Menu;
