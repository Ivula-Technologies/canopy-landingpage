import {motion} from "framer-motion";
import churches from "../assets/images/churches.png";
import Volunteers from "../assets/images/Volunteers.png";
import school from "../assets/images/school.png";
import charities from "../assets/images/charities.png";
import youthorg from "../assets/images/youthorg.png";

function Audience(){
    const audiences = [
      {
    title: "Volunteer Groups & Nonprofits",
    description: "Organize and track volunteer activities and events easily.",
    image: Volunteers,
  },
  {
    title: "Churches & Fellowships",
    description: "Coordinate members, services, and church events from a single platform.",
    image: churches,
  },
  {
    title: "Youth & Membership-Based Organizations",
    description: "Engage and manage youth programs and activities at a glance with a clear vision of the dashboard.",
    image: youthorg, 
  },
  {
    title: "Charities & Community Organizations",
    description: "Track outreach programs and community support.",
    image: charities,
  },
 
  {
    title: "Educational Programs",
    description: "Manage student groups, clubs, and events effectively.",
    image: school,
  },
];
    return(
<section id="audience" className="py-20 bg-linear-to-br from-sky-100 via-sky-200 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sky-900 uppercase tracking-[0.25em] font-semibold text-sm text-center">
          Who is it For?
        </p>
        <h2 className="text-4xl font-bold text-center">
           Built specifically for organizations that bring people together and create impact.
        </h2>
        <div className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-gray-600 text-center">
        <p>If your team is responsible for people, programs, service, and impact, Ivula Canopy helps you keep the work visible and manageable.
        </p>
        </div>           

<div className="mt-12">
          {audiences.map((item, index) => (
            <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <motion.div
          className="w-full md:w-2/5"
          initial={{opacity:0, x: index % 2 === 0 ? -60 : 60}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8}}     
               >
               <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg
              transition-transform duration-300 hover:scale-105"
            />
            </motion.div>

          {/* Text */}
          <div className="w-full md:w-3/5">
            <h3 className="text-3xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 text-lg">
              {item.description}
            </p>
        
          </div>
        </div>
          ))}
        </div>
        </div>
        </section>
        );
      }
    
    


export default Audience;