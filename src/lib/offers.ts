import { Gamepad2, MessageSquare, Smartphone, Globe, Bitcoin, ShoppingBag, Tv } from "lucide-react";

export const CATEGORIES: Record<string, { label: string; icon: any }> = {
  all: { label: "All", icon: Globe }, games: { label: "Games", icon: Gamepad2 },
  surveys: { label: "Surveys", icon: MessageSquare }, apps: { label: "Apps", icon: Smartphone },
  offers: { label: "Offers", icon: Globe }, crypto: { label: "Crypto", icon: Bitcoin },
  shopping: { label: "Shopping", icon: ShoppingBag }, entertainment: { label: "Entertainment", icon: Tv },
};

export const OFFERS = [
  { id:"g1",name:"Sunshine Island",slug:"sunshine-island",category:"games",description:"Match & earn in this tropical puzzle adventure.",reward:391,rating:5.0,difficulty:"Medium",timeEstimate:"2-3 weeks",supportedOS:["ios","android"],countries:["US","GB","CA","DE","AU","NG"],featured:true,trending:true,color:"from-amber-400 to-orange-500",icon:Gamepad2 },
  { id:"g2",name:"Match Masters",slug:"match-masters",category:"games",description:"Play competitive PvP duels in this match-3 game.",reward:280,rating:5.0,difficulty:"Hard",timeEstimate:"3-4 weeks",supportedOS:["ios","android"],countries:["US","GB","CA","DE"],featured:true,color:"from-purple-500 to-pink-500",icon:Gamepad2 },
  { id:"g3",name:"Board Kings",slug:"board-kings",category:"games",description:"Build your board empire and earn gift cards.",reward:32,rating:5.0,difficulty:"Easy",timeEstimate:"1-2 days",supportedOS:["ios","android"],countries:["US","GB","CA","DE","AU","NG"],featured:true,color:"from-blue-500 to-cyan-500",icon:Gamepad2 },
  { id:"g4",name:"Dice Dreams",slug:"dice-dreams",category:"games",description:"Roll the dice and build your kingdom.",reward:5,rating:4.8,difficulty:"Easy",timeEstimate:"1 hour",supportedOS:["ios","android"],countries:["US","GB","CA","DE","AU","NG"],featured:true,color:"from-red-500 to-orange-500",icon:Gamepad2 },
  { id:"s1",name:"SurveyJunkie",slug:"survey-junkie",category:"surveys",description:"Share opinions and get paid instantly.",reward:2.5,rating:4.5,difficulty:"Easy",timeEstimate:"15 min",supportedOS:["web"],countries:["US","GB","CA"],color:"from-green-500 to-teal-500",icon:MessageSquare },
  { id:"s2",name:"Prime Opinion",slug:"prime-opinion",category:"surveys",description:"High-paying surveys from market researchers.",reward:3,rating:4.6,difficulty:"Easy",timeEstimate:"10-20 min",supportedOS:["web"],countries:["US","GB","CA","DE","AU"],color:"from-indigo-500 to-purple-500",icon:MessageSquare },
  { id:"a1",name:"AppKarma",slug:"app-karma",category:"apps",description:"Test new apps and earn rewards.",reward:1.5,rating:4.3,difficulty:"Easy",timeEstimate:"5 min",supportedOS:["android"],countries:["US","GB"],color:"from-rose-500 to-pink-500",icon:Smartphone },
  { id:"c1",name:"Coinbase Earn",slug:"coinbase-earn",category:"crypto",description:"Learn about crypto and earn free tokens.",reward:10,rating:4.8,difficulty:"Easy",timeEstimate:"20 min",supportedOS:["web"],countries:["US","GB","DE"],color:"from-blue-600 to-blue-400",icon:Bitcoin },
  { id:"sh1",name:"Amazon Prime Trial",slug:"amazon-prime",category:"shopping",description:"Free trial signup reward.",reward:3,rating:4.2,difficulty:"Easy",timeEstimate:"5 min",supportedOS:["web"],countries:["US","GB"],color:"from-blue-500 to-sky-400",icon:ShoppingBag },
];

export const PAYOUT_METHODS = ["Bitcoin","Ethereum","Litecoin","Dogecoin","PayPal","Bank Transfer","Amazon Gift Card","Google Play"];

export const CRYPTO_ADDRESSES: Record<string, string> = {
  btc: "bc1ql9j624q07ml9xpccx7t79hu9khcleyy03x9pxv",
  ltc: "ltc1qnh8gfs265dag0g6wn88f5sdxlra7ersg6tp2vs",
  doge: "DHC3A7uncFJpCMucx7ZFpT4gMCpRrSkfKz",
  eth: "0x06C4A6cE5f5D318dc92855B187Ea684D2663a20D",
};

export const LEVELS = [
  { level:1,name:"Bronze",minXP:0,color:"#CD7F32"},{ level:2,name:"Silver",minXP:100,color:"#C0C0C0"},
  { level:3,name:"Gold",minXP:500,color:"#FFD700"},{level:4,name:"Platinum",minXP:1500,color:"#E5E4E2"},
  { level:5,name:"Diamond",minXP:5000,color:"#B9F2FF"},{level:6,name:"Master",minXP:10000,color:"#7B68EE"},
  { level:7,name:"Legend",minXP:25000,color:"#FF4500"},{level:8,name:"Elite",minXP:50000,color:"#FF1493"},
];