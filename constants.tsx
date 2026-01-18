import { Activity, Globe, Shield, MessageCircle, Send, Mail, Twitter } from "lucide-react";
import { ServiceItem, TimelineItem, ContactItem } from "./types";

export const APP_NAME = "一级市场营销服务";
export const SUB_TITLE = "币圈业务 2022-2026 · 极简高效 · 价格美丽";
export const HERO_DESC = "我们支持 BSC, ETH, SOL, BTC, AVAX, ARB, Base, TON, SUI 等全主流公链，助力项目从 0 到 1 飞跃。";

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "平台收录与流量热搜",
    icon: Activity,
    features: [
      { label: "头像更新", description: "TP、AVE、Bitget、Dextools、Dexscreener、OKX/币安 Web3 钱包" },
      { label: "热度排名", description: "AVE 热搜、BSC/ETH 趋势榜、Dextools 排名、BTOK、DeBox 广告位" },
      { label: "权威收录", description: "CMC & CG 快速收录、知名交易所上币对接" }
    ]
  },
  {
    id: 2,
    title: "全球媒体与推特宣发",
    icon: Globe,
    features: [
      { label: "推特 (X) 运营", description: "大V推文转发、Space 线上会议、真人粉丝、蓝V认证代办" },
      { label: "媒体报道", description: "币安新闻/直播、星球日报、金色财经、海外百家主流媒体" },
      { label: "品牌视觉", description: "专业白皮书撰写、MG 动画宣传片、官网定制开发、时代广场纳斯达克大屏" }
    ]
  },
  {
    id: 3,
    title: "技术审计与市值背书",
    icon: Shield,
    features: [
      { label: "安全合规", description: "代码审计报告、CertiK 审计、美国 MSB 金融牌照申请" },
      { label: "市值维护", description: "项目管理、电报在线活跃度、真人水群氛围、明星视频祝福" }
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  { service: "头像/热搜 (TP / AVE / Dextools / Dexscreener)", time: "10 - 30 分钟" },
  { service: "主流快讯 (CMC / MyToken / Bitget)", time: "1 天内" },
  { service: "钱包认证 (币安 Web3 / OKX / Gate / KuCoin)", time: "1 - 3 天" },
  { service: "深度收录 (CG 收录 / CertiK 审计上线)", time: "3 - 5 天" },
  { service: "生态同步 (PancakeSwap Logo)", time: "7 天内" }
];

export const PARTNERS_LIST = [
  "梁山社区", "9527", "币道", "亮剑社区", "第一社区", "头号玩家", 
  "亚洲龙", "赌狗", "唐唐", "铁道游击队", "加密风暴", "西子", 
  "加密鲸", "熊猫国际", "币圈情报局", "以及其他15+头部社区"
];

export const CONTACT_DATA: ContactItem[] = [
  { 
    platform: "Telegram 主号", 
    value: "@H688888", 
    link: "https://t.me/H688888", 
    icon: Send,
    primary: true 
  },
  { 
    platform: "Telegram 备用", 
    value: "@H6888888", 
    link: "https://t.me/H6888888", 
    icon: Send 
  },
  { 
    platform: "微信 (WeChat)", 
    value: "LOVE_H688888", 
    note: "备注：业务咨询",
    icon: MessageCircle 
  },
  { 
    platform: "QQ 号码", 
    value: "610010254", 
    icon: MessageCircle 
  },
  { 
    platform: "紧急邮箱", 
    value: "29679519@qq.com", 
    link: "mailto:29679519@qq.com",
    icon: Mail 
  },
  {
    platform: "Twitter (X)",
    value: "@H_688888",
    link: "https://twitter.com/H_688888",
    icon: Twitter
  }
];
