import { footerData } from "../../../data/footerData";
import Footer from "../../../layouts/Footer";

const ProjectLandingPage = () => {
  return (
    <>
      <section id="hero-section" className="bg-white border-b border-cool-gray">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-light-gray px-4 py-2 rounded-full mb-6">
              <i className="fa-solid fa-layer-group text-deep-blue text-sm"></i>
              <span className="text-sm font-medium text-medium-gray">
                Project Intelligence System
              </span>
            </div>
            <h1 className="text-6xl font-bold text-dark-gray mb-6 leading-tight">
              TUC Project Module
            </h1>
            <p className="text-2xl text-medium-gray mb-8 font-light">
              Structured Execution Layer for Collective Production
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-medium-gray leading-relaxed mb-6">
                The Project Module is where ideas reach full operational form.
                It transforms structured input fields into live projects, master
                documents, execution timelines, and collaborative production
                systems.
              </p>
              <div className="bg-pale-blue border-l-4 border-dark-cyan px-6 py-4 rounded-r-lg">
                <p className="text-base text-dark-gray font-medium italic">
                  Not task management — a project intelligence engine powered by
                  structured inputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="system-entry-point" className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-16">
            <div id="entry-point-content">
              <div className="mb-6">
                <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
                  System Entry Point
                </span>
              </div>
              <h2 className="text-4xl font-bold text-dark-gray mb-6">
                Where Projects Begin
              </h2>
              <div className="prose prose-lg">
                <p className="text-lg text-medium-gray leading-relaxed mb-4">
                  At TUC everything starts with the Profile, but real impact
                  happens inside Projects. Projects are created from ideas,
                  passions, skills, needs, and available resources pulled from
                  Profile, Suggestion Box, and Openitem systems.
                </p>
                <p className="text-base text-medium-gray leading-relaxed">
                  Each project represents a convergence point where individual
                  capabilities meet collective opportunity, transforming
                  abstract potential into concrete execution frameworks.
                </p>
              </div>
            </div>
            <div
              id="entry-point-visual"
              className="bg-white rounded-xl border border-cool-gray p-8"
            >
              <div className="flex flex-col space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 bg-light-gray px-5 py-3 rounded-lg flex-1">
                    <i className="fa-solid fa-user-circle text-deep-blue text-xl"></i>
                    <span className="font-medium text-dark-gray">Profile</span>
                  </div>
                  <i className="fa-solid fa-arrow-right text-medium-gray mx-4"></i>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 bg-light-gray px-5 py-3 rounded-lg flex-1">
                    <i className="fa-solid fa-lightbulb text-deep-blue text-xl"></i>
                    <span className="font-medium text-dark-gray">
                      Suggestion Box
                    </span>
                  </div>
                  <i className="fa-solid fa-arrow-right text-medium-gray mx-4"></i>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 bg-light-gray px-5 py-3 rounded-lg flex-1">
                    <i className="fa-solid fa-clipboard-list text-deep-blue text-xl"></i>
                    <span className="font-medium text-dark-gray">
                      Openitem System
                    </span>
                  </div>
                  <i className="fa-solid fa-arrow-right text-medium-gray mx-4"></i>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-3 bg-deep-blue px-6 py-4 rounded-lg shadow-lg">
                    <i className="fa-solid fa-layer-group text-white text-xl"></i>
                    <span className="font-bold text-white">Project Module</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="core-purpose" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Core Purpose
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-6">
              What The Project Module Is Built To Do
            </h2>
          </div>
          <div className="bg-pale-blue rounded-xl p-10 border border-cool-gray">
            <p className="text-lg text-medium-gray mb-8 leading-relaxed">
              The Project Module is designed to create systematic advantages in
              how collaborative work is structured, executed, and preserved:
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-ban text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Prevent users from starting from scratch
                  </h3>
                  <p className="text-medium-gray">
                    Leverage existing templates, structures, and knowledge bases
                    to accelerate project initiation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-copy text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Reduce duplication of effort
                  </h3>
                  <p className="text-medium-gray">
                    Identify and reuse existing solutions, preventing redundant
                    work across teams.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-sitemap text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Increase organizational structure
                  </h3>
                  <p className="text-medium-gray">
                    Provide consistent frameworks that scale from individual
                    projects to enterprise portfolios.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-dark-cyan rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-users text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Enable large-scale coordinated collaboration
                  </h3>
                  <p className="text-medium-gray">
                    Create infrastructure for thousands of contributors to work
                    cohesively on complex initiatives.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-database text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Aggregate past project knowledge for future reuse
                  </h3>
                  <p className="text-medium-gray">
                    Build organizational intelligence that compounds over time,
                    making each project smarter than the last.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-cool-gray">
              <p className="text-lg text-dark-gray font-medium text-center">
                It represents a real-world project environment inside TUC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="project-input-engine" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Project Input Engine
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
              Core Project Input Fields
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Comprehensive data collection architecture that captures every
              dimension of project planning and execution.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div
              id="input-card-identity"
              className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-deep-blue rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-id-card text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Project Identity
              </h3>
              <ul className="space-y-2 text-medium-gray">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Project Image</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Idea (bullet points)</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Purpose (bullet points)</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Mission (paragraph)</span>
                </li>
              </ul>
            </div>
            <div
              id="input-card-collaboration"
              className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-handshake text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Collaboration Layer
              </h3>
              <ul className="space-y-2 text-medium-gray">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Collaborators</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Partners</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Customers</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Team Roles</span>
                </li>
              </ul>
            </div>
            <div
              id="input-card-reference"
              className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-deep-blue rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-link text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Reference Layer
              </h3>
              <ul className="space-y-2 text-medium-gray">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>QuickLinks (Figma)</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Documents</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Media Assets</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>External Resources</span>
                </li>
              </ul>
            </div>
            <div
              id="input-card-operational"
              className="bg-pale-blue rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-gears text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3">
                Operational Data
              </h3>
              <ul className="space-y-2 text-medium-gray">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Assumptions</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Needs & Requirements</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Risks & Barriers</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle text-xs mt-1.5 mr-2 text-dark-cyan"></i>
                  <span>Policies & Standards</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-light-gray rounded-xl p-6 text-center">
            <p className="text-medium-gray">
              <i className="fa-solid fa-info-circle text-dark-cyan mr-2"></i>
              All fields remain editable and configurable per project, allowing
              maximum flexibility while maintaining structural consistency.
            </p>
          </div>
        </div>
      </section>

      <section id="structured-input-expansion" className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Structured Input Expansion
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
              Advanced Project Data Fields
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl">
              Extended data collection framework that captures strategic,
              analytical, and resource dimensions of project planning.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div
              id="expansion-card-swot"
              className="bg-white rounded-xl p-8 border border-cool-gray"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fa-solid fa-chart-line text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">
                  SWOT Analysis
                </h3>
              </div>
              <p className="text-medium-gray mb-4">
                Comprehensive strategic assessment framework capturing
                strengths, weaknesses, opportunities, and threats.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-pale-blue px-3 py-2 rounded">Strengths</div>
                <div className="bg-pale-blue px-3 py-2 rounded">Weaknesses</div>
                <div className="bg-pale-blue px-3 py-2 rounded">
                  Opportunities
                </div>
                <div className="bg-pale-blue px-3 py-2 rounded">Threats</div>
              </div>
            </div>
            <div
              id="expansion-card-resources"
              className="bg-white rounded-xl p-8 border border-cool-gray"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fa-solid fa-box-open text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">
                  Available Resources
                </h3>
              </div>
              <p className="text-medium-gray mb-4">
                Detailed inventory of human capital, financial assets,
                technology infrastructure, and material resources.
              </p>
              <ul className="space-y-2 text-sm text-medium-gray">
                <li className="flex items-center">
                  <i className="fa-solid fa-check text-dark-cyan mr-2"></i>Human
                  Resources
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check text-dark-cyan mr-2"></i>
                  Financial Assets
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check text-dark-cyan mr-2"></i>
                  Technology Stack
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check text-dark-cyan mr-2"></i>
                  Material Inventory
                </li>
              </ul>
            </div>
            <div
              id="expansion-card-inventory"
              className="bg-white rounded-xl p-8 border border-cool-gray"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fa-solid fa-warehouse text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">
                  Inventory System
                </h3>
              </div>
              <p className="text-medium-gray mb-4">
                Real-time tracking of project assets, deliverables, and resource
                allocation across all project phases.
              </p>
              <div className="flex items-center justify-between text-sm mt-4">
                <span className="text-medium-gray">Asset Tracking</span>
                <span className="bg-dark-cyan text-white px-2 py-1 rounded text-xs">
                  Active
                </span>
              </div>
            </div>
            <div
              id="expansion-card-vision"
              className="bg-white rounded-xl p-8 border border-cool-gray"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fa-solid fa-eye text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">
                  Vision & Mission Statements
                </h3>
              </div>
              <p className="text-medium-gray mb-4">
                Articulated long-term aspirations and core purpose that guide
                strategic decision-making throughout project lifecycle.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <i className="fa-solid fa-quote-left text-dark-cyan mr-2 mt-1"></i>
                  <span className="text-medium-gray">Vision Statement</span>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-quote-left text-white mr-2 mt-1"></i>
                  <span className="text-medium-gray">Mission Statement</span>
                </div>
              </div>
            </div>
            <div
              id="expansion-card-goals"
              className="bg-white rounded-xl p-8 border border-cool-gray"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fa-solid fa-bullseye text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">
                  Goals & Objectives
                </h3>
              </div>
              <p className="text-medium-gray mb-4">
                Measurable targets and specific outcomes that define project
                success criteria and milestone achievements.
              </p>
              <div className="bg-pale-blue rounded-lg p-3 text-sm text-medium-gray">
                SMART Goals Framework
              </div>
            </div>
            <div
              id="expansion-card-openitems"
              className="bg-white rounded-xl p-8 border border-cool-gray"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fa-solid fa-list-check text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">
                  Openitems Mapping
                </h3>
              </div>
              <p className="text-medium-gray mb-4">
                Integration with task management system for granular execution
                tracking and priority management.
              </p>
              <div className="flex items-center space-x-2 text-sm mt-4">
                <span className="bg-deep-blue text-white px-3 py-1 rounded-full">
                  High Priority
                </span>
                <span className="bg-light-gray text-medium-gray px-3 py-1 rounded-full">
                  Medium
                </span>
              </div>
            </div>
          </div>
          <div className="bg-deep-grey bg-opacity-5 border border-deep-blue border-opacity-20 rounded-xl p-6">
            <div className="flex items-start">
              <i className="fa-solid fa-lightbulb text-deep-blue text-xl mr-4 mt-1"></i>
              <p className="text-medium-gray leading-relaxed">
                <span className="font-semibold text-dark-gray">
                  System Intelligence:
                </span>{" "}
                These fields populate downstream project logic and reporting
                systems, creating an interconnected knowledge graph that powers
                automated documentation, analytics dashboards, and predictive
                project insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="document-generation-flow" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Document Generation Flow
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
              How Input Fields Become Master Documents
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Automated transformation pipeline that converts structured project
              data into professional business documentation.
            </p>
          </div>
          <div className="flex items-center justify-between space-x-6">
            <div
              id="flow-step-1"
              className="flex-1 bg-pale-blue rounded-xl p-8 border-2 border-deep-blue"
            >
              <div className="w-16 h-16 bg-deep-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3 text-center">
                Structured Input Fields
              </h3>
              <p className="text-medium-gray text-center leading-relaxed">
                Project data collected through standardized forms with
                validation rules and data type constraints
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                  Forms
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                  Validation
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <i className="fa-solid fa-arrow-right text-4xl text-dark-cyan"></i>
            </div>
            <div
              id="flow-step-2"
              className="flex-1 bg-pale-blue rounded-xl p-8 border-2 border-dark-cyan"
            >
              <div className="w-16 h-16 bg-dark-cyan rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3 text-center">
                Field Occupancy Logic
              </h3>
              <p className="text-medium-gray text-center leading-relaxed">
                Active fields are parsed and categorized based on completion
                status and relevance scoring
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                  Parser
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                  Categorization
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <i className="fa-solid fa-arrow-right text-4xl text-dark-cyan"></i>
            </div>
            <div
              id="flow-step-3"
              className="flex-1 bg-pale-blue rounded-xl p-8 border-2 border-deep-blue"
            >
              <div className="w-16 h-16 bg-deep-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-3 text-center">
                Document Builder Engine
              </h3>
              <p className="text-medium-gray text-center leading-relaxed">
                Auto-compiles formatted outputs using template engines and
                dynamic content generation
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                  Templates
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs text-medium-gray">
                  Compiler
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <i className="fa-solid fa-arrow-right text-4xl text-dark-cyan"></i>
            </div>
            <div
              id="flow-step-4"
              className="flex-1 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl p-8 border-2 border-deep-blue"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto">
                <i className="fa-solid fa-file-contract text-deep-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Master Documents Output
              </h3>
              <p className="text-white text-opacity-90 text-center leading-relaxed">
                Business-ready documentation generated in multiple formats with
                professional styling
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="bg-white bg-opacity-20 text-black px-3 py-1 rounded-full text-xs">
                  PDF
                </span>
                <span className="bg-white bg-opacity-20 text-black px-3 py-1 rounded-full text-xs">
                  DOCX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="master-document-outputs" className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Master Document Outputs
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
              Generated Project Documents
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Comprehensive suite of professional business documents
              automatically generated from project input data.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div
              id="doc-executive-summary"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-file-lines text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Executive Summary
              </h4>
            </div>
            <div
              id="doc-business-plan"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-briefcase text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Business Plan
              </h4>
            </div>
            <div
              id="doc-budget"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-calculator text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">Budget</h4>
            </div>
            <div
              id="doc-bmc"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-diagram-project text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Business Model Canvas
              </h4>
            </div>
            <div
              id="doc-marketing-plan"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-bullhorn text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Marketing Plan
              </h4>
            </div>
            <div
              id="doc-financial-plan"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-chart-pie text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Financial Plan
              </h4>
            </div>
            <div
              id="doc-operations-plan"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-gears text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Operations Plan
              </h4>
            </div>
            <div
              id="doc-devops-plan"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-code-branch text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                DevOps Plan
              </h4>
            </div>
            <div
              id="doc-proposal"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-file-contract text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">Proposal</h4>
            </div>
            <div
              id="doc-rfp"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-file-invoice text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                RFP / RFQ
              </h4>
            </div>
            <div
              id="doc-whitepaper"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-book text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                White Paper
              </h4>
            </div>
            <div
              id="doc-annual-report"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-calendar-check text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Annual Report
              </h4>
            </div>
            <div
              id="doc-smart-contract"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-file-code text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Smart Contract
              </h4>
            </div>
            <div
              id="doc-press-release"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-newspaper text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Press Release
              </h4>
            </div>
            <div
              id="doc-project-proposal"
              className="bg-white rounded-lg p-5 border border-cool-gray hover:border-deep-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-pale-blue group-hover:bg-deep-blue rounded-lg flex items-center justify-center mb-3 transition-colors">
                <i className="fa-solid fa-rocket text-deep-blue group-hover:text-white text-lg transition-colors"></i>
              </div>
              <h4 className="font-semibold text-dark-gray text-sm">
                Project Proposal
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline-system" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div id="timeline-content">
              <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
                Timeline System
              </span>
              <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-6">
                Timeline / Schedule / Calendar Engine
              </h2>
              <div className="prose prose-lg">
                <p className="text-lg text-medium-gray leading-relaxed mb-6">
                  Projects use timestamp tagging to automatically populate
                  multiple temporal visualization formats, creating a
                  comprehensive understanding of project chronology and
                  execution sequence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-timeline text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-1">
                        Timeline View
                      </h4>
                      <p className="text-medium-gray text-sm">
                        Sequential visualization of project events and
                        milestones in chronological order
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-dark-cyan bg-opacity-10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-clock text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-1">
                        Schedule View
                      </h4>
                      <p className="text-medium-gray text-sm">
                        Resource allocation and task scheduling across project
                        phases
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-deep-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-calendar-days text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-1">
                        Calendar Integrations
                      </h4>
                      <p className="text-medium-gray text-sm">
                        Synchronization with external calendar systems for
                        unified scheduling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="timeline-visual"
              className="bg-pale-blue rounded-xl p-8 border border-cool-gray"
            >
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-deep-blue"></div>
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-deep-blue rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                    <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-dark-gray">
                          Project Kickoff
                        </span>
                        <span className="text-xs text-medium-gray">
                          Jan 15, 2024
                        </span>
                      </div>
                      <p className="text-sm text-medium-gray">
                        Initial planning and team assembly
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-dark-cyan rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                    <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-dark-gray">
                          Discovery Phase
                        </span>
                        <span className="text-xs text-medium-gray">
                          Feb 1, 2024
                        </span>
                      </div>
                      <p className="text-sm text-medium-gray">
                        Research and requirements gathering
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-deep-blue rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                    <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-dark-gray">
                          Development Sprint 1
                        </span>
                        <span className="text-xs text-medium-gray">
                          Mar 1, 2024
                        </span>
                      </div>
                      <p className="text-sm text-medium-gray">
                        Core functionality implementation
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-light-gray rounded-full transform -translate-x-1/2 border-4 border-pale-blue"></div>
                    <div className="ml-16 bg-white rounded-lg p-4 flex-1 shadow-sm border-2 border-dashed border-cool-gray">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-medium-gray">
                          Launch
                        </span>
                        <span className="text-xs text-medium-gray">
                          Jun 1, 2024
                        </span>
                      </div>
                      <p className="text-sm text-medium-gray">
                        Public release and deployment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline-components" className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-dark-cyan uppercase tracking-wider">
              Timeline Components
            </span>
            <h2 className="text-4xl font-bold text-dark-gray mt-4 mb-4">
              Timeline Intelligence Components
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              Sophisticated temporal tracking elements that create
              multi-dimensional project chronology visualization.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div
              id="component-dates"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-calendar-alt text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Start and End Dates
              </h3>
              <p className="text-sm text-medium-gray">
                Precise temporal boundaries for project phases and deliverables
              </p>
            </div>
            <div
              id="component-milestones"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-flag-checkered text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Milestones
              </h3>
              <p className="text-sm text-medium-gray">
                Critical achievement markers that define project progression
              </p>
            </div>
            <div
              id="component-tasks"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-tasks text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Major Tasks
              </h3>
              <p className="text-sm text-medium-gray">
                Key work packages with defined scopes and deliverables
              </p>
            </div>
            <div
              id="component-duration"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-hourglass-half text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Duration Bars
              </h3>
              <p className="text-sm text-medium-gray">
                Visual representation of time allocation across activities
              </p>
            </div>
            <div
              id="component-dependencies"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-project-diagram text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Task Dependencies
              </h3>
              <p className="text-sm text-medium-gray">
                Relationship mapping between sequential and parallel work
                streams
              </p>
            </div>
            <div
              id="component-assignments"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-user-check text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Team Assignments
              </h3>
              <p className="text-sm text-medium-gray">
                Resource allocation and responsibility distribution tracking
              </p>
            </div>
            <div
              id="component-gantt"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-chart-gantt text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Visual Gantt-style Rendering
              </h3>
              <p className="text-sm text-medium-gray">
                Industry-standard timeline visualization with parallel track
                display
              </p>
            </div>
            <div
              id="component-progress"
              className="bg-white rounded-xl p-6 border border-cool-gray hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-blue to-dark-cyan rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">
                Progress Tracking
              </h3>
              <p className="text-sm text-medium-gray">
                Real-time completion percentage and velocity metrics
              </p>
            </div>
          </div>
        </div>
      </section>

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
