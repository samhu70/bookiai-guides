import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Highlight = {
  title: string;
  description: string;
};

type GuideCard = {
  badge: string;
  title: string;
  description: string;
  to: string;
};

const highlights: Highlight[] = [
  {
    title: 'AI-native bookkeeping',
    description:
      'Double-entry ledgers with AI-guided chart setup, account choices, and draft journals.',
  },
  {
    title: 'Multimodal capture',
    description:
      'Upload invoices or receipts (JPG/PNG/PDF) and let OCR + LLMs turn them into balanced entries.',
  },
  {
    title: 'Stripe-ready revenue',
    description:
      'Membership, ledger slots, storage add-ons, and wallet-like transparency powered by Stripe billing.',
  },
  {
    title: 'Operational clarity',
    description:
      'System ledger, audit-friendly attachments, and multi-ledger structure designed for finance teams.',
  },
];

const guideCards: GuideCard[] = [
  {
    badge: 'Guide 01',
    title: 'Introducing BookiAI',
    description:
      'What BookiAI is, who it serves, and how Phase 1 rolls out across ledgers, AI, and billing.',
    to: '/01-project-intro',
  },
  {
    badge: 'Access',
    title: 'Accounts & billing',
    description:
      'Sign-up/login, email verification, quotas, upgrades/expansions, and how Stripe customer portal fits in.',
    to: '/02-accounts-and-access',
  },
  {
    badge: 'AI workflow',
    title: 'AI-assisted journal entry',
    description:
      'Upload invoices/receipts, review OCR + LLM proposals, and post drafts with audit-friendly attachments.',
    to: '/06-ai-journal-entry',
  },
  {
    badge: 'Ledger core',
    title: 'Ledgers, charts, and system ledger',
    description:
      'Create ledgers, manage charts of accounts, keep journals healthy, and understand the system ledger.',
    to: '/09-system-ledger',
  },
  {
    badge: '中文',
    title: '中文指南',
    description:
      '以中文了解 BookiAI：产品介绍、账号与访问、AI 记账流程，以及后续路线图。',
    to: '/cn/01-project-intro',
  },
];

const guideFlow = [
  {
    title: 'Start with scope',
    body:
      'Use Guide 01 to align on the product promise, audiences, and what ships in Phase 1.',
    to: '/01-project-intro',
    cta: 'Open Guide 01',
  },
  {
    title: 'Onboard and bill with confidence',
    body:
      'Follow Accounts & Billing to cover sign-up/login, quotas, and Stripe-powered upgrades or downgrades.',
    to: '/02-accounts-and-access',
    cta: 'Accounts & Access',
  },
  {
    title: 'Ship the daily workflows',
    body:
      'Lean on the ledger, chart, and AI journal guides to keep entries accurate and auditable.',
    to: '/06-ai-journal-entry',
    cta: 'AI Journal Flow',
  },
];

function PillList({items}: {items: string[]}): ReactNode {
  return (
    <div className={styles.heroMeta}>
      {items.map(item => (
        <span key={item} className={styles.metaPill}>
          {item}
        </span>
      ))}
    </div>
  );
}

function GuideCardLink({badge, title, description, to}: GuideCard): ReactNode {
  return (
    <Link className={styles.card} to={to}>
      <span className={styles.cardBadge}>{badge}</span>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardAction}>Open guide →</span>
    </Link>
  );
}

function HighlightCard({title, description}: Highlight): ReactNode {
  return (
    <div className={styles.highlightCard}>
      <Heading as="h3" className={styles.highlightTitle}>
        {title}
      </Heading>
      <p className={styles.highlightDescription}>{description}</p>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="AI-native bookkeeping guides for BookiAI: ledgers, AI journal flows, billing, and roadmap context.">
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className={styles.pill}>BookiAI · Phase 1</span>
              <Heading as="h1" className={styles.heroTitle}>
                Ship BookiAI with clear, AI-first guides
              </Heading>
              <p className={styles.heroLead}>
                Dual-language product docs for AI-native bookkeeping: set up
                ledgers, capture documents, post journals, and keep billing in
                sync.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryCta} to="/01-project-intro">
                  Start with Guide 01
                </Link>
                <Link className={styles.secondaryCta} to="/cn/01-project-intro">
                  中文指南入口
                </Link>
              </div>
              <PillList
                items={[
                  'AI-assisted journals',
                  'Stripe billing + quotas',
                  'Multi-ledger, audit-friendly',
                  'English / 中文',
                ]}
              />
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.panelHeader}>Inside this playbook</div>
              <ul className={styles.panelList}>
                <li>
                  AI-guided chart of accounts and ledger setup for small
                  businesses and finance teams.
                </li>
                <li>
                  Multimodal capture that turns invoices/receipts into balanced
                  entries with attachments.
                </li>
                <li>
                  Stripe-backed membership, ledger slots, and storage add-ons
                  with wallet-style visibility.
                </li>
                <li>
                  System ledger behaviors, audit trails, and localization to
                  keep teams aligned.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">What BookiAI delivers</Heading>
              <p className={styles.sectionSubtitle}>
                Core themes across every guide: AI-native bookkeeping, real
                billing and quotas, and clear hand-offs for teams.
              </p>
            </div>
            <div className={styles.highlightGrid}>
              {highlights.map(highlight => (
                <HighlightCard key={highlight.title} {...highlight} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Essential guides</Heading>
              <p className={styles.sectionSubtitle}>
                Jump straight to the sections that keep the product shippable.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {guideCards.map(card => (
                <GuideCardLink key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div className={styles.sectionSplit}>
              <div className={styles.splitText}>
                <Heading as="h2">How to use these guides</Heading>
                <p className={styles.sectionSubtitle}>
                  Keep the flow tight: start with scope, verify access, then
                  finish the daily ledger and AI workflows.
                </p>
                <div className={styles.flowList}>
                  {guideFlow.map(item => (
                    <div key={item.title} className={styles.flowItem}>
                      <div className={styles.flowTitle}>{item.title}</div>
                      <p className={styles.flowBody}>{item.body}</p>
                      <Link className={styles.flowLink} to={item.to}>
                        {item.cta} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.splitNote}>
                <div className={styles.noteBadge}>Tip</div>
                <Heading as="h3" className={styles.noteTitle}>
                  Keep screenshots close
                </Heading>
                <p className={styles.noteBody}>
                  Every guide links to the exact UI: sign-up/login, billing,
                  ledger creation, journal entry, chart of accounts, and system
                  ledger views. Update screenshots under `/assets` as flows
                  evolve.
                </p>
                <p className={styles.noteBody}>
                  Need a localized view? Open the same section in{' '}
                  <Link to="/cn/01-project-intro">中文指南</Link> to align copy
                  and UI labels.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
