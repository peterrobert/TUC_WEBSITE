import { Fragment } from "react/jsx-runtime";

type PointsType = {
  title: string;
  description: string;
};

type WhyTucSectionProps = {
  whyTucSection: {
    title: string;
    problems: {
      title: string;
      description: string;
    }[];
    quote: {
      text: string;
    };
    mission: {
      title: string;
      description: string;
      points: Array<PointsType>;
    };
  };
};

const MissionStatement = ({ whyTucSection }: WhyTucSectionProps) => {
  const { mission } = whyTucSection;
  return (
    <section
      id="why-tuc-exists-section"
      className="py-20 px-8  border-y border-cool-gray"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-deep-blue text-white rounded-lg p-10">
          <h3 className="text-2xl font-serif font-bold mb-4">
            {mission.title}
          </h3>
          <p className="text-lg leading-relaxed mb-6">{mission.description}</p>
          <ul className="space-y-3 text-lg">
            {mission.points.map((point, index) => {
              return (
                <Fragment key={index}>
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {point.title}
                  </h3>
                  <p className="text-lg leading-relaxed mb-6">
                    {point.description}
                  </p>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
