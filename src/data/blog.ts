export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  sections: {
    heading?: string
    paragraphs: string[]
  }[]
  cta: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'safety-shouldnt-be-the-slowest-system-on-your-job-site',
    title: "Safety Shouldn't Be the Slowest System on Your Job Site",
    excerpt:
      'On most construction projects, HSE data still moves at the pace of paper — the real risk is the lag between finding an issue and someone with authority seeing it.',
    publishedAt: '2026-08-01',
    image: {
      src: '/images/blog/safety-slowest-system-job-site.webp',
      alt: 'Construction worker reviewing a live project dashboard on a tablet at a job site at dusk',
      width: 1024,
      height: 768,
    },
    sections: [
      {
        paragraphs: [
          "On most construction projects, the systems that move fastest are the ones tracking money and schedule — because that's where the pressure is most visible. Safety and compliance data, by comparison, often moves at the pace of paper: an inspection form filled out on site, photographed or handed in, then re-entered into a spreadsheet or report days later. By the time an HSE finding reaches the people who can act on it, the conditions that caused it may have already changed — or worse, already caused an incident.",
          "That lag is the real risk in most HSE processes: not a lack of inspections, but a lack of speed between finding an issue and someone with authority seeing it.",
        ],
      },
      {
        heading: 'Treating safety as project data, not paperwork',
        paragraphs: [
          "Builtric's HSE management functionality is built into the same platform as procurement, finance, and project management — not bolted on as a separate compliance module. Inspections are conducted, findings are recorded, and reports are generated inside the same system that's already tracking work completion and cost, which means a safety finding isn't sitting in a different tool than the schedule and budget data it directly affects.",
          "That matters because safety issues are rarely isolated from the rest of a project. A flagged hazard on site often correlates with a compressed schedule, a subcontractor under pressure, or a procurement delay that's left a crew working around missing equipment. When HSE data lives in the same platform as project management, procurement, and finance, those connections are visible instead of being three separate reports that nobody cross-references until after something goes wrong.",
        ],
      },
      {
        heading: 'Inspection requests, submitted instantly',
        paragraphs: [
          'Builtric\'s project management functionality lets teams track work completion and submit inspection requests instantly, rather than routing them through a separate call, email, or paper form. Combined with HSE inspections and findings recorded in the same system, that means the loop between "work is ready for inspection" and "inspection has happened and been documented" is a single connected workflow, not three disconnected steps each with its own delay.',
        ],
      },
      {
        heading: 'Why approval chains matter as much as the data itself',
        paragraphs: [
          'Good safety and compliance data is only useful if it reaches the right person quickly — and on a large or multi-stakeholder project, "the right person" isn\'t always obvious. A finding on a subcontractor\'s scope of work might need to go to their supervisor first, then escalate to the project\'s HSE lead, then to the owner\'s representative, depending on severity.',
          "This is where Builtric's dynamic workflow engine matters for HSE specifically. Instead of forcing every finding through one rigid, generic approval path, the platform replaces fixed processes with custom approval chains tailored to a project's actual hierarchy — so an HSE finding can be routed the way the project is actually structured, not the way a generic template assumes it should be.",
        ],
      },
      {
        heading: 'What connected safety data looks like at scale',
        paragraphs: [
          'The value of this becomes clearest on large, multi-site portfolios, where the alternative to a unified system isn\'t "less data" — it\'s data spread across dozens of disconnected spreadsheets and site files that nobody can reconcile in real time.',
          'Builtric clients managing large portfolios of this kind have pointed to exactly this problem being solved in other parts of the platform. A client running civil works across more than 200 villages credited the platform with the clarity to optimize both financial and physical progress by unifying data into a single, reliable view. Another, overseeing more than 100 local development projects, highlighted the real-time visibility that let their management identify delay-prone areas early and resolve bottlenecks before they escalated. The same principle — one platform, one current view, faster response — applies just as directly to HSE and risk data as it does to cost and schedule.',
          "Because the platform runs on enterprise infrastructure from partners including Oracle, AWS, Autodesk, and Microsoft, that real-time visibility is backed by the security and reliability a safety-critical data system needs — not a spreadsheet someone forgot to save, or a report that's a week out of date by the time it's read.",
        ],
      },
      {
        heading: 'Compliance and reporting, without the lag',
        paragraphs: [
          "For developers, owners, and operators managing complex sites, the goal isn't more HSE paperwork — it's less lag between an issue appearing and someone acting on it. Storing project files and safety records with consistent version control and data integrity, generating HSE reports on demand rather than waiting for a scheduled compile, and giving multilingual, multi-site teams one shared system to work in are all part of the same underlying idea: safety data is only as useful as how fast it reaches the people who can respond to it.",
        ],
      },
    ],
    cta: 'See how Builtric brings HSE, procurement, finance, and project management together on one platform.',
  },
  {
    slug: 'the-real-cost-of-disconnected-data-on-a-construction-project',
    title: 'The Real Cost of Disconnected Data on a Construction Project',
    excerpt:
      'Fragmented construction data rarely looks like a crisis until it becomes one — cost overruns and schedule slippage often start as siloed records across procurement, finance, inspections, and HSE.',
    publishedAt: '2026-07-01',
    image: {
      src: '/images/blog/disconnected-data-construction.webp',
      alt: 'Isometric illustration of a connected smart city with a glowing central data hub representing unified construction project intelligence',
      width: 1024,
      height: 768,
    },
    sections: [
      {
        paragraphs: [
          'Ask any project owner or contractor where their construction data lives, and the honest answer is usually: everywhere. Procurement records in one system. Finance and cashflow in a spreadsheet somewhere else. Inspection reports in a shared drive. HSE incidents logged on paper or in a separate tool entirely. Progress updates relayed secondhand through phone calls and site visits.',
          "Individually, none of these gaps looks like a crisis. Together, they're one of the biggest reasons construction projects run over budget and behind schedule — not because the work itself went wrong, but because nobody had a clear, current view of what was actually happening until it was too late to act.",
        ],
      },
      {
        heading: 'Why fragmented data is a margin problem, not just an IT problem',
        paragraphs: [
          "On a complex, multi-stakeholder project, cost overruns and schedule slippage rarely happen all at once. They accumulate from dozens of small delays: a purchase order stuck in an approval chain nobody can locate, a certificate that took a week longer to generate than it should have, a safety inspection finding that didn't reach the right person until the issue had already grown.",
          'This is the problem Builtric is built to solve. As a cloud-based construction intelligence platform designed for developers, owners, and operators, Builtric brings projects, people, data, and decisions into one unified system — so leaders can see clearly, act early, and stay in control from planning to handover, instead of finding out about problems in a monthly report.',
        ],
      },
      {
        heading: 'What "one source of truth" actually covers',
        paragraphs: [
          "Builtric isn't a single-purpose tool bolted onto existing workflows — it connects the functions that, on most projects, don't talk to each other:",
          'Procurement: creating, managing, and tracking purchase orders, contracts, and associated documents in one place, rather than chasing paperwork across email threads.',
          "Finance: tracking project finances, generating certificates, and managing cashflow in real time, so budget variance is visible while there's still time to correct it, not after the quarter closes.",
          'Project management: tracking work completion and submitting inspection requests instantly, keeping the physical progress on site and the paperwork about that progress in sync.',
          "HSE management: managing health, safety, and environmental compliance — conducting inspections, recording findings, and generating reports — so safety data isn't the thing most likely to be handled outside the main system.",
          'Data management: storing and organizing project files and records with consistent version control, so the "latest version" question has one answer instead of five.',
          "A dynamic workflow engine that replaces rigid, generic processes with custom approval chains built around a project's actual hierarchy, rather than forcing every team into the same workflow.",
          'Multilingual support for teams and sites that span countries and languages, which matters more than it might seem on any project with a multicultural workforce or multiple regional offices.',
        ],
      },
      {
        heading: 'What that looks like for the people running the project',
        paragraphs: [
          "The stated goal behind all of this is straightforward: proactive insight into cost, schedule, and risk, delivered through a unified dashboard, instead of a patchwork of static reports that are outdated the moment they're generated.",
          'Organizations using Builtric describe that shift in concrete terms. One public-sector client credited the platform with giving them the clarity to optimize both financial and physical progress across civil works spanning more than 200 villages, unifying data into a single reliable view and significantly reducing billing timelines. Another, managing more than 100 local development projects, pointed to the real-time visibility that let their management identify delay-prone areas early and resolve bottlenecks before they hit project margins. A metropolitan corporation client highlighted the platform\'s ability to track spend variations against projections, keeping high-value projects accountable to their fiscal goals.',
          "These aren't different problems — they're the same underlying issue (data trapped in silos) showing up across very different types of organizations: a provincial development authority, a district government, and a metropolitan corporation.",
        ],
      },
      {
        heading: 'Built on infrastructure that scales with the project, not against it',
        paragraphs: [
          "Because Builtric is built on enterprise cloud and data infrastructure — including partnerships with Oracle, AWS, Autodesk, and Microsoft — the platform is designed to bring enterprise-grade security, performance, and scalability to every project managed inside it, whether that's a single site or a portfolio of hundreds.",
          'For developers, owners, and operators managing projects where multiple stakeholders, multiple data sources, and multiple decision points all intersect, that combination — one platform, real-time visibility, and infrastructure that can actually carry the load — is what separates "we found out eventually" from "we caught it early."',
        ],
      },
    ],
    cta: 'See how Builtric can bring that clarity to your next project.',
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
