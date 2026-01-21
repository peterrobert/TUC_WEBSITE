const landingPageData = {
  "heroSection": {
    "title": "TUC – The Ultimate Collaboration",
    "subtitle": "A system for helping people, ideas, and projects connect, grow, and become useful to the world.",
    "description": "TUC is built by a small team committed to integrity over speed. We're not racing toward funding milestones or chasing growth metrics. This is a patient effort to create something genuinely useful—a collaboration system designed to reduce friction, increase transparency, and help meaningful work find its way into the world.",
    "buttons": [
     { name: "Explore the System", class: "px-8 py-3 bg-deep-blue text-white rounded-md hover:bg-bright-blue transition-colors font-medium text-lg"},
      { name: "How It Works", class: "px-8 py-3 border-2 border-deep-blue text-deep-blue rounded-md hover:bg-deep-blue hover:text-white transition-colors font-medium text-lg" }
    ]
  },
  "whatIsTucSection": {
    "title": "What TUC Is",
    "introCards": [
      {
        "icon": "fa-mobile-screen",
        "title": "Not an App",
        "description": "TUC isn't a product you download. It's a system you participate in."
      },
      {
        "icon": "fa-building",
        "title": "Not a Traditional Company",
        "description": "We're structured around principles, not profit extraction."
      },
      {
        "icon": "fa-box",
        "title": "Not a Product",
        "description": "TUC is infrastructure for collaboration, not a feature set."
      }
    ],
    "mainContent": {
      "heading": "TUC is a Collaboration System",
      "description": "At its core, TUC is a framework designed to help ideas move from initial suggestion to meaningful execution. It provides structure without rigidity, visibility without surveillance, and credit without competition. The system is built to support people who want to contribute to something larger than themselves while maintaining autonomy and transparency.",
      "features": [
        {
          "icon": "fa-eye",
          "title": "Visibility",
          "description": "Every contribution is tracked and visible. No work disappears into organizational black holes."
        },
        {
          "icon": "fa-diagram-project",
          "title": "Structure",
          "description": "Clear pathways from idea to execution. Everyone knows where they stand and what comes next."
        },
        {
          "icon": "fa-award",
          "title": "Credit",
          "description": "Attribution is built into the system. Contributors receive recognition for their work."
        },
        {
          "icon": "fa-seedling",
          "title": "Sustainability",
          "description": "Built for long-term viability, not short-term extraction or growth at any cost."
        }
      ]
    }
  },
   "whyTucSection": {
    "title": "Why TUC Exists",
    "problems": [
      {
        "title": "The Coordination Problem",
        "description": "Talented people have ideas. Organizations need those ideas. But the gap between having an idea and seeing it implemented is vast. Most suggestions vanish into email threads, Slack channels, or meeting notes. Good thinking gets lost not because it lacks merit, but because there's no reliable system to capture, evaluate, and act on it."
      },
      {
        "title": "The Fragmentation Problem",
        "description": "Projects are scattered across tools, platforms, and organizations. Contributors work in isolation. Duplication is rampant. There's no shared infrastructure for collaboration that respects autonomy while enabling coordination. We're all reinventing wheels because we can't see what others have already built."
      },
      {
        "title": "The Trust Problem",
        "description": "People hesitate to contribute because they've been burned before. Their work was used without credit. Their ideas were ignored or stolen. Their time was wasted. Without transparent systems that protect contributors and track attribution, collaboration remains risky and extractive."
      }
    ],
    "quote": {
      "text": "Creativity is abundant. Coordination is scarce. We don't lack good ideas—we lack systems that help those ideas find the right people, resources, and momentum."
    },
    "mission": {
      "title": "Our Mission",
      "description": "TUC exists to solve these problems through transparent infrastructure. We're building a system where:",
      "points": [
        "Ideas are captured and evaluated systematically",
        "Projects can be discovered and remixed",
        "Contributors receive credit and visibility",
        "Coordination happens without centralized control",
        "Value flows to those who create it"
      ]
    }
  },
  
  "whatExistsSection": {
    "title": "What Already Exists",
    "subtitle": "These are the foundational components we've built so far. Each represents a piece of the larger system, actively being developed and refined.",
    "components": [
      {
        "name": "Suggestion Box",
        "status": "MVP",
        "statusType": "active",
        "description": "A structured system for capturing, organizing, and evaluating ideas from anyone in the community.",
        "progressLabel": "Active Development",
        "icon": "fa-circle-check",
        "iconColor": "dark-cyan"
      },
      {
        "name": "Feedback Box",
        "status": "Concept",
        "statusType": "concept",
        "description": "Transparent feedback collection that helps projects improve while maintaining contributor privacy.",
        "progressLabel": "In Design Phase",
        "icon": "fa-circle-dot",
        "iconColor": "medium-gray"
      },
      {
        "name": "Top10 System",
        "status": "Concept",
        "statusType": "concept",
        "description": "Prioritization framework that surfaces the most valuable ideas through community evaluation.",
        "progressLabel": "In Design Phase",
        "icon": "fa-circle-dot",
        "iconColor": "medium-gray"
      },
      {
        "name": "Smart Task Logic",
        "status": "Building",
        "statusType": "building",
        "description": "Intelligent task management that adapts to project needs and contributor availability.",
        "progressLabel": "Early Stage",
        "icon": "fa-circle-half-stroke",
        "iconColor": "deep-blue"
      },
      {
        "name": "AlphaBeta Design",
        "status": "Research",
        "statusType": "research",
        "description": "Design system and component library built for clarity, accessibility, and long-term maintenance.",
        "progressLabel": "Exploration Phase",
        "icon": "fa-flask",
        "iconColor": "medium-gray"
      },
      {
        "name": "CloserLook Framework",
        "status": "Research",
        "statusType": "research",
        "description": "Analytical tools for understanding project impact, contributor patterns, and system health.",
        "progressLabel": "Exploration Phase",
        "icon": "fa-flask",
        "iconColor": "medium-gray"
      }
    ],
    "footerNote": "The system is actively being built. These components will evolve as we learn what works and what doesn't. Transparency means showing the work in progress, not just the finished product."
  },
  "howTucWorksSection": {
    "header": {
    "title": "How TUC Works",
    "subtitle": "The TUC pipeline transforms ideas into impact through a series of transparent, structured stages. Each stage adds value, filters quality, and maintains attribution."
  },
  "pipelineFlow": {
    "primaryStages": [
      {
        "id": "ideas",
        "label": "Ideas",
        "icon": "fa-lightbulb",
        "color": "deep-blue"
      },
      {
        "id": "suggestions",
        "label": "Suggestions",
        "icon": "fa-inbox",
        "color": "deep-blue"
      },
      {
        "id": "top10",
        "label": "Top10",
        "icon": "fa-trophy",
        "color": "deep-blue"
      },
      {
        "id": "projects",
        "label": "Projects",
        "icon": "fa-folder-open",
        "color": "deep-blue"
      }
    ],
    "secondaryStages": [
      {
        "id": "tasks",
        "label": "Tasks",
        "icon": "fa-list-check",
        "color": "dark-cyan"
      },
      {
        "id": "results",
        "label": "Results",
        "icon": "fa-chart-line",
        "color": "dark-cyan"
      },
      {
        "id": "ripple-effects",
        "label": "Ripple Effects",
        "icon": "fa-water",
        "color": "dark-cyan"
      }
    ]
  },
  "stageDescriptions": [
    {
      "id": "ideas",
      "title": "Ideas",
      "description": "Raw thoughts, observations, and possibilities. Anyone can contribute.",
      "icon": "fa-lightbulb",
      "color": "deep-blue"
    },
    {
      "id": "suggestions",
      "title": "Suggestions",
      "description": "Structured proposals with context, rationale, and initial evaluation.",
      "icon": "fa-inbox",
      "color": "deep-blue"
    },
    {
      "id": "top10",
      "title": "Top10",
      "description": "Prioritized list of the most valuable suggestions ready for development.",
      "icon": "fa-trophy",
      "color": "deep-blue"
    },
    {
      "id": "projects",
      "title": "Projects",
      "description": "Active initiatives with teams, timelines, and clear objectives.",
      "icon": "fa-folder-open",
      "color": "deep-blue"
    },
    {
      "id": "tasks",
      "title": "Tasks",
      "description": "Specific actions that move projects forward, assigned and tracked.",
      "icon": "fa-list-check",
      "color": "dark-cyan"
    },
    {
      "id": "results",
      "title": "Results",
      "description": "Measurable outcomes that demonstrate value and impact.",
      "icon": "fa-chart-line",
      "color": "dark-cyan"
    },
    {
      "id": "ripple-effects",
      "title": "Ripple Effects",
      "description": "Secondary and tertiary impacts that extend beyond the original project, creating lasting value.",
      "icon": "fa-water",
      "color": "dark-cyan"
    }
  ],
  "closingStatement": "This pipeline reduces waste by ensuring ideas are evaluated before resources are committed. It moves work from intention to execution systematically, maintaining transparency and attribution at every stage."
  },
  "whoIsBuildingTucSection": {
  "sectionTitle": "Who Is Building TUC",
  "sectionSubtitle": "A small team working deliberately, focused on building something sustainable rather than something fast.",
  "teamMembers": [
    {
      "name": "Jeff",
      "role": "Founder / Architect",
      "image": "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      "description": "Responsible for system design, strategic direction, and ensuring TUC remains aligned with its core principles. Jeff focuses on the big picture—how the pieces fit together and what problems we're actually solving.",
      "email": "jeff@tuc.system"
    },
    {
      "name": "Peter",
      "role": "DevOps / Platform Builder",
      "image": "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      "description": "Handles infrastructure, deployment, and technical implementation. Peter translates system concepts into working code and maintains the platform's reliability and performance.",
      "email": "peter@tuc.system"
    }
  ],
  "cultureSection": {
    "title": "A Culture of Optional Contribution",
    "paragraphs": [
      "We're not building a startup culture. There's no pressure to hustle, no expectation of unpaid labor disguised as opportunity, and no artificial urgency. Contribution is genuinely optional. If you want to help, great. If you don't, that's fine too.",
      "The system is designed to work with whatever capacity people actually have—not the capacity we wish they had. This means slower progress, but it also means sustainable progress."
    ]
  }
  }



}

export default landingPageData;
