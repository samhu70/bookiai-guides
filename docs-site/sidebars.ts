import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guidesEn: [
    {
      type: 'category',
      label: '📘 Accounting Fundamentals',
      collapsed: false,
      items: [
        '01-project-intro',
        '02-accounts-and-access',
        '03-creating-your-first-ledger',
        '04-ledger-overview',
        '05-ledger-journal-entries',
        '06-ai-journal-entry',
        '07-chart-of-accounts',
        '08-accounts-transactions',
        '09-system-ledger',
        '10-multi-currency',
      ],
    },
    {
      type: 'category',
      label: '🤖 LLM Agents in Business Systems',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'ai-agents/index',
      },
      items: [
        'ai-agents/00-introduction',
        'ai-agents/01-why-llm-cannot-write-ledgers',
        'ai-agents/02-generate-review-controller',
        'ai-agents/03-proposal-review-decision-contracts',
        'ai-agents/04-recommendation-assurance',
        'ai-agents/05-controller-manual-first',
        'ai-agents/06-controller-from-manual-to-auto',
        'ai-agents/07-action-library',
        'ai-agents/08-prompt-governance',
      ],
    },
  ],
};

export default sidebars;
