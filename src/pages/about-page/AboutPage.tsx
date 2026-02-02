import ScrollToTopButton from "../../components/ScrollToTopButton";
import { footerData } from "../../data/footerData";
import Footer from "../../layouts/Footer";

const AboutPage = () => {
  return (
    <>
      <section
        id="about-hero-section"
        className="
    min-h-[280px]
    sm:min-h-[360px]
    md:min-h-[440px]
    lg:min-h-[520px]
    flex items-center justify-center
    bg-white
    border-b border-cool-gray
    px-4 sm:px-6 lg:px-8
  "
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-serif
        font-bold
        text-dark-gray
        mb-3 sm:mb-4 lg:mb-6
        leading-tight
      "
          >
            About TUC
          </h1>

          <p
            className="
        text-base
        sm:text-lg
        md:text-xl
        lg:text-2xl
        text-medium-gray
        font-serif
        leading-relaxed
        max-w-3xl
        mx-auto
      "
          >
            A transparent, mission-driven system built by a small team committed
            to integrity, sustainability, and meaningful collaboration.
          </p>
        </div>
      </section>
      {/* Project Sectiom */}
      <section
        id="the-project-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
              The Project
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-deep-blue mb-6 sm:mb-8 mx-auto"></div>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4 sm:mb-6">
              Long-term Purpose
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed mb-4 sm:mb-6">
              TUC exists to solve a fundamental coordination problem: talented
              people have ideas, organizations need those ideas, but the gap
              between having an idea and seeing it implemented is vast. We're
              building infrastructure that makes collaboration less extractive,
              more transparent, and genuinely useful.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed mb-4 sm:mb-6">
              This isn't a quick fix or a temporary solution. We're creating a
              system designed to last decades, not quarters. The architecture
              prioritizes sustainability over growth, clarity over complexity,
              and contributor welfare over investor returns.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed">
              Our purpose is simple: help good ideas find the resources, people,
              and momentum they need to become real. Everything else—the
              features, the technology, the organizational structure—serves that
              goal.
            </p>
          </div>

          <div className="bg-deep-blue text-white rounded-lg p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 sm:mb-6">
              Integrity-First Philosophy
            </h3>
            <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-6">
              Integrity isn't a value we aspire to—it's an architectural
              constraint. The system is designed so that extraction, opacity,
              and unfair attribution are structurally difficult or impossible,
              not just discouraged.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-shield-halved text-deep-blue text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                      No Shortcuts
                    </h4>
                    <p className="text-medium-gray text-sm sm:text-base">
                      We don't compromise principles for speed. If a feature
                      would undermine integrity, we don't build it—regardless of
                      market pressure or competitive dynamics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-eye text-deep-blue text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                      Radical Transparency
                    </h4>
                    <p className="text-medium-gray text-sm sm:text-base">
                      Decisions, reasoning, and changes are documented publicly.
                      If we can't explain why we did something, we probably
                      shouldn't have done it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-handshake text-deep-blue text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                      Fair Attribution
                    </h4>
                    <p className="text-medium-gray text-sm sm:text-base">
                      Credit flows to those who create value. The system tracks
                      contributions and ensures recognition isn't controlled by
                      gatekeepers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-pale-blue rounded-lg p-4 sm:p-6 border border-cool-gray">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-clock text-deep-blue text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-dark-gray">
                      Patient Building
                    </h4>
                    <p className="text-medium-gray text-sm sm:text-base">
                      We build at the pace our capacity allows. No artificial
                      urgency, no pressure to scale before we're ready, no
                      compromising quality for speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white border-opacity-20 mt-6 sm:mt-10 pt-4 sm:pt-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed italic">
                "Integrity means the system works the way we say it does, even
                when no one is watching, even when shortcuts would be easier,
                even when the pressure to compromise is intense."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team section */}
      <section
        id="the-team-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-cool-gray"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
              The Team
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-dark-cyan mb-4 sm:mb-8 mx-auto"></div>
            <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto text-center">
              A small, deliberate team focused on building something
              sustainable. No hierarchy theater, no inflated titles, just people
              doing the work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-12 sm:mb-16">
            {/* Jeff */}
            <div
              id="team-member-jeff"
              className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                  alt="Jeff"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                    Jeff
                  </h3>
                  <p className="text-lg sm:text-xl text-medium-gray font-medium mb-2 sm:mb-4">
                    Founder / Architect
                  </p>
                  <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-medium-gray">
                    <span className="flex items-center">
                      <i className="fa-solid fa-envelope mr-2 text-deep-blue"></i>
                      jeff@tuc.system
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Role & Responsibilities
                  </h4>
                  <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                    Jeff handles system design, strategic direction, and ensures
                    TUC remains aligned with its core principles. He focuses on
                    the big picture—how the pieces fit together, what problems
                    we're actually solving, and why certain decisions make sense
                    in the long term.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Philosophy
                  </h4>
                  <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                    Believes that most coordination problems are design
                    problems. If collaboration feels extractive or opaque, the
                    system is broken—not the people using it. Committed to
                    building infrastructure that respects contributor autonomy
                    while enabling meaningful coordination.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Background
                  </h4>
                  <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                    Years of experience watching good ideas die in
                    organizational dysfunction. Saw talented people burned by
                    extractive systems. Decided to build something
                    different—slowly, transparently, and with integrity baked
                    into the architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Peter */}
            <div
              id="team-member-peter"
              className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                  alt="Peter"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                    Peter
                  </h3>
                  <p className="text-lg sm:text-xl text-medium-gray font-medium mb-2 sm:mb-4">
                    DevOps / Platform Builder
                  </p>
                  <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-medium-gray">
                    <span className="flex items-center">
                      <i className="fa-solid fa-envelope mr-2 text-deep-blue"></i>
                      peter@tuc.system
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Role & Responsibilities
                  </h4>
                  <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                    Peter handles infrastructure, deployment, and technical
                    implementation. He translates system concepts into working
                    code and maintains the platform's reliability and
                    performance. Responsible for making sure the technical
                    foundation can support the vision without collapsing.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Philosophy
                  </h4>
                  <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                    Believes infrastructure should be invisible when it works
                    and transparent when it doesn't. Prioritizes stability over
                    novelty, clarity over cleverness. Committed to building
                    systems that can be maintained and understood by future
                    contributors.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                    Background
                  </h4>
                  <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                    Deep experience in platform engineering and DevOps. Has seen
                    what happens when technical debt compounds and shortcuts
                    accumulate. Focused on building things properly from the
                    start, even if it takes longer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-deep-blue rounded-lg p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold text-dark-gray mb-4 sm:mb-6 text-center">
              Why a Small Team?
            </h3>
            <div className="max-w-full sm:max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                Small teams can maintain integrity more easily. There's less
                organizational overhead, fewer communication breakdowns, and
                clearer accountability. Every decision can be explained, every
                change can be documented, and every principle can be
                consistently applied.
              </p>
              <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                We're not trying to scale the team prematurely. Growth happens
                when capacity genuinely exists, not when a roadmap demands it.
                This means slower progress, but it also means sustainable
                progress.
              </p>
              <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                As the system matures and proves its value, the team will
                grow—but only at a pace that maintains the culture of
                transparency, integrity, and deliberate decision-making that
                defines TUC.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* values section */}
      <section
        id="values-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
              Values
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-deep-blue mb-4 sm:mb-8 mx-auto"></div>
            <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto text-center">
              These aren't aspirational statements or marketing copy. They're
              architectural constraints that shape how the system works and what
              it can become.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Transparency */}
            <div
              id="value-transparency"
              className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-deep-blue transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-eye text-3xl sm:text-4xl text-deep-blue"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                    Transparency
                  </h3>
                  <p className="text-base sm:text-lg text-medium-gray font-medium">
                    Visibility by default, opacity only when necessary
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    What It Means
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    Every decision, change, and piece of reasoning is documented
                    and accessible. Contributors can see how the system works,
                    why choices were made, and what's happening at any given
                    time. No hidden agendas, no opaque processes, no information
                    asymmetry.
                  </p>
                </div>

                <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    How It's Enforced
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    System changes require public documentation. Decision logs
                    are maintained and searchable. Contribution tracking is
                    visible to all participants. The architecture makes opacity
                    harder than transparency.
                  </p>
                </div>

                <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    Why It Matters
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    Transparency builds trust. When people can see how things
                    work, they're more likely to participate. When decisions are
                    visible, they can be questioned and improved. Opacity
                    enables extraction; transparency prevents it.
                  </p>
                </div>
              </div>
            </div>

            {/* No Extraction */}
            <div
              id="value-no-extraction"
              className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-deep-blue transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-ban text-3xl sm:text-4xl text-deep-blue"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                    No Extraction
                  </h3>
                  <p className="text-base sm:text-lg text-medium-gray font-medium">
                    Value flows to creators, not extractors
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    What It Means
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    The system is designed so that people who create value
                    receive the benefits. No investor className extracting
                    surplus, no platform taking disproportionate cuts, no
                    intermediaries capturing value they didn't create.
                    Contributors are stakeholders, not resources.
                  </p>
                </div>

                <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    How It's Enforced
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    Ownership structures prevent extraction. Attribution systems
                    ensure credit flows correctly. Economic models prioritize
                    contributor welfare over investor returns. The architecture
                    makes extraction structurally difficult.
                  </p>
                </div>

                <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    Why It Matters
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    People stop contributing when they realize they're being
                    exploited. Non-extractive systems attract better
                    contributors, produce better work, and remain sustainable
                    longer. This isn't altruism—it's structural integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Fair Attribution */}
            <div
              id="value-fair-attribution"
              className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-dark-cyan transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-award text-3xl sm:text-4xl text-dark-cyan"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                    Fair Attribution
                  </h3>
                  <p className="text-base sm:text-lg text-medium-gray font-medium">
                    Credit belongs to those who create value
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    What It Means
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    Contributors receive recognition for their work. Ideas are
                    tracked to their originators. Contributions are visible and
                    verifiable. Credit isn't controlled by gatekeepers or
                    captured by those with platform access.
                  </p>
                </div>

                <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    How It's Enforced
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    Attribution is built into the data model. Contributions are
                    immutably logged. Recognition systems are transparent and
                    verifiable. The architecture makes unfair attribution
                    visible and correctable.
                  </p>
                </div>

                <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    Why It Matters
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    People need to know their work matters. Attribution isn't
                    vanity—it's proof of impact. When credit flows fairly,
                    contributors are more likely to keep contributing.
                    Reputation becomes portable and verifiable.
                  </p>
                </div>
              </div>
            </div>

            {/* Sustainability */}
            <div
              id="value-sustainability"
              className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-dark-cyan transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-seedling text-3xl sm:text-4xl text-dark-cyan"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                    Sustainability
                  </h3>
                  <p className="text-base sm:text-lg text-medium-gray font-medium">
                    Built for decades, not quarters
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    What It Means
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    The system is designed to last. No technical debt
                    accumulation, no growth-at-any-cost mentality, no short-term
                    thinking. Decisions prioritize long-term viability over
                    immediate gains. We build for the future, not just the
                    present.
                  </p>
                </div>

                <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    How It's Enforced
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    Revenue models support maintenance, not extraction.
                    Technical architecture prioritizes maintainability. Growth
                    happens at sustainable pace. The structure prevents
                    shortcuts that create long-term problems.
                  </p>
                </div>

                <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                  <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                    Why It Matters
                  </h4>
                  <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                    Most systems collapse under their own growth or die when
                    funding runs out. Sustainability means the system can
                    survive market changes, team transitions, and shifting
                    priorities. Infrastructure needs to outlast its creators.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-deep-blue text-white rounded-lg p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold mb-4 sm:mb-6 text-center">
              Values as Constraints
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-full sm:max-w-4xl mx-auto mb-4 sm:mb-8">
              These values aren't aspirational—they're operational. They
              constrain what we can build, how we can build it, and what success
              looks like. This makes some things harder, but it also makes the
              system more trustworthy, more durable, and more aligned with its
              stated purpose.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-full sm:max-w-4xl mx-auto">
              When faced with a choice between growth and integrity, we choose
              integrity. When faced with a choice between speed and
              sustainability, we choose sustainability. When faced with a choice
              between extraction and fairness, we choose fairness. Every time.
            </p>
          </div>
        </div>
      </section>
      {/* How we work section */}
      <section
        id="how-we-work-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-cool-gray"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
              How We Work
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-dark-cyan mb-4 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto text-center">
              Our process reflects our values. Slow, transparent, and
              deliberate.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "No Artificial Urgency",
                icon: "fa-clock",
                color: "text-deep-blue",
                paragraphs: [
                  "We don't create false deadlines or pressure ourselves to ship before we're ready. Features are released when they work properly, not when a roadmap says they should. This means slower progress, but it also means we're not accumulating technical debt or making compromises we'll regret.",
                  "There's no race to market, no competition to beat, no investors demanding growth. We build at the pace our capacity allows, and we're transparent about that pace.",
                ],
              },
              {
                title: "Documentation First",
                icon: "fa-book-open",
                color: "text-deep-blue",
                paragraphs: [
                  "Before we build something, we document why it makes sense. Before we change something, we document the reasoning. Before we release something, we document how it works. This creates a permanent record of decisions and makes it easier for future contributors to understand the system.",
                  "Documentation isn't an afterthought—it's part of the work. If we can't explain something clearly, we probably don't understand it well enough to build it.",
                ],
              },
              {
                title: "Optional Contribution",
                icon: "fa-users",
                color: "text-dark-cyan",
                paragraphs: [
                  "We don't pressure people to contribute. There's no hustle culture, no expectation of unpaid labor disguised as opportunity, no artificial urgency. If you want to help, great. If you don't, that's fine too. Contribution is genuinely optional.",
                  "The system is designed to work with whatever capacity people actually have—not the capacity we wish they had. This means slower progress, but it also means sustainable progress.",
                ],
              },
              {
                title: "Public Decision-Making",
                icon: "fa-comments",
                color: "text-dark-cyan",
                paragraphs: [
                  "Major decisions are discussed publicly. Proposals are shared, feedback is collected, and reasoning is documented. This doesn't mean every decision is democratic—someone still needs to make the call—but it does mean the process is visible and the reasoning is clear.",
                  "When we make mistakes, we document those too. Transparency includes acknowledging when we got something wrong and explaining how we're fixing it.",
                ],
              },
              {
                title: "Iteration Over Perfection",
                icon: "fa-wrench",
                color: "text-medium-gray",
                paragraphs: [
                  "We ship working versions and improve them over time. This doesn't mean shipping broken things—it means releasing features that work properly but might not have every possible refinement. We learn from real use and adapt accordingly.",
                  "The system evolves based on actual needs, not theoretical requirements. We build, observe, learn, and adjust.",
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center shrink-0">
                    <i
                      className={`fa-solid ${item.icon} text-3xl sm:text-3xl ${item.color}`}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray mb-2 sm:mb-4">
                      {item.title}
                    </h3>
                    {item.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-base sm:text-lg text-medium-gray leading-relaxed mb-3 last:mb-0"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What we don't do section */}
      <section
        id="what-we-dont-do-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
              What We Don't Do
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-deep-blue mb-4 sm:mb-8 mx-auto"></div>
            <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto">
              Sometimes clarity comes from stating what you won't do, not just
              what you will.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "No Growth Theater",
                icon: "fa-times-circle",
                text: "We don't manufacture growth metrics to attract investors or create FOMO. User counts, engagement rates, and vanity metrics aren't how we measure success. We grow when capacity genuinely exists, not when a pitch deck demands it.",
              },
              {
                title: "No Dark Patterns",
                icon: "fa-times-circle",
                text: "We don't manipulate users into actions they didn't intend. No misleading CTAs, no hidden opt-outs, no addictive engagement loops. If the system needs tricks to retain users, the system isn't valuable enough.",
              },
              {
                title: "No Hustle Culture",
                icon: "fa-times-circle",
                text: "We don't glorify overwork or pressure people to sacrifice their well-being for the project. Contribution is optional, boundaries are respected, and burnout isn't a badge of honor. Sustainable systems require sustainable work practices.",
              },
              {
                title: "No Opaque Decisions",
                icon: "fa-times-circle",
                text: "We don't make major changes without explanation. No surprise pivots, no hidden agendas, no \"trust us\" without reasoning. If we can't explain why we did something, we probably shouldn't have done it.",
              },
              {
                title: "No Extraction",
                icon: "fa-times-circle",
                text: "We don't build systems that extract value from contributors for investor benefit. No platform fees that capture disproportionate value, no ownership structures that prioritize capital over creators, no economic models designed to extract surplus.",
              },
              {
                title: "No False Promises",
                icon: "fa-times-circle",
                text: "We don't promise things we can't deliver. No overhyped features, no unrealistic timelines, no aspirational roadmaps presented as commitments. We're honest about what exists, what's being built, and what's still theoretical.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-l-4 border-deep-blue p-6 sm:p-8 rounded-lg"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <i
                    className={`fa-solid ${item.icon} text-2xl sm:text-3xl text-deep-blue mt-1 shrink-0`}
                  ></i>
                  <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Transparency section */}
      <section
        id="why-transparency-matters-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-cool-gray"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
              Why Transparency Matters
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-dark-cyan mb-4 sm:mb-8 mx-auto"></div>
          </div>

          <div className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-10 lg:p-12 mb-8 sm:mb-10">
            <p className="text-base sm:text-lg md:text-xl text-medium-gray leading-relaxed mb-4 sm:mb-6">
              Transparency isn't a marketing tactic—it's a structural
              requirement for building trust. When people can see how decisions
              are made, they're more likely to believe the system operates
              fairly. When reasoning is documented, mistakes can be identified
              and corrected. When processes are visible, corruption becomes
              harder.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-medium-gray leading-relaxed">
              Most systems fail not because of technical problems, but because
              trust erodes. Contributors stop participating when they realize
              they're being exploited. Users leave when they discover hidden
              agendas. Communities collapse when leadership becomes opaque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Transparency Enables Accountability",
                text: "When decisions are documented, they can be questioned. When processes are visible, they can be improved. When mistakes are acknowledged, they can be learned from. Accountability requires visibility. Opaque systems protect bad decisions. Transparent systems expose them.",
              },
              {
                title: "Transparency Reduces Corruption",
                text: "Corruption thrives in opacity. When processes are hidden, it's easier to manipulate outcomes. When decisions aren't documented, it's easier to rewrite history. When attribution isn't tracked, it's easier to steal credit. Transparency doesn't eliminate corruption, but it makes it significantly harder.",
              },
              {
                title: "Transparency Builds Trust",
                text: "People trust systems they can understand. When the reasoning is clear, when the process is visible, when the outcomes are predictable, trust accumulates. Opacity breeds suspicion; transparency builds confidence. Trust is the foundation of collaboration. Without it, coordination becomes impossible.",
              },
              {
                title: "Transparency Enables Learning",
                text: "When decisions and outcomes are documented, patterns become visible. Mistakes can be analyzed and avoided. Successes can be replicated. Knowledge accumulates instead of disappearing when people leave. Opaque systems lose knowledge. Transparent systems preserve it.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* contacts section */}
      <section
        id="contact-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
              Get in Touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-deep-blue mx-auto mb-4 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-medium-gray max-w-2xl mx-auto">
              Have questions about TUC? Want to understand something better?
              Reach out—we're happy to explain.
            </p>
          </div>

          <div className="bg-white border border-cool-gray rounded-lg p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {[
                {
                  title: "General Inquiries",
                  email: "hello@tuc.system",
                  icon: "fa-envelope",
                  color: "text-deep-blue",
                },
                {
                  title: "Feedback",
                  email: "feedback@tuc.system",
                  icon: "fa-comments",
                  color: "text-deep-blue",
                },
                {
                  title: "Documentation",
                  email: "docs@tuc.system",
                  icon: "fa-book",
                  color: "text-dark-cyan",
                },
                {
                  title: "Technical",
                  email: "tech@tuc.system",
                  icon: "fa-code",
                  color: "text-dark-cyan",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pale-blue rounded-md flex items-center justify-center shrink-0">
                    <i
                      className={`fa-solid ${item.icon} text-2xl ${item.color}`}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <a
                      href={`mailto:${item.email}`}
                      className={`text-base sm:text-lg ${item.color} hover:opacity-80 transition-opacity`}
                    >
                      {item.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-cool-gray pt-6 sm:pt-8">
              <p className="text-base sm:text-lg text-medium-gray text-center leading-relaxed">
                We respond to all genuine inquiries. Response times vary
                depending on team capacity, but we aim to reply within a few
                days. No automated responses, no canned replies—just actual
                humans answering actual questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* call to action section */}
      <section
        id="cta-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-cool-gray"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-4 sm:mb-6">
            Explore TUC
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-medium-gray mb-8 sm:mb-10 leading-relaxed">
            Learn more about what we're building and how you can participate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-deep-blue text-white rounded-md hover:bg-bright-blue transition-colors font-medium text-base sm:text-lg">
              View System Overview
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-deep-blue text-deep-blue rounded-md hover:bg-deep-blue hover:text-white transition-colors font-medium text-base sm:text-lg">
              Read Documentation
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-dark-cyan text-dark-cyan rounded-md hover:bg-dark-cyan hover:text-white transition-colors font-medium text-base sm:text-lg">
              Check System Status
            </button>
          </div>
        </div>
      </section>
      ️{/* footer */}
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
