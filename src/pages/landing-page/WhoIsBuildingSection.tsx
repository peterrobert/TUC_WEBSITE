type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  email: string;
};

type CultureSection = {
  title: string;
  paragraphs: string[];
};

type WhoIsBuildingSectionData = {
  whoIsBuildingSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    teamMembers: TeamMember[];
    cultureSection: CultureSection;
  };
};

const WhoIsBuildingSection = ({
  whoIsBuildingSection,
}: WhoIsBuildingSectionData) => {
  const { sectionTitle } = whoIsBuildingSection;

  return (
    <section
      id="who-is-building-section"
      className="py-12 px-4 sm:px-6 md:px-8 lg:py-20 border-b border-cool-gray"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-3">
            {sectionTitle}
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-deep-blue mx-auto mb-4 sm:mb-6" />
        </div>

        {/* Team Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 lg:mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.email}
              className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6 mx-auto sm:mx-0"
                />

                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray">
                    {member.name}
                  </h3>
                  <p className="text-medium-gray font-medium">{member.role}</p>
                </div>
              </div>

              <p className="text-medium-gray leading-relaxed mb-4 text-sm sm:text-base">
                {member.description}
              </p>

              <div className="flex justify-center sm:justify-start">
                <span className="flex items-center text-sm text-medium-gray">
                  <i className="fa-solid fa-envelope mr-2 text-deep-blue"></i>
                  {member.email}
                </span>
              </div>
            </div>
          ))}
        </div> */}

        {/* Culture Section */}
        <div className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10">
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            TUC is being built deliberately by a small core team, with input
            from a much larger group of contributors over time.
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            AlphaBeta users are key contributors to TUC’s formation—not an
            audience, not early customers, and not passive testers. They engaged
            through pilot projects, brainstorming sessions, and early
            experiments, contributing ideas, suggestions, steering input, and
            assumptions that helped move TUC one step closer to becoming a real
            system.
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            AlphaBeta users are key contributors to TUC’s formation—not an
            audience, not early customers, and not passive testers. They engaged
            through pilot projects, brainstorming sessions, and early
            experiments, contributing ideas, suggestions, steering input, and
            assumptions that helped move TUC one step closer to becoming a real
            system.
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            In its various forms, TUC has been influenced by hundreds of
            people—and nearly a thousand AlphaBeta contributors—some knowingly,
            some unknowingly. This long, quiet development period was both
            necessary and intentional.
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            TUC remained in stealth mode to manage bandwidth and resources,
            learn from real-world engagement without outside influence, and
            design systems that could scale without corruption—while protecting
            its core identity and preserving WhoWeAre: TUC’s Vision, Mission,
            Core Values, and Principles.
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            The system is designed to respect past and present efforts, real
            human capacity, and the responsibility of how today’s work affects
            future generations. In TUC, contribution is optional and
            self-motivation is essential. Participation is not driven by hype,
            pressure, or urgency. The work moves forward at a pace people can
            actually sustain with the resources available—supporting long-term
            progress instead of burnout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsBuildingSection;
