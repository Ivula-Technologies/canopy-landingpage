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
      title: "Attendance and Participation Tracking",
      description:
        "Monitor engagement across activities, events, meetings, and programs program involvement.",
    },

    {
      title: "Analytics and Insight Dashboard",
      description:
       "Transform organizational data into actionable intelligence with leadership dashboards providing visibility into membership growth, participation trends, volunteer activity, attendance patterns, team performance, and organizational engagement.",
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
    <section id="features" className=" bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sky-900 uppercase tracking-[0.25em] font-semibold text-sm text-center">
          Features
        </p>
        <h2 className="text-4xl font-bold text-center">
          Everything your organization needs to stay organized.
        </h2>
        <div className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-gray-600 text-center">
        <p>Replace disconnected spreadsheets and scattered tools with a single workspace for the people, programs, and decisions that keep your organization moving.
        </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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