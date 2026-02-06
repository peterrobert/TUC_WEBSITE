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
        {/* Culture Section */}
        <div className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10">
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            TUC is being built by a small core team, informed and shaped by a
            much broader community of contributors who engaged through real
            work, experimentation, and lived experience.
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            A small core team responsible for coherence, continuity, and
            long-term integrity
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            Hundreds of AlphaBeta contributors who influenced TUC through
            pilots, discussions, and early experiments
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            Contributions made both knowingly and unknowingly through real-world
            engagement
          </p>
          <p className="text-base sm:text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0">
            Participation remains voluntary, self-motivated, and paced to
            respect real human capacity
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsBuildingSection;
