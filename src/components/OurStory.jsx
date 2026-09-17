const testimonials = [
  {
    
    role: "Beta tester",
    quote:
      "Canopy made organizing members and events much simpler. Having everything in one place saved us valuable time.",
  },
  {
    role: "Project Manager",
    quote:
      "Ivula canopy has easened the working process of our team. Everything is organized and easy to access. Organizations can now focus on their work and not worry about managing its members.",
    },
  {
    role: "Operations Team",
    quote:
      "Using Canopy reduced the amount of manual administration and allowed us to focus more on supporting our community.",
  },
];
function OurStory() {
    return (

<section id="OurStory" className="bg-white py-24">
    <div className="max-w-6xl mx-auto px-6">
        <p className="text-sky-900 uppercase tracking-[0.25em] font-semibold text-sm text-center">
    Our Story
</p>
<h2 className="mt-5 text-4xl md:text-4xl font-bold text-center text-gray-900 leading-tight">
    Helping communities spend less time managing and more time making an impact.
</h2>
<div className="max-w-3xl mx-auto mt-8 space-y-6 text-lg leading-8 text-gray-600 text-center">
    <p>  Canopy was built from a simple observation: organizations are built around
people, yet many organizations still struggle to understand and manage the
people who make their work possible.
Over time, organizations lose more than just data. They lose valuable knowledge
about the people they serve and the people who support their mission.
Volunteers come and go. Members participate at different levels. Teams change.
Events happen. Programs grow. But in many organizations, the records that
capture these interactions are scattered across spreadsheets, emails,
messages, and individual files or are not captured at all.</p>

<p>We envisioned a platform that would help organizations maintain lasting records
of their people and their level of activity and participation, creating a more
effective way to manage volunteers and other stakeholders.
Administrators can track participation and engagement over time and use this
information when inviting people to future events and activities. Past
participation provides a clear record of their involvement and helps organizations
make more informed decisions about who to engage.</p>

<p>
This idea was also extended to other stakeholders within organizations to
support better decision-making. By understanding attendance, funding,
donations, contributions, activity, and responses, organizations can make
decisions based on the information they have collected over time. The decisions
they make can be supported by the records and information that Canopy helps
them maintain.</p>

</div>
    </div>
    <div className="border-t border-gray-200 my-20"></div>
    <div className="text-center">
        <p className="text-sky-700 uppercase tracking-[0.25em] text-sm font-semibold">
Early User Feedback
</p>
<h3 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
    What Our Team Experienced
</h3>

<p className="mt-4 max-w-2xl mx-auto text-gray-600">
    Before Canopy was released publicly, our team used it in real-world
    workflows to validate the experience and ensure it genuinely simplified
    community management.
</p>
<div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">

  {testimonials.map((testimonial, index) => (

    <div
      key={index}
      className="bg-blue-200 rounded-2xl shadow-md p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >

      <div className="text-2xl text-blue-900 mb-5">
        ❝
      </div>

      <p className="italic text-gray-600 leading-7">
        {testimonial.quote}
      </p>

      <div className="mt-8">
        <p className="font-semibold text-gray-900">
          {testimonial.role}
        </p>
      </div>

    </div>

  ))}

</div>
</div>
</section>
    );
}
export default OurStory;