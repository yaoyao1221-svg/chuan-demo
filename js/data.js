// ============================================
// 川维化工 AI Demo - Mock 数据层
// 所有数据基于川维真实产品和业务场景
// ============================================

const DATA = (() => {

  // ---- 用户角色（千人千面） ----
  const USERS = {
    factory_leader: {
      id: 'factory_leader',
      name: '张建国',
      title: '厂领导',
      dept: '厂部',
      avatar: '#1a73e8',
      view: '战略层 — 关注整体效益、风险、KPI完成度'
    },
    dept_head: {
      id: 'dept_head',
      name: '李明辉',
      title: '部门负责人',
      dept: '技术质量部',
      avatar: '#0d7377',
      view: '管理层 — 关注部门指标、异常跟踪、改进进度'
    },
    engineer: {
      id: 'engineer',
      name: '王海涛',
      title: '工艺工程师',
      dept: '热电运行部',
      avatar: '#e67e22',
      view: '执行层 — 关注日常任务、分析工具、方案细节'
    },
    it_staff: {
      id: 'it_staff',
      name: '陈志远',
      title: '信息科',
      dept: '信息中心',
      avatar: '#8e44ad',
      view: '支撑层 — 关注系统状态、数据接入、权限审计'
    }
  };

  // ---- QC 质量攻关 ----
  const QC = {
    // 产品列表
    products: [
      { id: 'P001', name: 'PVA 17-88', spec: '醇解度88±1%', line: '聚乙烯醇装置' },
      { id: 'P002', name: 'PVA 17-99', spec: '醇解度99±0.5%', line: '聚乙烯醇装置' },
      { id: 'P003', name: 'VAE 705', spec: '固含量55±1%', line: 'VAE乳液装置' },
      { id: 'P004', name: 'EVOH F104', spec: '乙烯含量32mol%', line: 'EVOH装置' },
      { id: 'P005', name: '甲醇 M99', spec: '纯度≥99.9%', line: '甲醇装置' }
    ],

    // 质量指标
    indicators: [
      { id: 'I001', name: 'PVA 17-88 粘度', unit: 'mPa·s', target: '22.0-26.0', current: '24.3' },
      { id: 'I002', name: 'PVA 17-88 挥发分', unit: '%', target: '≤5.0', current: '4.2' },
      { id: 'I003', name: 'VAE 705 粘度', unit: 'mPa·s', target: '3000-8000', current: '5200' },
      { id: 'I004', name: 'EVOH 熔指', unit: 'g/10min', target: '1.5-3.5', current: '2.8' },
      { id: 'I005', name: '甲醇 纯度', unit: '%', target: '≥99.9', current: '99.95' }
    ],

    // 近期质量异常
    issues: [
      { id: 'QC001', product: 'PVA 17-88', description: '6月批次粘度连续偏高，超出上限26.0mPa·s',
        severity: 'high', status: 'analysis', found: '2026-06-12', batches: '20260608-20260615',
        suspect: '聚合反应温度波动', analyst: '王海涛' },
      { id: 'QC002', product: 'VAE 705', description: '7月首批次固含量偏低至53.2%',
        severity: 'mid', status: 'tracking', found: '2026-07-02', batches: '20260701',
        suspect: '引发剂配比偏差', analyst: '李敏' },
      { id: 'QC003', product: 'EVOH F104', description: '熔指波动，用户反馈加工性能不稳定',
        severity: 'high', status: 'pending', found: '2026-07-08', batches: '20260703-20260707',
        suspect: '乙烯/醇解度比值偏移', analyst: '赵刚' },
      { id: 'QC004', product: 'PVA 17-99', description: '产品白度下降，外观异物投诉增加',
        severity: 'mid', status: 'resolved', found: '2026-05-20', batches: '20260515-20260525',
        suspect: '过滤系统滤网破损（已更换）', analyst: '王海涛' },
      { id: 'QC005', product: '甲醇 M99', description: '痕量杂质超标，影响下游醋酸乙烯质量',
        severity: 'low', status: 'monitoring', found: '2026-06-28', batches: '20260625',
        suspect: '精馏塔操作参数偏移', analyst: '刘洋' }
    ],

    // 近期QC课题
    topics: [
      { id: 'QT001', title: '降低PVA 17-88粘度波动幅度', dept: '聚乙烯醇装置',
        method: 'QC八步法', status: '进行中', progress: 65,
        steps: [
          { step: 'P(计划)', done: true, desc: '现状调查、目标设定、原因分析、要因确认' },
          { step: 'D(实施)', done: true, desc: '对策制定与实施：调整聚合釜温度控制参数' },
          { step: 'C(检查)', done: false, desc: '效果检查：对比实施前后粘度控制能力' },
          { step: 'A(处置)', done: false, desc: '标准化、遗留问题、下一步计划' }
        ] },
      { id: 'QT002', title: '提高VAE 705固含量稳定性', dept: 'VAE乳液装置',
        method: 'QC八步法', status: '已完成', progress: 100,
        steps: [
          { step: 'P(计划)', done: true, desc: '现状调查、目标设定、原因分析、要因确认' },
          { step: 'D(实施)', done: true, desc: '对策制定与实施：优化引发剂添加时序' },
          { step: 'C(检查)', done: true, desc: '效果检查：固含量Cpk从0.82提升至1.35' },
          { step: 'A(处置)', done: true, desc: '标准化、修订SOP、推广至其他牌号' }
        ] }
    ],

    // 质量趋势数据（6个月）
    trends: {
      labels: ['2月', '3月', '4月', '5月', '6月', '7月'],
      viscosity: [23.5, 24.1, 23.8, 25.2, 26.8, 24.3],
      volatile: [3.8, 4.1, 4.5, 4.8, 4.6, 4.2],
      solid_content: [55.3, 55.1, 54.8, 54.2, 53.8, 54.5],
      qualified_rate: [98.5, 98.2, 97.8, 96.5, 95.2, 97.0]
    },

    // QC攻关材料生成示例
    report_template: {
      title: '关于PVA 17-88粘度波动的QC攻关报告',
      background: '2026年6月以来，PVA 17-88产品粘度出现持续偏高趋势，6月12日-15日批次粘度达到26.8-27.3mPa·s，超出内控上限26.0mPa·s。客户反馈加工时熔融流动性下降。',
      current_status: '统计6月1日-15日共12批次数据，粘度的均值25.8mPa·s，极差3.5mPa·s。较5月（均值24.1mPa·s，极差1.8mPa·s）波动明显增大。',
      target: '将PVA 17-88粘度控制在22.0-25.5mPa·s范围内，批次间极差≤2.0mPa·s。',
      cause_analysis: [
        { factor: '聚合温度', correlation: 0.87, conclusion: '要因', detail: '聚合釜R-201温度波动±1.5℃，远超工艺要求的±0.5℃' },
        { factor: '引发剂用量', correlation: 0.72, conclusion: '要因', detail: '引发剂进料泵P-105流量波动±3%，与温度波动叠加影响' },
        { factor: '原料醇解度', correlation: 0.23, conclusion: '非要因', detail: '原料醇解度控制在88±0.5%，在正常范围内' },
        { factor: '冷却水温度', correlation: 0.31, conclusion: '次要', detail: '循环水温度随环境波动，但不是粘度变化的主要因素' }
      ],
      measures: [
        '维修聚合釜R-201温度控制系统，更换故障温控阀',
        '校准引发剂进料泵P-105，增加流量在线监控',
        '修订聚合温度控制SOP，将允许波动范围从±1.5℃收紧至±0.8℃',
        '增加中间品粘度检测频次，从每4小时一次改为每2小时一次'
      ]
    }
  };

  // ---- 热电经济配煤 ----
  const COAL = {
    // 煤种信息
    coal_types: [
      { id: 'C01', name: '神华烟煤', origin: '陕西神木', cal: 5800, sulfur: 0.4, ash: 8.5, moisture: 12.0, price: 720, stock: 8500 },
      { id: 'C02', name: '山西无烟煤', origin: '山西晋城', cal: 6500, sulfur: 0.8, ash: 12.0, moisture: 6.0, price: 950, stock: 3200 },
      { id: 'C03', name: '陕西烟煤', origin: '陕西榆林', cal: 5500, sulfur: 0.6, ash: 10.0, moisture: 14.0, price: 680, stock: 6200 },
      { id: 'C04', name: '内蒙褐煤', origin: '内蒙古呼伦贝尔', cal: 3800, sulfur: 0.3, ash: 15.0, moisture: 28.0, price: 380, stock: 12000 },
      { id: 'C05', name: '进口印尼煤', origin: '印尼加里曼丹', cal: 5200, sulfur: 0.2, ash: 5.0, moisture: 20.0, price: 650, stock: 4800 }
    ],

    // 典型配煤方案（场景）
    schemes: [
      {
        id: 'S001', name: '当前实际方案',
        desc: '川维化工当前采用的配煤方案',
        is_current: true,
        blend: [
          { coal: '神华烟煤', ratio: 40, cal_contrib: 2320 },
          { coal: '山西无烟煤', ratio: 25, cal_contrib: 1625 },
          { coal: '陕西烟煤', ratio: 20, cal_contrib: 1100 },
          { coal: '内蒙褐煤', ratio: 15, cal_contrib: 570 }
        ],
        result: {
          cal_total: 5615, cost_per_ton: 746, boiler_eff: 88.5,
          so2: 420, nox: 380, dust: 25,
          risk: '中 — 无烟煤价格较高，成本压力大'
        }
      },
      {
        id: 'S002', name: 'AI推荐-成本优先方案',
        desc: '在满足锅炉基本热值要求下，最大化降低成本',
        is_current: false,
        blend: [
          { coal: '神华烟煤', ratio: 30, cal_contrib: 1740 },
          { coal: '陕西烟煤', ratio: 35, cal_contrib: 1925 },
          { coal: '内蒙褐煤', ratio: 25, cal_contrib: 950 },
          { coal: '进口印尼煤', ratio: 10, cal_contrib: 520 }
        ],
        result: {
          cal_total: 5135, cost_per_ton: 618, boiler_eff: 86.2,
          so2: 350, nox: 340, dust: 22,
          risk: '低 — 热值略低但满足锅炉下限，褐煤水分偏高需关注'
        }
      },
      {
        id: 'S003', name: 'AI推荐-稳定优先方案',
        desc: '在保证锅炉效率的前提下，兼顾成本优化',
        is_current: false,
        blend: [
          { coal: '神华烟煤', ratio: 35, cal_contrib: 2030 },
          { coal: '山西无烟煤', ratio: 15, cal_contrib: 975 },
          { coal: '陕西烟煤', ratio: 30, cal_contrib: 1650 },
          { coal: '内蒙褐煤', ratio: 20, cal_contrib: 760 }
        ],
        result: {
          cal_total: 5415, cost_per_ton: 696, boiler_eff: 88.8,
          so2: 390, nox: 360, dust: 24,
          risk: '低 — 各项指标均衡，无显著运行风险'
        }
      },
      {
        id: 'S004', name: 'AI推荐-环保优先方案',
        desc: '优先降低硫氧化物和氮氧化物排放',
        is_current: false,
        blend: [
          { coal: '神华烟煤', ratio: 45, cal_contrib: 2610 },
          { coal: '进口印尼煤', ratio: 25, cal_contrib: 1300 },
          { coal: '内蒙褐煤', ratio: 20, cal_contrib: 760 },
          { coal: '山西无烟煤', ratio: 10, cal_contrib: 650 }
        ],
        result: {
          cal_total: 5320, cost_per_ton: 672, boiler_eff: 87.5,
          so2: 310, nox: 320, dust: 20,
          risk: '低 — 排放最低，但需确保进口煤供应稳定'
        }
      }
    ],

    // 月度成本趋势
    cost_trend: {
      labels: ['2月', '3月', '4月', '5月', '6月', '7月'],
      actual_cost: [782, 765, 748, 760, 746, 740],
      target_cost: [750, 750, 740, 740, 730, 730]
    },

    // 历史配煤复盘数据
    history: [
      { period: '2026年Q1', avg_cost: 765, avg_eff: 87.8, issues: '无烟煤价格波动大' },
      { period: '2026年4月', avg_cost: 748, avg_eff: 88.0, issues: '褐煤水分偏高导致给煤机堵塞2次' },
      { period: '2026年5月', avg_cost: 760, avg_eff: 87.5, issues: '进口煤到港延迟，临时切换方案' },
      { period: '2026年6月', avg_cost: 746, avg_eff: 88.5, issues: '基本稳定，配煤方案运行良好' }
    ]
  };

  // ---- 开停车/检修方案辅助 ----
  const MAINTENANCE = {
    // 装置信息
    units: [
      { id: 'U001', name: '合成反应器R-201', type: '反应器', area: '聚乙烯醇装置', last_overhaul: '2025-08', next_overhaul: '2026-08', status: '运行' },
      { id: 'U002', name: '精馏塔T-301', type: '塔器', area: '甲醇装置', last_overhaul: '2025-11', next_overhaul: '2026-11', status: '运行' },
      { id: 'U003', name: '压缩机组K-101', type: '压缩机', area: '公用工程', last_overhaul: '2026-01', next_overhaul: '2026-07', status: '临修' },
      { id: 'U004', name: '换热器E-401', type: '换热器', area: 'VAE装置', last_overhaul: '2026-03', next_overhaul: '2026-09', status: '运行' },
      { id: 'U005', name: '聚合釜R-101', type: '反应器', area: '聚乙烯醇装置', last_overhaul: '2026-02', next_overhaul: '2026-08', status: '运行' }
    ],

    // 历史检修方案
    history_plans: [
      { id: 'HP001', unit: '合成反应器R-201', date: '2025-08', type: '大修',
        summary: '更换催化剂、检修搅拌系统、清理内壁结焦',
        duration: '14天', risks: ['催化剂更换后需48小时活化', '反应器打开前必须氮气置换至O2<0.5%'] },
      { id: 'HP002', unit: '精馏塔T-301', date: '2025-11', type: '中修',
        summary: '检查塔盘、清理塔底聚合物、更换部分阀门',
        duration: '7天', risks: ['塔内可能存在自聚物，清理时需防火防爆', '受限空间作业必须连续气体检测'] },
      { id: 'HP003', unit: '压缩机组K-101', date: '2026-01', type: '小修',
        summary: '更换轴瓦、检查密封、联轴器对中调整',
        duration: '5天', risks: ['轴瓦间隙必须控制在0.12-0.18mm', '对中偏差≤0.05mm'] },
      { id: 'HP004', unit: '换热器E-401', date: '2026-03', type: '临修',
        summary: '清洗管程、更换垫片、压力试验',
        duration: '3天', risks: ['管束清洗后需做0.6MPa水压试验', '垫片材质必须符合工艺介质要求'] }
    ],

    // 典型开停车方案
    start_stop: [
      { id: 'SS001', unit: '聚乙烯醇装置', type: '停车', scope: '全装置计划停车',
        steps: [
          '降负荷至50%', '停引发剂进料', '停单体进料', '聚合釜降温至60℃',
          '系统氮气置换', '关闭所有进出料阀门', '断电隔离', '挂检修牌'
        ],
        attention: ['停车前确保中间罐液位在安全范围', '聚合釜降温速率≤10℃/h', '氮气置换至可燃气<0.5%'],
        tickets: ['用火作业票', '受限空间作业票', '临时用电票', '高处作业票']
      },
      { id: 'SS002', unit: '聚乙烯醇装置', type: '开车', scope: '全装置计划开车',
        steps: [
          '确认所有检修工作完成', '拆除隔离和检修牌', '送电', '氮气置换合格',
          '充压气密试验', '建立液位循环', '投加热系统', '按开车曲线升温',
          '逐步投料', '分析合格后切入产品罐'
        ],
        attention: ['开车前必须组织联合检查签字', '升温速率严格按照开车曲线', '产品分析合格前走不合格线'],
        tickets: ['开车确认单', '联锁投用确认单']
      }
    ],

    // 当前待办检修任务
    tasks: [
      { id: 'MT001', unit: '压缩机组K-101', type: '临修', priority: 'urgent',
        deadline: '2026-07-20', status: '方案编制中',
        desc: '机组振动值超标（垂直方向0.12mm），需停机检修',
        assigned: '陈刚（设备科）' },
      { id: 'MT002', unit: '聚合釜R-101', type: '计划检修', priority: 'normal',
        deadline: '2026-08-15', status: '等待排期',
        desc: '催化剂活性下降，计划更换催化剂并检查搅拌系统',
        assigned: '李明辉（技术质量部）' },
      { id: 'MT003', unit: '精馏塔T-301', type: '计划检修', priority: 'normal',
        deadline: '2026-11-01', status: '方案编制中',
        desc: '年度中修，检查塔盘、清理聚合物',
        assigned: '赵刚（工艺工程师）' }
    ],

    // 辅助生成的方案草案
    plan_draft: {
      title: '压缩机组K-101临修方案（草案）',
      unit: '压缩机组K-101',
      location: '公用工程车间',
      reason: '机组垂直方向振动值0.12mm（报警值0.08mm，联锁值0.15mm），判断为轴瓦磨损',
      scope: ['拆检联轴器', '检查轴瓦与轴颈', '更换磨损轴瓦', '调整对中', '试车验证'],
      risks: [
        { item: '机械伤害', level: '高', measures: '停机断电、挂牌、能量隔离确认' },
        { item: '起重伤害', level: '中', measures: '吊装作业由持证起重工操作' },
        { item: '火灾', level: '低', measures: '动火作业需办理用火作业票' }
      ],
      similar_cases: [
        { unit: '压缩机组K-102', date: '2026-03', issue: '振动超标（0.10mm）', solution: '更换轴瓦+调整对中，工期4天' },
        { unit: '压缩机组K-103', date: '2025-11', issue: '轴封泄漏', solution: '更换机械密封，工期2天' }
      ],
      tickets_required: ['用火作业票', '临时用电票', '起重作业票'],
      estimated_duration: '5天',
      estimated_workers: '机械3人 + 电气1人 + 工艺配合1人'
    }
  };

  // ---- 知识图谱数据 ----
  const KNOWLEDGE_GRAPH = {
    qc: {
      name: '质量攻关知识图谱',
      description: '产品-批次-指标-设备-原料-班组关联关系',
      nodes: [
        { id: 'n1', label: 'PVA 17-88', type: 'product', group: 1, desc: '聚乙烯醇17-88牌号' },
        { id: 'n2', label: 'PVA 17-99', type: 'product', group: 1, desc: '聚乙烯醇17-99牌号' },
        { id: 'n3', label: 'VAE 705', type: 'product', group: 1, desc: 'VAE乳液705牌号' },
        { id: 'n4', label: 'EVOH F104', type: 'product', group: 1, desc: 'EVOH F104牌号' },
        { id: 'n5', label: '粘度', type: 'indicator', group: 2, desc: '聚合度核心指标' },
        { id: 'n6', label: '挥发分', type: 'indicator', group: 2, desc: '残留单体含量' },
        { id: 'n7', label: '固含量', type: 'indicator', group: 2, desc: 'VAE乳液固含量' },
        { id: 'n8', label: '聚合釜R-201', type: 'equipment', group: 3, desc: '聚合反应核心设备' },
        { id: 'n9', label: '聚合釜R-202', type: 'equipment', group: 3, desc: '聚合反应备用设备' },
        { id: 'n10', label: '引发剂', type: 'material', group: 4, desc: '聚合反应引发剂' },
        { id: 'n11', label: '醋酸乙烯', type: 'material', group: 4, desc: '主要聚合单体' },
        { id: 'n12', label: '甲醇', type: 'material', group: 4, desc: '醇解反应溶剂' },
        { id: 'n13', label: '甲班', type: 'team', group: 5, desc: '聚合甲班' },
        { id: 'n14', label: '乙班', type: 'team', group: 5, desc: '聚合乙班' },
        { id: 'n15', label: '20260608批次', type: 'batch', group: 6, desc: '6月8日生产批次' },
        { id: 'n16', label: '20260615批次', type: 'batch', group: 6, desc: '6月15日生产批次' }
      ],
      edges: [
        { source: 'n1', target: 'n5', label: '指标' },
        { source: 'n2', target: 'n6', label: '指标' },
        { source: 'n3', target: 'n7', label: '指标' },
        { source: 'n1', target: 'n8', label: '生产设备' },
        { source: 'n1', target: 'n10', label: '使用' },
        { source: 'n1', target: 'n11', label: '原料' },
        { source: 'n1', target: 'n12', label: '溶剂' },
        { source: 'n1', target: 'n15', label: '生产批次' },
        { source: 'n1', target: 'n16', label: '生产批次' },
        { source: 'n8', target: 'n10', label: '投加' },
        { source: 'n8', target: 'n13', label: '操作班组' },
        { source: 'n8', target: 'n14', label: '操作班组' },
        { source: 'n15', target: 'n5', label: '粘度超标' },
        { source: 'n16', target: 'n5', label: '粘度超标' },
        { source: 'n5', target: 'n8', label: '影响因素' }
      ]
    },
    coal: {
      name: '热电配煤知识图谱',
      description: '煤种-煤质-价格-库存-锅炉-排放关联关系',
      nodes: [
        { id: 'c1', label: '神华烟煤', type: 'coal', group: 1, desc: '陕西神木产烟煤' },
        { id: 'c2', label: '山西无烟煤', type: 'coal', group: 1, desc: '山西晋城产无烟煤' },
        { id: 'c3', label: '陕西烟煤', type: 'coal', group: 1, desc: '陕西榆林产烟煤' },
        { id: 'c4', label: '内蒙褐煤', type: 'coal', group: 1, desc: '内蒙古产褐煤' },
        { id: 'c5', label: '进口印尼煤', type: 'coal', group: 1, desc: '印尼进口动力煤' },
        { id: 'c6', label: '热值', type: 'property', group: 2, desc: '发热量指标' },
        { id: 'c7', label: '硫分', type: 'property', group: 2, desc: '硫含量指标' },
        { id: 'c8', label: '灰分', type: 'property', group: 2, desc: '灰分含量指标' },
        { id: 'c9', label: '锅炉A', type: 'equipment', group: 3, desc: '热电锅炉A' },
        { id: 'c10', label: '锅炉B', type: 'equipment', group: 3, desc: '热电锅炉B' },
        { id: 'c11', label: '脱硫塔', type: 'equipment', group: 3, desc: '烟气脱硫装置' },
        { id: 'c12', label: '煤场', type: 'facility', group: 4, desc: '储煤场' }
      ],
      edges: [
        { source: 'c1', target: 'c6', label: '热值5800' },
        { source: 'c1', target: 'c7', label: '硫0.4%' },
        { source: 'c1', target: 'c8', label: '灰8.5%' },
        { source: 'c2', target: 'c6', label: '热值6500' },
        { source: 'c2', target: 'c7', label: '硫0.8%' },
        { source: 'c3', target: 'c6', label: '热值5500' },
        { source: 'c4', target: 'c6', label: '热值3800' },
        { source: 'c5', target: 'c6', label: '热值5200' },
        { source: 'c5', target: 'c7', label: '硫0.2%' },
        { source: 'c1', target: 'c9', label: '入炉' },
        { source: 'c2', target: 'c9', label: '入炉' },
        { source: 'c3', target: 'c9', label: '入炉' },
        { source: 'c4', target: 'c9', label: '入炉' },
        { source: 'c1', target: 'c10', label: '入炉' },
        { source: 'c5', target: 'c10', label: '入炉' },
        { source: 'c9', target: 'c11', label: '烟气' },
        { source: 'c10', target: 'c11', label: '烟气' },
        { source: 'c1', target: 'c12', label: '库存8500t' },
        { source: 'c2', target: 'c12', label: '库存3200t' },
        { source: 'c3', target: 'c12', label: '库存6200t' },
        { source: 'c4', target: 'c12', label: '库存12000t' }
      ]
    },
    maintenance: {
      name: '检修方案知识图谱',
      description: '装置-设备-工序-物料-风险-票证关联关系',
      nodes: [
        { id: 'm1', label: '合成反应器R-201', type: 'unit', group: 1, desc: 'PVA合成核心反应器' },
        { id: 'm2', label: '精馏塔T-301', type: 'unit', group: 1, desc: '甲醇精馏塔' },
        { id: 'm3', label: '压缩机组K-101', type: 'unit', group: 1, desc: '公用工程压缩机' },
        { id: 'm4', label: '聚合釜R-101', type: 'unit', group: 1, desc: '聚合反应釜' },
        { id: 'm5', label: '催化剂更换', type: 'procedure', group: 2, desc: '催化剂更换操作流程' },
        { id: 'm6', label: '塔盘清理', type: 'procedure', group: 2, desc: '精馏塔塔盘清理' },
        { id: 'm7', label: '轴瓦更换', type: 'procedure', group: 2, desc: '压缩机轴瓦更换' },
        { id: 'm8', label: '机械伤害', type: 'risk', group: 3, desc: '机械伤害风险' },
        { id: 'm9', label: '火灾爆炸', type: 'risk', group: 3, desc: '火灾爆炸风险' },
        { id: 'm10', label: '中毒窒息', type: 'risk', group: 3, desc: '中毒窒息风险' },
        { id: 'm11', label: '用火作业票', type: 'ticket', group: 4, desc: '动火作业审批' },
        { id: 'm12', label: '受限空间票', type: 'ticket', group: 4, desc: '受限空间作业审批' },
        { id: 'm13', label: '临时用电票', type: 'ticket', group: 4, desc: '临时用电审批' },
        { id: 'm14', label: '警戒隔离', type: 'measure', group: 5, desc: '作业区域隔离' },
        { id: 'm15', label: '气体检测', type: 'measure', group: 5, desc: '可燃有毒气体检测' }
      ],
      edges: [
        { source: 'm1', target: 'm5', label: '涉及工序' },
        { source: 'm2', target: 'm6', label: '涉及工序' },
        { source: 'm3', target: 'm7', label: '涉及工序' },
        { source: 'm5', target: 'm8', label: '风险' },
        { source: 'm5', target: 'm10', label: '风险' },
        { source: 'm6', target: 'm9', label: '风险' },
        { source: 'm6', target: 'm10', label: '风险' },
        { source: 'm7', target: 'm8', label: '风险' },
        { source: 'm5', target: 'm11', label: '需办理' },
        { source: 'm6', target: 'm11', label: '需办理' },
        { source: 'm6', target: 'm12', label: '需办理' },
        { source: 'm7', target: 'm13', label: '需办理' },
        { source: 'm7', target: 'm14', label: '需执行' },
        { source: 'm6', target: 'm15', label: '需执行' },
        { source: 'm5', target: 'm15', label: '需执行' }
      ]
    }
  };

  return {
    USERS,
    QC,
    COAL,
    MAINTENANCE,
    KNOWLEDGE_GRAPH
  };
})();
