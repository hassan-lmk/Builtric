'use client'

import { BuiltricButton, BuiltricButtonGroup } from '@/components/builtric-button'
import {
  DataIcon,
  FinanceIcon,
  HseIcon,
  MultilingualIcon,
  ProcurementIcon,
  ProjectManagementIcon,
  WorkflowIcon,
} from '@/components/feature-timeline-icons'
import { ScrollReveal } from '@/components/scroll-reveal'
import type { ComponentType } from 'react'

const features: {
  title: string
  description: string
  Icon: ComponentType<{ className?: string }>
  iconClassName: string
}[] = [
  {
    title: 'Procurement',
    description:
      'Create, manage and track purchase orders, contracts and associated documents.',
    Icon: ProcurementIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
  {
    title: 'Finance',
    description:
      'Track finances, generate certificates and manage cashflow in real time.',
    Icon: FinanceIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
  {
    title: 'Project Management',
    description:
      'Track work completion and submit inspection requests instantly.',
    Icon: ProjectManagementIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
  {
    title: 'HSE Management',
    description:
      'Manage health and environmental safety. Conduct inspections, record findings and generate reports.',
    Icon: HseIcon,
    iconClassName: 'h-[34px] w-[31px]',
  },
  {
    title: 'Data Management',
    description:
      'Store and organise project files and records with consistent version control and data integrity.',
    Icon: DataIcon,
    iconClassName: 'h-[31px] w-[29px]',
  },
  {
    title: 'Multilingual Support',
    description:
      'Seamless localisation across global teams and multicultural project sites.',
    Icon: MultilingualIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
  {
    title: 'Dynamic Workflow Engine',
    description:
      'Replace rigid processes with custom approval chains tailored to your project hierarchy.',
    Icon: WorkflowIcon,
    iconClassName: 'h-[34px] w-[34px]',
  },
]

export function ProductFeaturesSection() {
  return (
    <ScrollReveal as="section" className="w-full px-site py-[84px]">
      <div className="site-container flex flex-col items-start justify-between gap-9 lg:flex-row lg:gap-[35px]">
        <ScrollReveal delay={80} className="flex w-full flex-col gap-2.5 lg:w-[40%]">
          <div className="flex flex-col gap-3">
            <p className="t-eyebrow t-eyebrow-pill-yellow text-primary-black">
              Product Features
            </p>
            <h2 className="t-heading text-primary-black">
              Built for the complexity of modern construction
            </h2>
          </div>
          <p className="t-body text-primary-black">
            Builtric brings multiple stakeholders, data sources, and decision points into one
            unified intelligence platform.
          </p>
          <BuiltricButtonGroup className="py-3">
            <BuiltricButton label="Product Features" href="/builtric-features" />
            <BuiltricButton label="Try Now" href="/builtric-demo" variant="cta" />
          </BuiltricButtonGroup>
        </ScrollReveal>

        <ScrollReveal delay={160} className="relative flex w-full shrink-0 flex-col lg:w-auto">
          <div className="pointer-events-none absolute left-[34px] top-[68px] bottom-[34px] w-1 -translate-x-1/2 bg-hero-yellow" />
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-stretch gap-2.5 ${index < features.length - 1 ? 'pb-11' : ''}`}
            >
              <div className="relative flex w-[68px] shrink-0 flex-col items-center self-stretch">
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[46px] bg-hero-yellow text-primary-black">
                  <feature.Icon className={feature.iconClassName} />
                </div>
              </div>

              <article className="flex max-w-[420px] flex-col gap-0.5 pt-2">
                <h3 className="t-title text-primary-black">
                  {feature.title}
                </h3>
                <p className="t-body text-primary-black">
                  {feature.description}
                </p>
              </article>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </ScrollReveal>
  )
}
