import {motion} from "framer-motion";
import churches from "../assets/Dashboard/churches.png";
import volunteers from "../assets/Dashboard/Volunteers.png";
import school from "../assets/Dashboard/school.png";
import charities from "../assets/Dashboard/charities.png";
import youthorg from "../assets/Dashboard/youthorg.png";

function Audience(){
    const audiences = [
      {
    title: "Volunteer Groups & Nonprofits",
    description: "Organize and track volunteer activities and events easily.",
    image: volunteers,
  },
  {
    title: "Churches & fellowships",
    description: "Coordinate members, services, and church events from a single platform.",
    image: churches,
  },
  {
    title: "Youth & Membership-based Organizations",
    description: "Engage and manage youth programs and activities at a glance with a clear vision of the dashboard.",
    image: youthorg, 
  },
  {
    title: "Charities & Community Organizations",
    description: "Track outreach programs and community support.",
    image: charities,
  },
 
  {
    title: "Educational programs",
    description: "Manage student groups, clubs, and events effectively.",
    image: school,
  },
];
    return(
        <section id="audience" className="py-20 bg-linear-to-br from-sky-100 via-sky-200 to-sky-100">
            <div className="container max-w-7xl mx-auto px-10">   
          
            <h2 className="text-4xl font-bold text-center">
  Who is it For?
</h2>

<p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
  Built specifically for organizations that bring people together and create impact.
</p>

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
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-normal mb-4">
              {item.title}
            </h2>

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