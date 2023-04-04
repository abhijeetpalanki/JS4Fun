import ContextAlarm from "./ContextAlarm";
import AlarmOption from "./AlarmOption";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";

const AlarmClock = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[hsl(240,24%,94%)] text-[hsl(240,12%,35%)] duration-[400] font-['Poppins'] m-0 overflow-hidden">
      <section className="flex items-center justify-center max-w-5xl px-4 py-0 clock lg:mx-auto">
        <div className="h-screen grid grid-rows-[1fr_max-content]">
          <div className="grid place-items-center">
            <ContextAlarm>
              <AnalogClock />
              <DigitalClock />
              <AlarmOption />
            </ContextAlarm>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlarmClock;
