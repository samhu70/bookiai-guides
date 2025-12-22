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

type Series = {
  icon: string;
  title: string;
  description: string;
  to: string;
  cta: string;
};

const coreSeries: Series[] = [
  {
    icon: '📘',
    title: 'Accounting Fundamentals',
    description: 'Coming soon.',
    to: '/en000001',
    cta: 'Coming soon',
  },
  {
    icon: '📗',
    title: 'AI Journal Entry System',
    description:
      'End-to-end capture, OCR + LLM review, controller workflow, and posting drafts.',
    to: '/en000006',
    cta: 'Start this system →',
  },
  {
    icon: '🤖',
    title: 'LLM Agents in Business Systems',
    description:
      'How we design controllable, auditable, and gradually automated AI agents in BookiAI.',
    to: '/ai-agents',
    cta: 'Start this series →',
  },
];

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
    to: '/en000001',
  },
  {
    badge: 'Access',
    title: 'Accounts & billing',
    description:
      'Sign-up/login, email verification, quotas, upgrades/expansions, and how Stripe customer portal fits in.',
    to: '/en000002',
  },
  {
    badge: 'AI workflow',
    title: 'AI-assisted journal entry',
    description:
      'Upload invoices/receipts, review OCR + LLM proposals, and post drafts with audit-friendly attachments.',
    to: '/en000006',
  },
  {
    badge: 'Ledger core',
    title: 'Ledgers, charts, and system ledger',
    description:
      'Create ledgers, manage charts of accounts, keep journals healthy, and understand the system ledger.',
    to: '/en000009',
  },
  {
    badge: '中文',
    title: '中文指南',
    description:
      '以中文了解 BookiAI：产品介绍、账号与访问、AI 记账流程，以及后续路线图。',
    to: '/cn/cn000001',
  },
];

const guideFlow = [
  {
    title: 'Start with accounting fundamentals',
    body: 'Align on ledger structure, journals, and charts before layering AI.',
    to: '/en000001',
    cta: 'Open fundamentals',
  },
  {
    title: 'Follow the AI journal entry system',
    body: 'Capture documents, review proposals, and post balanced drafts with audit trails.',
    to: '/en000006',
    cta: 'AI journal flow',
  },
  {
    title: 'Extend with agents',
    body: 'Use the LLM agent series for governance, contracts, and action libraries.',
    to: '/ai-agents',
    cta: 'Explore agents',
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
              <Heading as="h1" className={styles.heroTitle}>
                BookiAI Guides
              </Heading>
              <p className={styles.heroLead}>
                Practical knowledge for AI-native accounting systems.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryCta} to="/en000001">
                  Start with fundamentals
                </Link>
                <Link className={styles.secondaryCta} to="/cn/cn000001">
                  中文指南入口
                </Link>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.panelHeader}>Who this is for</div>
              <ul className={styles.panelList}>
                <li>
                  Founders shipping AI-native financial systems.
                </li>
                <li>
                  Engineers implementing ledgers, OCR/LLM, and automations.
                </li>
                <li>
                  Finance professionals who need trustable AI-assisted journals.
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
              <Heading as="h2">Core series</Heading>
              <p className={styles.sectionSubtitle}>
                Follow the three tracks to ship an AI-native accounting system
                with confidence.
              </p>
            </div>
            <div className={styles.seriesGrid}>
              {coreSeries.map(series => (
                <Link key={series.title} className={styles.seriesCard} to={series.to}>
                  <div className={styles.seriesIcon}>{series.icon}</div>
                  <Heading as="h3" className={styles.seriesTitle}>
                    {series.title}
                  </Heading>
                  <p className={styles.seriesDescription}>{series.description}</p>
                  <span className={styles.cardAction}>{series.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">How to use these guides</Heading>
              <p className={styles.sectionSubtitle}>
                Start with fundamentals, move into the AI journal system, then
                extend with agents and governance.
              </p>
            </div>
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
        </section>
      </main>
    </Layout>
  );
}
