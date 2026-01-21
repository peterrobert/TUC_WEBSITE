import { Fragment } from "react/jsx-runtime";

type HowTucWorkSection = {
  howTucWorksSection: {
    header: {
      title: string;
      subtitle: string;
    };
    pipelineFlow: {
      primaryStages: {
        id: string;
        label: string;
        icon: string;
        color: string;
      }[];
      secondaryStages: {
        id: string;
        label: string;
        icon: string;
        color: string;
      }[];
    };
    stageDescriptions: {
      id: string;
      title: string;
      description: string;
      icon: string;
      color: string;
    }[];
    closingStatement: string;
  };
};

const HowTucWorkSection = ({ howTucWorksSection }: HowTucWorkSection) => {
  const { header, pipelineFlow, stageDescriptions, closingStatement } =
    howTucWorksSection;

  const displayPrimaryPipeline = () => {
    const { primaryStages } = pipelineFlow;

    return primaryStages.map((value) => {
      return (
        <Fragment key={value.id}>
          <div className="flex flex-col items-center text-center w-full sm:flex-1">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-${value.color} rounded-full flex items-center justify-center mb-3`}
            >
              <i
                className={`fa-solid ${value.icon} text-white text-lg sm:text-xl lg:text-2xl`}
              ></i>
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-dark-gray">
              {value.label}
            </h4>
          </div>

          <div className="hidden sm:flex items-center mx-2 lg:mx-4">
            <i className="fa-solid fa-arrow-right text-xl lg:text-3xl text-deep-blue"></i>
          </div>
        </Fragment>
      );
    });
  };

  const displaySecondaryPipeline = () => {
    const { secondaryStages } = pipelineFlow;

    return secondaryStages.map((value) => {
      return (
        <Fragment key={value.id}>
          <div className="flex flex-col items-center text-center w-full sm:flex-1">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-${value.color} rounded-full flex items-center justify-center mb-3`}
            >
              <i
                className={`fa-solid ${value.icon} text-white text-lg sm:text-xl lg:text-2xl`}
              ></i>
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-dark-gray">
              {value.label}
            </h4>
          </div>

          <div className="hidden sm:flex items-center mx-2 lg:mx-4">
            <i className="fa-solid fa-arrow-right text-xl lg:text-3xl text-deep-blue"></i>
          </div>
        </Fragment>
      );
    });
  };

  return (
    <section
      id="how-tuc-works-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-gray mb-4">
            {header.title}
          </h2>

          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-dark-cyan mx-auto mb-5"></div>

          <p className="text-sm sm:text-base lg:text-lg text-medium-gray max-w-3xl mx-auto">
            {header.subtitle}
          </p>
        </div>

        {/* PIPELINE CONTAINER */}
        <div className="bg-pale-blue border-2 border-deep-blue rounded-lg p-4 sm:p-6 lg:p-10 mb-10 sm:mb-12">
          {/* PRIMARY PIPELINE */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-6 mb-8">
            {displayPrimaryPipeline()}
          </div>

          {/* SECONDARY PIPELINE */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-6">
            {displaySecondaryPipeline()}
          </div>
        </div>

        {/* DESCRIPTION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 mb-10 sm:mb-12">
          {stageDescriptions.map((stage) => (
            <div
              key={stage.id}
              className={`bg-white border border-cool-gray rounded-lg p-4 sm:p-6 ${
                stage.id === "ripple-effects" ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-${stage.color} rounded-md flex items-center justify-center shrink-0`}
                >
                  <i
                    className={`fa-solid ${stage.icon} text-white text-sm sm:text-base`}
                  ></i>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-dark-gray mb-1 sm:mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-sm sm:text-base text-medium-gray">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER STATEMENT */}
        <div className="bg-deep-blue text-white rounded-lg p-5 sm:p-8 lg:p-10 text-center">
          <p className="text-sm sm:text-lg lg:text-xl leading-relaxed">
            {closingStatement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowTucWorkSection;
