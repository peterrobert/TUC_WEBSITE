import peterImage from "../assets/peter.jpg";
import jeffImage  from "../assets/jeff.jpeg";


const landingPageData = {
  "heroSection": {
    "title": "TUC – The Ultimate Collaboration",
    "subtitle": "A system for turning ideas into real outcomes—without losing clarity, credit, or integrity",
    "description": "We don’t lack good ideas. We lack a reliable way to coordinate them into real impact. TUC exists because meaningful work often disappears between intention and execution. We are building a collaboration system that protects contributors, makes progress visible, and helps useful work find its way into the world.",
    "buttons": [
      { name: "Explore the System", class: "px-8 py-3 border-2 border-deep-blue text-deep-blue cursor-pointer rounded-md hover:bg-deep-blue hover:text-white transition-colors font-medium text-lg" }
    ]
  },
  "whatIsTucSection": {
    "title": "What TUC Is Not",
    "introCards": [
      {
        "icon": "fa-mobile-screen",
        "title": "Not an App",
        "description": " TUC isn’t a product you download or a tool you install. It’s a system you participate in—designed to help effort, ideas, and resources find their way into real use."
      },
      {
        "icon": "fa-building",
        "title": "Not a Traditional Company",
        "description": "TUC isn’t structured around profit extraction or short-term incentives. It’s organized around principles of access, coordination, and long-term value creation."
      },
      {
        "icon": "fa-box",
        "title": "Not a Product",
        "description": " TUC isn’t a feature set or a thing to be sold. It’s shared infrastructure for collaboration. When products or services are involved, they exist to increase access, reduce waste, and create opportunity—not to exploit attention or unpaid labor."
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
    "title": "The Problems TUC Exists to Solve",
    "problems": [
      {
        "title": "Fragmentation",
        "description": "Ideas, work, and resources live across disconnected tools, conversations, and organizations that rarely link into action."
      },
      {
        "title": "Lost Follow-Through",
        "description": " Good intentions fade between discussion and execution because ownership, next steps, and progress aren’t clear."
      },
      {
        "title": "Underutilized People and Skills",
        "description": "Willing contributors—especially outside formal systems—are overlooked, unseen, or unable to plug in meaningfully."
      },
      {
        "title": "Invisible Progress",
        "description": "Work that is happening isn’t visible, making it hard to build momentum, trust, or continuity."
      },
      {
        "title": "Duplicated Effort",
        "description": "The same problems are worked on repeatedly because prior learning and progress aren’t carried forward."
      },
      
      {
        "title": "Access Gaps",
        "description": "Opportunity often depends on proximity, privilege, or insider knowledge instead of willingness to contribute."
      } 
    ],
    "combined_problems": {
    "title": "Lost Potential",
    "description": [
      "Because of these problems, enormous value never becomes real.",
      "Ideas stall.",
      "People disengage.",
      "Communities remain under-resourced.",
      "Solutions that work once fail to spread.",
      "",
      "What is wasted:",
      "Human creativity",
      "Time and effort",
      "Local knowledge",
      "Trust and motivation",
      "Opportunities for collective growth",
      "",
      "Why it matters:",
      "Lost potential is not abstract. It shapes livelihoods, progress, and possibility.",
      "TUC exists to reduce this waste by making coordination reliable and reusable."
    ]
    },
    "quote": {
      "text": "Creativity is abundant. Coordination is scarce. We don't lack good ideas—we lack systems that help those ideas find the right people, resources, and momentum."
    },
    "mission": {
      "title": "TUC’s Mission Statement",
      "description": "TUC’s mission is to increase access to opportunity by connecting underutilized people, ideas, and resources, so those willing to contribute can turn good ideas into real outcomes.",
      "points": [
       {
        "title": "What This Is",
        "description": "TUC is a way for people who want to help to find where their effort matters—by making ideas, needs, and contributions visible without hierarchy or control.\n\nIt creates shared visibility across people, projects, and resources so useful work doesn’t get lost, duplicated, or stalled.\n\nBy lowering barriers to participation and clarifying where help is needed, TUC helps individual effort turn into collective progress.",
       },
        {
        "title": "What Kind of Site This Is",
        "description": "This website is not a feed, a pitch, or a social network.\n\nThis website is a working space for understanding TUC—making its purpose visible, identifying real problems, surfacing underutilized potential, and coordinating practical collaboration.\n\nTUC has been intentionally hyper-focused for years. This website is the first public-facing step out of stealth—designed to share the core ideas and structure while continuing to build carefully and stay largely under the radar.\n\nIt’s meant to help people orient, think clearly, and see where meaningful contribution is possible—without pressure, performance, or noise."

       }
      ]
    }
  },
  
  "whatExistsSection": {
    "title": "What Already Exists",
    "subtitle": "These are the foundational components we've built so far. Each represents a piece of the larger system, actively being developed and refined.",
    "components": [
        {
        "name": "Top10 Module",
        "status": "MVP",
        "statusType": "active",
        "description": "A framework for surfacing the most valuable ideas, insights, or contributions over time.",
        "progressLabel": "In Design Phase",
        "icon": "fa-circle-dot",
        "iconColor": "medium-gray",
         "url": "/systems/top10"
      },
      {
        "name": "Suggestion Box Module",
        "status": "MVP",
        "statusType": "active",
        "description": "A working foundation for collecting, organizing, and evolving ideas.",
        "progressLabel": "Active Development",
        "icon": "fa-circle-check",
        "iconColor": "dark-cyan",
        "url": "/systems/suggestionBox"
      },
      {
        "name": "Project Module",
        "status": "MVP",
        "statusType": "active",
        "description": "The Project Module is where ideas reach full operational form. It transforms structured input fields into live projects, master documents, execution timelines, and collaborative production systems.",
        "progressLabel": "In Design Phase",
        "icon": "fa-circle-dot",
        "iconColor": "medium-gray",
         "url": "/systems/project"
      },
      {
        "name": "Smart Task Manager Module",
        "status": "POC",
        "statusType": "building",
        "description": "A system for breaking large problems into manageable, trackable actions.",
        "progressLabel": "Early Stage",
        "icon": "fa-circle-half-stroke",
        "iconColor": "deep-blue",
         "url": "/"
      },
      {
        "name": "AlphaBeta Design Module",
        "status": "Research",
        "statusType": "research",
        "description": "A model for early contributors who help shape the system while learning from it.",
        "progressLabel": "Exploration Phase",
        "icon": "fa-flask",
        "iconColor": "medium-gray",
         "url": "/"
      },
      {
        "name": "CloserLook Module",
        "status": "Research",
        "statusType": "research",
        "description": "A way of explaining complex systems clearly, layer by layer, without oversimplifying.\nEverything else is actively being built.\nThis is a living system, not a finished product.",
        "progressLabel": "Exploration Phase",
        "icon": "fa-flask",
        "iconColor": "medium-gray",
        "url": "/"
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
  "sectionSubtitle": "TUC is being built deliberately by a small core team, with input from a much larger group of contributors over time. In its various forms, TUC has been shaped by hundreds of people and nearly a thousand AlphaBeta contributors some knowingly, some unknowingly who engaged with its ideas, tools, and early experiments. This long, quiet development period was intentional.",
  "teamMembers": [
    {
      "name": "Jeff",
      "role": "Founder / Architect",
      "image": `${jeffImage}`,
      "description": "Responsible for system design, strategic direction, and ensuring TUC remains aligned with its core principles. Jeff focuses on the big picture—how the pieces fit together and what problems we're actually solving.",
      "email": "jeff@tuc.system"
    },
    {
      "name": "Peter",
      "role": "DevOps / Platform Builder",
      "image":`${peterImage}`,
      "description": "Handles infrastructure, deployment, and technical implementation. Peter translates system concepts into working code and maintains the platform's reliability and performance.",
      "email": "peter@tuc.system"
    }
  ],
  "cultureSection": {
    "title": "A Culture of Optional Contribution",
    "paragraphs": [
     "TUC remained in stealth mode to manage bandwidth, learn from real use, and design systems that could scale without corruption, protect its core identity, and preserve WhoWeAre: TUC’s Vision, Mission, Core Values, and Principles.",
    "The system is designed to respect real human capacity, avoid pressure-driven participation, and support long-term progress instead of burnout. Contribution is optional. The work moves forward at a pace people can actually sustain."
    ]
  }
  },
  "whatMakesDifferentData":{
    "sectionTitle": "What Makes TUC Different",

  "sectionSubtitle": "TUC is guided by principles of access, transparency, non-extraction, and long-term sustainability—embedded directly into how the system is designed and operated.\n\nThese aren’t aspirations or marketing copy. They are architectural decisions baked into how the system works—designed to address the structural failures common in platforms, startups, nonprofits, and marketplaces.",

  "items": [
    {
        "title": "No Extraction",
      "description":
        "Value flows to contributors, not investors. The system is designed to support creators, not extract from them.",
    },
    {
        "title": "No Fake Scale",
      "description":
        "We grow at the pace our capacity allows. No artificial growth targets or pressure to scale before we're ready.",
    },
    {
        "title": "Transparency by Default",
      "description":
        "Decisions, changes, and reasoning are documented and visible. No hidden agendas or opaque processes.",
    },
    {
        "title": "Remixability",
      "description":
        "Projects and components can be adapted and reused. We're building infrastructure, not walled gardens.",
    },
    {
        "title": "Measurable Impact",
      "description":
        "Success is defined by real outcomes, not vanity metrics or user counts.",
    },
    {
        "title": "Long-term Thinking",
      "description":
        "Built for decades, not quarters. Decisions prioritize sustainability over short-term gains.",
    },
  ],

  "highlightTitle": "Anti-Corruption by Design",

  "highlightDescription":
    "These principles aren't enforced through goodwill or policy documents. They're embedded in the system's architecture. You can't extract value you didn't create because attribution is tracked. You can't hide decisions because transparency is the default. You can't scale irresponsibly because the system requires genuine capacity. The structure prevents corruption, not just discourages it.",
  },
  "whatMakesPossibleData": {
    "section_title": "What TUC Makes Possible",

  "section_subtitle":
    "When coordination friction decreases and trust increases, new patterns of collaboration become viable.",

  "items": [
    {
      "title": "Aggregate Ideas",
      "description":
        "Collect thinking from across organizations, disciplines, and contexts. Surface patterns and connections that would otherwise remain invisible.",
      "icon": "fa-layer-group",
      "icon_color": "text-deep-blue",
    },
    {
      "title": "Develop Projects",
      "description":
        "Move from concept to execution with clear pathways, transparent progress, and proper attribution for all contributors.",
      "icon": "fa-rocket",
      "icon_color": "text-deep-blue",
    },
    {
      "title": "Distribute Opportunity",
      "description":
        "Connect people with projects that match their skills and interests. Make contribution accessible regardless of organizational affiliation.",
      "icon": "fa-hands-helping",
      "icon_color": "text-deep-blue",
    },
    {
      "title": "Promote Valuable Work",
      "description":
        "Ensure quality contributions get visibility. Recognition flows to those who create value, not just those who control platforms.",
      "icon": "fa-bullhorn",
      "icon_color": "text-dark-cyan",
    },
    {
      "title": "Simplify Collaboration",
      "description":
        "Reduce coordination overhead. Clear structures and transparent processes make it easier to work together effectively.",
      "icon": "fa-puzzle-piece",
      "icon_color": "text-dark-cyan",
    },
    {
      "title": "Build Resilience",
      "description":
        "Create systems that can adapt and survive. Distributed collaboration is more robust than centralized control.",
      "icon": "fa-shield-halved",
      "icon_color": "text-dark-cyan",
    },
  ],
  "highlight_title": "Enable Meaningful Change",
  "highlight_description":
    "When good ideas can find resources, when contributors receive credit, and when coordination costs decrease, meaningful change becomes more achievable. Not guaranteed, but more possible than before.",
  "highlight_icon": "fa-seedling",
  "highlight_icon_color": "text-dark-cyan",
  }

}

export default landingPageData;
