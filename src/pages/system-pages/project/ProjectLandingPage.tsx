import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";
import CorePurpose from "./CorePurpose";
import DocumentGenerationFlow from "./DocumentGenerationFlow";
import HeroSection from "./HeroSection";
import MasterDocumentOutputs from "./MasterDocumentOutputs";
import ProjectInputEngine from "./ProjectInputEngine";
import StructuredInputExpansion from "./StructuredInputExpansion";
import SystemEntryPoint from "./SystemEntryPoint";
import TimelineComponents from "./TimelineComponents";
import TimelineSystem from "./TimelineSystem";

const ProjectLandingPage = () => {
  return (
    <>
      <HeroSection />
      <SystemEntryPoint />
      <CorePurpose />
      <ProjectInputEngine />
      <StructuredInputExpansion />
      <DocumentGenerationFlow />
      <MasterDocumentOutputs />
      <TimelineSystem />
      <TimelineComponents />

      <section id="historical-timeline" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-gradient-to-r from-pale-blue to-white rounded-2xl p-12 border border-cool-gray">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
                Historical Timeline Mode
              </span>
              <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-6">
                Historical Project Tracking
              </h2>
              <p className="text-lg text-medium-gray mb-8 leading-relaxed">
                Advanced chronological documentation system that preserves
                complete project history for organizational learning and future
                reference.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-stream text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">
                      Event Sequencing
                    </h4>
                    <p className="text-sm text-medium-gray">
                      Chronological ordering of all project activities and
                      decisions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-calendar-days text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">
                      Date-Based Ordering
                    </h4>
                    <p className="text-sm text-medium-gray">
                      Temporal organization with precise timestamp attribution
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-camera text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">
                      Visual Documentation
                    </h4>
                    <p className="text-sm text-medium-gray">
                      Rich media capture of project states and deliverables
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-file-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">
                      Context Descriptions
                    </h4>
                    <p className="text-sm text-medium-gray">
                      Detailed narratives explaining decisions and outcomes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 col-span-2">
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-code-branch text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">
                      Cause-and-Effect Relationships
                    </h4>
                    <p className="text-sm text-medium-gray">
                      Analytical mapping of decision impacts and consequence
                      chains throughout project lifecycle
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-xl p-6 border border-cool-gray">
                <p className="text-medium-gray leading-relaxed">
                  <i className="fa-solid fa-info-circle text-deep-blue mr-2"></i>
                  <span className="font-semibold text-dark-gray">
                    Long-term Value:
                  </span>{" "}
                  Allows comprehensive project traceability and learning reuse,
                  building institutional knowledge that improves organizational
                  capability over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="financial-module" className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Financial Module Integration
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
              Financial Document Engine
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Automated financial reporting system that generates comprehensive
              accounting documents from project data.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div
              id="financial-balance-sheet"
              className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-balance-scale text-white text-2xl"></i>
                </div>
                <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Auto-Generated
                </span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Balance Sheet
              </h3>
              <p className="text-medium-gray mb-4">
                Comprehensive snapshot of assets, liabilities, and equity at any
                point in time
              </p>
              <div className="flex items-center text-sm text-medium-gray">
                <i className="fa-solid fa-file-pdf text-deep-blue mr-2"></i>
                <span>PDF Export Ready</span>
              </div>
            </div>
            <div
              id="financial-pl"
              className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-white text-2xl"></i>
                </div>
                <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Auto-Generated
                </span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Profit & Loss Statement
              </h3>
              <p className="text-medium-gray mb-4">
                Revenue, expenses, and net income analysis across reporting
                periods
              </p>
              <div className="flex items-center text-sm text-medium-gray">
                <i className="fa-solid fa-file-excel text-dark-cyan mr-2"></i>
                <span>Excel Export Ready</span>
              </div>
            </div>
            <div
              id="financial-cashflow"
              className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-hand-holding-usd text-white text-2xl"></i>
                </div>
                <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Auto-Generated
                </span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Cash Flow Statement
              </h3>
              <p className="text-medium-gray mb-4">
                Operating, investing, and financing activities tracking
              </p>
              <div className="flex items-center text-sm text-medium-gray">
                <i className="fa-solid fa-file-pdf text-deep-blue mr-2"></i>
                <span>PDF Export Ready</span>
              </div>
            </div>
            <div
              id="financial-retained"
              className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-piggy-bank text-white text-2xl"></i>
                </div>
                <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Auto-Generated
                </span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Retained Earnings
              </h3>
              <p className="text-medium-gray mb-4">
                Cumulative net income retained for reinvestment
              </p>
              <div className="flex items-center text-sm text-medium-gray">
                <i className="fa-solid fa-file-alt text-deep-blue mr-2"></i>
                <span>Document Ready</span>
              </div>
            </div>
            <div
              id="financial-ar"
              className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-receipt text-white text-2xl"></i>
                </div>
                <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Auto-Generated
                </span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Accounts Receivable Reports
              </h3>
              <p className="text-medium-gray mb-4">
                Outstanding invoices and payment tracking
              </p>
              <div className="flex items-center text-sm text-medium-gray">
                <i className="fa-solid fa-file-excel text-dark-cyan mr-2"></i>
                <span>Excel Export Ready</span>
              </div>
            </div>
            <div
              id="financial-projections"
              className="bg-white rounded-xl p-8 border border-cool-gray hover:border-dark-cyan hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-crystal-ball text-white text-2xl"></i>
                </div>
                <span className="bg-pale-blue text-deep-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Auto-Generated
                </span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Business Financial Projections
              </h3>
              <p className="text-medium-gray mb-4">
                Forward-looking financial forecasts and scenario modeling
              </p>
              <div className="flex items-center text-sm text-medium-gray">
                <i className="fa-solid fa-file-powerpoint text-deep-blue mr-2"></i>
                <span>Presentation Ready</span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-pale-blue rounded-xl p-6 border border-cool-gray">
            <div className="flex items-start">
              <i className="fa-solid fa-magic text-deep-blue text-xl mr-4 mt-1"></i>
              <p className="text-medium-gray leading-relaxed">
                <span className="font-semibold text-dark-gray">
                  Automated Intelligence:
                </span>{" "}
                All financial documents are generated automatically from
                structured project data, eliminating manual accounting work and
                ensuring real-time accuracy across all reporting periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="systems-integration" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Systems Integration
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
              Project Module System Connections
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Comprehensive integration architecture connecting the Project
              Module with all TUC ecosystem components.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center mb-16">
              <div
                id="hub-center"
                className="bg-gradient-to-br from-deep-blue to-dark-cyan rounded-2xl p-8 shadow-2xl relative z-10"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-layer-group text-deep-blue text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Project Module
                  </h3>
                  <p className="text-white text-opacity-90 text-sm">
                    Central Hub
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div
                id="integration-suggestion"
                className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-lightbulb text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Suggestion Box
                </h4>
                <p className="text-sm text-medium-gray mb-3">Idea Intake</p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                  <span>Bidirectional Sync</span>
                </div>
              </div>
              <div
                id="integration-openitem"
                className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-clipboard-list text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Openitem System
                </h4>
                <p className="text-sm text-medium-gray mb-3">
                  Task & Priority Engine
                </p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                  <span>Real-time Updates</span>
                </div>
              </div>
              <div
                id="integration-profile"
                className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-user-circle text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Profile Module
                </h4>
                <p className="text-sm text-medium-gray mb-3">
                  User Inputs & Identity
                </p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-right text-dark-cyan mr-2"></i>
                  <span>Data Source</span>
                </div>
              </div>
              <div
                id="integration-top10"
                className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-star text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Top10 System
                </h4>
                <p className="text-sm text-medium-gray mb-3">
                  Visibility Layer
                </p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-left text-dark-cyan mr-2"></i>
                  <span>Display Feed</span>
                </div>
              </div>
              <div
                id="integration-financial"
                className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-dollar-sign text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Financial System
                </h4>
                <p className="text-sm text-medium-gray mb-3">
                  Accounting Engine
                </p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                  <span>Financial Data</span>
                </div>
              </div>
              <div
                id="integration-legend"
                className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-book text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Legend System
                </h4>
                <p className="text-sm text-medium-gray mb-3">
                  Document Storage
                </p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-left text-dark-cyan mr-2"></i>
                  <span>Archive Output</span>
                </div>
              </div>
              <div
                id="integration-proscons"
                className="bg-white rounded-xl p-6 border-2 border-deep-blue hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-balance-scale-right text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Pros/Cons Engine
                </h4>
                <p className="text-sm text-medium-gray mb-3">
                  Comparison System
                </p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-right-arrow-left text-dark-cyan mr-2"></i>
                  <span>Decision Support</span>
                </div>
              </div>
              <div
                id="integration-analytics"
                className="bg-white rounded-xl p-6 border-2 border-dark-cyan hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-chart-bar text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">
                  Analytics Dashboard
                </h4>
                <p className="text-sm text-medium-gray mb-3">
                  Insights & Metrics
                </p>
                <div className="flex items-center text-xs text-medium-gray">
                  <i className="fa-solid fa-arrow-left text-dark-cyan mr-2"></i>
                  <span>Data Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer footerData={footerData} />
    </>
  );
};

export default ProjectLandingPage;
