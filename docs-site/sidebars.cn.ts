import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guidesCn: [
    {
      type: 'category',
      label: '📘 会计基础与账本体系',
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
      ],
    },
    {
      type: 'category',
      label: '🤖 业务系统中的 LLM Agent',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'ai-agents/index',
      },
      items: [
        'ai-agents/00-简介',
        'ai-agents/01-为什么不能让LLM直接写账',
        'ai-agents/02-生成-审阅-控制器模型',
        'ai-agents/03-对象化契约设计',
        'ai-agents/04-推荐可信性保障',
        'ai-agents/05-控制器-人工优先',
        'ai-agents/06-从人工到自动化',
        'ai-agents/07-行动库设计',
        'ai-agents/08-Prompt治理体系',
      ],
    },
  ],
};

export default sidebars;
