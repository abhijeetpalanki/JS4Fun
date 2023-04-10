import { useState, useEffect } from "react";
import Header from "./Header";
import Day from "./Day";
import NewEventModal from "./NewEventModal";
import DeleteEventModal from "./DeleteEventModal";
import { useDate } from "./useDate";

const CustomCalendar = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  return (
    <div className="flex h-screen justify-center items-center bg-[#fffcff]">
      <div id="container" className="w-[770px]">
        <Header
          dateDisplay={dateDisplay}
          onNext={() => setNav((prev) => prev + 1)}
          onBack={() => setNav((prev) => prev - 1)}
        />

        <div
          id="weekdays"
          className="w-full flex justify-between items-center text-lg text-[#247ba0]"
        >
          <div className="w-[100px] p-[10px] flex justify-start items-center">
            Sunday
          </div>
          <div className="w-[100px] p-[10px] flex justify-center items-center">
            Monday
          </div>
          <div className="w-[100px] p-[10px] flex justify-center items-center">
            Tuesday
          </div>
          <div className="w-[100px] p-[10px] flex justify-center items-center">
            Wednesday
          </div>
          <div className="w-[100px] p-[10px] flex justify-center items-center">
            Thursday
          </div>
          <div className="w-[100px] p-[10px] flex justify-center items-center">
            Friday
          </div>
          <div className="w-[100px] p-[10px] flex justify-end items-center">
            Saturday
          </div>
        </div>

        <div id="calendar" className="flex flex-wrap w-full m-auto">
          {days.map((day, index) => (
            <Day
              key={index}
              day={day}
              onClick={() => {
                if (day.value !== "padding") {
                  setClicked(day.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onSave={(title) => {
            setClicked(null);
            setEvents([...events, { title, date: clicked }]);
          }}
          onCancel={() => setClicked(null)}
        />
      )}

      {clicked && eventForDate(clicked) && (
        <DeleteEventModal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setClicked(null);
            setEvents(events.filter((e) => e.date !== clicked));
          }}
        />
      )}
    </div>
  );
};

export default CustomCalendar;
