function Features() {
  const features = [
    {
      title: "Member Management",
      description:
        "Maintain a complete directory of members, volunteers, staff, and stakeholders in one centralized location .",
    },

    {
      title: "Teams & Departments",
      description:
        "Organize individuals into departments, committees, projects, ministries, programs, or volunteer groups..",
    },

    {
      title: "Attendance and participation tracking",
      description:
        "Monitor engagement across activities, events, meetings, and programs program involvement.",
    },

    {
      title: "Analytics and Insight dashboard",
      description:
       <p> Transform organizational data into actionable intelligence with a leadership dashboards providing visibility into: 
        Membership growth, participation trends, volunteer activity, attendance patterns, team performance and organizational engagement.
    </p>
    },

    {
      title: "Communication Tools",
      description:
        "Reach members quickly through centralized communication.",
    },

    {
      title: "Reports & Insights",
      description:
        "Generate meaningful reports for better decision making.",
    },
      ];

  return (
    <section id="features" className=" bg-sky-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-blue-100 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;