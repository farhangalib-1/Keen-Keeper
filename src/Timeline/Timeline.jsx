import { useContext } from "react";
import { TimelineContext } from "../Custom/TimelineContext";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineVideocam } from "react-icons/md";


const Timeline = () => {

  const { timeline } = useContext(TimelineContext);

  const getIcon = (type) => {
    if (type === "Call") return <FiPhoneCall />;
    if (type === "Text") return <BiMessageDots />;
    if (type === "Video") return <MdOutlineVideocam />;
  };

  return (
    <div className="w-10/12 mx-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      <div className="space-y-4">
        {timeline.map((item) => (
          <div key={item.id} className="flex items-center gap-4 shadow p-4 rounded-xl">
            <div className="text-2xl">{getIcon(item.type)}</div>
            <div>
              <h1 className="font-semibold">
                {item.type} with {item.name}
              </h1>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;