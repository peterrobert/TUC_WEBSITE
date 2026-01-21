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
  const { sectionTitle, sectionSubtitle, teamMembers, cultureSection } =
    whoIsBuildingSection;

  return (
    <section
      id="who-is-building-section"
      className="py-12 px-4 sm:px-6 md:px-8 lg:py-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-3">
            {sectionTitle}
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-deep-blue mx-auto mb-4 sm:mb-6" />

          <p className="text-base sm:text-lg text-medium-gray max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 lg:mb-12">
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
        </div>

        {/* Culture Section */}
        <div className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-dark-gray mb-4 text-center">
            {cultureSection.title}
          </h3>

          {cultureSection.paragraphs.map((text, index) => (
            <p
              key={index}
              className="text-base sm:text-lg text-medium-gray leading-relaxed text-center max-w-3xl mx-auto mb-4 last:mb-0"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsBuildingSection;
