import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════════
   DESIGN TOKENS — matched to target "Manrope / Royal Plum + Gold" system
═══════════════════════════════════════════════════════════════════ */
const C = {
  sidebar:"#171320", sidebarHov:"#1f1a2b", sidebarLine:"#2c2638",
  accent:"#c6a35a", goldSoft:"#d9bd80", goldDark:"#9c7e3c",
  maroon:"#9c7e3c", maroonL:"#b08e44",
  pink:"#e5396e",
  bg:"#f5f5f6", surface:"#ffffff", border:"#e9e9ec", border2:"#f0f0f2",
  text:"#1e1e28", textSub:"#8b8b97", textMute:"#b6b6bf",
  green:"#2fae6a", greenDk:"#1e8b50", greenBg:"#e8f6ef",
  amber:"#d99a2b", amberDk:"#a9760f", amberBg:"#fbf2e0",
  red:"#df4444",   redDk:"#c33",      redBg:"#fbeaea",
  blue:"#4a7fd1",  blueDk:"#3766b0",  blueBg:"#eaf1fb",
  teal:"#2fa3a3",  tealBg:"#e3f4f4",
  purple:"#8268c9",purpleBg:"#efeafb",
};

/* ═══════════════════════════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════════════════════════ */
const GS = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Manrope',-apple-system,BlinkMacSystemFont,sans-serif;background:${C.bg};color:${C.text};font-size:13px;-webkit-font-smoothing:antialiased;}
::-webkit-scrollbar{width:6px;height:6px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:#d6d6da;border-radius:3px;}

/* LAYOUT */
.layout{display:flex;height:100vh;overflow:hidden;}
.sidebar{width:242px;min-width:242px;background:${C.sidebar};display:flex;flex-direction:column;overflow-y:auto;padding-bottom:8px;}
.sidebar::-webkit-scrollbar-thumb{background:#2e2839;}
.sb-brand{display:flex;align-items:center;gap:11px;padding:20px 20px 18px;border-bottom:1px solid ${C.sidebarLine};}
.sb-logo{width:38px;height:38px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#e7cd8f,#bf9a4d 60%,#8c6f30);display:flex;align-items:center;justify-content:center;color:#1a1422;font-weight:800;font-size:14px;flex-shrink:0;box-shadow:0 0 0 3px rgba(198,163,90,.16);}
.sb-brand-text{color:#f4efe4;font-size:14px;font-weight:800;letter-spacing:.04em;line-height:1.1;}
.sb-brand-sub{color:${C.accent};font-size:9px;font-weight:600;letter-spacing:.3em;margin-top:3px;text-transform:uppercase;}
.sb-section{display:flex;align-items:center;gap:8px;padding:12px 16px 12px 20px;font-size:9.5px;font-weight:700;letter-spacing:.18em;color:#8a839b;text-transform:uppercase;cursor:pointer;user-select:none;border-radius:8px;margin:1px 8px;transition:all .14s;}
.sb-section:hover{color:#c9c2da;background:${C.sidebarHov};}
.sb-section.open{color:${C.goldSoft};}
.sb-chev{font-size:8px;color:inherit;opacity:.75;transition:transform .16s;flex-shrink:0;}
.sb-item{display:flex;align-items:center;gap:11px;padding:9px 13px;cursor:pointer;color:#b9b3c6;font-size:13px;font-weight:600;border-radius:9px;margin:2px 12px 2px 20px;border:1px solid transparent;transition:all .16s;}
.sb-item:hover{background:${C.sidebarHov};color:#e7e2f0;}
.sb-item.active{background:rgba(198,163,90,.13);color:${C.goldSoft};border-color:rgba(198,163,90,.28);}
.sb-dot{display:none;}
.sb-icon{font-size:14px;width:18px;text-align:center;flex-shrink:0;}
.sb-foot{padding:14px 22px 6px;font-size:10.5px;color:#5b5468;border-top:1px solid ${C.sidebarLine};font-weight:600;margin-top:8px;}
.main{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;}
.topbar{background:${C.surface};border-bottom:1px solid ${C.border};padding:0 26px;height:62px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
.tb-left{display:flex;flex-direction:column;}
.tb-title{font-size:16px;font-weight:800;letter-spacing:-.01em;color:${C.text};}
.tb-sub{font-size:12px;color:${C.textSub};font-weight:500;margin-top:1px;}
.tb-right{display:flex;align-items:center;gap:14px;}
.yr-pill{display:flex;align-items:center;gap:9px;background:#faf8f3;border:1px solid ${C.border};border-radius:9px;padding:7px 13px;font-size:12.5px;font-weight:600;color:#4a4456;cursor:pointer;}
.yr-pill .yr{background:rgba(198,163,90,.13);color:${C.goldDark};padding:2px 9px;border-radius:20px;font-size:11px;font-weight:700;}
.av{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;cursor:pointer;flex-shrink:0;}
.content{flex:1;overflow-y:auto;padding:24px 26px 50px;}

/* CARDS */
.card{background:${C.surface};border:1px solid ${C.border};border-radius:14px;overflow:hidden;box-shadow:0 1px 2px rgba(20,18,30,.04),0 6px 18px rgba(20,18,30,.05);}
.card-hd{padding:17px 20px;border-bottom:1px solid ${C.border2};display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
.card-title{font-size:14px;font-weight:800;color:${C.text};}
.card-sub{font-size:12px;color:${C.textSub};font-weight:500;margin-top:1px;}
.card-bd{padding:18px 20px;}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:7px;padding:9px 16px;border-radius:9px;font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid ${C.border};background:#fff;color:#4a4456;font-family:inherit;transition:all .15s;white-space:nowrap;}
.btn:hover{border-color:${C.accent};color:${C.goldDark};}
.btn-primary{background:linear-gradient(135deg,#c6a35a,#b08e44);color:#fff;border-color:transparent;}.btn-primary:hover{filter:brightness(1.06);color:#fff;border-color:transparent;}
.btn-accent{background:linear-gradient(135deg,#c6a35a,#b08e44);color:#fff;border-color:transparent;}.btn-accent:hover{filter:brightness(1.06);color:#fff;}
.btn-secondary{background:#fff;color:#4a4456;border:1px solid ${C.border};}.btn-secondary:hover{border-color:${C.accent};color:${C.goldDark};}
.btn-ghost{background:transparent;color:${C.textSub};padding:7px 10px;border:1px solid transparent;}.btn-ghost:hover{background:#faf8f3;color:${C.goldDark};}
.btn-sm{padding:6px 12px;font-size:11.5px;} .btn-xs{padding:4px 9px;font-size:10.5px;} .btn-lg{padding:11px 20px;font-size:13.5px;}
.btn-danger{background:${C.red};color:#fff;border-color:transparent;}
.btn-success{background:${C.green};color:#fff;border-color:transparent;}

/* BADGES */
.badge{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700;}
.b-green{background:${C.greenBg};color:${C.greenDk};} .b-amber{background:${C.amberBg};color:${C.amberDk};}
.b-red{background:${C.redBg};color:${C.redDk};} .b-blue{background:${C.blueBg};color:${C.blueDk};}
.b-teal{background:${C.tealBg};color:#1f8a8a;} .b-gray{background:#f0f0f3;color:#6e6878;}
.b-maroon{background:rgba(198,163,90,.15);color:${C.goldDark};} .b-gold{background:rgba(198,163,90,.18);color:${C.goldDark};}
.b-purple{background:${C.purpleBg};color:#6a52b0;}
.dot{width:6px;height:6px;border-radius:50%;display:inline-block;flex-shrink:0;}
.dot-g{background:${C.green};} .dot-a{background:${C.amber};} .dot-r{background:${C.red};}
.dot-b{background:${C.blue};} .dot-t{background:${C.teal};} .dot-p{background:${C.purple};}
.dot-gray{background:${C.textMute};}

/* TABLE */
.tbl{width:100%;border-collapse:collapse;}
.tbl th{text-align:left;padding:13px 18px;font-size:11px;font-weight:700;color:${C.textSub};text-transform:uppercase;letter-spacing:.03em;border-bottom:1px solid ${C.border2};background:#fff;white-space:nowrap;}
.tbl td{padding:13px 18px;font-size:13px;border-bottom:1px solid ${C.border2};vertical-align:middle;color:#3b3645;}
.tbl tr:last-child td{border-bottom:none;} .tbl tbody tr{transition:.12s;} .tbl tr:hover td{background:#fbfaf6;cursor:pointer;}

/* SEARCH */
.sbar{display:flex;align-items:center;gap:9px;background:${C.surface};border:1px solid ${C.border};border-radius:10px;padding:10px 14px;}
.sbar input{border:none;outline:none;background:transparent;font-size:13px;font-family:inherit;flex:1;color:${C.text};}
.sbar input::placeholder{color:${C.textSub};}
.sel{border:1px solid ${C.border};border-radius:9px;padding:9px 13px;font-size:12.5px;background:#fff;cursor:pointer;font-family:inherit;color:#4a4456;font-weight:600;}

/* TABS */
.tabs{display:flex;border-bottom:1px solid ${C.border};margin-bottom:18px;gap:4px;}
.tab{padding:9px 15px;font-size:12.5px;font-weight:700;color:${C.textSub};cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;transition:all .14s;}
.tab.active{color:${C.goldDark};border-bottom-color:${C.accent};} .tab:hover{color:${C.text};}

/* PROGRESS */
.pbar{background:#ededf0;border-radius:100px;overflow:hidden;}
.pfill{border-radius:100px;transition:width .4s ease;}

/* GRID */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}

/* FORM */
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px;}
.form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:14px;}
.form-label{font-size:11px;font-weight:700;color:${C.textSub};text-transform:uppercase;letter-spacing:.04em;}
.form-input{border:1px solid ${C.border};border-radius:9px;padding:9px 12px;font-size:13px;font-family:inherit;outline:none;background:#fff;color:${C.text};}
.form-input:focus{border-color:${C.accent};box-shadow:0 0 0 3px rgba(198,163,90,.12);}
.form-textarea{border:1px solid ${C.border};border-radius:9px;padding:9px 12px;font-size:13px;font-family:inherit;outline:none;background:#fff;color:${C.text};resize:vertical;min-height:72px;}
.form-textarea:focus{border-color:${C.accent};box-shadow:0 0 0 3px rgba(198,163,90,.12);}
.form-select{border:1px solid ${C.border};border-radius:9px;padding:9px 12px;font-size:13px;font-family:inherit;outline:none;background:#fff;color:${C.text};width:100%;}

/* DRAWER */
.drawer-overlay{position:fixed;inset:0;background:rgba(23,19,32,.4);z-index:200;display:flex;justify-content:flex-end;}
.drawer{width:460px;background:#fff;height:100vh;overflow-y:auto;box-shadow:-4px 0 30px rgba(20,18,30,.16);display:flex;flex-direction:column;}
.drawer-hd{padding:17px 20px;border-bottom:1px solid ${C.border2};display:flex;align-items:center;justify-content:space-between;background:${C.surface};position:sticky;top:0;z-index:1;}
.drawer-bd{padding:20px;flex:1;}
.drawer-section{font-size:10px;font-weight:700;color:${C.textSub};text-transform:uppercase;letter-spacing:.08em;padding:14px 0 7px;border-bottom:1px solid ${C.border2};margin-bottom:11px;}

/* STAT CARDS (simple) */
.stat-card{background:${C.surface};border:1px solid ${C.border};border-radius:14px;padding:16px;display:flex;flex-direction:column;gap:4px;box-shadow:0 1px 2px rgba(20,18,30,.04),0 6px 18px rgba(20,18,30,.05);}
.stat-val{font-size:22px;font-weight:800;line-height:1;letter-spacing:-.02em;}
.stat-label{font-size:11.5px;color:${C.textSub};font-weight:600;}
.stat-delta{font-size:10px;font-weight:700;margin-top:2px;}

/* STAT DONUT (KPI) */
.stat{background:${C.surface};border:1px solid ${C.border};border-radius:14px;padding:16px;box-shadow:0 1px 2px rgba(20,18,30,.04),0 6px 18px rgba(20,18,30,.05);}
.stat-donut{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:11px;}
.stat-donut i{width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:800;font-size:13px;color:${C.text};}
.stat-lbl{font-size:11.5px;color:${C.textSub};font-weight:600;}
.stat-big{font-size:22px;font-weight:800;margin:2px 0 10px;letter-spacing:-.02em;color:${C.text};}
.stat-mf{display:flex;gap:8px;}
.stat-mf span{flex:1;text-align:center;border:1px solid ${C.border2};border-radius:8px;padding:5px 0;font-size:11px;font-weight:700;color:#5a5468;}
.stat-mf span small{display:block;font-size:9px;color:${C.textMute};font-weight:600;margin-top:1px;}

/* SCORE RING (conic) */
.ringc{border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;flex-shrink:0;}
.ringc i{border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-style:normal;}

/* TIMELINE */
.timeline{display:flex;flex-direction:column;}
.tl-item{display:flex;gap:13px;padding-bottom:16px;position:relative;}
.tl-dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;font-weight:800;}
.tl-line{position:absolute;left:13px;top:28px;bottom:0;width:2px;background:${C.border};}
.tl-item:last-child .tl-line{display:none;}
.tl-content{flex:1;padding-top:4px;}

/* CHECKLIST */
.chk-item{display:flex;align-items:center;gap:11px;padding:11px 13px;border:1px solid ${C.border};border-radius:10px;margin-bottom:7px;cursor:pointer;transition:all .14s;}
.chk-item:hover{border-color:${C.accent};background:#fbfaf6;}
.chk-item.done{background:${C.greenBg};border-color:#bfe6cf;}
.chk-box{width:18px;height:18px;border-radius:5px;border:2px solid ${C.border};display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.chk-box.done{background:${C.green};border-color:${C.green};color:#fff;font-size:10px;}

/* CAND CARD */
.ccard{background:#fff;border:1px solid ${C.border};border-radius:11px;padding:12px;cursor:pointer;transition:all .14s;}
.ccard:hover{border-color:${C.accent};box-shadow:0 4px 14px rgba(198,163,90,.12);transform:translateY(-1px);}
.cav{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;color:#fff;}

/* TOGGLE */
.toggle{width:34px;height:19px;border-radius:20px;cursor:pointer;position:relative;transition:background .18s;flex-shrink:0;}
.toggle-thumb{width:15px;height:15px;border-radius:50%;background:#fff;position:absolute;top:2px;transition:left .18s;box-shadow:0 1px 3px rgba(0,0,0,.2);}

/* RISK TABLE */
.risk-crit{background:#fdf0f0;} .risk-warn{background:#fdf8ec;} .risk-ok{background:#eef9f2;}

/* CRITERIA BAR */
.crit-row{margin-bottom:16px;}
.crit-hd{display:flex;justify-content:space-between;margin-bottom:6px;font-size:12.5px;}
.crit-bar{background:#ededf0;border-radius:6px;height:9px;overflow:hidden;}
.crit-fill{height:100%;border-radius:6px;background:linear-gradient(90deg,#c6a35a,#d9bd80);}

/* ANIMATION */
@keyframes fadeUp{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
.page-in{animation:fadeUp .3s ease;}
@keyframes slideIn{from{transform:translateX(100%);}to{transform:translateX(0);}}
.drawer{animation:slideIn .2s ease;}
`;

/* ═══════════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════════ */
const AV_COLORS=["#c6a35a","#3766b0","#2fae6a","#9c7e3c","#df4444","#1f8a8a","#b08e44","#8268c9","#4a7fd1","#a9760f"];
function Av({name,size=30,idx=0}){
  const init=name.split(" ").filter(Boolean).map(w=>w[0]).join("").toUpperCase().slice(0,2);
  return <div className="cav" style={{width:size,height:size,fontSize:size*.38,background:AV_COLORS[idx%AV_COLORS.length]}}>{init}</div>;
}

function Ring({score,size=46}){
  const col=score>=80?C.green:score>=60?C.amber:C.red;
  const inner=size-12;
  return (
    <div className="ringc" style={{width:size,height:size,fontSize:size*.28,background:`conic-gradient(${col} ${score}%, #ededf0 0)`}}>
      <i style={{width:inner,height:inner,color:col}}>{score}</i>
    </div>
  );
}

function Donut({value,max,color,label,splits}){
  const pct=Math.min(value/max,1)*100;
  return(
    <div className="stat">
      <div className="stat-donut" style={{background:`conic-gradient(${color} ${pct}%, #ededf0 0)`}}>
        <i>{value}</i>
      </div>
      <div className="stat-lbl">{label}</div>
      <div className="stat-big">{value}</div>
      {splits&&<div className="stat-mf">
        {splits.map(s=><span key={s.l}>{s.v}<small>{s.l}</small></span>)}
      </div>}
    </div>
  );
}

function PBar({pct,color,height=6}){
  return(
    <div className="pbar" style={{height}}>
      <div className="pfill" style={{width:`${pct}%`,background:color,height:"100%"}}/>
    </div>
  );
}

function Toggle({on,onChange}){
  return(
    <div className="toggle" style={{background:on?C.accent:"#dcdce0"}} onClick={()=>onChange&&onChange(!on)}>
      <div className="toggle-thumb" style={{left:on?"17px":"2px"}}/>
    </div>
  );
}

function Chk({done,label,sub,onToggle}){
  return(
    <div className={`chk-item ${done?"done":""}`} onClick={onToggle}>
      <div className={`chk-box ${done?"done":""}`}>{done&&"✓"}</div>
      <div style={{flex:1}}>
        <div style={{fontSize:12.5,fontWeight:done?600:700,color:done?C.textSub:C.text,textDecoration:done?"line-through":"none"}}>{label}</div>
        {sub&&<div style={{fontSize:10.5,color:C.textMute,marginTop:1}}>{sub}</div>}
      </div>
    </div>
  );
}

function TLItem({icon,bgColor,iconColor,title,sub,done}){
  return(
    <div className="tl-item">
      <div className="tl-line"/>
      <div className="tl-dot" style={{background:done?C.green:bgColor,color:done?"#fff":iconColor,border:`2px solid ${done?C.green:bgColor}`}}>{done?"✓":icon}</div>
      <div className="tl-content">
        <div style={{fontSize:12.5,fontWeight:800,color:done?C.textSub:C.text}}>{title}</div>
        {sub&&<div style={{fontSize:11.5,color:C.textMute,marginTop:2}}>{sub}</div>}
      </div>
    </div>
  );
}

function SearchBar({placeholder,width}){
  return(
    <div className="sbar" style={width?{width}:{flex:1,minWidth:240}}>
      <span style={{color:C.textMute,fontSize:14}}>⌕</span>
      <input placeholder={placeholder||"Search…"}/>
    </div>
  );
}

function FiltersRow({children}){
  return <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:18,flexWrap:"wrap"}}>{children}</div>;
}

/* ═══════════════════════════════════════════════════════════════════
   SIDEBAR / NAV DATA
═══════════════════════════════════════════════════════════════════ */
const NAV=[
  {sec:"RECRUITMENT"},
  {id:"dashboard",        label:"Dashboard",             icon:"⊞"},
  {id:"positions",        label:"Position Management",   icon:"📋"},
  {id:"job-ads",          label:"Job Advertising",       icon:"📢"},
  {id:"candidates",       label:"Candidate Database",    icon:"👥"},
  {id:"ai-screening",     label:"AI Screening",          icon:"✦"},
  {id:"interviews",       label:"Interviews & Scorecards",icon:"📅"},
  {id:"ai-interview",     label:"AI Interview Agent",    icon:"🤖"},
  {id:"referee",          label:"Referee Checks",        icon:"📞"},
  {id:"offers",           label:"Offers & Contracts",    icon:"📄"},
  {id:"overseas",         label:"Overseas Recruitment",  icon:"🌏"},
  {sec:"ONBOARDING & COMPLIANCE"},
  {id:"onboarding",       label:"Onboarding Workflows",  icon:"🏫"},
  {id:"induction",        label:"Induction & Training",  icon:"🎓"},
  {id:"compliance",       label:"Compliance Tracking",   icon:"🛡"},
  {id:"visa",             label:"Visa Management",       icon:"✈"},
  {sec:"WORKFORCE & RECORDS"},
  {id:"employees",        label:"Employee Records",      icon:"👤"},
  {id:"doc-templates",    label:"Document Templates",    icon:"📝"},
  {id:"tasks",            label:"Tasks & Acknowledgements",icon:"✅"},
  {id:"comms",            label:"Communications",        icon:"💬"},
  {sec:"TIME"},
  {id:"my-leave",         label:"My Leave",               icon:"🌴"},
  {id:"leave-mgmt",       label:"Leave Management",       icon:"🗃"},
  {id:"rostering",        label:"Rostering Management",   icon:"🕐"},
  {id:"timesheets",       label:"Timesheets Management",  icon:"⏱"},
  {sec:"PAYROLL"},
  {id:"pay-runs",         label:"Pay Runs",               icon:"💵"},
  {id:"stp",              label:"Single Touch Payroll",   icon:"📡"},
  {id:"super",            label:"Super Payments",         icon:"🏦"},
  {id:"payslips",         label:"Pay Slips",              icon:"🧾"},
  {id:"expense-claims",   label:"Expense Claims",         icon:"💳"},
  {id:"expenses-mgmt",    label:"Expenses Management",    icon:"🧮"},
  {id:"compensation",     label:"Compensation Management",icon:"💰"},
  {sec:"PEOPLE OPERATIONS"},
  {id:"engagement",       label:"Engagement",             icon:"📣"},
  {id:"development",      label:"Development",            icon:"🌱"},
  {id:"performance",      label:"Performance",            icon:"🎯"},
  {id:"benefits",         label:"Benefits & Perks",       icon:"🎁"},
  {sec:"SYSTEM"},
  {id:"workflow-designer",label:"Workflow Designer",     icon:"⚙"},
  {id:"reporting",        label:"Reporting & Exports",   icon:"📊"},
  {id:"integrations",     label:"Integrations Hub",      icon:"🔗"},
  {sec:"ADMINISTRATION"},
  {id:"permissions",      label:"Permissions",           icon:"🔒"},
  {id:"billing",          label:"Billing",               icon:"🏷"},
  {id:"audit",            label:"Audit Log",             icon:"🗒"},
];

// Maps each item id to the section header it falls under, so the sidebar can collapse by section.
const SECTION_OF: Record<string,string> = {};
{
  let cur = "";
  NAV.forEach(it=>{ if(it.sec) cur = it.sec; else SECTION_OF[it.id] = cur; });
}

const PAGE_META={
  dashboard:         {title:"Recruitment Dashboard",       sub:"Pipeline overview · 2026–2027 hiring cycle"},
  positions:         {title:"Position Management",          sub:"Position register · approval tracking · version history"},
  "job-ads":         {title:"Job Advertising",              sub:"Active & draft advertisements · channel performance"},
  candidates:        {title:"Candidate Database",           sub:"All applicants · search, filter & profile drawer"},
  "ai-screening":    {title:"AI Screening",                 sub:"Explainable candidate fit scoring · Science Coordinator · REQ-2038"},
  interviews:        {title:"Interviews & Scorecards",      sub:"Panel scheduling · scorecards · comparison view"},
  "ai-interview":    {title:"AI Interview Agent",           sub:"Video · voice · written interview analysis"},
  referee:           {title:"Referee Checks",               sub:"Email & voice referee workflows · child safety assessment"},
  offers:            {title:"Offers & Contracts",           sub:"Generate, send & track employment offers · e-signature"},
  overseas:          {title:"Overseas Recruitment",         sub:"Visa · IELTS · VIT · sponsorship pipeline dashboard"},
  onboarding:        {title:"Onboarding Workflows",         sub:"New starter checklist · tax · super · IT provisioning"},
  induction:         {title:"Induction & Training",         sub:"Mandatory training dashboard · completion tracking · certificates"},
  compliance:        {title:"Compliance Tracking",          sub:"WWCC · VIT · Visa · First Aid · risk dashboard · audit trail"},
  "my-leave":        {title:"My Leave",                     sub:"Request leave & track your balances"},
  "leave-mgmt":      {title:"Leave Management",              sub:"Approve requests · monitor coverage · track liability"},
  rostering:         {title:"Rostering Management",          sub:"Weekly staff roster · shift coverage"},
  timesheets:        {title:"Timesheets Management",         sub:"Casual & part-time hours · approval for payroll"},
  "pay-runs":        {title:"Pay Runs",                     sub:"Fortnightly payroll schedule · draft, review & lodge"},
  stp:               {title:"Single Touch Payroll",         sub:"Every pay event reported to the ATO · STP Phase 2"},
  super:             {title:"Super Payments",                sub:"Payday Super · contributions paid every pay day"},
  payslips:          {title:"Pay Slips",                     sub:"Employee self-service pay slip history"},
  "expense-claims":  {title:"Expense Claims",                sub:"Staff reimbursement claims · receipts & approvals"},
  "expenses-mgmt":   {title:"Expenses Management",           sub:"Approve, decline & reconcile staff expense claims"},
  compensation:      {title:"Compensation Management",       sub:"Remuneration reviews · salary bands · approvals"},
  engagement:        {title:"Engagement",                    sub:"Recognition, values, surveys & exit interviews"},
  development:       {title:"Development",                   sub:"1:1 coaching conversations & peer feedback"},
  performance:       {title:"Performance",                   sub:"Goals · 360 reviews · performance reviews · 9-box grid"},
  benefits:          {title:"Benefits & Perks",               sub:"Benefits, reward points & staff discount marketplace"},
  billing:           {title:"Billing",                        sub:"Platform subscription & invoice history"},
  permissions:       {title:"Permission Management",        sub:"Role-based access control · 94 atomic permissions"},
  audit:             {title:"Audit Log",                    sub:"Immutable activity trail · AI-decision & data events"},
};

/* ═══════════════════════════════════════════════════════════════════
   SHARED WORKFORCE / PAYROLL DATA
   (Single roster used by Employee Records AND the Payroll module —
    extended with award / rate / super fund / pay status fields.)
═══════════════════════════════════════════════════════════════════ */
const EMPLOYEES=[
  {id:"EMP-0412",name:"Maryam Iqbal",role:"Primary Teacher",dept:"Primary",fte:"1.0",type:"Ongoing",start:"22 Jan 2021",mgr:"Head of Primary",status:"Active",por:["Year 5 Coordinator"],idx:1,
   award:"Teachers EA",rate:"$98,400 / yr",fund:"Aware Super",payStatus:"Active"},
  {id:"EMP-0398",name:"Fatima Nasser",role:"Wellbeing Coordinator",dept:"Wellbeing",fte:"0.8",type:"Ongoing",start:"10 Feb 2020",mgr:"Deputy Principal",status:"Active",por:["Child Safety Officer","First Aid Lead"],idx:2,
   award:"Support Staff Award",rate:"$58,000 / yr",fund:"REST",payStatus:"Active"},
  {id:"EMP-0377",name:"Ahmed Khan",role:"IT Operations Lead",dept:"Operations",fte:"1.0",type:"Ongoing",start:"05 Jul 2019",mgr:"Business Manager",status:"Active",por:["ICT Coordinator"],idx:3,
   award:"Support Staff Award",rate:"$86,000 / yr",fund:"AustralianSuper",payStatus:"Active"},
  {id:"EMP-0440",name:"Hassan Malik",role:"Mathematics Teacher",dept:"Secondary",fte:"1.0",type:"Fixed-Term",start:"28 Jan 2025",mgr:"Head of Secondary",status:"Active",por:[],idx:1,
   award:"Teachers EA",rate:"$92,100 / yr",fund:"HESTA",payStatus:"Active"},
  {id:"EMP-0356",name:"Rania Hadid",role:"Head of Secondary",dept:"Secondary",fte:"1.0",type:"Ongoing",start:"14 Jan 2018",mgr:"Principal",status:"Active",por:["Head of Secondary","Timetabling Lead"],idx:4,
   award:"Leadership EA",rate:"$132,500 / yr",fund:"UniSuper",payStatus:"Active"},
  {id:"EMP-0291",name:"Omar Aziz",role:"Primary Teacher",dept:"Primary",fte:"0.6",type:"Part-Time",start:"03 Feb 2022",mgr:"Head of Primary",status:"On Leave",por:[],idx:5,
   award:"Teachers EA",rate:"$58.10 / hr",fund:"Aware Super",payStatus:"On Hold"},
];

const PAYRUNS=[
  {period:"Fortnight ending 12 Jul 2026",pay:"14 Jul 2026",status:"Draft",emps:218,gross:412600},
  {period:"Fortnight ending 28 Jun 2026",pay:"30 Jun 2026",status:"STP Lodged",emps:216,gross:409800},
  {period:"Fortnight ending 14 Jun 2026",pay:"16 Jun 2026",status:"STP Lodged",emps:215,gross:407200},
  {period:"Fortnight ending 31 May 2026",pay:"02 Jun 2026",status:"STP Lodged",emps:214,gross:404900},
  {period:"Fortnight ending 17 May 2026",pay:"19 May 2026",status:"STP Lodged",emps:214,gross:403100},
];

const LEAVE=[
  {name:"Omar Aziz",   idx:5, type:"Annual leave",         dates:"8–19 Jul 2026",  days:10, status:"Pending"},
  {name:"Hassan Malik",idx:1, type:"Personal / carer's",   dates:"3 Aug 2026",     days:1,  status:"Pending"},
  {name:"Rania Hadid", idx:4, type:"Long service leave",   dates:"1–12 Sep 2026",  days:10, status:"Pending"},
  {name:"Maryam Iqbal",idx:1, type:"Annual leave",         dates:"22–26 Sep 2026", days:5,  status:"Approved"},
  {name:"Fatima Nasser",idx:2,type:"Personal / carer's",   dates:"26 Jun 2026",    days:1,  status:"Approved"},
];

const SUPER_FUNDS=[
  {fund:"AustralianSuper",employees:62,amount:29760},
  {fund:"Aware Super",    employees:58,amount:27840},
  {fund:"HESTA",          employees:41,amount:19680},
  {fund:"UniSuper",       employees:24,amount:11520},
  {fund:"REST",           employees:20,amount:9600},
  {fund:"Hostplus",       employees:13,amount:6240},
];

const money=(n:number)=>"$"+Math.round(n).toLocaleString("en-AU");

/* small inline-SVG trend chart — no chart-library dependency */
function TrendChart({data,color=C.accent,height=110}:{data:number[];color?:string;height?:number}){
  const w=100,min=Math.min(...data),max=Math.max(...data),range=(max-min)||1;
  const pts=data.map((v,i)=>`${(i/(data.length-1))*w},${height-((v-min)/range)*(height-14)-6}`).join(" ");
  const areaPts=`0,${height} ${pts} ${w},${height}`;
  return(
    <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" style={{width:"100%",height,display:"block"}}>
      <polygon points={areaPts} fill={color} opacity={0.12}/>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.6} vectorEffect="non-scaling-stroke"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: DASHBOARD
═══════════════════════════════════════════════════════════════════ */
function PageDashboard({nav}){
  const kpis=[
    {v:54,max:80,color:C.accent,label:"Open Positions",splits:[{v:21,l:"Teaching"},{v:33,l:"Non-Teach"}]},
    {v:812,max:1000,color:C.blue,label:"Total Applicants",splits:[{v:463,l:"New"},{v:349,l:"Active"}]},
    {v:241,max:812,color:C.teal,label:"AI Screened",splits:[{v:168,l:"Pass"},{v:73,l:"Review"}]},
    {v:96,max:241,color:C.amber,label:"Interviewed",splits:[{v:58,l:"Done"},{v:38,l:"Booked"}]},
    {v:34,max:96,color:C.green,label:"Offers Out",splits:[{v:22,l:"Signed"},{v:12,l:"Pending"}]},
    {v:19,max:34,color:C.maroon,label:"Onboarding",splits:[{v:11,l:"In Prog"},{v:8,l:"Closed"}]},
  ];
  const pipeline=[
    {label:"Applications",count:812,pct:100,color:C.blueDk},
    {label:"AI Screened", count:241,pct:30, color:C.blue},
    {label:"Shortlisted", count:154,pct:19, color:C.accent},
    {label:"Interviewed", count:96, pct:12, color:C.maroonL},
    {label:"Offer Stage", count:34, pct:4,  color:C.green},
    {label:"Hired",       count:19, pct:2.3,color:C.greenDk},
  ];
  const reqs=[
    {id:"REQ-2041",pos:"Year 4 Classroom Teacher",dept:"Primary",campus:"Epping",apps:87,stage:"Interview",mgr:"M. Omar",mgrI:0,sc:"b-green",st:"On Track"},
    {id:"REQ-2038",pos:"Science Coordinator",dept:"Secondary",campus:"Epping",apps:52,stage:"AI Screening",mgr:"S. Ahmed",mgrI:1,sc:"b-amber",st:"Action Needed"},
    {id:"REQ-2035",pos:"Learning Support Officer",dept:"Wellbeing",campus:"Online",apps:41,stage:"Shortlist",mgr:"F. Nasser",mgrI:2,sc:"b-green",st:"On Track"},
    {id:"REQ-2030",pos:"IT Support Technician",dept:"Operations",campus:"Epping",apps:29,stage:"Offer",mgr:"A. Khan",mgrI:3,sc:"b-blue",st:"Offer Sent"},
    {id:"REQ-2026",pos:"Mathematics Teacher",dept:"Secondary",campus:"Epping",apps:18,stage:"Sourcing",mgr:"R. Hadid",mgrI:4,sc:"b-red",st:"Low Volume"},
  ];
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search positions, candidates, requisitions…" width={340}/>
        <select className="sel"><option>Department  All</option></select>
        <select className="sel"><option>Campus  All</option></select>
        <button className="btn btn-primary" onClick={()=>nav("positions")}>+ New Requisition</button>
      </FiltersRow>
      <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:14,marginBottom:16}}>
        {kpis.map(k=><Donut key={k.label} value={k.v} max={k.max} color={k.color} label={k.label} splits={k.splits}/>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:16,marginBottom:16}}>
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Recruitment Pipeline</div><div className="card-sub">Conversion across the hiring funnel</div></div></div>
          <div className="card-bd">
            {pipeline.map(p=>(
              <div key={p.label} style={{display:"flex",alignItems:"center",gap:10,marginBottom:9}}>
                <div style={{fontSize:12.5,fontWeight:700,width:95,color:"#4a4456"}}>{p.label}</div>
                <div style={{flex:1,background:"#ededf0",borderRadius:8,height:22,overflow:"hidden"}}>
                  <div style={{width:`${p.pct}%`,height:"100%",background:p.color,display:"flex",alignItems:"center",padding:"0 10px",fontSize:11,fontWeight:800,color:"#fff",transition:"width .5s"}}>{p.count}</div>
                </div>
                <div style={{fontSize:11,color:C.textSub,width:36,textAlign:"right",fontWeight:700}}>{p.count}</div>
                <div style={{fontSize:10.5,color:C.textMute,width:36,fontWeight:600}}>{p.pct}%</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-hd"><div className="card-title">Quick Actions</div></div>
          <div className="card-bd" style={{display:"flex",flexDirection:"column",gap:8}}>
            {[
              {label:"Create Position Request",icon:"📋",page:"positions"},
              {label:"Post New Advertisement",icon:"📢",page:"job-ads"},
              {label:"Review AI Screening",icon:"✦",page:"ai-screening"},
              {label:"Check Compliance Alerts",icon:"🛡",page:"compliance"},
              {label:"Onboarding Progress",icon:"🏫",page:"onboarding"},
            ].map(a=>(
              <button key={a.label} className="btn btn-secondary" style={{justifyContent:"flex-start",gap:10}} onClick={()=>nav(a.page)}>
                <span style={{fontSize:14}}>{a.icon}</span>{a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-hd">
          <div><div className="card-title">Open Requisitions</div><div className="card-sub">Active hiring requests requiring action</div></div>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
        </div>
        <table className="tbl">
          <thead><tr><th>REQ ID</th><th>POSITION</th><th>DEPARTMENT</th><th>CAMPUS</th><th>APPLICANTS</th><th>STAGE</th><th>HIRING MANAGER</th><th>STATUS</th></tr></thead>
          <tbody>
            {reqs.map(r=>(
              <tr key={r.id} onClick={()=>nav("candidates")}>
                <td><span style={{fontFamily:"ui-monospace,monospace",fontSize:11.5,fontWeight:700,color:C.goldDark}}>{r.id}</span></td>
                <td style={{fontWeight:700,color:C.text}}>{r.pos}</td>
                <td style={{color:C.textSub}}>{r.dept}</td>
                <td style={{color:C.textSub}}>{r.campus}</td>
                <td style={{fontWeight:800}}>{r.apps}</td>
                <td><span className="badge b-gray">{r.stage}</span></td>
                <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.mgr} size={26} idx={r.mgrI}/><span>{r.mgr}</span></div></td>
                <td><span className={`badge ${r.sc}`}><span className={`dot dot-${r.sc==="b-green"?"g":r.sc==="b-amber"?"a":r.sc==="b-red"?"r":"b"}`}/>{r.st}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: POSITION MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
function PagePositions(){
  const [tab,setTab]=useState("list");
  const [showForm,setShowForm]=useState(false);
  const positions=[
    {id:"POS-0041",title:"Mathematics Teacher",dept:"Secondary",campus:"Epping",type:"Full-Time",reports:"Head of Secondary",status:"Pending Approval",version:"v1.2",vacancies:1,idx:0},
    {id:"POS-0039",title:"Science Coordinator",dept:"Secondary",campus:"Epping",type:"Full-Time",reports:"Deputy Principal",status:"Approved",version:"v2.0",vacancies:1,idx:1},
    {id:"POS-0037",title:"Year 4 Classroom Teacher",dept:"Primary",campus:"Epping",type:"Full-Time",reports:"Head of Primary",status:"Approved",version:"v3.1",vacancies:2,idx:2},
    {id:"POS-0035",title:"Learning Support Officer",dept:"Wellbeing",campus:"Online",type:"Part-Time",reports:"Wellbeing Coordinator",status:"Approved",version:"v1.0",vacancies:1,idx:3},
    {id:"POS-0033",title:"Arabic Language Teacher",dept:"Languages",campus:"Epping",type:"Full-Time",reports:"Head of Languages",status:"Under Review",version:"v1.1",vacancies:1,idx:4},
    {id:"POS-0031",title:"IT Support Technician",dept:"Operations",campus:"Epping",type:"Full-Time",reports:"Business Manager",status:"Approved",version:"v2.2",vacancies:1,idx:5},
    {id:"POS-0028",title:"Teacher Aide — Year 1",dept:"Primary",campus:"Epping",type:"Casual",reports:"Head of Primary",status:"Draft",version:"v1.0",vacancies:3,idx:6},
  ];
  const history=[
    {ver:"v1.2",by:"S. Ahmed",date:"08 Jun 2026",note:"Updated salary band to Band 2"},
    {ver:"v1.1",by:"M. Omar",date:"02 Jun 2026",note:"Added mandatory VIT requirement"},
    {ver:"v1.0",by:"R. Hadid",date:"28 May 2026",note:"Initial position description created"},
  ];
  const statusBadge=s=>({"Approved":"b-green","Pending Approval":"b-amber","Under Review":"b-blue","Draft":"b-gray"}[s]||"b-gray");

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search positions, departments…" width={280}/>
        <select className="sel"><option>Department  All</option></select>
        <select className="sel"><option>Status  All</option></select>
        <select className="sel"><option>Campus  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
          <button className="btn btn-primary" onClick={()=>setShowForm(true)}>+ New Position</button>
        </div>
      </FiltersRow>

      <div className="g4" style={{marginBottom:16}}>
        {[
          {v:54,label:"Total Positions",color:C.goldDark},
          {v:12,label:"Open Vacancies",color:C.amber},
          {v:7, label:"Pending Approval",color:C.blue},
          {v:3, label:"Draft",color:C.textMute},
        ].map(s=>(
          <div key={s.label} className="stat-card">
            <div className="stat-val" style={{color:s.color}}>{s.v}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="tabs">
        {["list","history"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="list"?"Position Register":"Version History"}</div>)}
      </div>

      {tab==="list"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>POS ID</th><th>POSITION TITLE</th><th>DEPARTMENT</th><th>CAMPUS</th><th>TYPE</th><th>REPORTS TO</th><th>VACANCIES</th><th>VERSION</th><th>STATUS</th><th></th></tr></thead>
            <tbody>
              {positions.map(p=>(
                <tr key={p.id}>
                  <td><span style={{fontFamily:"ui-monospace,monospace",fontSize:11.5,fontWeight:700,color:C.goldDark}}>{p.id}</span></td>
                  <td><div style={{fontWeight:700,color:C.text}}>{p.title}</div></td>
                  <td style={{color:C.textSub}}>{p.dept}</td>
                  <td style={{color:C.textSub}}>{p.campus}</td>
                  <td><span className="badge b-gray">{p.type}</span></td>
                  <td style={{color:C.textSub,fontSize:11.5}}>{p.reports}</td>
                  <td><div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:7,height:7,borderRadius:"50%",background:p.vacancies>0?C.green:C.textMute}}/><span style={{fontWeight:800}}>{p.vacancies}</span></div></td>
                  <td><span style={{fontFamily:"ui-monospace,monospace",fontSize:11.5,color:C.textSub}}>{p.version}</span></td>
                  <td><span className={`badge ${statusBadge(p.status)}`}>{p.status}</span></td>
                  <td><div style={{display:"flex",gap:4}}><button className="btn btn-ghost btn-xs">Edit</button><button className="btn btn-ghost btn-xs">PD</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="history"&&(
        <div className="g2">
          <div className="card">
            <div className="card-hd"><div className="card-title">Mathematics Teacher — POS-0041</div><span className="badge b-amber">Pending Approval</span></div>
            <div className="card-bd">
              <div className="timeline">
                {history.map((h,i)=>(
                  <TLItem key={h.ver} icon={h.ver} bgColor={i===0?C.accent:"#f0f0f3"} iconColor={i===0?"#fff":C.textSub} title={`${h.ver} — ${h.by}`} sub={`${h.date} · ${h.note}`} done={false}/>
                ))}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Approval Chain</div></div>
            <div className="card-bd">
              {[
                {name:"R. Hadid",role:"Hiring Manager",status:"Approved",date:"28 May",idx:4,done:true},
                {name:"Dr. A. Rashid",role:"Principal",status:"Pending",date:"—",idx:2,done:false},
                {name:"M. Omar",role:"HR Manager",status:"Waiting",date:"—",idx:0,done:false},
              ].map((a,i)=>(
                <div key={a.name}>
                  <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",background:a.done?C.greenBg:i===1?"#fdf8ec":"#fafafa",borderRadius:10,border:`1px solid ${a.done?"#bfe6cf":i===1?"#f3e3bd":C.border}`,marginBottom:4}}>
                    <Av name={a.name} size={32} idx={a.idx}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:12.5,fontWeight:800}}>{a.name}</div>
                      <div style={{fontSize:11.5,color:C.textSub}}>{a.role}</div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <span className={`badge ${a.done?"b-green":i===1?"b-amber":"b-gray"}`}>{a.status}</span>
                      <div style={{fontSize:10,color:C.textMute,marginTop:2}}>{a.date}</div>
                    </div>
                  </div>
                  {i<2&&<div style={{textAlign:"center",color:C.textMute,fontSize:16,padding:"2px 0"}}>↓</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showForm&&(
        <div className="drawer-overlay" onClick={()=>setShowForm(false)}>
          <div className="drawer" onClick={e=>e.stopPropagation()}>
            <div className="drawer-hd">
              <div><div style={{fontSize:15,fontWeight:800}}>New Position Request</div><div style={{fontSize:11.5,color:C.textSub}}>Create and submit for approval</div></div>
              <button className="btn btn-ghost btn-xs" onClick={()=>setShowForm(false)}>✕</button>
            </div>
            <div className="drawer-bd">
              <div className="drawer-section">POSITION DETAILS</div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Position Title</label><input className="form-input" defaultValue="Mathematics Teacher"/></div>
                <div className="form-group"><label className="form-label">Department</label><select className="form-select"><option>Secondary</option><option>Primary</option><option>Languages</option></select></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Employment Type</label><select className="form-select"><option>Full-Time</option><option>Part-Time</option><option>Casual</option></select></div>
                <div className="form-group"><label className="form-label">Campus</label><select className="form-select"><option>Epping</option><option>Online</option></select></div>
              </div>
              <div className="form-group"><label className="form-label">Reports To</label><input className="form-input" defaultValue="Head of Secondary"/></div>
              <div className="form-group"><label className="form-label">Position Justification</label><textarea className="form-textarea" defaultValue="Increased enrolments in Year 10–12 Mathematics require an additional qualified teacher."/></div>
              <div className="drawer-section">MANDATORY REQUIREMENTS</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12}}>
                {["VIT Registration","WWCC (Employee)","Bachelor of Education","Secondary Specialisation","Child Safety Induction"].map(r=>(
                  <span key={r} className="badge b-maroon">{r}</span>
                ))}
              </div>
              <div className="drawer-section">SALARY BAND</div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Band</label><select className="form-select"><option>Band 2 — $80,000–$95,000</option></select></div>
                <div className="form-group"><label className="form-label">Start Date</label><input className="form-input" type="date" defaultValue="2026-07-28"/></div>
              </div>
              <div style={{display:"flex",gap:8,marginTop:8}}>
                <button className="btn btn-secondary btn-sm">📎 Attach PD</button>
                <button className="btn btn-primary btn-sm" onClick={()=>setShowForm(false)}>Submit for Approval →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: JOB ADVERTISING
═══════════════════════════════════════════════════════════════════ */
function PageJobAds(){
  const [tab,setTab]=useState("active");
  const ads=[
    {id:"AD-2041",title:"Mathematics Teacher",dept:"Secondary",channels:["SEEK","LinkedIn","College Portal"],apps:47,views:1240,expires:"30 Jun 2026",status:"Live",posted:"15 May 2026",idx:0},
    {id:"AD-2039",title:"Science Coordinator",dept:"Secondary",channels:["SEEK","LinkedIn"],apps:52,views:980,expires:"25 Jun 2026",status:"Live",posted:"12 May 2026",idx:1},
    {id:"AD-2037",title:"Year 4 Classroom Teacher",dept:"Primary",channels:["SEEK","LinkedIn","College Portal","Indeed"],apps:87,views:2310,expires:"20 Jun 2026",status:"Live",posted:"05 May 2026",idx:2},
    {id:"AD-2035",title:"Learning Support Officer",dept:"Wellbeing",channels:["College Portal"],apps:14,views:320,expires:"15 Jul 2026",status:"Live",posted:"20 May 2026",idx:3},
  ];
  const drafts=[
    {id:"AD-2043",title:"STEM Integration Coordinator",dept:"Secondary",note:"Awaiting PD sign-off",idx:4},
    {id:"AD-2042",title:"Arabic Language Teacher",dept:"Languages",note:"Budget approval pending",idx:5},
  ];
  const channelColors={"SEEK":"#003A9B","LinkedIn":"#0A66C2","College Portal":C.goldDark,"Indeed":"#2164f3"};

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search advertisements…" width={260}/>
        <select className="sel"><option>Status  All</option></select>
        <select className="sel"><option>Channel  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Export Report</button>
          <button className="btn btn-primary">+ Create Advertisement</button>
        </div>
      </FiltersRow>

      <div className="g4" style={{marginBottom:16}}>
        {[
          {channel:"SEEK",icon:"🔍",apps:248,views:6240,color:"#003A9B"},
          {channel:"LinkedIn",icon:"💼",apps:187,views:4100,color:"#0A66C2"},
          {channel:"College Portal",icon:"🏫",apps:94, views:1820,color:C.goldDark},
          {channel:"Indeed",icon:"📌",apps:62, views:2300,color:"#2164f3"},
        ].map(ch=>(
          <div key={ch.channel} className="card card-bd" style={{padding:16}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <div style={{width:32,height:32,borderRadius:8,background:ch.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#fff"}}>{ch.icon}</div>
              <div style={{fontWeight:800,fontSize:13}}>{ch.channel}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
              <div><div style={{fontSize:18,fontWeight:800,color:ch.color}}>{ch.apps}</div><div style={{fontSize:10,color:C.textSub}}>Applications</div></div>
              <div><div style={{fontSize:18,fontWeight:800,color:C.text}}>{ch.views}</div><div style={{fontSize:10,color:C.textSub}}>Views</div></div>
            </div>
            <div style={{marginTop:10}}>
              <PBar pct={Math.round(ch.apps/ch.views*100)} color={ch.color} height={5}/>
              <div style={{fontSize:10,color:C.textMute,marginTop:3}}>{Math.round(ch.apps/ch.views*100)}% conversion</div>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs">
        {["active","drafts"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="active"?"Active Advertisements":"Draft Advertisements"}</div>)}
      </div>

      {tab==="active"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>AD ID</th><th>POSITION</th><th>CHANNELS</th><th>APPLICATIONS</th><th>VIEWS</th><th>POSTED</th><th>EXPIRES</th><th>STATUS</th><th></th></tr></thead>
            <tbody>
              {ads.map(a=>(
                <tr key={a.id}>
                  <td><span style={{fontFamily:"ui-monospace,monospace",fontSize:11.5,fontWeight:700,color:C.goldDark}}>{a.id}</span></td>
                  <td><div style={{fontWeight:700,color:C.text}}>{a.title}</div><div style={{fontSize:10,color:C.textSub}}>{a.dept}</div></td>
                  <td>
                    <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                      {a.channels.map(ch=>(
                        <span key={ch} style={{background:channelColors[ch]||C.textMute,color:"#fff",borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700}}>{ch}</span>
                      ))}
                    </div>
                  </td>
                  <td><div style={{fontSize:14,fontWeight:800,color:C.goldDark}}>{a.apps}</div></td>
                  <td style={{color:C.textSub}}>{a.views.toLocaleString()}</td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{a.posted}</td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{a.expires}</td>
                  <td><span className="badge b-green"><span className="dot dot-g"/>{a.status}</span></td>
                  <td><div style={{display:"flex",gap:4}}><button className="btn btn-ghost btn-xs">Edit</button><button className="btn btn-ghost btn-xs">Pause</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="drafts"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>AD ID</th><th>POSITION</th><th>DEPARTMENT</th><th>NOTE</th><th>STATUS</th><th></th></tr></thead>
            <tbody>
              {drafts.map(d=>(
                <tr key={d.id}>
                  <td><span style={{fontFamily:"ui-monospace,monospace",fontSize:11.5,fontWeight:700,color:C.goldDark}}>{d.id}</span></td>
                  <td style={{fontWeight:700,color:C.text}}>{d.title}</td>
                  <td style={{color:C.textSub}}>{d.dept}</td>
                  <td style={{color:C.textSub,fontSize:11.5}}>{d.note}</td>
                  <td><span className="badge b-gray">Draft</span></td>
                  <td><div style={{display:"flex",gap:4}}><button className="btn btn-ghost btn-xs">Edit</button><button className="btn btn-accent btn-xs">Publish</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: CANDIDATE DATABASE
═══════════════════════════════════════════════════════════════════ */
function PageCandidates(){
  const [drawer,setDrawer]=useState(null);
  const cands=[
    {id:"C-8821",name:"Sarah Ahmed",email:"s.ahmed@email.com",qual:"B.Ed Primary",exp:"6 yrs",fit:92,vit:"Verified",wwcc:"Active",visa:"Citizen",stage:"AI Screening",src:"LinkedIn",note:"Strong values alignment. Recommend interview.",idx:0},
    {id:"C-8820",name:"Maryam Iqbal",email:"m.iqbal@email.com",qual:"M.Ed Primary",exp:"8 yrs",fit:94,vit:"Verified",wwcc:"Active",visa:"Citizen",stage:"Interview",src:"Seek",note:"Top candidate. Scorecard pending.",idx:1},
    {id:"C-8819",name:"Nadia Saleh",email:"nadia.s@email.com",qual:"M.Ed",exp:"7 yrs",fit:90,vit:"Verified",wwcc:"Active",visa:"PR",stage:"Shortlisted",src:"Referral",note:"Excellent referee feedback.",idx:4},
    {id:"C-8818",name:"Hassan Malik",email:"h.malik@email.com",qual:"M.Teach",exp:"4 yrs",fit:88,vit:"Pending",wwcc:"Active",visa:"Citizen",stage:"New",src:"Indeed",note:"VIT renewal in progress.",idx:1},
    {id:"C-8817",name:"Omar Aziz",email:"o.aziz@email.com",qual:"B.Ed",exp:"5 yrs",fit:86,vit:"Verified",wwcc:"Active",visa:"482 Visa",stage:"Shortlisted",src:"Seek",note:"Visa check required.",idx:5},
    {id:"C-8816",name:"Fatima Ali",email:"f.ali@email.com",qual:"M.Ed",exp:"10 yrs",fit:96,vit:"Verified",wwcc:"Active",visa:"Citizen",stage:"Offer",src:"Direct",note:"Contract sent. Awaiting signature.",idx:2},
    {id:"C-8815",name:"Tariq Bashir",email:"t.bashir@email.com",qual:"B.Ed",exp:"6 yrs",fit:87,vit:"Verified",wwcc:"Active",visa:"Citizen",stage:"Interview",src:"Seek",note:"Panel interview Wed 10am.",idx:7},
    {id:"C-8814",name:"Layla Farouk",email:"l.farouk@email.com",qual:"Grad Dip",exp:"2 yrs",fit:71,vit:"Verified",wwcc:"Pending",visa:"Student Visa",stage:"New",src:"LinkedIn",note:"WWCC and visa flags noted.",idx:3},
  ];
  const stageBadge=s=>({Interview:"b-blue",Shortlisted:"b-teal","AI Screening":"b-purple",Offer:"b-green",New:"b-gray"}[s]||"b-gray");
  const sel=drawer&&cands.find(c=>c.id===drawer);

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search candidates by name, email, qualification…" width={320}/>
        <select className="sel"><option>Stage  All</option></select>
        <select className="sel"><option>VIT  All</option></select>
        <select className="sel"><option>Min Fit  Any</option></select>
        <select className="sel"><option>Source  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-accent">✦ Bulk Shortlist</button>
          <button className="btn btn-primary">+ Add Candidate</button>
        </div>
      </FiltersRow>

      <div className="g4" style={{marginBottom:16}}>
        {[{v:154,label:"Total Candidates",color:C.goldDark},{v:23,label:"Shortlisted",color:C.amber},{v:8,label:"In Interview",color:C.blue},{v:2,label:"Offer Stage",color:C.green}].map(s=>(
          <div key={s.label} className="stat-card"><div className="stat-val" style={{color:s.color}}>{s.v}</div><div className="stat-label">{s.label}</div></div>
        ))}
      </div>

      <div className="card">
        <div className="card-hd">
          <div><div className="card-title">Candidate Register</div><div className="card-sub">Year 4 Classroom Teacher · REQ-2041 · Epping</div></div>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
        </div>
        <table className="tbl">
          <thead><tr><th>CANDIDATE</th><th>QUALIFICATION</th><th>EXP</th><th>AI FIT</th><th>VIT</th><th>WWCC</th><th>VISA</th><th>STAGE</th><th>SOURCE</th><th></th></tr></thead>
          <tbody>
            {cands.map(c=>(
              <tr key={c.id} onClick={()=>setDrawer(c.id)}>
                <td><div style={{display:"flex",alignItems:"center",gap:9}}><Av name={c.name} size={30} idx={c.idx}/><div><div style={{fontWeight:700,color:C.text}}>{c.name}</div><div style={{fontSize:10,color:C.textMute}}>{c.email}</div></div></div></td>
                <td style={{color:C.textSub}}>{c.qual}</td>
                <td style={{color:C.textSub}}>{c.exp}</td>
                <td><span style={{display:"inline-flex",alignItems:"center",gap:5,fontWeight:800,fontSize:11,padding:"3px 9px",borderRadius:7,background:c.fit>=80?C.greenBg:c.fit>=60?C.amberBg:C.redBg,color:c.fit>=80?C.greenDk:c.fit>=60?C.amberDk:C.redDk}}>★ {c.fit}</span></td>
                <td><span className={`badge ${c.vit==="Verified"?"b-green":"b-amber"}`}><span className={`dot ${c.vit==="Verified"?"dot-g":"dot-a"}`}/>{c.vit}</span></td>
                <td><span className={`badge ${c.wwcc==="Active"?"b-green":"b-amber"}`}>{c.wwcc}</span></td>
                <td><span className={`badge ${c.visa==="Citizen"||c.visa==="PR"?"b-green":c.visa.includes("482")?"b-amber":"b-blue"}`}>{c.visa}</span></td>
                <td><span className={`badge ${stageBadge(c.stage)}`}>{c.stage}</span></td>
                <td style={{fontSize:11.5,color:C.textSub}}>{c.src}</td>
                <td><button className="btn btn-ghost btn-xs" onClick={e=>{e.stopPropagation();setDrawer(c.id);}}>View →</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sel&&(
        <div className="drawer-overlay" onClick={()=>setDrawer(null)}>
          <div className="drawer" onClick={e=>e.stopPropagation()}>
            <div className="drawer-hd">
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Av name={sel.name} size={36} idx={sel.idx}/>
                <div><div style={{fontSize:15,fontWeight:800}}>{sel.name}</div><div style={{fontSize:11.5,color:C.textSub}}>{sel.id} · {sel.src}</div></div>
              </div>
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                <span className={`badge ${stageBadge(sel.stage)}`}>{sel.stage}</span>
                <button className="btn btn-ghost btn-xs" onClick={()=>setDrawer(null)}>✕</button>
              </div>
            </div>
            <div className="drawer-bd">
              <div style={{display:"flex",gap:14,marginBottom:16}}>
                <Ring score={sel.fit} size={72}/>
                <div style={{display:"flex",flexDirection:"column",gap:4,justifyContent:"center"}}>
                  <div style={{fontSize:13,fontWeight:800}}>{sel.qual} · {sel.exp} experience</div>
                  <div style={{fontSize:12,color:C.textSub}}>{sel.email}</div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:4}}>
                    <span className={`badge ${sel.vit==="Verified"?"b-green":"b-amber"}`}>VIT {sel.vit}</span>
                    <span className={`badge ${sel.wwcc==="Active"?"b-green":"b-amber"}`}>WWCC {sel.wwcc}</span>
                    <span className="badge b-gray">{sel.visa}</span>
                  </div>
                </div>
              </div>
              <div className="drawer-section">NOTES</div>
              <div style={{background:"#fafafa",border:`1px solid ${C.border}`,borderRadius:10,padding:12,fontSize:12,color:C.textSub,lineHeight:1.6,marginBottom:12}}>{sel.note}</div>
              <div className="drawer-section">QUALIFICATIONS & COMPLIANCE</div>
              {[
                {label:"Qualification",val:sel.qual,ok:true},
                {label:"VIT Registration",val:sel.vit,ok:sel.vit==="Verified"},
                {label:"WWCC Status",val:sel.wwcc,ok:sel.wwcc==="Active"},
                {label:"Visa Eligibility",val:sel.visa,ok:sel.visa==="Citizen"||sel.visa==="PR"},
              ].map(r=>(
                <div key={r.label} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}>
                  <span style={{color:C.textSub}}>{r.label}</span>
                  <span style={{fontWeight:700,color:r.ok?C.greenDk:C.amberDk}}>{r.ok?"✓":""} {r.val}</span>
                </div>
              ))}
              <div className="drawer-section">ADD NOTE</div>
              <textarea className="form-textarea" placeholder="Add a candidate note…" style={{width:"100%",marginBottom:8}}/>
              <div style={{display:"flex",gap:8}}>
                <button className="btn btn-secondary btn-sm">📎 Upload Resume</button>
                <button className="btn btn-primary btn-sm" style={{marginLeft:"auto"}}>Shortlist →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: AI SCREENING
═══════════════════════════════════════════════════════════════════ */
function PageAIScreening(){
  const list=[
    {name:"Sarah Ahmed",detail:"B.Ed Primary · 6 yrs",score:92,idx:0},
    {name:"Maryam Iqbal",detail:"M.Ed Primary · 8 yrs",score:94,idx:1},
    {name:"Nadia Saleh",detail:"M.Ed · 7 yrs",score:90,idx:4},
    {name:"Hassan Malik",detail:"M.Teach · 4 yrs",score:88,idx:1},
    {name:"Omar Aziz",detail:"B.Ed · 5 yrs",score:86,idx:5},
    {name:"Layla Farouk",detail:"Grad Dip · 2 yrs",score:71,idx:3},
  ];
  const [sel,setSel]=useState(0);
  const c=list[sel];
  const criteria=[
    {name:"Qualifications & Subject Knowledge",weight:"30%",pct:95,desc:"B.Ed Primary with Maths specialisation exceeds Year 4 role requirements."},
    {name:"Teaching Experience",weight:"25%",pct:88,desc:"6 years classroom experience, 3 in comparable Islamic school setting."},
    {name:"Child Safety Alignment",weight:"20%",pct:100,desc:"WWCC active, child safety training complete, no flags."},
    {name:"Values & Cultural Alignment",weight:"15%",pct:92,desc:"References strong Islamic school ethos, inclusive pedagogy noted."},
    {name:"Compliance Readiness",weight:"10%",pct:100,desc:"VIT verified, WWCC active, citizen — no compliance gaps."},
  ];
  const strengths=["Active VIT & WWCC — zero compliance risk","8 years primary teaching, 3 in Islamic school context","Strong child safety training history","Excellent communication in screening responses","Values alignment with Al Siraat charter"];
  const concerns=["No Year 5/6 experience noted","Salary expectation near upper band"];

  return(
    <div className="page-in">
      <FiltersRow>
        <div style={{fontSize:12.5,color:C.textSub,display:"flex",alignItems:"center",gap:6,fontWeight:600}}>Role weighting<select className="sel" style={{padding:"6px 10px"}}><option>Classroom Teacher profile</option></select></div>
        <div style={{fontSize:12.5,color:C.textSub,display:"flex",alignItems:"center",gap:6,fontWeight:600}}>Sort<select className="sel" style={{padding:"6px 10px"}}><option>Fit score ↓</option></select></div>
        <button className="btn btn-secondary btn-sm">↺ Re-run Screening</button>
        <button className="btn btn-primary btn-sm">⬇ Export Audit Report</button>
      </FiltersRow>
      <div style={{display:"grid",gridTemplateColumns:"218px 1fr",gap:16}}>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {list.map((ci,i)=>(
            <div key={ci.name} className="ccard" style={{border:`1px solid ${i===sel?C.accent:C.border}`,background:i===sel?"rgba(198,163,90,.06)":"#fff"}} onClick={()=>setSel(i)}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Ring score={ci.score} size={44}/>
                <div><div style={{fontWeight:800,fontSize:12.5}}>{ci.name}</div><div style={{fontSize:10.5,color:C.textSub,marginTop:2}}>{ci.detail}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="card" style={{marginBottom:16}}>
            <div className="card-hd">
              <div style={{display:"flex",alignItems:"center",gap:16}}>
                <Ring score={c.score} size={72}/>
                <div>
                  <div style={{fontSize:18,fontWeight:800}}>{c.name}</div>
                  <div style={{fontSize:12.5,color:C.textSub,marginTop:2}}>{c.detail} · VIT verified</div>
                  <div style={{marginTop:8,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                    <span className="badge b-green">✦ {c.score>=90?"Strong Match":c.score>=80?"Good Match":"Moderate Match"}</span>
                    <span style={{fontSize:11.5,color:C.textSub}}>AI recommends: <b style={{color:C.greenDk}}>Advance to interview</b></span>
                  </div>
                </div>
              </div>
              <div style={{display:"flex",gap:6}}>
                <button className="btn btn-secondary btn-sm">Reject</button>
                <button className="btn btn-primary btn-sm">Shortlist →</button>
              </div>
            </div>
            <div className="card-bd">
              {criteria.map(cr=>(
                <div key={cr.name} className="crit-row">
                  <div className="crit-hd"><span style={{fontSize:12.5,fontWeight:700}}>{cr.name}</span><span style={{fontSize:10.5,color:C.textSub,fontWeight:600}}>weight {cr.weight}</span></div>
                  <div className="crit-bar"><div className="crit-fill" style={{width:`${cr.pct}%`}}/></div>
                  <div style={{fontSize:11.5,color:C.textSub,marginTop:5}}>{cr.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="g2">
            <div className="card">
              <div className="card-hd"><div className="card-title" style={{color:C.greenDk}}>✓ Strengths</div></div>
              <div className="card-bd">
                {strengths.map(s=><div key={s} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}><span style={{color:C.green}}>•</span>{s}</div>)}
              </div>
            </div>
            <div className="card">
              <div className="card-hd"><div className="card-title" style={{color:C.amberDk}}>⚠ Points for Review</div></div>
              <div className="card-bd">
                {concerns.map(s=><div key={s} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}><span style={{color:C.amber}}>•</span>{s}</div>)}
                <div style={{background:"#faf8f3",border:`1px solid rgba(198,163,90,.28)`,borderRadius:12,padding:14,marginTop:12,fontSize:11.5,color:"#5e5868",lineHeight:1.6}}>
                  <b style={{color:C.goldDark}}>AI Explainability:</b> Score derived from the configured Classroom Teacher weighting. No protected-attribute fields used; full trace in audit report.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: INTERVIEWS & SCORECARDS
═══════════════════════════════════════════════════════════════════ */
function PageInterviews(){
  const [tab,setTab]=useState("calendar");
  const [submitted,setSubmitted]=useState(false);
  const scheduled=[
    {name:"Sarah Ahmed",time:"Mon 19 Jun, 09:00",panel:"M. Omar, R. Hadid",type:"Panel",stage:"Scorecard Pending",idx:0},
    {name:"Maryam Iqbal",time:"Wed 21 Jun, 10:00",panel:"S. Ahmed, F. Nasser",type:"Panel",stage:"Scorecard Pending",idx:1},
    {name:"Nadia Saleh",time:"Mon 19 Jun, 11:00",panel:"M. Omar, A. Khan",type:"Panel",stage:"Complete",idx:4},
    {name:"Omar Aziz",time:"Tue 20 Jun, 11:00",panel:"R. Hadid",type:"Screening",stage:"Complete",idx:5},
    {name:"Tariq Bashir",time:"Wed 21 Jun, 14:00",panel:"S. Ahmed",type:"Screening",stage:"Booked",idx:7},
  ];
  const scoreItems=[
    {label:"Curriculum knowledge",score:9,max:10},
    {label:"Classroom management",score:8,max:10},
    {label:"Values alignment",score:10,max:10},
    {label:"Communication",score:8,max:10},
    {label:"Child safety awareness",score:10,max:10},
  ];
  const total=scoreItems.reduce((a,s)=>a+s.score,0);
  const maxTotal=scoreItems.reduce((a,s)=>a+s.max,0);
  const comparison=[
    {name:"Maryam Iqbal",scores:[9,9,10,9,10],total:47,idx:1},
    {name:"Sarah Ahmed",scores:[9,8,10,8,10],total:45,idx:0},
    {name:"Nadia Saleh",scores:[8,8,9,9,10],total:44,idx:4},
    {name:"Omar Aziz",scores:[7,8,8,7,9],total:39,idx:5},
  ];

  return(
    <div className="page-in">
      <div style={{display:"flex",gap:10,marginBottom:18,alignItems:"center",flexWrap:"wrap"}}>
        <SearchBar placeholder="Search candidates…" width={220}/>
        <select className="sel"><option>Panel  All</option></select>
        <select className="sel"><option>Week of 19 Jun 2026</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">📅 Schedule Interview</button>
          <button className="btn btn-accent btn-sm">⇄ Compare Scorecards</button>
        </div>
      </div>
      <div className="tabs">
        {["calendar","scorecards","comparison"].map(t=>(
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
            {t==="calendar"?"Interview Calendar":t==="scorecards"?"Scorecards":"Comparison View"}
          </div>
        ))}
      </div>

      {tab==="calendar"&&(
        <div className="g2">
          <div className="card">
            <div className="card-hd"><div className="card-title">Scheduled Interviews</div><span className="badge b-gray">Outlook / Teams synced</span></div>
            <table className="tbl">
              <thead><tr><th>CANDIDATE</th><th>DATE & TIME</th><th>PANEL</th><th>TYPE</th><th>STATUS</th><th></th></tr></thead>
              <tbody>
                {scheduled.map(s=>(
                  <tr key={s.name}>
                    <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={s.name} size={26} idx={s.idx}/><span style={{fontWeight:700}}>{s.name}</span></div></td>
                    <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{s.time}</td>
                    <td style={{fontSize:11.5,color:C.textSub}}>{s.panel}</td>
                    <td><span className="badge b-gray">{s.type}</span></td>
                    <td><span className={`badge ${s.stage==="Complete"?"b-green":s.stage==="Booked"?"b-blue":"b-amber"}`}>{s.stage}</span></td>
                    <td><button className="btn btn-ghost btn-xs">Scorecard</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Scorecard — Sarah Ahmed</div><span className="badge b-amber">In Progress</span></div>
            <div className="card-bd">
              {scoreItems.map(s=>(
                <div key={s.label} style={{marginBottom:14}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                    <span style={{fontSize:12.5,fontWeight:700}}>{s.label}</span>
                    <span style={{fontSize:12.5,fontWeight:800,color:C.goldDark}}>{s.score} / {s.max}</span>
                  </div>
                  <PBar pct={s.score/s.max*100} color={C.accent}/>
                </div>
              ))}
              <div style={{background:C.bg,borderRadius:10,padding:12,marginBottom:14}}>
                <div style={{fontSize:11.5,fontWeight:700,marginBottom:5}}>Panel Comments</div>
                <textarea className="form-textarea" defaultValue="Strong subject command and excellent alignment with the College charter. Recommend progressing to referee checks." style={{width:"100%"}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderTop:`1px solid ${C.border}`}}>
                <div style={{fontSize:13,fontWeight:800}}>Total: <span style={{color:C.goldDark}}>{total}/{maxTotal}</span></div>
                <button className="btn btn-primary btn-sm" onClick={()=>setSubmitted(true)}>{submitted?"✓ Submitted":"Submit Scorecard"}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab==="comparison"&&(
        <div className="card">
          <div className="card-hd"><div className="card-title">Scorecard Comparison — Year 4 Classroom Teacher</div></div>
          <div className="card-bd">
            <table className="tbl">
              <thead>
                <tr>
                  <th>CANDIDATE</th>
                  {scoreItems.map(s=><th key={s.label}>{s.label.toUpperCase()}</th>)}
                  <th>TOTAL</th>
                  <th>RECOMMENDATION</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c,ci)=>(
                  <tr key={c.name} style={{background:ci===0?"rgba(198,163,90,.06)":""}}>
                    <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={c.name} size={26} idx={c.idx}/><span style={{fontWeight:700}}>{c.name}</span>{ci===0&&<span className="badge b-gold" style={{marginLeft:4}}>Top</span>}</div></td>
                    {c.scores.map((s,si)=>(
                      <td key={si}><span style={{fontWeight:800,color:s>=9?C.greenDk:s>=7?C.amberDk:C.redDk}}>{s}/10</span></td>
                    ))}
                    <td><span style={{fontSize:14,fontWeight:800,color:C.goldDark}}>{c.total}/50</span></td>
                    <td><span className={`badge ${ci===0?"b-green":ci===1?"b-teal":"b-gray"}`}>{ci===0?"Highly Recommended":ci===1?"Recommended":"Consider"}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab==="scorecards"&&(
        <div className="card">
          <div className="card-hd"><div className="card-title">All Submitted Scorecards</div></div>
          <table className="tbl">
            <thead><tr><th>CANDIDATE</th><th>INTERVIEWER</th><th>SCORE</th><th>DATE</th><th>RECOMMENDATION</th><th></th></tr></thead>
            <tbody>
              {[
                {name:"Nadia Saleh",by:"M. Omar",score:"44/50",date:"19 Jun 2026",rec:"Recommended",idx:4},
                {name:"Omar Aziz",by:"R. Hadid",score:"39/50",date:"20 Jun 2026",rec:"Consider",idx:5},
              ].map(r=>(
                <tr key={r.name}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.name} size={26} idx={r.idx}/><span style={{fontWeight:700}}>{r.name}</span></div></td>
                  <td style={{color:C.textSub}}>{r.by}</td>
                  <td><span style={{fontSize:13,fontWeight:800,color:C.goldDark}}>{r.score}</span></td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{r.date}</td>
                  <td><span className={`badge ${r.rec==="Recommended"?"b-teal":"b-gray"}`}>{r.rec}</span></td>
                  <td><button className="btn btn-ghost btn-xs">View →</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: AI INTERVIEW AGENT
═══════════════════════════════════════════════════════════════════ */
function PageAIInterview(){
  const [tab,setTab]=useState("video");
  const transcript=[
    {speaker:"AI Agent",text:"Thank you for joining this interview for the Year 4 Classroom Teacher position at Al Siraat College. Our AI assistant will ask you a series of structured questions. Responses are recorded and reviewed by the hiring panel. Do you consent to proceed?"},
    {speaker:"Sarah Ahmed",text:"Yes, I consent and I'm happy to proceed."},
    {speaker:"AI Agent",text:"Please describe your approach to differentiating instruction for students with varying abilities in a Year 4 classroom."},
    {speaker:"Sarah Ahmed",text:"I use a tiered task design where all students engage with the same learning objective but access it at different levels of complexity. I pre-assess at the start of each unit to identify learning gaps and adjust my small-group rotations accordingly. I've found that flexible groupings combined with visible learning intentions significantly improve student confidence and outcomes."},
    {speaker:"AI Agent",text:"How do you demonstrate your commitment to child safety in your daily teaching practice?"},
    {speaker:"Sarah Ahmed",text:"Child safety is non-negotiable for me. I maintain clear professional boundaries, follow mandatory reporting obligations immediately when concerns arise, and I always ensure classroom environments are physically and emotionally safe. I've completed the Victorian Protecting Children training and I hold a current WWCC. I genuinely believe every educator is a safeguarding professional."},
  ];
  const aiSummary=[
    {label:"Role Fit",score:92,color:C.accent},
    {label:"Child Safety",score:98,color:C.green},
    {label:"Values Alignment",score:94,color:C.teal},
    {label:"Communication",score:88,color:C.blue},
    {label:"Culture Fit",score:91,color:C.purple},
  ];
  const followUps=["Clarify availability for before-school tutoring commitments","Ask about experience with Synergetic or school management software","Confirm Year 5/6 subject confidence","Probe professional development goals for 2027"];

  return(
    <div className="page-in">
      <div className="tabs">
        {["video","voice","written"].map(t=>(
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
            {t==="video"?"🎥 Video Interview":t==="voice"?"🎙 Voice Interview":"✍ Written Response"}
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:16}}>
        <div>
          <div className="card" style={{marginBottom:16}}>
            <div className="card-hd">
              <div>
                <div className="card-title">Interview — Sarah Ahmed</div>
                <div className="card-sub">Year 4 Classroom Teacher · REQ-2041 · {tab==="video"?"Video recording":"Voice transcript"} · 18 Jun 2026</div>
              </div>
              <div style={{display:"flex",gap:6}}>
                <span className="badge b-green"><span className="dot dot-g"/>Complete</span>
                <button className="btn btn-secondary btn-xs">⬇ Download</button>
              </div>
            </div>
            {tab==="video"&&(
              <div style={{background:"#171320",height:160,display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.4)",fontSize:12,borderBottom:`1px solid ${C.border}`}}>
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:36,marginBottom:8}}>▶</div>
                  <div>Video recording available · 22 min 14 sec</div>
                  <div style={{fontSize:10,marginTop:4,color:"rgba(255,255,255,0.25)"}}>Stored securely · Access role-restricted</div>
                </div>
              </div>
            )}
            <div className="card-bd" style={{maxHeight:360,overflowY:"auto"}}>
              <div style={{fontSize:11,fontWeight:700,color:C.textSub,marginBottom:10,letterSpacing:.5,textTransform:"uppercase"}}>Transcript</div>
              {transcript.map((t,i)=>(
                <div key={i} style={{marginBottom:14,display:"flex",gap:10,alignItems:"flex-start"}}>
                  <div style={{width:28,height:28,borderRadius:7,background:t.speaker==="AI Agent"?C.sidebar:C.blueBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:t.speaker==="AI Agent"?C.accent:C.blueDk,fontWeight:800,flexShrink:0}}>
                    {t.speaker==="AI Agent"?"AI":"SA"}
                  </div>
                  <div>
                    <div style={{fontSize:10,fontWeight:700,color:C.textSub,marginBottom:3}}>{t.speaker}</div>
                    <div style={{fontSize:12,color:C.text,lineHeight:1.6,background:t.speaker==="AI Agent"?"#fafafa":"#eef4fc",borderRadius:9,padding:"9px 11px",borderLeft:`3px solid ${t.speaker==="AI Agent"?C.border:C.blue}`}}>{t.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{marginBottom:12}}>
            <div className="card-hd"><div className="card-title">AI Interview Summary</div><span className="badge b-gold">Azure OpenAI</span></div>
            <div className="card-bd">
              {aiSummary.map(s=>(
                <div key={s.label} style={{marginBottom:12}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                    <span style={{fontSize:12.5,fontWeight:700}}>{s.label}</span>
                    <span style={{fontSize:12.5,fontWeight:800,color:s.color}}>{s.score}</span>
                  </div>
                  <PBar pct={s.score} color={s.color}/>
                </div>
              ))}
              <div style={{marginTop:10,padding:12,background:C.greenBg,borderRadius:10,fontSize:11.5,color:C.greenDk,lineHeight:1.6,borderLeft:`3px solid ${C.green}`}}>
                <b>Overall:</b> Highly recommended. Exceptional child safety awareness and strong values alignment. Communication is confident and reflective.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Suggested Follow-up Questions</div></div>
            <div className="card-bd">
              {followUps.map((q,i)=>(
                <div key={i} style={{display:"flex",gap:8,padding:"7px 0",borderBottom:i<followUps.length-1?`1px solid ${C.border2}`:"none",fontSize:12,color:C.textSub,lineHeight:1.4}}>
                  <span style={{color:C.accent,fontWeight:800,flexShrink:0}}>{i+1}.</span>{q}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: REFEREE CHECKS
═══════════════════════════════════════════════════════════════════ */
function PageReferee(){
  const [tab,setTab]=useState("active");
  const referees=[
    {cand:"Sarah Ahmed",candIdx:0,ref:"Dr. Leila Hassan",refRole:"Principal, Crescent College",method:"Voice Call",status:"Complete",date:"17 Jun 2026",risk:"Low",childSafety:"No concerns",conduct:"Excellent"},
    {cand:"Sarah Ahmed",candIdx:0,ref:"Michael Tran",refRole:"Head of Maths, Lakeside College",method:"Email Form",status:"Complete",date:"16 Jun 2026",risk:"Low",childSafety:"No concerns",conduct:"Very Good"},
    {cand:"Maryam Iqbal",candIdx:1,ref:"Amira Said",refRole:"Principal, Noor Academy",method:"Voice Call",status:"In Progress",date:"—",risk:"Pending",childSafety:"Pending",conduct:"Pending"},
    {cand:"Nadia Saleh",candIdx:4,ref:"James Robertson",refRole:"HR Manager, Melbourne Primary",method:"Email Form",status:"Sent",date:"—",risk:"—",childSafety:"—",conduct:"—"},
    {cand:"Omar Aziz",candIdx:5,ref:"Patricia Lee",refRole:"Deputy Principal, Hillside SC",method:"Email Form",status:"Overdue",date:"Sent 10 Jun",risk:"—",childSafety:"—",conduct:"—"},
  ];
  const transcript=[
    {q:"How long have you known the candidate and in what capacity?",a:"I have known Sarah for 4 years as her principal at Crescent College. She reported directly to me as a classroom teacher."},
    {q:"How would you describe the candidate's approach to child safety?",a:"Sarah is exemplary in child safety. She has never had a complaint, always follows mandatory reporting protocols without hesitation, and has actively contributed to our child safety committee. I have complete confidence in her suitability to work with children."},
    {q:"Would you re-employ this candidate?",a:"Without question. If I had a vacancy today, I would offer her the role immediately. She is one of the finest teachers I have worked with."},
  ];

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search candidates or referees…" width={280}/>
        <select className="sel"><option>Status  All</option></select>
        <select className="sel"><option>Method  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
          <button className="btn btn-primary">+ Send Referee Request</button>
        </div>
      </FiltersRow>

      <div className="g4" style={{marginBottom:16}}>
        {[{v:8,l:"Completed",c:C.green},{v:3,l:"In Progress",c:C.amber},{v:4,l:"Sent / Awaiting",c:C.blue},{v:1,l:"Overdue",c:C.red}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>

      <div className="tabs">
        {["active","transcript"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="active"?"Referee Register":"Transcript — Dr. Hassan"}</div>)}
      </div>

      {tab==="active"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>CANDIDATE</th><th>REFEREE</th><th>ROLE</th><th>METHOD</th><th>STATUS</th><th>DATE</th><th>CHILD SAFETY</th><th>CONDUCT</th><th>RISK</th><th></th></tr></thead>
            <tbody>
              {referees.map((r,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.cand} size={24} idx={r.candIdx}/><span style={{fontWeight:700}}>{r.cand}</span></div></td>
                  <td style={{fontWeight:700,fontSize:12.5}}>{r.ref}</td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{r.refRole}</td>
                  <td><span className="badge b-gray">{r.method}</span></td>
                  <td><span className={`badge ${r.status==="Complete"?"b-green":r.status==="In Progress"?"b-amber":r.status==="Overdue"?"b-red":"b-blue"}`}>{r.status}</span></td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{r.date}</td>
                  <td><span style={{fontSize:11.5,color:r.childSafety==="No concerns"?C.greenDk:C.textMute}}>{r.childSafety}</span></td>
                  <td><span style={{fontSize:11.5,color:r.conduct==="Excellent"?C.greenDk:r.conduct==="Very Good"?C.teal:C.textMute}}>{r.conduct}</span></td>
                  <td>
                    <div style={{display:"flex",alignItems:"center",gap:5}}>
                      <div style={{width:8,height:8,borderRadius:"50%",background:r.risk==="Low"?C.green:r.risk==="Pending"?C.amber:r.risk==="—"?C.textMute:C.red}}/>
                      <span style={{fontSize:11.5}}>{r.risk}</span>
                    </div>
                  </td>
                  <td><button className="btn btn-ghost btn-xs">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="transcript"&&(
        <div className="g2">
          <div className="card">
            <div className="card-hd">
              <div><div className="card-title">Voice Call Transcript</div><div className="card-sub">Dr. Leila Hassan · AI voice call · 17 Jun 2026 · 12 min</div></div>
              <span className="badge b-green">✓ Complete</span>
            </div>
            <div className="card-bd">
              {transcript.map((t,i)=>(
                <div key={i} style={{marginBottom:16,paddingBottom:16,borderBottom:i<transcript.length-1?`1px solid ${C.border2}`:"none"}}>
                  <div style={{fontSize:11.5,fontWeight:700,color:C.goldDark,marginBottom:6}}>Q{i+1}: {t.q}</div>
                  <div style={{fontSize:12,color:C.textSub,lineHeight:1.7,background:"#fafafa",padding:"10px 12px",borderRadius:9,borderLeft:`3px solid ${C.accent}`}}>"{t.a}"</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="card" style={{marginBottom:12}}>
              <div className="card-hd"><div className="card-title">AI Referee Summary</div></div>
              <div className="card-bd">
                {[
                  {label:"Professional Conduct",val:"Excellent"},
                  {label:"Child Safety",val:"No concerns"},
                  {label:"Reliability & Attendance",val:"Excellent"},
                  {label:"Work Ethic",val:"Outstanding"},
                  {label:"Suitability for Children",val:"Highly suitable"},
                  {label:"Overall Risk Level",val:"Low"},
                  {label:"Escalation Required",val:"None"},
                ].map(r=>(
                  <div key={r.label} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}>
                    <span style={{color:C.textSub}}>{r.label}</span>
                    <span style={{fontWeight:700,color:C.greenDk}}>✓ {r.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <div className="card-hd"><div className="card-title">Escalation Flags</div></div>
              <div className="card-bd">
                <div style={{textAlign:"center",padding:"20px 0",color:C.textMute}}>
                  <div style={{fontSize:28,marginBottom:6}}>✓</div>
                  <div style={{fontSize:12.5,fontWeight:700,color:C.greenDk}}>No escalations required</div>
                  <div style={{fontSize:11.5,marginTop:4}}>Both referees cleared. Child safety confirmed.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: OFFERS & CONTRACTS
═══════════════════════════════════════════════════════════════════ */
function PageOffers(){
  const [tab,setTab]=useState("offers");
  const offers=[
    {id:"OFF-4471",cand:"Fatima Ali",pos:"Year 4 Classroom Teacher",salary:"$87,500",sent:"08 Jun 2026",expires:"22 Jun 2026",sig:"Signed",status:"Accepted",idx:2},
    {id:"OFF-4470",cand:"Sarah Ahmed",pos:"Mathematics Teacher",salary:"$82,000",sent:"10 Jun 2026",expires:"24 Jun 2026",sig:"Pending",status:"Sent",idx:0},
    {id:"OFF-4469",cand:"Khalid Mansour",pos:"Science Coordinator",salary:"$95,000",sent:"06 Jun 2026",expires:"20 Jun 2026",sig:"Pending",status:"Expired",idx:7},
  ];
  const approvalSteps=[
    {name:"HR Manager",who:"M. Omar",done:true,date:"07 Jun"},
    {name:"Principal",who:"Dr. A. Rashid",done:true,date:"08 Jun"},
    {name:"Business Manager",who:"T. Khan",done:false,date:"—"},
  ];
  const [steps,setSteps]=useState(approvalSteps);

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search offers, contracts, candidates…" width={280}/>
        <select className="sel"><option>Status  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
          <button className="btn btn-primary">+ Generate Offer</button>
        </div>
      </FiltersRow>

      <div className="g4" style={{marginBottom:16}}>
        {[{v:8,l:"Offers Sent",c:C.blue},{v:5,l:"Accepted",c:C.green},{v:2,l:"Pending Signature",c:C.amber},{v:1,l:"Expired",c:C.red}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>

      <div className="tabs">
        {["offers","contract","approval"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="offers"?"Offer Register":t==="contract"?"Contract — Sarah Ahmed":"Approval Workflow"}</div>)}
      </div>

      {tab==="offers"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>OFFER ID</th><th>CANDIDATE</th><th>POSITION</th><th>SALARY</th><th>SENT</th><th>EXPIRES</th><th>E-SIGNATURE</th><th>STATUS</th><th></th></tr></thead>
            <tbody>
              {offers.map(o=>(
                <tr key={o.id}>
                  <td><span style={{fontFamily:"ui-monospace,monospace",fontSize:11.5,fontWeight:700,color:C.goldDark}}>{o.id}</span></td>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={o.cand} size={26} idx={o.idx}/><span style={{fontWeight:700}}>{o.cand}</span></div></td>
                  <td style={{color:C.textSub}}>{o.pos}</td>
                  <td style={{fontWeight:800}}>{o.salary}</td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{o.sent}</td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{o.expires}</td>
                  <td><span className={`badge ${o.sig==="Signed"?"b-green":"b-amber"}`}>{o.sig}</span></td>
                  <td><span className={`badge ${o.status==="Accepted"?"b-green":o.status==="Sent"?"b-blue":"b-red"}`}>{o.status}</span></td>
                  <td><div style={{display:"flex",gap:4}}><button className="btn btn-ghost btn-xs">View</button><button className="btn btn-ghost btn-xs">Resend</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="contract"&&(
        <div className="g2">
          <div className="card">
            <div className="card-hd"><div className="card-title">Employment Contract — Sarah Ahmed</div><span className="badge b-amber">Pending Signature</span></div>
            <div style={{background:C.sidebar,padding:"20px 24px",color:"#fff",borderBottom:`1px solid ${C.border}`}}>
              <div style={{fontSize:10,opacity:.6,letterSpacing:1,marginBottom:4}}>AL SIRAAT COLLEGE — LETTER OF OFFER</div>
              <div style={{fontSize:17,fontWeight:800}}>Mathematics Teacher — Secondary School</div>
              <div style={{fontSize:12,opacity:.8,marginTop:6}}>Full-time Ongoing · Commencing 28 July 2026</div>
            </div>
            <div className="card-bd">
              {[["Candidate","Sarah Ahmed"],["Position","Mathematics Teacher (Secondary)"],["Employment Type","Full-Time Ongoing"],["Commencement","28 July 2026"],["Salary","$82,000 per annum"],["Band","Band 2"],["Reporting To","Head of Secondary"],["Campus","Epping"]].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}>
                  <span style={{color:C.textSub}}>{k}</span><span style={{fontWeight:700}}>{v}</span>
                </div>
              ))}
              <div style={{marginTop:16,display:"flex",gap:10}}>
                <button className="btn btn-secondary btn-sm">📄 Preview Contract</button>
                <button className="btn btn-secondary btn-sm">⬇ Download PDF</button>
                <button className="btn btn-primary btn-sm" style={{marginLeft:"auto"}}>✉ Send for E-Signature</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{marginBottom:12}}>
              <div className="card-hd"><div className="card-title">E-Signature Status</div></div>
              <div className="card-bd">
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {[{name:"Sarah Ahmed",role:"Candidate",status:"Pending",date:"—",idx:0},{name:"M. Omar",role:"HR Manager",status:"Signed",date:"09 Jun 2026",idx:0},{name:"Dr. A. Rashid",role:"Principal",status:"Signed",date:"10 Jun 2026",idx:2}].map(s=>(
                    <div key={s.name} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",background:s.status==="Signed"?C.greenBg:"#fdf8ec",border:`1px solid ${s.status==="Signed"?"#bfe6cf":"#f3e3bd"}`,borderRadius:10}}>
                      <Av name={s.name} size={30} idx={s.idx}/>
                      <div style={{flex:1}}><div style={{fontSize:12.5,fontWeight:700}}>{s.name}</div><div style={{fontSize:11.5,color:C.textSub}}>{s.role}</div></div>
                      <div style={{textAlign:"right"}}><span className={`badge ${s.status==="Signed"?"b-green":"b-amber"}`}>{s.status}</span><div style={{fontSize:10,color:C.textMute,marginTop:2}}>{s.date}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-hd"><div className="card-title">Contract Versions</div></div>
              <div className="card-bd">
                {[["v1.0","28 May 2026","Initial draft","S. Ahmed"],["v1.1","05 Jun 2026","Salary band updated","M. Omar"],["v1.2","09 Jun 2026","Start date confirmed","M. Omar"]].map(([ver,date,note,by])=>(
                  <div key={ver} style={{display:"flex",gap:10,padding:"7px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}>
                    <span style={{fontFamily:"ui-monospace,monospace",color:C.goldDark,fontWeight:700,width:32}}>{ver}</span>
                    <span style={{color:C.textSub,fontSize:11.5,width:90}}>{date}</span>
                    <span style={{flex:1,color:C.textSub}}>{note}</span>
                    <span style={{fontSize:11.5,color:C.textMute}}>{by}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab==="approval"&&(
        <div className="g2">
          <div className="card">
            <div className="card-hd"><div className="card-title">Offer Approval Workflow</div><span className="badge b-amber">Step 3 of 3</span></div>
            <div className="card-bd">
              {steps.map((s,i)=>(
                <div key={s.name}>
                  <div style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:s.done?C.greenBg:"#fdf8ec",border:`1.5px solid ${s.done?"#bfe6cf":"#f3e3bd"}`,borderRadius:12,marginBottom:4}}>
                    <div style={{width:34,height:34,borderRadius:"50%",background:s.done?C.green:C.amber,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{s.done?"✓":"⏳"}</div>
                    <div style={{flex:1}}><div style={{fontSize:13,fontWeight:800}}>{s.name}</div><div style={{fontSize:11.5,color:C.textSub}}>{s.who}</div></div>
                    <div style={{textAlign:"right"}}>
                      {s.done?<span className="badge b-green">Approved · {s.date}</span>:<button className="btn btn-primary btn-xs" onClick={()=>setSteps(st=>st.map((ss,si)=>si===i?{...ss,done:true,date:"10 Jun"}:ss))}>Approve ✓</button>}
                    </div>
                  </div>
                  {i<steps.length-1&&<div style={{textAlign:"center",color:C.textMute,fontSize:16,padding:"2px 0"}}>↓</div>}
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Offer Expiry Tracking</div></div>
            <div className="card-bd">
              {offers.map(o=>(
                <div key={o.id} style={{display:"flex",gap:10,padding:"10px 0",borderBottom:`1px solid ${C.border2}`,alignItems:"center"}}>
                  <div style={{width:8,height:8,borderRadius:"50%",background:o.status==="Accepted"?C.green:o.status==="Expired"?C.red:C.amber,flexShrink:0}}/>
                  <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700}}>{o.cand}</div><div style={{fontSize:11.5,color:C.textSub}}>{o.pos}</div></div>
                  <div style={{textAlign:"right"}}><div style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{o.expires}</div><div style={{fontSize:10,color:C.textMute}}>{o.status}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: OVERSEAS RECRUITMENT
═══════════════════════════════════════════════════════════════════ */
function PageOverseas(){
  const candidates=[
    {name:"Tariq Mahmood",role:"Mathematics Teacher",country:"Pakistan",stage:"Visa Processing",ielts:"7.5 ✓",vit:"Pending",visa:"482 (In Progress)",sponsor:"Yes",arrival:"Aug 2026",risk:"Medium",idx:0},
    {name:"Nadia Osman",role:"Arabic Language Teacher",country:"Egypt",stage:"IELTS Pending",ielts:"Required",vit:"Not Started",visa:"Not Applied",sponsor:"Yes",arrival:"TBC",risk:"High",idx:3},
    {name:"Reza Hosseini",role:"Science Teacher",country:"Iran",stage:"VIT Registration",ielts:"8.0 ✓",vit:"Applied",visa:"482 Approved",sponsor:"Yes",arrival:"Jul 2026",risk:"Low",idx:5},
    {name:"Amara Diallo",role:"Year 3 Teacher",country:"Senegal",stage:"Onboarding",ielts:"7.0 ✓",vit:"Registered ✓",visa:"482 Granted",sponsor:"Yes",arrival:"Jun 2026",risk:"Low",idx:7},
    {name:"Mohammed Al-Farsi",role:"PE Teacher",country:"UAE",stage:"Preliminary Offer",ielts:"Not Required",vit:"Not Started",visa:"Not Applied",sponsor:"TBC",arrival:"TBC",risk:"Low",idx:4},
  ];
  const pipeline=["Preliminary Offer","Contract","IELTS","Visa Processing","VIT Registration","Arrival","Onboarding"];
  const stageColors={
    "Preliminary Offer":C.textMute,"Contract":C.blue,"IELTS":C.amber,"Visa Processing":C.purple,"VIT Registration":C.teal,"Arrival":C.green,"Onboarding":C.goldDark
  };

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search overseas candidates…" width={260}/>
        <select className="sel"><option>Stage  All</option></select>
        <select className="sel"><option>Country  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
          <button className="btn btn-primary">+ Add Overseas Candidate</button>
        </div>
      </FiltersRow>

      <div className="g4" style={{marginBottom:16}}>
        {[{v:12,l:"Overseas Active",c:C.goldDark},{v:3,l:"Visa In Progress",c:C.purple},{v:2,l:"Action Required",c:C.red},{v:4,l:"Arriving < 90 Days",c:C.green}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>

      <div className="card" style={{marginBottom:16}}>
        <div className="card-hd"><div><div className="card-title">Overseas Recruitment Pipeline</div><div className="card-sub">Track candidates through the full immigration & onboarding journey</div></div></div>
        <div className="card-bd">
          <div style={{display:"flex",alignItems:"center",gap:0,overflowX:"auto",paddingBottom:8}}>
            {pipeline.map((stage,i)=>(
              <div key={stage} style={{display:"flex",alignItems:"center",flexShrink:0}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"10px 12px",borderRadius:10,background:`${stageColors[stage]}15`,border:`1.5px solid ${stageColors[stage]}40`,minWidth:112}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:stageColors[stage],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800}}>{i+1}</div>
                  <div style={{fontSize:10,fontWeight:800,color:stageColors[stage],textAlign:"center",lineHeight:1.3}}>{stage}</div>
                  <div style={{fontSize:10,color:C.textMute}}>{candidates.filter(c=>c.stage===stage).length} candidate{candidates.filter(c=>c.stage===stage).length!==1?"s":""}</div>
                </div>
                {i<pipeline.length-1&&<div style={{fontSize:16,color:C.textMute,margin:"0 4px"}}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-hd"><div className="card-title">Overseas Candidate Register</div></div>
        <table className="tbl">
          <thead><tr><th>CANDIDATE</th><th>ROLE</th><th>COUNTRY</th><th>STAGE</th><th>IELTS</th><th>VIT</th><th>VISA</th><th>SPONSOR</th><th>ARRIVAL</th><th>RISK</th></tr></thead>
          <tbody>
            {candidates.map((c,i)=>(
              <tr key={i} style={{background:c.risk==="High"?C.redBg:c.risk==="Medium"?"#fdf8ec":""}}>
                <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={c.name} size={26} idx={c.idx}/><div><div style={{fontWeight:700,color:C.text}}>{c.name}</div><div style={{fontSize:10,color:C.textMute}}>{c.country}</div></div></div></td>
                <td style={{color:C.textSub,fontSize:12}}>{c.role}</td>
                <td style={{color:C.textSub}}>{c.country}</td>
                <td><span className="badge" style={{background:`${stageColors[c.stage]}20`,color:stageColors[c.stage]}}>{c.stage}</span></td>
                <td style={{fontSize:11.5}}>{c.ielts}</td>
                <td style={{fontSize:11.5}}>{c.vit}</td>
                <td style={{fontSize:11.5,color:C.textSub}}>{c.visa}</td>
                <td><span className={`badge ${c.sponsor==="Yes"?"b-green":"b-gray"}`}>{c.sponsor}</span></td>
                <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{c.arrival}</td>
                <td><div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:8,height:8,borderRadius:"50%",background:c.risk==="Low"?C.green:c.risk==="Medium"?C.amber:C.red}}/><span style={{fontSize:11.5,fontWeight:700,color:c.risk==="Low"?C.greenDk:c.risk==="Medium"?C.amberDk:C.redDk}}>{c.risk}</span></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: ONBOARDING WORKFLOWS
═══════════════════════════════════════════════════════════════════ */
function PageOnboarding(){
  const [tab,setTab]=useState("checklist");
  const initTasks=[
    {id:1,label:"Accept Offer Letter",sub:"DocuSign e-signature",done:true,cat:"Offer"},
    {id:2,label:"Tax File Number Declaration",sub:"ATO TFN form submission",done:true,cat:"HR Forms"},
    {id:3,label:"Superannuation Choice Form",sub:"Fund selection & details",done:true,cat:"HR Forms"},
    {id:4,label:"Bank Account Details",sub:"Direct debit for payroll",done:true,cat:"HR Forms"},
    {id:5,label:"Emergency Contact Details",sub:"Next of kin information",done:true,cat:"HR Forms"},
    {id:6,label:"Working With Children Check",sub:"Upload current WWCC card",done:true,cat:"Compliance"},
    {id:7,label:"VIT Certificate Upload",sub:"Current VIT registration",done:true,cat:"Compliance"},
    {id:8,label:"College Policy Acknowledgements",sub:"Child safety, code of conduct, ICT policy",done:false,cat:"Compliance"},
    {id:9,label:"IT Access Request Form",sub:"Email, Teams, Synergetic access",done:true,cat:"IT Provisioning"},
    {id:10,label:"Staff Photo for ID Card",sub:"Upload headshot",done:false,cat:"Admin"},
    {id:11,label:"Child Safety Induction Module",sub:"Online — 45 mins",done:false,cat:"Training"},
    {id:12,label:"Anaphylaxis (ASCIA) Training",sub:"Online certification required",done:false,cat:"Training"},
    {id:13,label:"Payroll Setup — Synergetic",sub:"HR to create employee record",done:true,cat:"Payroll"},
    {id:14,label:"Timetabling Notification",sub:"Notify timetabling team of commencement",done:true,cat:"Admin"},
  ];
  const [tasks,setTasks]=useState(initTasks);
  const done=tasks.filter(t=>t.done).length;
  const pct=Math.round(done/tasks.length*100);
  const cats=[...new Set(tasks.map(t=>t.cat))];

  const starters=[
    {name:"Sarah Ahmed",role:"Mathematics Teacher",start:"28 Jul 2026",pct:71,status:"In Progress",idx:0},
    {name:"Amara Diallo",role:"Year 3 Teacher",start:"23 Jun 2026",pct:100,status:"Complete",idx:7},
    {name:"Tariq Mahmood",role:"Mathematics Teacher",start:"11 Aug 2026",pct:30,status:"Early Stage",idx:0},
    {name:"Reza Hosseini",role:"Science Teacher",start:"14 Jul 2026",pct:55,status:"In Progress",idx:5},
  ];

  return(
    <div className="page-in">
      <div className="tabs">
        {["checklist","starters"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="checklist"?"Onboarding Checklist — Sarah Ahmed":"All New Starters"}</div>)}
      </div>

      {tab==="checklist"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:16}}>
          <div>
            <div className="card" style={{marginBottom:16}}>
              <div className="card-hd">
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <Av name="Sarah Ahmed" size={34} idx={0}/>
                  <div>
                    <div style={{fontSize:14,fontWeight:800}}>Sarah Ahmed</div>
                    <div style={{fontSize:11.5,color:C.textSub}}>Mathematics Teacher · Starting 28 Jul 2026</div>
                  </div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:22,fontWeight:800,color:pct===100?C.greenDk:C.goldDark}}>{pct}%</div>
                  <div style={{fontSize:11.5,color:C.textSub}}>{done}/{tasks.length} complete</div>
                </div>
              </div>
              <div style={{padding:"10px 16px"}}>
                <PBar pct={pct} color={pct===100?C.green:C.accent} height={8}/>
              </div>
            </div>
            {cats.map(cat=>(
              <div key={cat} style={{marginBottom:14}}>
                <div style={{fontSize:10,fontWeight:700,color:C.textSub,textTransform:"uppercase",letterSpacing:.08+"em",marginBottom:6}}>{cat}</div>
                {tasks.filter(t=>t.cat===cat).map(t=>(
                  <Chk key={t.id} done={t.done} label={t.label} sub={t.sub} onToggle={()=>setTasks(ts=>ts.map(tt=>tt.id===t.id?{...tt,done:!tt.done}:tt))}/>
                ))}
              </div>
            ))}
          </div>
          <div>
            <div className="card" style={{marginBottom:12}}>
              <div className="card-hd"><div className="card-title">Section Progress</div></div>
              <div className="card-bd">
                {cats.map(cat=>{
                  const ct=tasks.filter(t=>t.cat===cat);
                  const cd=ct.filter(t=>t.done).length;
                  const cp=Math.round(cd/ct.length*100);
                  return(
                    <div key={cat} style={{marginBottom:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:12}}>
                        <span style={{fontWeight:700}}>{cat}</span>
                        <span style={{color:cp===100?C.greenDk:C.textSub,fontWeight:700}}>{cd}/{ct.length}</span>
                      </div>
                      <PBar pct={cp} color={cp===100?C.green:C.accent}/>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card">
              <div className="card-hd"><div className="card-title">Auto-Notifications Sent</div></div>
              <div className="card-bd">
                {[
                  {to:"IT Department",msg:"Access provisioning request",done:true},
                  {to:"Payroll / Synergetic",msg:"New employee record created",done:true},
                  {to:"Timetabling",msg:"Commencement notification",done:true},
                  {to:"Daily Organiser",msg:"Pending start confirmation",done:false},
                ].map(n=>(
                  <div key={n.to} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12,alignItems:"center"}}>
                    <div style={{width:7,height:7,borderRadius:"50%",background:n.done?C.green:C.amber,flexShrink:0}}/>
                    <div><div style={{fontWeight:700}}>{n.to}</div><div style={{fontSize:11.5,color:C.textSub}}>{n.msg}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab==="starters"&&(
        <div className="card">
          <div className="card-hd"><div className="card-title">New Starters — 2026</div><span className="badge b-gray">{starters.length} active</span></div>
          <table className="tbl">
            <thead><tr><th>STAFF MEMBER</th><th>ROLE</th><th>START DATE</th><th>COMPLETION</th><th>STATUS</th><th></th></tr></thead>
            <tbody>
              {starters.map(s=>(
                <tr key={s.name}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={s.name} size={26} idx={s.idx}/><span style={{fontWeight:700}}>{s.name}</span></div></td>
                  <td style={{color:C.textSub}}>{s.role}</td>
                  <td style={{fontFamily:"ui-monospace,monospace",fontSize:11.5}}>{s.start}</td>
                  <td style={{width:180}}>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <div style={{flex:1}}><PBar pct={s.pct} color={s.pct===100?C.green:C.accent}/></div>
                      <span style={{fontSize:11.5,fontWeight:700,color:s.pct===100?C.greenDk:C.goldDark,width:30}}>{s.pct}%</span>
                    </div>
                  </td>
                  <td><span className={`badge ${s.status==="Complete"?"b-green":s.status==="In Progress"?"b-amber":"b-gray"}`}>{s.status}</span></td>
                  <td><button className="btn btn-ghost btn-xs">View →</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: INDUCTION & TRAINING
═══════════════════════════════════════════════════════════════════ */
function PageInduction(){
  const courses=[
    {code:"CS-001",name:"Child Safety Induction",duration:"60 min",mandatory:true,dueDate:"Before commencement",completions:38,total:42,pct:90,color:C.goldDark},
    {code:"CS-002",name:"Protecting Children Training (Vic DET)",duration:"90 min",mandatory:true,dueDate:"Before commencement",completions:36,total:42,pct:86,color:C.goldDark},
    {code:"FA-001",name:"First Aid (HLTAID011)",duration:"1 day",mandatory:true,dueDate:"Within 6 months",completions:32,total:42,pct:76,color:C.amber},
    {code:"AN-001",name:"Anaphylaxis / ASCIA Training",duration:"45 min",mandatory:true,dueDate:"Annually",completions:40,total:42,pct:95,color:C.green},
    {code:"MR-001",name:"Mandatory Reporting — Children",duration:"30 min",mandatory:true,dueDate:"Annually",completions:41,total:42,pct:98,color:C.green},
    {code:"ICT-001",name:"ICT Acceptable Use Policy",duration:"15 min",mandatory:true,dueDate:"On commencement",completions:38,total:42,pct:90,color:C.teal},
    {code:"DV-001",name:"Disability Awareness Training",duration:"60 min",mandatory:false,dueDate:"Year 1",completions:24,total:42,pct:57,color:C.blue},
    {code:"IS-001",name:"Islamic Studies Professional Learning",duration:"Half day",mandatory:false,dueDate:"Annual",completions:18,total:42,pct:43,color:C.accent},
  ];
  const staff=[
    {name:"Sarah Ahmed",role:"Maths Teacher",cs1:"Due",cs2:"Due",fa:"Due",ascia:"Due",mr:"Due",idx:0},
    {name:"Maryam Iqbal",role:"Primary Teacher",cs1:"Done",cs2:"Done",fa:"Done",ascia:"Done",mr:"Done",idx:1},
    {name:"Hassan Malik",role:"Maths Teacher",cs1:"Done",cs2:"Done",fa:"Due",ascia:"Done",mr:"Done",idx:1},
    {name:"Fatima Nasser",role:"Wellbeing Coord",cs1:"Done",cs2:"Done",fa:"Done",ascia:"Done",mr:"Done",idx:2},
    {name:"Omar Aziz",role:"Primary Teacher",cs1:"Done",cs2:"Due",fa:"Done",ascia:"Done",mr:"Done",idx:5},
  ];
  const statusBadge=s=>s==="Done"?"b-green":"b-amber";

  return(
    <div className="page-in">
      <div className="g4" style={{marginBottom:16}}>
        {[{v:"97%",l:"Mandatory Compliance Rate",c:C.green},{v:4,l:"Overdue Items",c:C.red},{v:18,l:"Due This Month",c:C.amber},{v:312,l:"Certificates Stored",c:C.teal}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>

      <div className="card" style={{marginBottom:16}}>
        <div className="card-hd">
          <div><div className="card-title">Mandatory Training Dashboard</div><div className="card-sub">Course completion rates across all staff</div></div>
          <button className="btn btn-primary btn-sm">+ Assign Training</button>
        </div>
        <div className="card-bd">
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
            {courses.map(c=>(
              <div key={c.code} style={{padding:14,border:`1px solid ${C.border}`,borderRadius:12,background:"#fafafa"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                  <div>
                    <div style={{fontWeight:800,fontSize:12.5,marginBottom:2}}>{c.name}</div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      <span style={{fontFamily:"ui-monospace,monospace",fontSize:10,color:C.textMute}}>{c.code}</span>
                      <span className="badge b-gray">{c.duration}</span>
                      {c.mandatory&&<span className="badge b-maroon">Mandatory</span>}
                    </div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:18,fontWeight:800,color:c.color}}>{c.pct}%</div>
                    <div style={{fontSize:10,color:C.textSub}}>{c.completions}/{c.total}</div>
                  </div>
                </div>
                <PBar pct={c.pct} color={c.color} height={6}/>
                <div style={{fontSize:10,color:C.textMute,marginTop:5}}>Due: {c.dueDate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-hd"><div className="card-title">Staff Training Status — Core Mandatory Courses</div><button className="btn btn-secondary btn-sm">⬇ Export Certificates</button></div>
        <table className="tbl">
          <thead><tr><th>STAFF MEMBER</th><th>Child Safety</th><th>Protecting Children</th><th>First Aid</th><th>ASCIA</th><th>Mandatory Reporting</th><th></th></tr></thead>
          <tbody>
            {staff.map(s=>(
              <tr key={s.name}>
                <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={s.name} size={26} idx={s.idx}/><div><div style={{fontWeight:700,color:C.text}}>{s.name}</div><div style={{fontSize:10,color:C.textSub}}>{s.role}</div></div></div></td>
                {[s.cs1,s.cs2,s.fa,s.ascia,s.mr].map((v,i)=>(
                  <td key={i}><span className={`badge ${statusBadge(v)}`}>{v}</span></td>
                ))}
                <td><button className="btn btn-ghost btn-xs">Assign →</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: COMPLIANCE TRACKING
═══════════════════════════════════════════════════════════════════ */
function PageCompliance(){
  const certRows=[
    {name:"M. Omar",role:"HR Manager",cert:"Working With Children Check",expiry:"12 Jun 2026",daysLeft:9,risk:"Critical",type:"WWCC",idx:0},
    {name:"S. Ahmed",role:"Recruitment Lead",cert:"VIT Registration",expiry:"30 Jun 2026",daysLeft:27,risk:"Warning",type:"VIT",idx:1},
    {name:"F. Nasser",role:"Wellbeing Coord",cert:"First Aid / CPR",expiry:"03 Sep 2026",daysLeft:92,risk:"OK",type:"First Aid",idx:2},
    {name:"A. Khan",role:"IT Operations",cert:"Anaphylaxis (ASCIA)",expiry:"21 May 2026",daysLeft:-13,risk:"Expired",type:"Training",idx:3},
    {name:"R. Hadid",role:"Hiring Manager",cert:"WWCC",expiry:"14 Dec 2026",daysLeft:194,risk:"OK",type:"WWCC",idx:4},
    {name:"T. Mahmood",role:"Maths Teacher",cert:"482 Visa",expiry:"28 Feb 2027",daysLeft:260,risk:"OK",type:"Visa",idx:0},
    {name:"N. Osman",role:"Arabic Teacher",cert:"482 Visa",expiry:"30 Sep 2026",daysLeft:119,risk:"Monitor",type:"Visa",idx:3},
    {name:"H. Malik",role:"Maths Teacher",cert:"VIT Registration",expiry:"30 Jun 2026",daysLeft:27,risk:"Warning",type:"VIT",idx:1},
  ];
  const [reminders,setReminders]=useState({r90:true,r60:true,r30:true,r7:true,autoSuspend:true,escalatePrincipal:false});
  const riskColor=r=>({Critical:C.red,Expired:C.red,Warning:C.amber,Monitor:C.amber,OK:C.green}[r]||C.textMute);
  const riskBadge=r=>({Critical:"b-red",Expired:"b-red",Warning:"b-amber",Monitor:"b-amber",OK:"b-green"}[r]||"b-gray");

  return(
    <div className="page-in">
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:16}}>
        <Donut value={312} max={350} color={C.green} label="Active Certifications" splits={[{v:280,l:"Teaching"},{v:32,l:"Support"}]}/>
        <Donut value={18}  max={30}  color={C.amber} label="Expiring < 30 Days" splits={[{v:11,l:"WWCC"},{v:7,l:"VIT"}]}/>
        <Donut value={4}   max={10}  color={C.red}   label="Expired" splits={[{v:2,l:"Training"},{v:2,l:"Other"}]}/>
        <Donut value={97}  max={100} color={C.teal}  label="Compliance Rate %" splits={[{v:"97%",l:"Overall"}]}/>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 310px",gap:16}}>
        <div>
          <div className="card" style={{marginBottom:16}}>
            <div className="card-hd">
              <div><div className="card-title">Certification Register</div><div className="card-sub">Traffic-light risk status · all staff</div></div>
              <div style={{display:"flex",gap:8}}>
                <button className="btn btn-secondary btn-sm">⬇ Export</button>
                <button className="btn btn-primary btn-sm">+ Add Record</button>
              </div>
            </div>
            <table className="tbl">
              <thead><tr><th>STAFF MEMBER</th><th>CERTIFICATION</th><th>TYPE</th><th>EXPIRY</th><th>DAYS LEFT</th><th>RISK</th><th></th></tr></thead>
              <tbody>
                {certRows.map((r,i)=>(
                  <tr key={i} className={r.risk==="Critical"||r.risk==="Expired"?"risk-crit":r.risk==="Warning"||r.risk==="Monitor"?"risk-warn":"risk-ok"}>
                    <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.name} size={26} idx={r.idx}/><div><div style={{fontWeight:700,color:C.text}}>{r.name}</div><div style={{fontSize:10,color:C.textSub}}>{r.role}</div></div></div></td>
                    <td style={{fontWeight:700,fontSize:12.5}}>{r.cert}</td>
                    <td><span className="badge b-gray">{r.type}</span></td>
                    <td style={{fontFamily:"ui-monospace,monospace",fontSize:11.5}}>{r.expiry}</td>
                    <td>
                      <span style={{fontWeight:800,fontSize:12.5,color:riskColor(r.risk)}}>
                        {r.daysLeft<0?`${Math.abs(r.daysLeft)}d overdue`:r.daysLeft===0?"Today":`${r.daysLeft}d`}
                      </span>
                    </td>
                    <td>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <div style={{width:8,height:8,borderRadius:"50%",background:riskColor(r.risk)}}/>
                        <span className={`badge ${riskBadge(r.risk)}`}>{r.risk}</span>
                      </div>
                    </td>
                    <td><button className="btn btn-ghost btn-xs">Update</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="card" style={{marginBottom:12}}>
            <div className="card-hd"><div className="card-title">Reminder & Escalation Rules</div></div>
            <div className="card-bd">
              <div style={{fontSize:11,fontWeight:700,color:C.textSub,marginBottom:6,textTransform:"uppercase",letterSpacing:.06+"em"}}>Reminder Cadence</div>
              <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:14}}>
                {[{label:"90 days before expiry",key:"r90"},{label:"60 days before expiry",key:"r60"},{label:"30 days before expiry",key:"r30"},{label:"7 days before expiry",key:"r7"}].map(r=>(
                  <div key={r.key} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px",background:"#fafafa",borderRadius:9,border:`1px solid ${C.border}`}}>
                    <span style={{fontSize:12}}>{r.label}</span>
                    <Toggle on={reminders[r.key]} onChange={v=>setReminders(s=>({...s,[r.key]:v}))}/>
                  </div>
                ))}
              </div>
              <div style={{fontSize:11,fontWeight:700,color:C.textSub,marginBottom:6,textTransform:"uppercase",letterSpacing:.06+"em"}}>Escalation Path</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
                {["Staff member","Line manager","HR Compliance","Principal (critical)"].map(p=>(
                  <span key={p} className={`badge ${p.includes("critical")?"b-maroon":"b-gray"}`}>{p}</span>
                ))}
              </div>
              <div style={{fontSize:11,fontWeight:700,color:C.textSub,marginBottom:6,textTransform:"uppercase",letterSpacing:.06+"em"}}>Auto Actions</div>
              {[{label:"Auto-suspend on expiry (child-safety certs)",key:"autoSuspend"},{label:"Escalate to Principal when Critical",key:"escalatePrincipal"}].map(r=>(
                <div key={r.key} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px",background:"#fafafa",borderRadius:9,border:`1px solid ${C.border}`,marginBottom:6}}>
                  <span style={{fontSize:11.5,lineHeight:1.4}}>{r.label}</span>
                  <Toggle on={reminders[r.key]} onChange={v=>setReminders(s=>({...s,[r.key]:v}))}/>
                </div>
              ))}
              <button className="btn btn-primary btn-sm" style={{width:"100%",justifyContent:"center",marginTop:8}}>✓ Save Rules</button>
            </div>
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Risk Summary</div></div>
            <div className="card-bd">
              {[{color:C.red,label:"Critical / Expired",count:3},{color:C.amber,label:"Warning (< 30 days)",count:7},{color:C.amber,label:"Monitor (< 90 days)",count:8},{color:C.green,label:"Compliant",count:294}].map(r=>(
                <div key={r.label} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:`1px solid ${C.border2}`}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:r.color,flexShrink:0}}/>
                  <span style={{flex:1,fontSize:12}}>{r.label}</span>
                  <span style={{fontSize:14,fontWeight:800,color:r.color}}>{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: VISA MANAGEMENT  (Brief §2.3.2)
═══════════════════════════════════════════════════════════════════ */
function PageVisa(){
  const [tab,setTab]=useState("register");
  const [drawer,setDrawer]=useState(null);

  const visas=[
    {id:"V-1042",name:"Tariq Mahmood",role:"Mathematics Teacher",idx:0,country:"Pakistan",
     type:"Skills in Demand (482)",subclass:"482",residency:"Temporary",
     granted:"28 Feb 2025",expiry:"28 Feb 2027",daysLeft:269,sponsor:"Al Siraat College",
     conditions:"8607 — Work limited to sponsor",vevo:"Verified",risk:"OK",docs:3,
     review:"Next review 28 Aug 2026"},
    {id:"V-1039",name:"Nadia Osman",role:"Arabic Language Teacher",idx:3,country:"Egypt",
     type:"Skills in Demand (482)",subclass:"482",residency:"Temporary",
     granted:"30 Sep 2024",expiry:"30 Sep 2026",daysLeft:118,sponsor:"Al Siraat College",
     conditions:"8607 — Work limited to sponsor",vevo:"Verified",risk:"Monitor",docs:2,
     review:"Review due 30 Jun 2026"},
    {id:"V-1036",name:"Reza Hosseini",role:"Science Teacher",idx:5,country:"Iran",
     type:"Skills in Demand (482)",subclass:"482",residency:"Temporary",
     granted:"14 Jan 2026",expiry:"14 Jan 2028",daysLeft:589,sponsor:"Al Siraat College",
     conditions:"8607 — Work limited to sponsor",vevo:"Verified",risk:"OK",docs:4,
     review:"Next review 14 Jul 2026"},
    {id:"V-1031",name:"Amara Diallo",role:"Year 3 Teacher",idx:7,country:"Senegal",
     type:"Skills in Demand (482)",subclass:"482",residency:"Temporary",
     granted:"02 Jun 2025",expiry:"15 Jul 2026",daysLeft:41,sponsor:"Al Siraat College",
     conditions:"8607 — Work limited to sponsor",vevo:"Verified",risk:"Warning",docs:3,
     review:"Renewal action required"},
    {id:"V-1024",name:"Yusuf Rahman",role:"IT Support Technician",idx:1,country:"Bangladesh",
     type:"Employer Nomination (186 PR)",subclass:"186",residency:"Permanent",
     granted:"11 Mar 2026",expiry:"—",daysLeft:null,sponsor:"—",
     conditions:"No work conditions",vevo:"Verified",risk:"OK",docs:5,
     review:"PR — no expiry review"},
    {id:"V-1018",name:"Sana Qureshi",role:"Learning Support Officer",idx:2,country:"India",
     type:"Student (500)",subclass:"500",residency:"Temporary",
     granted:"01 Mar 2024",expiry:"21 May 2026",daysLeft:-14,sponsor:"—",
     conditions:"8105 — 48 hrs/fortnight work limit",vevo:"Expired",risk:"Expired",docs:2,
     review:"ESCALATED — work suspended"},
  ];
  const sel=drawer&&visas.find(v=>v.id===drawer);

  const transitions=[
    {name:"Yusuf Rahman",idx:1,from:"482 Temporary",to:"186 ENS (PR)",date:"11 Mar 2026",by:"Self-initiated",status:"Confirmed",note:"PR granted — sponsorship obligation closed"},
    {name:"Aisha Bello",idx:6,from:"482 Temporary",to:"189 Skilled (PR)",date:"18 Apr 2026",by:"Self-initiated",status:"Confirmed",note:"Independent points-tested PR; record updated"},
    {name:"Reza Hosseini",idx:5,from:"482 Temporary",to:"186 ENS pathway",date:"In progress",by:"College-sponsored",status:"In Progress",note:"Eligible after 2 yrs; nomination drafting"},
  ];

  const reviews=[
    {name:"Nadia Osman",idx:3,type:"482",due:"30 Jun 2026",status:"Due",owner:"M. Omar",checks:"VEVO re-check, sponsor obligation review"},
    {name:"Amara Diallo",idx:7,type:"482",due:"15 Jun 2026",status:"Overdue",owner:"M. Omar",checks:"Renewal vs offshore lodgement decision"},
    {name:"Tariq Mahmood",idx:0,type:"482",due:"28 Aug 2026",status:"Scheduled",owner:"S. Ahmed",checks:"Mid-term condition compliance review"},
    {name:"Reza Hosseini",idx:5,type:"482",due:"14 Jul 2026",status:"Scheduled",owner:"S. Ahmed",checks:"PR pathway eligibility assessment"},
  ];

  const riskColor=r=>({Critical:C.red,Expired:C.red,Warning:C.amber,Monitor:C.amber,OK:C.green}[r]||C.textMute);
  const riskBadge=r=>({Critical:"b-red",Expired:"b-red",Warning:"b-amber",Monitor:"b-amber",OK:"b-green"}[r]||"b-gray");

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search staff, visa subclass, country…" width={290}/>
        <select className="sel"><option>Visa Type  All</option></select>
        <select className="sel"><option>Residency  All</option></select>
        <select className="sel"><option>Risk  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Audit Export</button>
          <button className="btn btn-primary">+ Add Visa Record</button>
        </div>
      </FiltersRow>

      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:16}}>
        <Donut value={14} max={20} color={C.purple} label="Active Visa Holders" splits={[{v:9,l:"Temp"},{v:5,l:"PR"}]}/>
        <Donut value={5}  max={14} color={C.amber}  label="Expiring < 120 Days" splits={[{v:3,l:"482"},{v:2,l:"Other"}]}/>
        <Donut value={2}  max={14} color={C.red}    label="Compliance Risks" splits={[{v:1,l:"Expired"},{v:1,l:"Cond."}]}/>
        <Donut value={9}  max={14} color={C.teal}   label="Sponsorship Obligations" splits={[{v:9,l:"482"}]}/>
      </div>

      <div className="tabs">
        {["register","review","transitions"].map(t=>(
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
            {t==="register"?"Visa Register":t==="review"?"Periodic Reviews":"Residency Transitions"}
          </div>
        ))}
      </div>

      {tab==="register"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 312px",gap:16}}>
          <div className="card">
            <div className="card-hd">
              <div><div className="card-title">Visa & Residency Register</div><div className="card-sub">Detailed visa information · conditions · expiry tracking</div></div>
            </div>
            <table className="tbl">
              <thead><tr><th>STAFF MEMBER</th><th>VISA TYPE</th><th>RESIDENCY</th><th>CONDITIONS</th><th>EXPIRY</th><th>DAYS LEFT</th><th>RISK</th><th></th></tr></thead>
              <tbody>
                {visas.map(v=>(
                  <tr key={v.id} className={v.risk==="Expired"||v.risk==="Critical"?"risk-crit":v.risk==="Warning"||v.risk==="Monitor"?"risk-warn":"risk-ok"} onClick={()=>setDrawer(v.id)}>
                    <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={v.name} size={26} idx={v.idx}/><div><div style={{fontWeight:700,color:C.text}}>{v.name}</div><div style={{fontSize:10,color:C.textMute}}>{v.role} · {v.country}</div></div></div></td>
                    <td><div style={{fontWeight:700,fontSize:12}}>{v.type}</div></td>
                    <td><span className={`badge ${v.residency==="Permanent"?"b-green":"b-blue"}`}>{v.residency}</span></td>
                    <td style={{fontSize:11,color:C.textSub,maxWidth:150}}>{v.conditions}</td>
                    <td style={{fontFamily:"ui-monospace,monospace",fontSize:11.5}}>{v.expiry}</td>
                    <td><span style={{fontWeight:800,fontSize:12.5,color:riskColor(v.risk)}}>{v.daysLeft===null?"—":v.daysLeft<0?`${Math.abs(v.daysLeft)}d overdue`:`${v.daysLeft}d`}</span></td>
                    <td><div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:8,height:8,borderRadius:"50%",background:riskColor(v.risk)}}/><span className={`badge ${riskBadge(v.risk)}`}>{v.risk}</span></div></td>
                    <td><button className="btn btn-ghost btn-xs" onClick={e=>{e.stopPropagation();setDrawer(v.id);}}>View →</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div className="card" style={{marginBottom:12}}>
              <div className="card-hd"><div className="card-title" style={{color:C.redDk}}>⚠ Compliance Alerts</div></div>
              <div className="card-bd">
                {[
                  {name:"Sana Qureshi",msg:"Student visa expired 14 days ago — work access auto-suspended",sev:"crit"},
                  {name:"Amara Diallo",msg:"482 expires in 41 days — renewal decision overdue",sev:"warn"},
                  {name:"Nadia Osman",msg:"Periodic review due 30 Jun — VEVO re-check required",sev:"warn"},
                ].map((a,i)=>(
                  <div key={i} style={{display:"flex",gap:9,padding:"9px 0",borderBottom:i<2?`1px solid ${C.border2}`:"none"}}>
                    <div style={{width:8,height:8,borderRadius:"50%",background:a.sev==="crit"?C.red:C.amber,flexShrink:0,marginTop:4}}/>
                    <div><div style={{fontSize:12,fontWeight:700}}>{a.name}</div><div style={{fontSize:11,color:C.textSub,lineHeight:1.4,marginTop:1}}>{a.msg}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{marginBottom:12}}>
              <div className="card-hd"><div className="card-title">Visa Categories</div></div>
              <div className="card-bd">
                {[{l:"482 Skills in Demand",n:9,c:C.purple},{l:"186 ENS (PR)",n:3,c:C.green},{l:"189 Skilled (PR)",n:1,c:C.teal},{l:"500 Student",n:1,c:C.amber}].map(r=>(
                  <div key={r.l} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:`1px solid ${C.border2}`}}>
                    <div style={{width:9,height:9,borderRadius:"50%",background:r.c,flexShrink:0}}/>
                    <span style={{flex:1,fontSize:12}}>{r.l}</span>
                    <span style={{fontSize:13,fontWeight:800,color:r.c}}>{r.n}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <div className="card-hd"><div className="card-title">Audit & Regulatory</div></div>
              <div className="card-bd" style={{display:"flex",flexDirection:"column",gap:8}}>
                {["Visa category & expiry report","Sponsorship obligation register","Condition compliance evidence","VEVO verification log"].map(r=>(
                  <button key={r} className="btn btn-secondary btn-sm" style={{justifyContent:"flex-start",gap:8}}><span>📊</span>{r}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab==="review"&&(
        <div className="g2">
          <div className="card">
            <div className="card-hd"><div><div className="card-title">Periodic Visa Review Schedule</div><div className="card-sub">Scheduled & overdue review workflows</div></div><button className="btn btn-primary btn-sm">+ Schedule Review</button></div>
            <table className="tbl">
              <thead><tr><th>STAFF MEMBER</th><th>TYPE</th><th>REVIEW DUE</th><th>OWNER</th><th>STATUS</th></tr></thead>
              <tbody>
                {reviews.map((r,i)=>(
                  <tr key={i} className={r.status==="Overdue"?"risk-crit":r.status==="Due"?"risk-warn":""}>
                    <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.name} size={26} idx={r.idx}/><div><div style={{fontWeight:700}}>{r.name}</div><div style={{fontSize:10,color:C.textMute}}>{r.checks}</div></div></div></td>
                    <td><span className="badge b-purple">{r.type}</span></td>
                    <td style={{fontFamily:"ui-monospace,monospace",fontSize:11.5}}>{r.due}</td>
                    <td style={{fontSize:11.5,color:C.textSub}}>{r.owner}</td>
                    <td><span className={`badge ${r.status==="Overdue"?"b-red":r.status==="Due"?"b-amber":"b-blue"}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Review Workflow — Nadia Osman</div><span className="badge b-amber">Step 2 of 4</span></div>
            <div className="card-bd">
              <div className="timeline">
                <TLItem icon="1" bgColor="#f0f0f3" iconColor={C.textSub} title="Review triggered" sub="Auto-triggered 90 days before expiry · 02 Jul 2026 target" done={true}/>
                <TLItem icon="2" bgColor={C.accent} iconColor="#fff" title="VEVO status re-check" sub="In progress — verify current visa & conditions via VEVO" done={false}/>
                <TLItem icon="3" bgColor="#f0f0f3" iconColor={C.textSub} title="Sponsorship obligation review" sub="Confirm ongoing sponsor obligations & nomination validity" done={false}/>
                <TLItem icon="4" bgColor="#f0f0f3" iconColor={C.textSub} title="Renewal decision & HR sign-off" sub="Renew, lodge new nomination, or escalate" done={false}/>
              </div>
              <div style={{display:"flex",gap:8,marginTop:8}}>
                <button className="btn btn-secondary btn-sm">📎 Attach VEVO check</button>
                <button className="btn btn-primary btn-sm" style={{marginLeft:"auto"}}>Complete Step →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab==="transitions"&&(
        <div className="card">
          <div className="card-hd">
            <div><div className="card-title">Residency Transition Records</div><div className="card-sub">Tracks staff who change residency arrangements (incl. self-initiated)</div></div>
            <button className="btn btn-primary btn-sm">+ Record Transition</button>
          </div>
          <table className="tbl">
            <thead><tr><th>STAFF MEMBER</th><th>FROM</th><th>TO</th><th>INITIATED BY</th><th>DATE</th><th>STATUS</th><th>NOTE</th></tr></thead>
            <tbody>
              {transitions.map((t,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={t.name} size={26} idx={t.idx}/><span style={{fontWeight:700}}>{t.name}</span></div></td>
                  <td><span className="badge b-blue">{t.from}</span></td>
                  <td><span className="badge b-green">{t.to}</span></td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{t.by}</td>
                  <td style={{fontFamily:"ui-monospace,monospace",fontSize:11.5}}>{t.date}</td>
                  <td><span className={`badge ${t.status==="Confirmed"?"b-green":"b-amber"}`}>{t.status}</span></td>
                  <td style={{fontSize:11.5,color:C.textSub,maxWidth:220}}>{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {sel&&(
        <div className="drawer-overlay" onClick={()=>setDrawer(null)}>
          <div className="drawer" onClick={e=>e.stopPropagation()}>
            <div className="drawer-hd">
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Av name={sel.name} size={36} idx={sel.idx}/>
                <div><div style={{fontSize:15,fontWeight:800}}>{sel.name}</div><div style={{fontSize:11.5,color:C.textSub}}>{sel.id} · {sel.role}</div></div>
              </div>
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                <span className={`badge ${riskBadge(sel.risk)}`}>{sel.risk}</span>
                <button className="btn btn-ghost btn-xs" onClick={()=>setDrawer(null)}>✕</button>
              </div>
            </div>
            <div className="drawer-bd">
              <div className="drawer-section">VISA DETAILS</div>
              {[
                ["Visa Type",sel.type],["Subclass",sel.subclass],["Residency Status",sel.residency],
                ["Country of Origin",sel.country],["Granted",sel.granted],["Expiry",sel.expiry],
                ["Sponsor",sel.sponsor],["VEVO Status",sel.vevo],
              ].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}>
                  <span style={{color:C.textSub}}>{k}</span>
                  <span style={{fontWeight:700,color:k==="VEVO Status"?(sel.vevo==="Verified"?C.greenDk:C.redDk):C.text}}>{k==="VEVO Status"&&sel.vevo==="Verified"?"✓ ":""}{v}</span>
                </div>
              ))}
              <div className="drawer-section">VISA CONDITIONS</div>
              <div style={{background:sel.risk==="Expired"?C.redBg:"#fafafa",border:`1px solid ${sel.risk==="Expired"?"#f1c9c9":C.border}`,borderRadius:10,padding:12,fontSize:12,color:C.textSub,lineHeight:1.6,marginBottom:8}}>
                {sel.conditions}<br/><span style={{color:sel.risk==="Expired"?C.redDk:C.amberDk,fontWeight:700}}>{sel.review}</span>
              </div>
              <div className="drawer-section">ATTACHED DOCUMENTS ({sel.docs})</div>
              {["Grant Notification (PDF)","Passport bio page","VEVO verification record","Nomination approval"].slice(0,sel.docs>4?4:sel.docs).map(d=>(
                <div key={d} style={{display:"flex",alignItems:"center",gap:9,padding:"8px 10px",border:`1px solid ${C.border}`,borderRadius:9,marginBottom:6,fontSize:12}}>
                  <span style={{fontSize:14}}>📄</span><span style={{flex:1}}>{d}</span>
                  <button className="btn btn-ghost btn-xs">View</button>
                </div>
              ))}
              <button className="btn btn-secondary btn-sm" style={{width:"100%",justifyContent:"center",marginTop:4}}>📎 Attach Migration Document</button>
              <div style={{display:"flex",gap:8,marginTop:14}}>
                <button className="btn btn-secondary btn-sm">↻ Re-check VEVO</button>
                <button className="btn btn-primary btn-sm" style={{marginLeft:"auto"}}>Start Review →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: EMPLOYEE RECORDS  (Brief §2.4.1, 2.4.2, 2.4.7)
═══════════════════════════════════════════════════════════════════ */
function PageEmployees(){
  const [tab,setTab]=useState("profiles");
  const [drawer,setDrawer]=useState(null);
  const emps=EMPLOYEES;
  const sel=drawer&&emps.find(e=>e.id===drawer);
  const arrangements=[
    {name:"Omar Aziz",idx:5,change:"FTE 1.0 → 0.6",reason:"Parental leave arrangement",eff:"01 Jul 2026",notified:["Timetabling","Payroll","Daily Organiser"],status:"Approved"},
    {name:"Hassan Malik",idx:1,change:"Fixed-Term → Ongoing",reason:"Position made permanent",eff:"01 Jan 2027",notified:["Payroll","IT"],status:"Pending"},
    {name:"Maryam Iqbal",idx:1,change:"Acting Head of Primary",reason:"Acting while HoP on leave",eff:"15 Jul – 30 Aug 2026",notified:["Payroll"],status:"Approved"},
  ];
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search employees, roles, departments…" width={300}/>
        <select className="sel"><option>Department  All</option></select>
        <select className="sel"><option>Status  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
          <button className="btn btn-primary">+ Add Employee</button>
        </div>
      </FiltersRow>
      <div className="g4" style={{marginBottom:16}}>
        {[{v:218,l:"Total Employees",c:C.goldDark},{v:184,l:"Teaching Staff",c:C.blue},{v:7,l:"On Leave",c:C.amber},{v:42,l:"Active PORs",c:C.teal}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
      <div className="tabs" style={{overflowX:"auto"}}>
        {["profiles","por","arrangements","orgchart","calendar","contractors","fileapprovals","vacancies"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} style={{whiteSpace:"nowrap"}} onClick={()=>setTab(t)}>{
          t==="profiles"?"Employee Directory":t==="por"?"Positions of Responsibility":t==="arrangements"?"Employment Arrangements":
          t==="orgchart"?"Org Chart":t==="calendar"?"Calendar":t==="contractors"?"Contractors":t==="fileapprovals"?"File Approvals":"Vacancies & Requisitions"
        }</div>)}
      </div>
      {tab==="profiles"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>EMPLOYEE</th><th>ROLE</th><th>DEPT</th><th>FTE</th><th>TYPE</th><th>START</th><th>REPORTS TO</th><th>STATUS</th><th></th></tr></thead>
            <tbody>
              {emps.map(e=>(
                <tr key={e.id} onClick={()=>setDrawer(e.id)}>
                  <td><div style={{display:"flex",alignItems:"center",gap:9}}><Av name={e.name} size={30} idx={e.idx}/><div><div style={{fontWeight:700,color:C.text}}>{e.name}</div><div style={{fontSize:10,color:C.textMute,fontFamily:"ui-monospace,monospace"}}>{e.id}</div></div></div></td>
                  <td style={{fontWeight:700,fontSize:12.5}}>{e.role}</td>
                  <td style={{color:C.textSub}}>{e.dept}</td>
                  <td style={{fontWeight:800}}>{e.fte}</td>
                  <td><span className="badge b-gray">{e.type}</span></td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace",color:C.textSub}}>{e.start}</td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{e.mgr}</td>
                  <td><span className={`badge ${e.status==="Active"?"b-green":"b-amber"}`}>{e.status}</span></td>
                  <td><button className="btn btn-ghost btn-xs" onClick={ev=>{ev.stopPropagation();setDrawer(e.id);}}>View →</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab==="por"&&(
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Positions of Responsibility</div><div className="card-sub">Staff may hold multiple PORs · acting roles tracked with expiry</div></div><button className="btn btn-primary btn-sm">+ Assign POR</button></div>
          <table className="tbl">
            <thead><tr><th>STAFF MEMBER</th><th>POSITION OF RESPONSIBILITY</th><th>TYPE</th><th>ALLOWANCE</th><th>PERIOD</th><th>STATUS</th></tr></thead>
            <tbody>
              {[
                {name:"Rania Hadid",idx:4,por:"Head of Secondary",type:"Substantive",allow:"$12,000",period:"Ongoing",status:"Active"},
                {name:"Fatima Nasser",idx:2,por:"Child Safety Officer",type:"Substantive",allow:"$6,000",period:"Ongoing",status:"Active"},
                {name:"Maryam Iqbal",idx:1,por:"Acting Head of Primary",type:"Acting",allow:"$8,000",period:"15 Jul – 30 Aug 2026",status:"Expiring"},
                {name:"Ahmed Khan",idx:3,por:"ICT Coordinator",type:"Substantive",allow:"$5,000",period:"Ongoing",status:"Active"},
              ].map((p,i)=>(
                <tr key={i} className={p.status==="Expiring"?"risk-warn":""}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={p.name} size={26} idx={p.idx}/><span style={{fontWeight:700}}>{p.name}</span></div></td>
                  <td style={{fontWeight:700,fontSize:12.5}}>{p.por}</td>
                  <td><span className={`badge ${p.type==="Acting"?"b-amber":"b-gray"}`}>{p.type}</span></td>
                  <td style={{fontWeight:700}}>{p.allow}</td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{p.period}</td>
                  <td><span className={`badge ${p.status==="Active"?"b-green":"b-amber"}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab==="arrangements"&&(
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Employment Arrangements & Staffing Changes</div><div className="card-sub">Auto-notifies Timetabling · Daily Organiser · Payroll · IT</div></div><button className="btn btn-primary btn-sm">+ Record Change</button></div>
          <table className="tbl">
            <thead><tr><th>STAFF MEMBER</th><th>CHANGE</th><th>REASON</th><th>EFFECTIVE</th><th>NOTIFICATIONS</th><th>STATUS</th></tr></thead>
            <tbody>
              {arrangements.map((a,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={a.name} size={26} idx={a.idx}/><span style={{fontWeight:700}}>{a.name}</span></div></td>
                  <td style={{fontWeight:700,fontSize:12.5}}>{a.change}</td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{a.reason}</td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{a.eff}</td>
                  <td><div style={{display:"flex",gap:4,flexWrap:"wrap"}}>{a.notified.map(n=><span key={n} className="badge b-blue" style={{fontSize:10}}>{n}</span>)}</div></td>
                  <td><span className={`badge ${a.status==="Approved"?"b-green":"b-amber"}`}>{a.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab==="orgchart"&&(()=>{
        const byMgr:Record<string,typeof EMPLOYEES>={};
        emps.forEach(e=>{ (byMgr[e.mgr]=byMgr[e.mgr]||[]).push(e); });
        return (
          <div className="card" style={{padding:32}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:20}}>
              <div className="card-bd" style={{background:C.sidebar,color:"#fff",borderRadius:12,padding:"10px 18px",textAlign:"center"}}>
                <div style={{fontWeight:800,fontSize:13}}>Al Siraat College</div>
                <div style={{fontSize:11,opacity:.75}}>Principal's Office</div>
              </div>
              <div style={{width:1,height:16,background:C.border}}/>
              <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:28}}>
                {Object.entries(byMgr).map(([mgr,list])=>(
                  <div key={mgr} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
                    <div className="card-bd" style={{border:`1px solid ${C.border}`,borderRadius:10,padding:"7px 14px",textAlign:"center",fontSize:11.5,fontWeight:700,color:C.textSub,minWidth:140}}>{mgr}</div>
                    <div style={{width:1,height:12,background:C.border}}/>
                    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,maxWidth:220}}>
                      {list.map(e=>(
                        <div key={e.id} className="card-bd" style={{border:`1px solid ${C.border}`,borderRadius:10,padding:"8px 12px",textAlign:"center",minWidth:130}}>
                          <div style={{fontWeight:700,fontSize:12}}>{e.name}</div>
                          <div style={{fontSize:10.5,color:C.textMute}}>{e.role}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
      {tab==="calendar"&&(()=>{
        const days=Array.from({length:31},(_,i)=>i+1);
        const marks:Record<number,[string,string]>={3:["Leave",C.amber],8:["Leave",C.amber],9:["Leave",C.amber],10:["Leave",C.amber],20:["PD day",C.accent],24:["Leave",C.green]};
        return (
          <div className="card" style={{padding:16}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div className="card-title" style={{fontSize:13}}>Team Calendar — July 2026</div>
              <div style={{display:"flex",gap:14,fontSize:11,color:C.textSub}}>
                <span style={{display:"inline-flex",alignItems:"center",gap:5}}><span style={{width:8,height:8,borderRadius:"50%",background:C.amber,display:"inline-block"}}/>Leave</span>
                <span style={{display:"inline-flex",alignItems:"center",gap:5}}><span style={{width:8,height:8,borderRadius:"50%",background:C.accent,display:"inline-block"}}/>PD / event</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:4}}>
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=><div key={d} style={{textAlign:"center",fontSize:11,fontWeight:700,color:C.textMute,padding:"4px 0"}}>{d}</div>)}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
              {[0,1].map(i=><div key={"b"+i}/>)}
              {days.map(d=>{
                const m=marks[d]; const col=(d+1)%7; const we=col===5||col===6;
                return (
                  <div key={d} style={{height:64,borderRadius:8,background:we?C.bg:C.surface,border:`1px solid ${C.border}`,padding:6}}>
                    <div style={{fontSize:11,fontWeight:700,color:C.textSub}}>{d}</div>
                    {m&&<div style={{marginTop:4,borderRadius:5,padding:"2px 5px",fontSize:10,background:`${m[1]}22`,color:m[1]}}>{m[0]}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
      {tab==="contractors"&&(
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Contractor Employees</div><div className="card-sub">Contractors & employer-of-record staff</div></div><button className="btn btn-primary btn-sm">+ Add Contractor</button></div>
          <table className="tbl">
            <thead><tr><th>CONTRACTOR</th><th>ENGAGEMENT</th><th>ABN</th><th>RATE</th><th>STATUS</th></tr></thead>
            <tbody>
              {[
                {name:"Relief Teaching Pool",sub:"Casual relief",eng:"Labour hire",rate:"$62 / hr"},
                {name:"CleanCo Services",sub:"Contract cleaning",eng:"Service contract",rate:"$1,200 / wk"},
                {name:"Mark Lee",sub:"ICT consultant",eng:"Independent contractor",rate:"$95 / hr"},
              ].map((c,i)=>(
                <tr key={i}>
                  <td><div style={{fontWeight:700}}>{c.name}</div><div style={{fontSize:10.5,color:C.textMute}}>{c.sub}</div></td>
                  <td style={{color:C.textSub}}>{c.eng}</td>
                  <td style={{fontFamily:"ui-monospace,monospace",fontSize:11.5,color:C.textMute}}>•• ••• ••• •••</td>
                  <td style={{fontWeight:700}}>{c.rate}</td>
                  <td><span className="badge b-green">Active</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab==="fileapprovals"&&(
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Employee File Approvals</div><div className="card-sub">Review changes to employee records</div></div></div>
          <table className="tbl">
            <thead><tr><th>EMPLOYEE</th><th>CHANGE REQUESTED</th><th>REQUESTED</th><th>ACTION</th></tr></thead>
            <tbody>
              {[
                {emp:EMPLOYEES[3],change:"Bank account update",date:"2 Jul 2026"},
                {emp:EMPLOYEES[5],change:"Address change",date:"1 Jul 2026"},
                {emp:EMPLOYEES[2],change:"Tax file declaration",date:"30 Jun 2026"},
              ].map((r,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.emp.name} size={26} idx={r.emp.idx}/><span style={{fontWeight:700}}>{r.emp.name}</span></div></td>
                  <td style={{color:C.textSub}}>{r.change}</td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace",color:C.textMute}}>{r.date}</td>
                  <td><div style={{display:"flex",gap:6}}><button className="btn btn-success btn-xs">Approve</button><button className="btn btn-secondary btn-xs">Decline</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab==="vacancies"&&(
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Vacancies & Requisitions</div><div className="card-sub">Open roles and hiring requests</div></div><button className="btn btn-primary btn-sm">+ New Requisition</button></div>
          <table className="tbl">
            <thead><tr><th>ROLE</th><th>DEPARTMENT</th><th>TYPE</th><th>APPLICANTS</th><th>STATUS</th></tr></thead>
            <tbody>
              {[
                {role:"Secondary Teacher — Science",dept:"Secondary",type:"Full-time",apps:12,status:"Open"},
                {role:"Teacher Aide",dept:"Primary",type:"Part-time",apps:5,status:"Open"},
                {role:"Bus Driver",dept:"Operations",type:"Casual",apps:3,status:"In Review"},
              ].map((r,i)=>(
                <tr key={i}>
                  <td style={{fontWeight:700}}>{r.role}</td>
                  <td style={{color:C.textSub}}>{r.dept}</td>
                  <td><span className="badge b-gray">{r.type}</span></td>
                  <td>{r.apps}</td>
                  <td><span className={`badge ${r.status==="Open"?"b-green":"b-amber"}`}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {sel&&(
        <div className="drawer-overlay" onClick={()=>setDrawer(null)}>
          <div className="drawer" onClick={e=>e.stopPropagation()}>
            <div className="drawer-hd">
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Av name={sel.name} size={36} idx={sel.idx}/>
                <div><div style={{fontSize:15,fontWeight:800}}>{sel.name}</div><div style={{fontSize:11.5,color:C.textSub}}>{sel.id} · {sel.role}</div></div>
              </div>
              <div style={{display:"flex",gap:6,alignItems:"center"}}><span className={`badge ${sel.status==="Active"?"b-green":"b-amber"}`}>{sel.status}</span><button className="btn btn-ghost btn-xs" onClick={()=>setDrawer(null)}>✕</button></div>
            </div>
            <div className="drawer-bd">
              <div className="drawer-section">EMPLOYMENT DETAILS</div>
              {[["Department",sel.dept],["FTE",sel.fte],["Employment Type",sel.type],["Start Date",sel.start],["Reports To",sel.mgr]].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}><span style={{color:C.textSub}}>{k}</span><span style={{fontWeight:700}}>{v}</span></div>
              ))}
              <div className="drawer-section">PAYROLL</div>
              {[["Award / Agreement",sel.award],["Base Rate",sel.rate],["Super Fund",sel.fund],["Pay Status",sel.payStatus]].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12}}><span style={{color:C.textSub}}>{k}</span><span style={{fontWeight:700}}>{v}</span></div>
              ))}
              <div className="drawer-section">POSITIONS OF RESPONSIBILITY</div>
              {sel.por.length?sel.por.map(p=><span key={p} className="badge b-maroon" style={{marginRight:6,marginBottom:6,display:"inline-flex"}}>{p}</span>):<div style={{fontSize:12,color:C.textMute}}>No active PORs</div>}
              <div className="drawer-section">RECORD SECTIONS</div>
              {[{l:"Contract & variations",n:3,i:"📄"},{l:"Certifications & compliance",n:5,i:"🛡"},{l:"Performance documentation",n:2,i:"📈"},{l:"Correspondence history",n:11,i:"💬"}].map(r=>(
                <div key={r.l} style={{display:"flex",alignItems:"center",gap:9,padding:"9px 11px",border:`1px solid ${C.border}`,borderRadius:9,marginBottom:6,fontSize:12}}>
                  <span style={{fontSize:14}}>{r.i}</span><span style={{flex:1,fontWeight:700}}>{r.l}</span><span className="badge b-gray">{r.n}</span><button className="btn btn-ghost btn-xs">Open</button>
                </div>
              ))}
              <div style={{display:"flex",gap:8,marginTop:14}}>
                <button className="btn btn-secondary btn-sm">📝 Generate Letter</button>
                <button className="btn btn-primary btn-sm" style={{marginLeft:"auto"}}>Edit Record</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: DOCUMENT TEMPLATES  (Brief §2.4.3)
═══════════════════════════════════════════════════════════════════ */
function PageDocTemplates(){
  const [tab,setTab]=useState("templates");
  const templates=[
    {name:"Letter of Offer",cat:"Contracts",ver:"v3.1",used:142,icon:"📄",color:C.green},
    {name:"Contract Variation",cat:"Contracts",ver:"v2.0",used:38,icon:"📝",color:C.blue},
    {name:"Statement of Service",cat:"HR Letters",ver:"v1.4",used:27,icon:"📑",color:C.teal},
    {name:"Salary Review Letter",cat:"HR Letters",ver:"v2.2",used:64,icon:"💰",color:C.goldDark},
    {name:"Performance Management Plan",cat:"Performance",ver:"v1.1",used:9,icon:"📈",color:C.purple},
    {name:"Formal Warning",cat:"Performance",ver:"v2.0",used:4,icon:"⚠",color:C.red},
    {name:"Policy Acknowledgement",cat:"Compliance",ver:"v4.0",used:218,icon:"✅",color:C.green},
    {name:"Position Description",cat:"Recruitment",ver:"v2.3",used:54,icon:"📋",color:C.amber},
  ];
  const generated=[
    {doc:"Letter of Offer",emp:"Sarah Ahmed",by:"M. Omar",date:"10 Jun 2026",status:"Sent",ack:"Pending",idx:0},
    {doc:"Salary Review Letter",emp:"Maryam Iqbal",by:"M. Omar",date:"08 Jun 2026",status:"Delivered",ack:"Acknowledged",idx:1},
    {doc:"Statement of Service",emp:"Tariq Bashir",by:"HR Self-Service",date:"05 Jun 2026",status:"Generated",ack:"N/A",idx:7},
    {doc:"Contract Variation",emp:"Omar Aziz",by:"M. Omar",date:"02 Jun 2026",status:"Delivered",ack:"Acknowledged",idx:5},
  ];
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search templates & generated documents…" width={300}/>
        <select className="sel"><option>Category  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬆ Import Template</button>
          <button className="btn btn-primary">+ New Template</button>
        </div>
      </FiltersRow>
      <div className="tabs">
        {["templates","generated"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="templates"?"Template Library":"Generated Documents"}</div>)}
      </div>
      {tab==="templates"&&(
        <div className="g4">
          {templates.map(t=>(
            <div key={t.name} className="card card-bd" style={{padding:16,cursor:"pointer"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                <div style={{width:38,height:38,borderRadius:10,background:`${t.color}1a`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{t.icon}</div>
                <span style={{fontFamily:"ui-monospace,monospace",fontSize:10.5,color:C.textMute}}>{t.ver}</span>
              </div>
              <div style={{fontWeight:800,fontSize:13,marginBottom:3}}>{t.name}</div>
              <span className="badge b-gray" style={{fontSize:10}}>{t.cat}</span>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:12,paddingTop:10,borderTop:`1px solid ${C.border2}`}}>
                <span style={{fontSize:11,color:C.textSub}}>{t.used} generated</span>
                <button className="btn btn-accent btn-xs">Use →</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {tab==="generated"&&(
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Generated Documents</div><div className="card-sub">Version-controlled · acknowledgement tracked · audit logged</div></div></div>
          <table className="tbl">
            <thead><tr><th>DOCUMENT</th><th>EMPLOYEE</th><th>GENERATED BY</th><th>DATE</th><th>STATUS</th><th>ACKNOWLEDGEMENT</th><th></th></tr></thead>
            <tbody>
              {generated.map((g,i)=>(
                <tr key={i}>
                  <td style={{fontWeight:700,fontSize:12.5}}>{g.doc}</td>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={g.emp} size={24} idx={g.idx}/><span>{g.emp}</span></div></td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{g.by}</td>
                  <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{g.date}</td>
                  <td><span className={`badge ${g.status==="Acknowledged"||g.status==="Delivered"?"b-green":g.status==="Sent"?"b-blue":"b-gray"}`}>{g.status}</span></td>
                  <td><span className={`badge ${g.ack==="Acknowledged"?"b-green":g.ack==="Pending"?"b-amber":"b-gray"}`}>{g.ack}</span></td>
                  <td><div style={{display:"flex",gap:4}}><button className="btn btn-ghost btn-xs">View</button><button className="btn btn-ghost btn-xs">PDF</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: TASKS & ACKNOWLEDGEMENTS  (Brief §2.4.4)
═══════════════════════════════════════════════════════════════════ */
function PageTasks(){
  const init=[
    {id:1,title:"Acknowledge Child Safety Policy 2026",assignee:"All Teaching Staff",due:"15 Jun 2026",type:"Policy Ack",done:false,prog:84,escalate:false},
    {id:2,title:"Complete Annual Mandatory Reporting Module",assignee:"All Staff",due:"30 Jun 2026",type:"Training",done:false,prog:67,escalate:false},
    {id:3,title:"Upload renewed WWCC card",assignee:"M. Omar",due:"10 Jun 2026",type:"Compliance",done:false,prog:0,escalate:true},
    {id:4,title:"Acknowledge ICT Acceptable Use Policy",assignee:"New Starters",due:"On commencement",type:"Policy Ack",done:false,prog:50,escalate:false},
    {id:5,title:"Confirm emergency contact details",assignee:"All Staff",due:"31 May 2026",type:"HR Form",done:false,prog:91,escalate:true},
    {id:6,title:"Review & sign updated Code of Conduct",assignee:"All Staff",done:true,due:"01 May 2026",type:"Policy Ack",prog:100,escalate:false},
  ];
  const [tasks,setTasks]=useState(init);
  const typeBadge=t=>({"Policy Ack":"b-purple","Training":"b-blue","Compliance":"b-amber","HR Form":"b-teal"}[t]||"b-gray");
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search tasks & acknowledgements…" width={290}/>
        <select className="sel"><option>Type  All</option></select>
        <select className="sel"><option>Status  All</option></select>
        <div style={{marginLeft:"auto"}}><button className="btn btn-primary">+ Issue Task</button></div>
      </FiltersRow>
      <div className="g4" style={{marginBottom:16}}>
        {[{v:42,l:"Active Tasks",c:C.goldDark},{v:6,l:"Overdue",c:C.red},{v:2,l:"Escalated",c:C.amber},{v:"88%",l:"Completion Rate",c:C.green}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
      <div className="card">
        <div className="card-hd"><div><div className="card-title">Task & Acknowledgement Register</div><div className="card-sub">Bulk-issued · auto-reminders · escalation on overdue</div></div></div>
        <table className="tbl">
          <thead><tr><th></th><th>TASK</th><th>ASSIGNED TO</th><th>TYPE</th><th>DUE</th><th>COMPLETION</th><th>FLAGS</th></tr></thead>
          <tbody>
            {tasks.map(t=>(
              <tr key={t.id}>
                <td onClick={()=>setTasks(ts=>ts.map(tt=>tt.id===t.id?{...tt,done:!tt.done,prog:!tt.done?100:tt.prog}:tt))} style={{cursor:"pointer"}}>
                  <div className={`chk-box ${t.done?"done":""}`}>{t.done&&"✓"}</div>
                </td>
                <td style={{fontWeight:700,fontSize:12.5,textDecoration:t.done?"line-through":"none",color:t.done?C.textSub:C.text}}>{t.title}</td>
                <td style={{fontSize:11.5,color:C.textSub}}>{t.assignee}</td>
                <td><span className={`badge ${typeBadge(t.type)}`}>{t.type}</span></td>
                <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{t.due}</td>
                <td style={{width:150}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{flex:1}}><PBar pct={t.prog} color={t.prog===100?C.green:C.accent}/></div><span style={{fontSize:11,fontWeight:700,width:32,color:t.prog===100?C.greenDk:C.goldDark}}>{t.prog}%</span></div></td>
                <td>{t.escalate?<span className="badge b-red">⚠ Escalated</span>:t.done?<span className="badge b-green">Done</span>:<span className="badge b-gray">On track</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: COMMUNICATIONS  (Brief §2.4.8)
═══════════════════════════════════════════════════════════════════ */
function PageComms(){
  const threads=[
    {who:"Sarah Ahmed",role:"Candidate · REQ-2041",last:"Re: Interview confirmation",time:"2h ago",channel:"Email",unread:true,idx:0},
    {who:"Maryam Iqbal",role:"Employee · EMP-0412",last:"Salary review acknowledgement",time:"Yesterday",channel:"Email",unread:false,idx:1},
    {who:"Tariq Mahmood",role:"Overseas · Visa",last:"Visa lodgement documents attached",time:"2 days ago",channel:"Email",unread:false,idx:0},
    {who:"Omar Aziz",role:"Employee · EMP-0291",last:"Parental leave arrangement",time:"3 days ago",channel:"Teams",unread:false,idx:5},
  ];
  const log=[
    {dir:"in",from:"Sarah Ahmed",subj:"Re: Interview confirmation",body:"Thank you, I confirm I can attend the panel interview on Monday 19 June at 9:00 AM. Looking forward to it.",time:"Today 10:42",channel:"Email"},
    {dir:"out",from:"M. Omar (HR)",subj:"Interview confirmation",body:"Dear Sarah, your panel interview is confirmed for Mon 19 Jun, 9:00 AM at the Epping campus. Please bring photo ID and your VIT card.",time:"Today 09:15",channel:"Email"},
    {dir:"out",from:"AI Recruitment Agent",subj:"Application received",body:"Thank you for applying for the Year 4 Classroom Teacher role. This is an automated message from Al Siraat's AI assistant; a recruiter will be in touch shortly.",time:"05 Jun 14:20",channel:"Email"},
  ];
  return(
    <div className="page-in">
      <div style={{display:"grid",gridTemplateColumns:"300px 1fr",gap:16}}>
        <div className="card">
          <div className="card-hd"><div className="card-title">Conversations</div><span className="badge b-red">1 new</span></div>
          <div style={{display:"flex",flexDirection:"column"}}>
            {threads.map((t,i)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"12px 16px",borderBottom:`1px solid ${C.border2}`,cursor:"pointer",background:i===0?"rgba(198,163,90,.06)":"#fff"}}>
                <Av name={t.who} size={34} idx={t.idx}/>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontWeight:800,fontSize:12.5}}>{t.who}</span>{t.unread&&<div style={{width:7,height:7,borderRadius:"50%",background:C.red}}/>}</div>
                  <div style={{fontSize:10,color:C.textMute,marginBottom:3}}>{t.role}</div>
                  <div style={{fontSize:11.5,color:C.textSub,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{t.last}</div>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}><span className="badge b-gray" style={{fontSize:9}}>{t.channel}</span><span style={{fontSize:10,color:C.textMute}}>{t.time}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-hd"><div style={{display:"flex",alignItems:"center",gap:10}}><Av name="Sarah Ahmed" size={32} idx={0}/><div><div className="card-title">Sarah Ahmed</div><div className="card-sub">Candidate · REQ-2041 · all channels logged centrally</div></div></div><span className="badge b-blue">Email synced</span></div>
          <div className="card-bd" style={{maxHeight:420,overflowY:"auto"}}>
            {log.map((m,i)=>(
              <div key={i} style={{marginBottom:14,display:"flex",flexDirection:"column",alignItems:m.dir==="out"?"flex-end":"flex-start"}}>
                <div style={{maxWidth:"80%",background:m.dir==="out"?"rgba(198,163,90,.1)":"#f4f4f6",border:`1px solid ${m.dir==="out"?"rgba(198,163,90,.28)":C.border}`,borderRadius:12,padding:"11px 13px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",gap:16,marginBottom:5}}><span style={{fontSize:11,fontWeight:800,color:m.dir==="out"?C.goldDark:C.text}}>{m.from}</span><span className="badge b-gray" style={{fontSize:9}}>{m.channel}</span></div>
                  <div style={{fontSize:11.5,fontWeight:700,marginBottom:3}}>{m.subj}</div>
                  <div style={{fontSize:12,color:C.textSub,lineHeight:1.6}}>{m.body}</div>
                  <div style={{fontSize:10,color:C.textMute,marginTop:5,textAlign:"right"}}>{m.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{padding:"12px 16px",borderTop:`1px solid ${C.border}`,display:"flex",gap:8}}>
            <input className="form-input" placeholder="Type a reply… (logged to candidate record)" style={{flex:1}}/>
            <button className="btn btn-primary btn-sm">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SHARED: WIZARD STEPPER
═══════════════════════════════════════════════════════════════════ */
function Stepper({step,steps}:{step:number;steps:string[]}){
  return(
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
      {steps.map((label,i)=>{
        const n=i+1,done=n<step,active=n===step;
        return(
          <div key={label} style={{display:"flex",alignItems:"center",gap:8,flex:i<steps.length-1?1:"initial"}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:26,height:26,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,flexShrink:0,background:done?C.green:active?C.accent:"#ededf0",color:done||active?"#fff":C.textSub}}>{done?"✓":n}</div>
              <span style={{fontSize:12,fontWeight:700,color:active?C.text:C.textMute,whiteSpace:"nowrap"}}>{label}</span>
            </div>
            {i<steps.length-1&&<div style={{flex:1,height:1,background:C.border,minWidth:14}}/>}
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: MY LEAVE
═══════════════════════════════════════════════════════════════════ */
function PageMyLeave(){
  const bals=[["Annual leave","14.2 days",.71,C.accent],["Personal / carer's","8.6 days",.5,C.blue],["Long service","31.0 days",.31,C.green]];
  const rows=[["Annual leave","22–26 Sep 2026",5,"Approved"],["Personal / carer's","3 Aug 2026",1,"Pending"],["Annual leave","2–6 Jun 2026",5,"Approved"],["Personal / carer's","14 Apr 2026",1,"Approved"]];
  return(
    <div className="page-in">
      <div className="g3" style={{marginBottom:16}}>
        {bals.map(([l,v,p,col])=>(
          <div key={l as string} className="card card-bd">
            <div style={{fontSize:12,color:C.textSub}}>{l}</div>
            <div className="mt-1" style={{fontSize:20,fontWeight:800,color:C.text,marginTop:4}}>{v}</div>
            <div style={{marginTop:10}}><PBar pct={(p as number)*100} color={col as string}/></div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-hd"><div className="card-title">My Leave Requests</div><button className="btn btn-primary btn-sm">+ Request Leave</button></div>
        <table className="tbl">
          <thead><tr><th>TYPE</th><th>DATES</th><th>DAYS</th><th>STATUS</th></tr></thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i}>
                <td style={{fontWeight:700}}>{r[0]}</td>
                <td style={{color:C.textSub}}>{r[1]}</td>
                <td>{r[2]}</td>
                <td><span className={`badge ${r[3]==="Approved"?"b-green":"b-amber"}`}>{r[3]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: LEAVE MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
function PageLeaveMgmt(){
  const [tab,setTab]=useState("pending");
  const rows=tab==="pending"?LEAVE.filter(l=>l.status==="Pending"):LEAVE;
  const stats=[
    {v:LEAVE.filter(l=>l.status==="Pending").length,l:"Pending Approval",c:C.amber},
    {v:2,l:"On Leave Today",c:C.blue},
    {v:LEAVE.filter(l=>l.status==="Approved").length,l:"Approved This Month",c:C.green},
    {v:money(184200),l:"Leave Liability",c:C.goldDark},
  ];
  return(
    <div className="page-in">
      <div className="g4" style={{marginBottom:16}}>
        {stats.map(s=>(<div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>))}
      </div>
      <div className="tabs">
        {["pending","all"].map(t=>(
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="pending"?"Pending Approval":"All Requests"}</div>
        ))}
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr><th>EMPLOYEE</th><th>TYPE</th><th>DATES</th><th>DAYS</th><th>STATUS</th><th></th></tr></thead>
          <tbody>
            {rows.map((l,i)=>(
              <tr key={i}>
                <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={l.name} size={26} idx={l.idx}/><span style={{fontWeight:700}}>{l.name}</span></div></td>
                <td style={{color:C.textSub}}>{l.type}</td>
                <td style={{color:C.textSub}}>{l.dates}</td>
                <td>{l.days}</td>
                <td><span className={`badge ${l.status==="Approved"?"b-green":"b-amber"}`}>{l.status}</span></td>
                <td className="text-right">{l.status==="Pending"&&<div style={{display:"inline-flex",gap:8}}><button className="btn btn-primary btn-xs" style={{background:C.green}}>Approve</button><button className="btn btn-sm" style={{background:C.bg,color:C.textSub}}>Decline</button></div>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: ROSTERING MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
function PageRoster(){
  const days=["Mon","Tue","Wed","Thu","Fri"];
  const pos=[["Front Office","8:00–4:00"],["Library","9:00–3:00"],["Grounds","7:00–3:00"],["Canteen","10:00–2:00"],["Bus Supervision","3:00–4:00"]];
  return(
    <div className="page-in">
      <div className="card">
        <div className="card-hd"><div className="card-title">Weekly Roster — Week of 6 Jul 2026</div><button className="btn btn-primary btn-sm">Publish Roster</button></div>
        <table className="tbl">
          <thead><tr><th>POSITION</th>{days.map(d=><th key={d} className="text-center">{d.toUpperCase()}</th>)}</tr></thead>
          <tbody>
            {pos.map(([p,t],i)=>(
              <tr key={i}>
                <td><div style={{fontWeight:700}}>{p}</div><div style={{fontSize:11,color:C.textMute}}>{t}</div></td>
                {days.map((d,j)=>{
                  const e=EMPLOYEES[(i+j)%EMPLOYEES.length];
                  return (i+j)%4!==3
                    ? <td key={j} className="text-center"><span className="badge b-blue" style={{fontSize:10.5}}>{e.name.split(" ")[0]}</span></td>
                    : <td key={j} className="text-center" style={{color:C.textMute}}>—</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: TIMESHEETS MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
function PageTimesheets(){
  const days=["Mon","Tue","Wed","Thu","Fri"];
  const rows=EMPLOYEES.filter(e=>e.type!=="Ongoing").slice(0,5);
  return(
    <div className="page-in">
      <div className="card" style={{marginBottom:16,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{fontSize:12.5,color:C.textSub}}>Week of 6 Jul 2026 · casual and part-time staff</div>
        <span className="badge b-amber">3 awaiting approval</span>
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr><th>EMPLOYEE</th>{days.map(d=><th key={d} className="text-center">{d.toUpperCase()}</th>)}<th className="text-right">TOTAL</th></tr></thead>
          <tbody>
            {rows.map((e,i)=>{
              const hrs=[7.6,7.6,i%2?4:7.6,7.6,i%3?6:7.6];
              const total=hrs.reduce((a,b)=>a+b,0);
              return (
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={e.name} size={26} idx={e.idx}/><span style={{fontWeight:700}}>{e.name}</span></div></td>
                  {hrs.map((h,j)=><td key={j} className="text-center" style={{color:C.textSub}}>{h.toFixed(1)}</td>)}
                  <td className="text-right" style={{fontWeight:800}}>{total.toFixed(1)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: PAY RUNS
═══════════════════════════════════════════════════════════════════ */
function PagePayRuns(){
  const [wizard,setWizard]=useState(false);
  const [step,setStep]=useState(1);
  const [declared,setDeclared]=useState(false);
  const run=PAYRUNS[0];
  const steps=["Period","Earnings","Tax & Super","Review","Done"];
  const gross=run.gross,payg=Math.round(gross*0.25),super_=Math.round(gross*0.115),net=gross-payg;
  const preview=EMPLOYEES.slice(0,6).map((e,i)=>({name:e.name,role:e.role,gross:Math.round((gross/run.emps)*(0.8+(i%3)*0.3)),warn:i===3}));

  const closeWizard=()=>{setWizard(false);setStep(1);setDeclared(false);};

  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search pay runs…" width={260}/>
        <select className="sel"><option>Status  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
          <button className="btn btn-primary" onClick={()=>setWizard(true)}>+ New Pay Run</button>
        </div>
      </FiltersRow>

      <div className="g4" style={{marginBottom:16}}>
        {[{v:run.pay,l:"Next Payment Date",c:C.goldDark},{v:money(gross),l:"Est. Gross This Cycle",c:C.blue},{v:run.emps,l:"Employees Paid",c:C.teal},{v:money(super_),l:"Super Due This Cycle",c:C.green}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c,fontSize:typeof s.v==="string"&&s.v.length>8?16:22}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>

      <div className="card" style={{marginBottom:16,background:C.sidebar,border:"none"}}>
        <div className="card-bd" style={{display:"flex",alignItems:"center",gap:14}}>
          <div style={{width:44,height:44,borderRadius:12,background:"rgba(255,255,255,.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>💵</div>
          <div style={{flex:1}}>
            <div style={{color:"#f4efe4",fontWeight:800,fontSize:14}}>{run.period}</div>
            <div style={{color:"rgba(244,239,228,.65)",fontSize:11.5,marginTop:2}}>{run.emps} employees · est. {money(gross)} gross</div>
          </div>
          <button className="btn btn-primary btn-sm" onClick={()=>setWizard(true)}>Continue draft →</button>
        </div>
      </div>

      <div className="card">
        <div className="card-hd"><div><div className="card-title">Pay Run History</div><div className="card-sub">Fortnightly schedule · STP Phase 2 lodged automatically</div></div></div>
        <table className="tbl">
          <thead><tr><th>PAY PERIOD</th><th>PAYMENT DATE</th><th>EMPLOYEES</th><th>GROSS</th><th>STATUS</th></tr></thead>
          <tbody>
            {PAYRUNS.map((r,i)=>(
              <tr key={i}>
                <td style={{fontWeight:700,color:C.text}}>{r.period}</td>
                <td style={{fontSize:11.5,color:C.textSub,fontFamily:"ui-monospace,monospace"}}>{r.pay}</td>
                <td>{r.emps}</td>
                <td style={{fontWeight:800}}>{money(r.gross)}</td>
                <td><span className={`badge ${r.status==="Draft"?"b-gray":"b-green"}`}>{r.status==="STP Lodged"&&<span className="dot dot-g"/>}{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {wizard&&(
        <div className="drawer-overlay" onClick={closeWizard}>
          <div className="drawer" style={{width:640}} onClick={e=>e.stopPropagation()}>
            <div className="drawer-hd">
              <div><div style={{fontSize:15,fontWeight:800}}>New Pay Run — {run.period}</div><div style={{fontSize:11.5,color:C.textSub}}>Step {step} of {steps.length}</div></div>
              <button className="btn btn-ghost btn-xs" onClick={closeWizard}>✕</button>
            </div>
            <div className="drawer-bd">
              <Stepper step={step} steps={steps}/>

              {step===1&&(
                <div>
                  <div style={{fontSize:13,fontWeight:800,marginBottom:4}}>Confirm the pay period</div>
                  <div style={{fontSize:12,color:C.textSub,marginBottom:14}}>Earnings pull from timesheets; award & EA rates apply automatically.</div>
                  <div className="form-row">
                    {[["Pay schedule","Fortnightly"],["Period","29 Jun – 12 Jul 2026"],["Payment date",run.pay],["Employees",`${run.emps} active`]].map(([k,v])=>(
                      <div key={k} style={{background:C.bg,borderRadius:10,padding:12}}><div style={{fontSize:10.5,color:C.textMute,fontWeight:700,textTransform:"uppercase"}}>{k}</div><div style={{fontSize:13,fontWeight:800,marginTop:3}}>{v}</div></div>
                    ))}
                  </div>
                  <div style={{background:C.greenBg,borderRadius:10,padding:12,display:"flex",gap:8,alignItems:"center",fontSize:12,color:C.greenDk}}><span>🛡</span>Award & enterprise-agreement rates applied automatically by the payroll engine.</div>
                </div>
              )}

              {step===2&&(
                <div>
                  <div style={{fontSize:13,fontWeight:800,marginBottom:4}}>Review earnings</div>
                  <div style={{fontSize:12,color:C.textSub,marginBottom:12}}>From timesheets & contracted hours. One item needs attention.</div>
                  <table className="tbl">
                    <thead><tr><th>EMPLOYEE</th><th>ROLE</th><th>GROSS</th></tr></thead>
                    <tbody>
                      {preview.map((r,i)=>(
                        <tr key={i} style={{background:r.warn?"#fdf8ec":"transparent"}}>
                          <td style={{fontWeight:700}}>{r.name}</td>
                          <td style={{color:C.textSub,fontSize:11.5}}>{r.role}</td>
                          <td>{r.warn?<span style={{color:C.amberDk,fontWeight:700,fontSize:11.5}}>⚠ timesheet pending</span>:<span style={{fontWeight:700}}>{money(r.gross)}</span>}</td>
                        </tr>
                      ))}
                      <tr><td style={{fontWeight:800}}>+ {run.emps-6} more employees</td><td/><td style={{fontWeight:800}}>{money(gross)} total</td></tr>
                    </tbody>
                  </table>
                </div>
              )}

              {step===3&&(
                <div>
                  <div style={{fontSize:13,fontWeight:800,marginBottom:10}}>Tax, super & deductions</div>
                  {[["Gross earnings",gross,C.text],["PAYG withholding",-payg,C.red]].map(([k,v,col])=>(
                    <div key={k as string} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:`1px solid ${C.border2}`,fontSize:12.5}}><span style={{color:C.textSub}}>{k}</span><span style={{fontWeight:800,color:col as string}}>{(v as number)<0?"– "+money(-(v as number)):money(v as number)}</span></div>
                  ))}
                  <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0",fontSize:14}}><span style={{fontWeight:800}}>Net pay</span><span style={{fontWeight:800,color:C.greenDk}}>{money(net)}</span></div>
                  <div style={{background:"rgba(198,163,90,.1)",borderRadius:10,padding:12,display:"flex",gap:10,alignItems:"center",marginTop:8}}>
                    <span style={{fontSize:20}}>🏦</span>
                    <div style={{flex:1}}><div style={{fontSize:12,fontWeight:800}}>Superannuation guarantee (11.5%)</div><div style={{fontSize:11,color:C.textSub}}>Paid to each fund on pay day under Payday Super.</div></div>
                    <div style={{fontWeight:800,color:C.goldDark}}>{money(super_)}</div>
                  </div>
                </div>
              )}

              {step===4&&(
                <div>
                  <div style={{fontSize:13,fontWeight:800,marginBottom:12}}>Review & finalise</div>
                  <div className="g4" style={{marginBottom:14}}>
                    {[["Gross",money(gross)],["PAYG",money(payg)],["Net pay",money(net)],["Super",money(super_)]].map(([k,v])=>(
                      <div key={k} style={{background:C.bg,borderRadius:10,padding:"10px 8px",textAlign:"center"}}><div style={{fontSize:10,color:C.textMute}}>{k}</div><div style={{fontSize:14,fontWeight:800,marginTop:2}}>{v}</div></div>
                    ))}
                  </div>
                  <label style={{display:"flex",gap:10,alignItems:"flex-start",padding:12,borderRadius:10,cursor:"pointer",background:declared?C.greenBg:C.bg,border:`1px solid ${declared?"#bfe6cf":C.border}`}}>
                    <input type="checkbox" checked={declared} onChange={e=>setDeclared(e.target.checked)} style={{marginTop:2}}/>
                    <span style={{fontSize:12,color:C.text}}>I declare this pay event is true and correct, and authorise its lodgement to the ATO as an <b>STP Phase 2</b> pay event.</span>
                  </label>
                </div>
              )}

              {step===5&&(
                <div style={{textAlign:"center",padding:"12px 0"}}>
                  <div style={{fontSize:40,marginBottom:10}}>✓</div>
                  <div style={{fontSize:16,fontWeight:800}}>Pay run finalised</div>
                  <div style={{fontSize:12,color:C.textSub,margin:"4px 0 16px"}}>{run.period} · {money(net)} paid to {run.emps} employees</div>
                  <div style={{display:"flex",flexDirection:"column",gap:8,textAlign:"left"}}>
                    {[["📡","STP Phase 2 pay event lodged to the ATO"],["🏦",`Super ${money(super_)} scheduled — reaches funds within 7 days`],["🧾",`Pay slips issued to ${run.emps} staff`],["📊","General-ledger journal exported to finance"]].map(([icon,txt])=>(
                      <div key={txt} style={{display:"flex",gap:10,alignItems:"center",background:C.bg,borderRadius:9,padding:"9px 12px"}}><span>{icon}</span><span style={{fontSize:12}}>{txt}</span></div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{display:"flex",justifyContent:"space-between",marginTop:20,paddingTop:14,borderTop:`1px solid ${C.border}`}}>
                <button className="btn btn-secondary btn-sm" onClick={()=>step===1?closeWizard():setStep(step-1)}>{step===1?"Cancel":"← Back"}</button>
                {step<4&&<button className="btn btn-primary btn-sm" onClick={()=>setStep(step+1)}>Continue →</button>}
                {step===4&&<button className="btn btn-primary btn-sm" disabled={!declared} style={{opacity:declared?1:0.5}} onClick={()=>setStep(5)}>🛡 Finalise & Lodge</button>}
                {step===5&&<button className="btn btn-primary btn-sm" onClick={closeWizard}>Done</button>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: SINGLE TOUCH PAYROLL
═══════════════════════════════════════════════════════════════════ */
function PageSTP(){
  const lodged=PAYRUNS.filter(r=>r.status==="STP Lodged");
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search pay events…" width={260}/>
        <select className="sel"><option>Period  All</option></select>
        <div style={{marginLeft:"auto"}}><span className="badge b-green"><span className="dot dot-g"/>Connected to ATO</span></div>
      </FiltersRow>
      <div className="g4" style={{marginBottom:16}}>
        {[{v:lodged.length,l:"Pay Events Lodged",c:C.goldDark},{v:"100%",l:"Acceptance Rate",c:C.green},{v:"STP Phase 2",l:"Reporting Standard",c:C.blue},{v:"0",l:"Discrepancies",c:C.teal}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c,fontSize:typeof s.v==="string"&&s.v.length>4?16:22}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
      <div className="card">
        <div className="card-hd"><div><div className="card-title">STP Lodgement History</div><div className="card-sub">Every pay event reported to the ATO on pay day</div></div><button className="btn btn-secondary btn-sm">⬇ Export</button></div>
        <table className="tbl">
          <thead><tr><th>PAY EVENT</th><th>LODGED</th><th>EMPLOYEES</th><th>GROSS</th><th>STATUS</th></tr></thead>
          <tbody>
            {lodged.map((r,i)=>(
              <tr key={i}>
                <td style={{fontWeight:700}}>{r.period}</td>
                <td style={{fontSize:11.5,color:C.textSub,fontFamily:"ui-monospace,monospace"}}>{r.pay}</td>
                <td>{r.emps}</td>
                <td style={{fontWeight:800}}>{money(r.gross)}</td>
                <td><span className="badge b-green"><span className="dot dot-g"/>Accepted</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: SUPER PAYMENTS
═══════════════════════════════════════════════════════════════════ */
function PageSuper(){
  const total=SUPER_FUNDS.reduce((a,f)=>a+f.amount,0);
  return(
    <div className="page-in">
      <FiltersRow>
        <div style={{fontSize:12.5,color:C.textSub,fontWeight:600}}>Payday Super — contributions paid every pay day</div>
        <div style={{marginLeft:"auto"}}><button className="btn btn-primary">✉ Pay Super Batch</button></div>
      </FiltersRow>
      <div className="g3" style={{marginBottom:16}}>
        {[{v:money(total),l:"Due This Cycle",c:C.goldDark},{v:"11.5% SG",l:"Statutory Rate",c:C.green},{v:`${SUPER_FUNDS.length} Funds`,l:"Funds Paid",c:C.amber}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
      <div className="card">
        <div className="card-hd"><div className="card-title">Super Fund Breakdown</div></div>
        <table className="tbl">
          <thead><tr><th>FUND</th><th>EMPLOYEES</th><th>AMOUNT</th><th>STATUS</th></tr></thead>
          <tbody>
            {SUPER_FUNDS.map(f=>(
              <tr key={f.fund}>
                <td style={{fontWeight:700}}>{f.fund}</td>
                <td>{f.employees}</td>
                <td style={{fontWeight:800}}>{money(f.amount)}</td>
                <td><span className="badge b-blue">Scheduled</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: PAY SLIPS
═══════════════════════════════════════════════════════════════════ */
function PagePaySlips(){
  const [empIdx,setEmpIdx]=useState(0);
  const [open,setOpen]=useState(0);
  const emp=EMPLOYEES[empIdx];
  const slips=[
    {period:"29 Jun – 12 Jul 2026",pay:"14 Jul 2026",gross:3785,net:2842},
    {period:"15 – 28 Jun 2026",pay:"30 Jun 2026",gross:3785,net:2842},
    {period:"1 – 14 Jun 2026",pay:"16 Jun 2026",gross:3785,net:2842},
  ];
  return(
    <div className="page-in">
      <FiltersRow>
        <div style={{fontSize:12.5,color:C.textSub,fontWeight:600}}>Employee</div>
        <select className="sel" value={empIdx} onChange={e=>setEmpIdx(Number(e.target.value))}>
          {EMPLOYEES.map((e,i)=><option key={e.id} value={i}>{e.name}</option>)}
        </select>
      </FiltersRow>
      <div className="card" style={{marginBottom:16}}>
        <div className="card-bd" style={{display:"flex",alignItems:"center",gap:12}}>
          <Av name={emp.name} size={44} idx={emp.idx}/>
          <div style={{flex:1}}><div style={{fontWeight:800,fontSize:14}}>{emp.name}</div><div style={{fontSize:11.5,color:C.textSub}}>{emp.role}</div></div>
          <span className="badge b-maroon">YTD gross $52,990</span>
        </div>
      </div>
      <div className="g2">
        <div className="card">
          <table className="tbl">
            <thead><tr><th>PAY PERIOD</th><th>PAID</th><th>NET</th></tr></thead>
            <tbody>
              {slips.map((s,i)=>(
                <tr key={i} onClick={()=>setOpen(i)} style={{background:open===i?"rgba(198,163,90,.06)":"transparent"}}>
                  <td style={{fontWeight:700}}>{s.period}</td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{s.pay}</td>
                  <td style={{fontWeight:800,color:C.greenDk}}>{money(s.net)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <div className="card-hd"><div className="card-title">Payslip · {slips[open].period}</div><span className="badge b-green">Paid</span></div>
          <div className="card-bd">
            {[["Ordinary hours (76.0)","$3,650.00"],["Leave loading","$135.00"],["PAYG withholding","– $792.00"],["Salary sacrifice super","– $151.00"]].map(([k,v])=>(
              <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",fontSize:12.5}}><span style={{color:C.textSub}}>{k}</span><span>{v}</span></div>
            ))}
            <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderTop:`1px solid ${C.border}`,fontWeight:800,fontSize:14}}><span>Net pay</span><span style={{color:C.greenDk}}>$2,842.00</span></div>
            <div style={{fontSize:11,color:C.textMute}}>Employer super (11.5%) — $435.28 → {emp.fund}</div>
            <button className="btn btn-secondary btn-sm" style={{marginTop:12}}>⬇ Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: EXPENSE CLAIMS
═══════════════════════════════════════════════════════════════════ */
function PageExpenseClaims(){
  const claims=[
    {emp:"Fatima Nasser",idx:2,date:"1 Jul 2026",cat:"Travel",desc:"Excursion transport",amt:120,status:"Pending"},
    {emp:"Ahmed Khan",idx:3,date:"24 Jun 2026",cat:"Resources",desc:"Classroom supplies",amt:86,status:"Approved"},
    {emp:"Rania Hadid",idx:4,date:"12 Jun 2026",cat:"PD",desc:"Conference registration",amt:450,status:"Approved"},
    {emp:"Omar Aziz",idx:5,date:"5 Jun 2026",cat:"Travel",desc:"Camp mileage reimbursement",amt:64,status:"Declined"},
  ];
  const badge=(s:string)=>({Approved:"b-green",Pending:"b-amber",Declined:"b-red"}[s]||"b-gray");
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search expense claims…" width={260}/>
        <select className="sel"><option>Status  All</option></select>
        <div style={{marginLeft:"auto"}}><button className="btn btn-primary">+ New Claim</button></div>
      </FiltersRow>
      <div className="g4" style={{marginBottom:16}}>
        {[{v:money(720),l:"Claimed This Month",c:C.goldDark},{v:1,l:"Pending Approval",c:C.amber},{v:2,l:"Approved",c:C.green},{v:1,l:"Declined",c:C.red}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr><th>EMPLOYEE</th><th>DATE</th><th>CATEGORY</th><th>DESCRIPTION</th><th>AMOUNT</th><th>STATUS</th></tr></thead>
          <tbody>
            {claims.map((c,i)=>(
              <tr key={i}>
                <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={c.emp} size={26} idx={c.idx}/><span style={{fontWeight:700}}>{c.emp}</span></div></td>
                <td style={{fontSize:11.5,color:C.textSub}}>{c.date}</td>
                <td><span className="badge b-gray">{c.cat}</span></td>
                <td style={{color:C.textSub}}>{c.desc}</td>
                <td style={{fontWeight:800}}>{money(c.amt)}</td>
                <td><span className={`badge ${badge(c.status)}`}>{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: EXPENSES MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
function PageExpensesManagement(){
  const init=[
    {emp:"Fatima Nasser",idx:2,cat:"Travel",amt:120,notes:"Excursion transport · receipt attached"},
    {emp:"David Kim",idx:0,cat:"Resources",amt:64,notes:"Classroom supplies · receipt attached"},
  ];
  const [queue,setQueue]=useState(init.map(q=>({...q,decided:false as false|"Approved"|"Declined"})));
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search employees…" width={260}/>
        <select className="sel"><option>Category  All</option></select>
      </FiltersRow>
      <div className="card">
        <div className="card-hd"><div><div className="card-title">Approval Queue</div><div className="card-sub">Expense claims awaiting a decision</div></div></div>
        <table className="tbl">
          <thead><tr><th>EMPLOYEE</th><th>CATEGORY</th><th>AMOUNT</th><th>NOTES</th><th>ACTION</th></tr></thead>
          <tbody>
            {queue.map((q,i)=>(
              <tr key={i}>
                <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={q.emp} size={26} idx={q.idx}/><span style={{fontWeight:700}}>{q.emp}</span></div></td>
                <td><span className="badge b-gray">{q.cat}</span></td>
                <td style={{fontWeight:800}}>{money(q.amt)}</td>
                <td style={{fontSize:11.5,color:C.textSub}}>{q.notes}</td>
                <td>
                  {q.decided?<span className={`badge ${q.decided==="Approved"?"b-green":"b-red"}`}>{q.decided}</span>:(
                    <div style={{display:"flex",gap:6}}>
                      <button className="btn btn-success btn-xs" onClick={()=>setQueue(qs=>qs.map((qq,qi)=>qi===i?{...qq,decided:"Approved"}:qq))}>Approve</button>
                      <button className="btn btn-secondary btn-xs" onClick={()=>setQueue(qs=>qs.map((qq,qi)=>qi===i?{...qq,decided:"Declined"}:qq))}>Decline</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: COMPENSATION MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
function PageCompensation(){
  const reviews=EMPLOYEES.slice(0,5).map((e,i)=>({emp:e,proposedPct:3,status:i<2?"Approved":"In Review"}));
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search employees…" width={260}/>
        <div style={{marginLeft:"auto"}}><button className="btn btn-primary">+ New Review Cycle</button></div>
      </FiltersRow>
      <div className="card">
        <div className="card-hd"><div><div className="card-title">Remuneration Reviews</div><div className="card-sub">Annual EA increment cycle · 2026</div></div></div>
        <table className="tbl">
          <thead><tr><th>EMPLOYEE</th><th>AWARD</th><th>CURRENT</th><th>PROPOSED</th><th>CHANGE</th><th>STATUS</th></tr></thead>
          <tbody>
            {reviews.map((r,i)=>(
              <tr key={i}>
                <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.emp.name} size={26} idx={r.emp.idx}/><span style={{fontWeight:700}}>{r.emp.name}</span></div></td>
                <td style={{color:C.textSub,fontSize:11.5}}>{r.emp.award}</td>
                <td style={{fontWeight:700}}>{r.emp.rate}</td>
                <td style={{fontWeight:800,color:C.goldDark}}>+{r.proposedPct}%</td>
                <td style={{color:C.greenDk,fontWeight:700}}>↑ {r.proposedPct}.0%</td>
                <td><span className={`badge ${r.status==="Approved"?"b-green":"b-amber"}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: ENGAGEMENT
═══════════════════════════════════════════════════════════════════ */
function PageEngagement(){
  const [tab,setTab]=useState("connect");
  const posts=[
    {from:"Rania Hadid",fromIdx:4,to:"Ahmed Khan",body:"huge help getting the new staff laptops imaged before term. Legend!",kudos:12},
    {from:"Maryam Iqbal",fromIdx:1,to:"Hassan Malik",body:"thank you for covering yard duty at short notice today.",kudos:8},
    {from:"Fatima Nasser",fromIdx:2,to:"Omar Aziz",body:"the wellbeing morning tea was fantastic. Thank you!",kudos:15},
  ];
  const values=[
    {icon:"🛡",title:"Respect",desc:"We honour every person, culture and belief in our community."},
    {icon:"🏅",title:"Excellence",desc:"We strive to be our best in learning and in character."},
    {icon:"✅",title:"Integrity",desc:"We do the right thing, especially when no one is watching."},
    {icon:"👥",title:"Community",desc:"We grow together and care for one another."},
  ];
  const exits=[
    {name:"Peter Shaw",idx:0,date:"20 Jun 2026",reason:"Relocation",status:"Completed"},
    {name:"Rita Cohen",idx:2,date:"5 Jun 2026",reason:"Career change",status:"Completed"},
  ];
  return(
    <div className="page-in">
      <div className="tabs">
        {["connect","values","pulse","exit"].map(t=>(
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="connect"?"Connect":t==="values"?"Company Values":t==="pulse"?"Engagement & Surveys":"Exit Interviews"}</div>
        ))}
      </div>

      {tab==="connect"&&(
        <div style={{display:"flex",flexDirection:"column",gap:12,maxWidth:640}}>
          <div style={{display:"flex",justifyContent:"flex-end"}}><button className="btn btn-primary btn-sm">+ New Shout-out</button></div>
          {posts.map((p,i)=>(
            <div key={i} className="card card-bd">
              <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:8}}>
                <Av name={p.from} size={30} idx={p.fromIdx}/>
                <div style={{fontSize:12.5}}><b>{p.from}</b> <span style={{color:C.textSub}}>recognised</span> <b>{p.to}</b></div>
              </div>
              <div style={{fontSize:12.5,color:C.text,marginBottom:8}}>{p.body}</div>
              <span style={{fontSize:11.5,fontWeight:700,color:C.goldDark}}>♥ {p.kudos} kudos</span>
            </div>
          ))}
        </div>
      )}

      {tab==="values"&&(
        <div className="g4">
          {values.map(v=>(
            <div key={v.title} className="card card-bd" style={{padding:16}}>
              <div style={{fontSize:22,marginBottom:8}}>{v.icon}</div>
              <div style={{fontWeight:800,fontSize:13,marginBottom:4}}>{v.title}</div>
              <div style={{fontSize:11.5,color:C.textSub,lineHeight:1.5}}>{v.desc}</div>
            </div>
          ))}
        </div>
      )}

      {tab==="pulse"&&(
        <>
          <div className="g4" style={{marginBottom:16}}>
            {[{v:"78%",l:"Engagement Score",c:C.goldDark},{v:"84%",l:"Survey Participation",c:C.blue},{v:"+32",l:"eNPS",c:C.green},{v:"4.2/5",l:"Happiness Score",c:C.teal}].map(s=>(
              <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
            ))}
          </div>
          <div className="g2">
            <div className="card">
              <div className="card-hd"><div className="card-title">Engagement Trend</div></div>
              <div className="card-bd"><TrendChart data={[72,75,78]} color={C.accent}/></div>
            </div>
            <div className="card">
              <div className="card-hd"><div className="card-title">Engagement Drivers</div></div>
              <div className="card-bd">
                {[{l:"Leadership",p:82,t:"↑ improving"},{l:"Wellbeing",p:74,t:"↑ improving"},{l:"Workload",p:61,t:"↓ watch"},{l:"Recognition",p:70,t:"→ steady"}].map(d=>(
                  <div key={d.l} style={{marginBottom:12}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:12}}><span style={{fontWeight:700}}>{d.l}</span><span style={{color:C.textSub}}>{d.t}</span></div>
                    <PBar pct={d.p} color={C.accent}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {tab==="exit"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>EMPLOYEE</th><th>DATE</th><th>REASON</th><th>STATUS</th></tr></thead>
            <tbody>
              {exits.map((e,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={e.name} size={26} idx={e.idx}/><span style={{fontWeight:700}}>{e.name}</span></div></td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{e.date}</td>
                  <td style={{color:C.textSub}}>{e.reason}</td>
                  <td><span className="badge b-green">{e.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: DEVELOPMENT
═══════════════════════════════════════════════════════════════════ */
function PageDevelopment(){
  const [tab,setTab]=useState("ones");
  const ones=[
    {emp:"Maryam Iqbal",idx:1,date:"9 Jul 2026",focus:"Term goals",status:"Scheduled"},
    {emp:"Ahmed Khan",idx:3,date:"2 Jul 2026",focus:"Wellbeing",status:"Completed"},
    {emp:"Rania Hadid",idx:4,date:"25 Jun 2026",focus:"Career growth",status:"Completed"},
  ];
  const feedback=[
    {from:"Rania Hadid",fromIdx:4,to:"Fatima Nasser",type:"Praise",date:"1 Jul 2026"},
    {from:"Maryam Iqbal",fromIdx:1,to:"Hassan Malik",type:"Praise",date:"28 Jun 2026"},
    {from:"Fatima Nasser",fromIdx:2,to:"Omar Aziz",type:"Coaching",date:"20 Jun 2026"},
  ];
  return(
    <div className="page-in">
      <div className="tabs">
        {["ones","feedback"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="ones"?"1:1s":"Feedback"}</div>)}
      </div>
      {tab==="ones"&&(
        <div className="card">
          <div className="card-hd"><div className="card-title">Coaching Conversations</div><button className="btn btn-primary btn-sm">+ Schedule 1:1</button></div>
          <table className="tbl">
            <thead><tr><th>WITH</th><th>DATE</th><th>FOCUS</th><th>STATUS</th></tr></thead>
            <tbody>
              {ones.map((o,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={o.emp} size={26} idx={o.idx}/><span style={{fontWeight:700}}>{o.emp}</span></div></td>
                  <td style={{fontSize:11.5,color:C.textSub,fontFamily:"ui-monospace,monospace"}}>{o.date}</td>
                  <td style={{color:C.textSub}}>{o.focus}</td>
                  <td><span className={`badge ${o.status==="Completed"?"b-green":"b-blue"}`}>{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab==="feedback"&&(
        <div className="card">
          <div className="card-hd"><div className="card-title">Peer Feedback</div><button className="btn btn-primary btn-sm">+ Give Feedback</button></div>
          <table className="tbl">
            <thead><tr><th>FROM</th><th>TO</th><th>TYPE</th><th>DATE</th></tr></thead>
            <tbody>
              {feedback.map((f,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={f.from} size={26} idx={f.fromIdx}/><span style={{fontWeight:700}}>{f.from}</span></div></td>
                  <td style={{color:C.textSub}}>{f.to}</td>
                  <td><span className={`badge ${f.type==="Praise"?"b-green":"b-amber"}`}>{f.type}</span></td>
                  <td style={{fontSize:11.5,color:C.textSub}}>{f.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: PERFORMANCE
═══════════════════════════════════════════════════════════════════ */
function PagePerformance(){
  const [tab,setTab]=useState("goals");
  const goals=[
    {title:"Improve NAPLAN numeracy results",owner:"Maryam Iqbal",idx:1,pct:65,status:"In Progress"},
    {title:"Complete VIT renewal",owner:"Ahmed Khan",idx:3,pct:100,status:"Completed"},
    {title:"Launch student wellbeing program",owner:"Fatima Nasser",idx:2,pct:40,status:"In Progress"},
  ];
  const reviews360=[{emp:"Maryam Iqbal",idx:1,reviewers:4,cycle:"Mid-year 2026",status:"In Progress"},{emp:"Hassan Malik",idx:1,reviewers:3,cycle:"Mid-year 2026",status:"Completed"}];
  const perfReviews=[{emp:"Fatima Nasser",idx:2,reviewer:"Rania Hadid",rating:"Exceeds",status:"Completed"},{emp:"Rania Hadid",idx:4,reviewer:"Principal",rating:"Meets",status:"In Progress"}];
  const grid:Record<string,typeof EMPLOYEES>={};
  const place=[["1-2",[1]],["2-2",[0]],["2-1",[2]],["0-1",[4]],["1-1",[3,5]]] as [string,number[]][];
  place.forEach(([k,idxs])=>{grid[k]=idxs.map(i=>EMPLOYEES[i]);});
  return(
    <div className="page-in">
      <div className="tabs">
        {["goals","reviews360","reviews","ninebox"].map(t=>(
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="goals"?"Goals":t==="reviews360"?"360 Reviews":t==="reviews"?"Performance Reviews":"9-Box Talent Grid"}</div>
        ))}
      </div>

      {tab==="goals"&&(
        <div className="card">
          <div className="card-hd"><div className="card-title">Goals</div><button className="btn btn-primary btn-sm">+ Add Goal</button></div>
          <table className="tbl">
            <thead><tr><th>GOAL</th><th>OWNER</th><th>PROGRESS</th><th>STATUS</th></tr></thead>
            <tbody>
              {goals.map((g,i)=>(
                <tr key={i}>
                  <td style={{fontWeight:700}}>{g.title}</td>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={g.owner} size={24} idx={g.idx}/><span>{g.owner}</span></div></td>
                  <td style={{width:150}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{flex:1}}><PBar pct={g.pct} color={g.pct===100?C.green:C.accent}/></div><span style={{fontSize:11,fontWeight:700,width:32}}>{g.pct}%</span></div></td>
                  <td><span className={`badge ${g.status==="Completed"?"b-green":"b-amber"}`}>{g.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="reviews360"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>EMPLOYEE</th><th>REVIEWERS</th><th>CYCLE</th><th>STATUS</th></tr></thead>
            <tbody>
              {reviews360.map((r,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.emp} size={26} idx={r.idx}/><span style={{fontWeight:700}}>{r.emp}</span></div></td>
                  <td>{r.reviewers}</td>
                  <td style={{color:C.textSub}}>{r.cycle}</td>
                  <td><span className={`badge ${r.status==="Completed"?"b-green":"b-amber"}`}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="reviews"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>EMPLOYEE</th><th>REVIEWER</th><th>RATING</th><th>STATUS</th></tr></thead>
            <tbody>
              {perfReviews.map((r,i)=>(
                <tr key={i}>
                  <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={r.emp} size={26} idx={r.idx}/><span style={{fontWeight:700}}>{r.emp}</span></div></td>
                  <td style={{color:C.textSub}}>{r.reviewer}</td>
                  <td style={{fontWeight:700}}>{r.rating}</td>
                  <td><span className={`badge ${r.status==="Completed"?"b-green":"b-amber"}`}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==="ninebox"&&(
        <div className="card">
          <div className="card-hd"><div className="card-title">9-Box Talent Grid</div><div className="card-sub">Performance vs potential</div></div>
          <div className="card-bd">
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
              {[2,1,0].flatMap(y=>[0,1,2].map(x=>{
                const k=`${x}-${y}`,list=grid[k]||[],hot=x===2&&y===2;
                return(
                  <div key={k} style={{background:hot?C.greenBg:"#fafafa",border:`1px solid ${C.border}`,borderRadius:9,padding:8,minHeight:78}}>
                    {list.map(e=><div key={e.id} className="badge b-maroon" style={{marginBottom:4,display:"block",width:"fit-content"}}>{e.name.split(" ")[0]}</div>)}
                  </div>
                );
              }))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginTop:8,textAlign:"center",fontSize:11,color:C.textMute}}>
              <span>Low performance</span><span>Solid</span><span>High performance</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: BENEFITS & PERKS
═══════════════════════════════════════════════════════════════════ */
function PageBenefits(){
  const [tab,setTab]=useState("benefits");
  const benefitsList=[
    {icon:"💰",title:"Salary Packaging",desc:"Novated leases & FBT-exempt items",meta:"38 enrolled"},
    {icon:"🛡",title:"Employee Assistance Program",desc:"Free confidential counselling",meta:"All staff"},
    {icon:"🏅",title:"Professional Development Fund",desc:"$1,000 per teacher / yr",meta:"92 eligible"},
    {icon:"🎁",title:"Health Insurance Discount",desc:"Corporate rate with partners",meta:"24 enrolled"},
  ];
  const perks=[
    {icon:"🛒",title:"Woolworths",desc:"5% off gift cards",cat:"Groceries"},
    {icon:"🎧",title:"JB Hi-Fi",desc:"10% off",cat:"Electronics"},
    {icon:"🏋",title:"Fitness First",desc:"20% off membership",cat:"Health"},
    {icon:"🎬",title:"Event Cinemas",desc:"30% off tickets",cat:"Entertainment"},
  ];
  return(
    <div className="page-in">
      <div className="tabs">
        {["benefits","points","perks"].map(t=>(
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="benefits"?"Benefits Management":t==="points"?"Reward Points":"Perks Store"}</div>
        ))}
      </div>

      {tab==="benefits"&&(
        <div className="g4">
          {benefitsList.map(b=>(
            <div key={b.title} className="card card-bd" style={{padding:16}}>
              <div style={{fontSize:22,marginBottom:8}}>{b.icon}</div>
              <div style={{fontWeight:800,fontSize:13,marginBottom:4}}>{b.title}</div>
              <div style={{fontSize:11.5,color:C.textSub,lineHeight:1.5,marginBottom:10,minHeight:34}}>{b.desc}</div>
              <div style={{fontSize:10.5,color:C.textMute}}>{b.meta}</div>
            </div>
          ))}
        </div>
      )}

      {tab==="points"&&(
        <>
          <div className="g3" style={{marginBottom:16}}>
            {[{v:"4,250",l:"Org Balance",c:C.goldDark},{v:"1,100",l:"Issued This Month",c:C.blue},{v:"820",l:"Redeemed",c:C.green}].map(s=>(
              <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
            ))}
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Recent Recognition</div></div>
            <table className="tbl">
              <thead><tr><th>FROM</th><th>TO</th><th>POINTS</th><th>REASON</th></tr></thead>
              <tbody>
                {[{f:"Rania Hadid",fi:4,t:"Maryam Iqbal",p:50,r:"Above & beyond"},{f:"Ahmed Khan",fi:3,t:"Hassan Malik",p:25,r:"Yard duty cover"},{f:"Fatima Nasser",fi:2,t:"Omar Aziz",p:50,r:"Open day"}].map((row,i)=>(
                  <tr key={i}>
                    <td><div style={{display:"flex",alignItems:"center",gap:8}}><Av name={row.f} size={24} idx={row.fi}/><span style={{fontWeight:700}}>{row.f}</span></div></td>
                    <td style={{color:C.textSub}}>{row.t}</td>
                    <td style={{fontWeight:800,color:C.goldDark}}>+{row.p}</td>
                    <td style={{color:C.textSub}}>{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {tab==="perks"&&(
        <div className="g4">
          {perks.map(p=>(
            <div key={p.title} className="card card-bd" style={{padding:16}}>
              <div style={{fontSize:22,marginBottom:8}}>{p.icon}</div>
              <div style={{fontWeight:800,fontSize:13,marginBottom:4}}>{p.title}</div>
              <div style={{fontSize:11.5,color:C.textSub,marginBottom:10}}>{p.desc}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,borderTop:`1px solid ${C.border2}`}}>
                <span className="badge b-gray" style={{fontSize:10}}>{p.cat}</span>
                <button className="btn btn-accent btn-xs">Redeem →</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: BILLING
═══════════════════════════════════════════════════════════════════ */
function PageBilling(){
  const [tab,setTab]=useState("subscriptions");
  const invoices=[
    {id:"INV-2026-07",date:"1 Jul 2026",amt:1988,status:"Paid"},
    {id:"INV-2026-06",date:"1 Jun 2026",amt:1974,status:"Paid"},
    {id:"INV-2026-05",date:"1 May 2026",amt:1960,status:"Paid"},
  ];
  return(
    <div className="page-in">
      <div className="tabs">
        {["subscriptions","invoices"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="subscriptions"?"Subscriptions":"Invoices"}</div>)}
      </div>

      {tab==="subscriptions"&&(
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:16}}>
          <div className="card">
            <div className="card-hd"><div><div className="card-title">HRM Platform — Standard</div><div className="card-sub">Billed monthly · per active employee</div></div><span className="badge b-green">Active</span></div>
            <div className="card-bd g3">
              {[["Active Employees","218"],["Engine Licence","Per-employee"],["Next Invoice","1 Aug 2026"]].map(([k,v])=>(
                <div key={k} style={{background:C.bg,borderRadius:10,padding:12}}><div style={{fontSize:10.5,color:C.textMute}}>{k}</div><div style={{fontSize:13,fontWeight:800,marginTop:3}}>{v}</div></div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-hd"><div className="card-title">Included</div></div>
            <div className="card-bd" style={{display:"flex",flexDirection:"column",gap:8}}>
              {["Unlimited pay runs","STP Phase 2 lodgement","Payday Super","Award & EA interpretation","Self-service pay slips"].map(x=>(
                <div key={x} style={{display:"flex",gap:8,alignItems:"center",fontSize:12}}><span style={{color:C.green}}>✓</span>{x}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab==="invoices"&&(
        <div className="card">
          <table className="tbl">
            <thead><tr><th>INVOICE</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th><th></th></tr></thead>
            <tbody>
              {invoices.map(inv=>(
                <tr key={inv.id}>
                  <td style={{fontWeight:700,fontFamily:"ui-monospace,monospace"}}>{inv.id}</td>
                  <td style={{color:C.textSub,fontSize:11.5}}>{inv.date}</td>
                  <td style={{fontWeight:800}}>{money(inv.amt)}</td>
                  <td><span className="badge b-green">{inv.status}</span></td>
                  <td><button className="btn btn-ghost btn-xs">⬇ PDF</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: WORKFLOW DESIGNER  (Brief §2.8.8)
═══════════════════════════════════════════════════════════════════ */
function PageWorkflowDesigner(){
  const palette=["Stage","Approval","AI Action","Notification","Condition","Auto-Task"];
  const nodes=[
    {label:"Create Position Request",type:"Stage",color:C.blue},
    {label:"Manager Approval",type:"Approval",color:C.amber},
    {label:"Publish Advertisement",type:"Stage",color:C.blue},
    {label:"AI Candidate Screening",type:"AI Action",color:C.purple},
    {label:"Fit Score ≥ 70%?",type:"Condition",color:C.teal},
    {label:"HR Shortlist Review",type:"Stage",color:C.blue},
    {label:"Notify Hiring Manager",type:"Notification",color:C.green},
  ];
  const typeColor={"Stage":C.blue,"Approval":C.amber,"AI Action":C.purple,"Notification":C.green,"Condition":C.teal,"Auto-Task":C.goldDark};
  return(
    <div className="page-in">
      <FiltersRow>
        <select className="sel"><option>Workflow: Teaching Recruitment</option><option>Onboarding — Teachers</option><option>Compliance Reminders</option></select>
        <span className="badge b-green"><span className="dot dot-g"/>Active</span>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">↻ Test Run</button>
          <button className="btn btn-secondary btn-sm">⬇ Export</button>
          <button className="btn btn-primary btn-sm">✓ Publish</button>
        </div>
      </FiltersRow>
      <div style={{display:"grid",gridTemplateColumns:"180px 1fr 280px",gap:16}}>
        <div className="card">
          <div className="card-hd"><div className="card-title" style={{fontSize:13}}>Blocks</div></div>
          <div className="card-bd" style={{display:"flex",flexDirection:"column",gap:8}}>
            {palette.map(p=>(
              <div key={p} style={{display:"flex",alignItems:"center",gap:9,padding:"9px 11px",border:`1px dashed ${typeColor[p]}`,borderRadius:9,background:`${typeColor[p]}0d`,cursor:"grab",fontSize:12,fontWeight:700,color:typeColor[p]}}>
                <span style={{cursor:"grab"}}>⋮⋮</span>{p}
              </div>
            ))}
            <div style={{fontSize:10.5,color:C.textMute,marginTop:6,lineHeight:1.5}}>Drag blocks onto the canvas to build configurable workflows without code.</div>
          </div>
        </div>
        <div className="card" style={{background:"repeating-linear-gradient(0deg,#fafafa,#fafafa 1px,transparent 1px,transparent 22px),repeating-linear-gradient(90deg,#fafafa,#fafafa 1px,transparent 1px,transparent 22px)",backgroundColor:"#fff"}}>
          <div className="card-hd" style={{background:"#fff"}}><div><div className="card-title">Canvas — Teaching Recruitment</div><div className="card-sub">Drag-and-drop · triggers · approvals · AI orchestration</div></div></div>
          <div className="card-bd">
            {nodes.map((n,i)=>(
              <div key={i}>
                <div style={{display:"flex",alignItems:"center",gap:12,background:"#fff",border:`1.5px solid ${n.color}55`,borderLeft:`4px solid ${n.color}`,borderRadius:11,padding:"12px 14px",boxShadow:"0 2px 6px rgba(20,18,30,.05)",maxWidth:480}}>
                  <div style={{width:30,height:30,borderRadius:8,background:`${n.color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:n.color}}>{i+1}</div>
                  <div style={{flex:1}}><div style={{fontWeight:800,fontSize:12.5}}>{n.label}</div><span className="badge" style={{background:`${n.color}18`,color:n.color,fontSize:10,marginTop:3}}>{n.type}</span></div>
                  <span style={{color:C.textMute,cursor:"grab"}}>⋮⋮</span>
                </div>
                {i<nodes.length-1&&<div style={{color:C.textMute,fontSize:18,padding:"3px 0 3px 28px"}}>↓</div>}
              </div>
            ))}
            <div style={{maxWidth:480,marginTop:8,border:`1.5px dashed ${C.border}`,borderRadius:11,padding:"14px",textAlign:"center",color:C.textMute,fontSize:12}}>+ Drop a block here</div>
          </div>
        </div>
        <div className="card">
          <div className="card-hd"><div className="card-title" style={{fontSize:13}}>Block Settings</div></div>
          <div className="card-bd">
            <div style={{fontSize:11,fontWeight:700,color:C.purple,marginBottom:8}}>AI Candidate Screening</div>
            <div className="form-group"><label className="form-label">Trigger</label><select className="form-select"><option>On application received</option></select></div>
            <div className="form-group"><label className="form-label">Scoring Model</label><select className="form-select"><option>Classroom Teacher weighting</option></select></div>
            <div className="form-group"><label className="form-label">Auto-advance threshold</label><input className="form-input" defaultValue="Fit score ≥ 70%"/></div>
            <div style={{fontSize:11,fontWeight:700,color:C.textSub,margin:"6px 0",textTransform:"uppercase",letterSpacing:".05em"}}>On completion</div>
            {[["Notify hiring manager",true],["Generate screening summary",true],["Auto-reject below threshold",false],["Require human review",true]].map(([l,v])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",fontSize:12}}><span>{l}</span><Toggle on={v}/></div>
            ))}
            <button className="btn btn-primary btn-sm" style={{width:"100%",justifyContent:"center",marginTop:10}}>Save Block</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: REPORTING & EXPORTS  (Brief §2.6)
═══════════════════════════════════════════════════════════════════ */
function PageReporting(){
  const reports=[
    {name:"Recruitment Pipeline Report",desc:"Funnel conversion across all open requisitions",cat:"Recruitment",icon:"📊",color:C.blue},
    {name:"Compliance & Certification Dashboard",desc:"WWCC, VIT, First Aid expiry & risk status",cat:"Compliance",icon:"🛡",color:C.green},
    {name:"Visa Status & Expiry Report",desc:"Visa categories, conditions & upcoming expiries",cat:"Compliance",icon:"✈",color:C.purple},
    {name:"AI Recruitment Summary",desc:"Candidate ranking, fit scores, screening outcomes",cat:"AI",icon:"✦",color:C.goldDark},
    {name:"AI Fit-Score Audit Report",desc:"Explainable trace of how AI scores were calculated",cat:"AI · Audit",icon:"🔍",color:C.teal},
    {name:"Onboarding Progress Report",desc:"New-starter completion & bottleneck analysis",cat:"Onboarding",icon:"🏫",color:C.amber},
    {name:"Workforce Analytics",desc:"Headcount, FTE, department & POR distribution",cat:"Workforce",icon:"👥",color:C.maroon},
    {name:"Audit & Compliance Export",desc:"Immutable activity trail for audits & investigations",cat:"Audit",icon:"🗒",color:C.red},
  ];
  const scheduled=[
    {name:"Weekly Recruitment Pipeline",freq:"Weekly · Mon 8am",to:"Leadership Team",fmt:"PDF",next:"09 Jun 2026"},
    {name:"Monthly Compliance Risk",freq:"Monthly · 1st",to:"HR + Principal",fmt:"Excel",next:"01 Jul 2026"},
    {name:"Visa Expiry Alert Digest",freq:"Fortnightly",to:"HR Compliance",fmt:"PDF",next:"16 Jun 2026"},
  ];
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search reports…" width={260}/>
        <select className="sel"><option>Category  All</option></select>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          <button className="btn btn-secondary btn-sm">⚙ Configure</button>
          <button className="btn btn-primary">+ Build Report</button>
        </div>
      </FiltersRow>
      <div className="card-title" style={{margin:"0 0 12px 2px"}}>Report Library</div>
      <div className="g4" style={{marginBottom:20}}>
        {reports.map(r=>(
          <div key={r.name} className="card card-bd" style={{padding:16,cursor:"pointer"}}>
            <div style={{width:38,height:38,borderRadius:10,background:`${r.color}1a`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,marginBottom:10}}>{r.icon}</div>
            <div style={{fontWeight:800,fontSize:13,marginBottom:4}}>{r.name}</div>
            <div style={{fontSize:11.5,color:C.textSub,lineHeight:1.5,marginBottom:10,minHeight:34}}>{r.desc}</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,borderTop:`1px solid ${C.border2}`}}>
              <span className="badge b-gray" style={{fontSize:10}}>{r.cat}</span>
              <button className="btn btn-accent btn-xs">Run →</button>
            </div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-hd"><div><div className="card-title">Scheduled Reports</div><div className="card-sub">Automated delivery & notifications</div></div><button className="btn btn-primary btn-sm">+ Schedule</button></div>
        <table className="tbl">
          <thead><tr><th>REPORT</th><th>FREQUENCY</th><th>RECIPIENTS</th><th>FORMAT</th><th>NEXT RUN</th><th></th></tr></thead>
          <tbody>
            {scheduled.map((s,i)=>(
              <tr key={i}>
                <td style={{fontWeight:700,fontSize:12.5}}>{s.name}</td>
                <td style={{fontSize:11.5,color:C.textSub}}>{s.freq}</td>
                <td style={{fontSize:11.5,color:C.textSub}}>{s.to}</td>
                <td><span className="badge b-gray">{s.fmt}</span></td>
                <td style={{fontSize:11.5,fontFamily:"ui-monospace,monospace"}}>{s.next}</td>
                <td><div style={{display:"flex",gap:4}}><button className="btn btn-ghost btn-xs">Edit</button><button className="btn btn-ghost btn-xs">Run Now</button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: INTEGRATIONS HUB  (Brief §2.8.7)
═══════════════════════════════════════════════════════════════════ */
function PageIntegrations(){
  const init=[
    {name:"Synergetic (SIS)",desc:"System of record for HR & Payroll · employee data sync",cat:"Core",status:"Connected",health:"Healthy",icon:"💲",color:C.green,on:true,sync:"5 min ago"},
    {name:"Active Directory",desc:"Single sign-on · automated access provisioning",cat:"Identity",status:"Connected",health:"Healthy",icon:"🔐",color:C.blue,on:true,sync:"2 min ago"},
    {name:"Microsoft 365",desc:"Teams, Outlook, SharePoint document storage",cat:"Productivity",status:"Connected",health:"Healthy",icon:"🪟",color:C.blue,on:true,sync:"1 min ago"},
    {name:"Azure OpenAI",desc:"AI screening, interviews, referee checks & summaries",cat:"AI Services",status:"Connected",health:"Healthy",icon:"✦",color:C.purple,on:true,sync:"Live"},
    {name:"Canvas (LMS)",desc:"Induction & mandatory training completion sync",cat:"Learning",status:"Connected",health:"Degraded",icon:"🎓",color:C.amber,on:true,sync:"3 hrs ago"},
    {name:"MS Teams",desc:"Interview scheduling & notifications",cat:"Productivity",status:"Connected",health:"Healthy",icon:"💬",color:C.teal,on:true,sync:"8 min ago"},
    {name:"SEEK",desc:"Job advertisement publishing & application import",cat:"Recruitment",status:"Connected",health:"Healthy",icon:"🔍",color:C.blue,on:true,sync:"22 min ago"},
    {name:"SEQTA",desc:"Future integration — staffing & timetabling",cat:"Learning",status:"Available",health:"—",icon:"🔗",color:C.textMute,on:false,sync:"—"},
  ];
  const [ints,setInts]=useState(init);
  return(
    <div className="page-in">
      <div className="g4" style={{marginBottom:16}}>
        {[{v:7,l:"Connected",c:C.green},{v:1,l:"Degraded",c:C.amber},{v:1,l:"Available",c:C.blue},{v:"99.9%",l:"Uptime (30d)",c:C.teal}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
      <div className="card-title" style={{margin:"4px 0 12px 2px"}}>Connected Systems · API-first integration</div>
      <div className="g3">
        {ints.map((it,i)=>(
          <div key={it.name} className="card card-bd" style={{padding:16}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:11,marginBottom:10}}>
              <div style={{width:42,height:42,borderRadius:11,background:`${it.color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{it.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:800,fontSize:13}}>{it.name}</div>
                <span className="badge b-gray" style={{fontSize:10,marginTop:2}}>{it.cat}</span>
              </div>
              <Toggle on={it.on} onChange={v=>setInts(s=>s.map((x,xi)=>xi===i?{...x,on:v}:x))}/>
            </div>
            <div style={{fontSize:11.5,color:C.textSub,lineHeight:1.5,marginBottom:12,minHeight:34}}>{it.desc}</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,borderTop:`1px solid ${C.border2}`}}>
              <span className={`badge ${it.status==="Connected"?(it.health==="Degraded"?"b-amber":"b-green"):"b-blue"}`}>
                {it.status==="Connected"&&<span className={`dot ${it.health==="Degraded"?"dot-a":"dot-g"}`}/>}{it.status==="Connected"?it.health:it.status}
              </span>
              <span style={{fontSize:10.5,color:C.textMute}}>{it.status==="Connected"?`Sync ${it.sync}`:"Not connected"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: PERMISSIONS  (Brief §2.7.1)
═══════════════════════════════════════════════════════════════════ */
function PagePermissions(){
  const [tab,setTab]=useState("roles");
  const roles=[
    {name:"HR Administrator",users:4,perms:94,desc:"Full access across all modules",idx:0,color:C.red},
    {name:"Hiring Manager",users:18,perms:38,desc:"Requisitions, candidates, scorecards",idx:4,color:C.blue},
    {name:"Recruiter",users:6,perms:52,desc:"Recruitment & onboarding workflows",idx:1,color:C.teal},
    {name:"Compliance Officer",users:3,perms:41,desc:"Compliance, visa, certification tracking",idx:2,color:C.amber},
    {name:"Principal / Leadership",users:5,perms:67,desc:"Approvals, reporting, oversight",idx:3,color:C.purple},
    {name:"Staff (Self-Service)",users:218,perms:9,desc:"Own profile, tasks, acknowledgements",idx:5,color:C.green},
  ];
  const modules=["Recruitment","Candidates","AI Screening","Interviews","Offers","Onboarding","Compliance","Visa","Employee Records","Reporting","Permissions","Audit Log"];
  const matrix={
    "HR Administrator":[1,1,1,1,1,1,1,1,1,1,1,1],
    "Hiring Manager":[1,1,0.5,1,0.5,0.5,0,0,0.5,0.5,0,0],
    "Recruiter":[1,1,1,1,1,1,0.5,0.5,0.5,0.5,0,0],
    "Compliance Officer":[0,0.5,0,0,0,0.5,1,1,0.5,1,0,0.5],
  };
  const cell=v=>v===1?<span style={{color:C.greenDk,fontWeight:800}}>✓</span>:v===0.5?<span style={{color:C.amberDk,fontWeight:800,fontSize:10}}>◐</span>:<span style={{color:C.textMute}}>—</span>;
  return(
    <div className="page-in">
      <div className="tabs">
        {["roles","matrix"].map(t=><div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{t==="roles"?"Roles":"Permission Matrix"}</div>)}
      </div>
      {tab==="roles"&&(
        <>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:12}}><button className="btn btn-primary btn-sm">+ Create Role</button></div>
          <div className="g3">
            {roles.map(r=>(
              <div key={r.name} className="card card-bd" style={{padding:16}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                  <div style={{width:38,height:38,borderRadius:10,background:`${r.color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>🔒</div>
                  <div><div style={{fontWeight:800,fontSize:13}}>{r.name}</div><div style={{fontSize:11,color:C.textSub}}>{r.users} users</div></div>
                </div>
                <div style={{fontSize:11.5,color:C.textSub,lineHeight:1.5,marginBottom:12}}>{r.desc}</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,borderTop:`1px solid ${C.border2}`}}>
                  <span style={{fontSize:11.5}}><b style={{color:r.color}}>{r.perms}</b> <span style={{color:C.textMute}}>/ 94 permissions</span></span>
                  <button className="btn btn-ghost btn-xs">Edit →</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {tab==="matrix"&&(
        <div className="card">
          <div className="card-hd"><div><div className="card-title">Permission Matrix</div><div className="card-sub">✓ Full · ◐ Limited · — None · 94 atomic permissions across 12 modules</div></div></div>
          <div style={{overflowX:"auto"}}>
            <table className="tbl">
              <thead><tr><th>MODULE</th>{Object.keys(matrix).map(r=><th key={r} style={{textAlign:"center"}}>{r.split(" ")[0]}</th>)}</tr></thead>
              <tbody>
                {modules.map((m,mi)=>(
                  <tr key={m}>
                    <td style={{fontWeight:700,fontSize:12.5}}>{m}</td>
                    {Object.keys(matrix).map(r=><td key={r} style={{textAlign:"center"}}>{cell(matrix[r][mi])}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE: AUDIT LOG  (Brief §2.7.1.2, 2.7.2)
═══════════════════════════════════════════════════════════════════ */
function PageAudit(){
  const events=[
    {time:"04 Jun 2026 11:42:08",user:"M. Omar",cat:"AI Decision",action:"AI fit score generated for Sarah Ahmed (92%) — Classroom Teacher model",sev:"info",idx:0},
    {time:"04 Jun 2026 10:15:33",user:"System",cat:"Compliance",action:"Auto-suspended system access — Sana Qureshi (visa expired)",sev:"critical",idx:2},
    {time:"04 Jun 2026 09:48:12",user:"R. Hadid",cat:"Permission",action:"Granted 'Hiring Manager' role to new user A. Saleh",sev:"warning",idx:4},
    {time:"03 Jun 2026 16:22:45",user:"S. Ahmed",cat:"Data Change",action:"Updated salary band on POS-0041 (Band 1 → Band 2)",sev:"info",idx:1},
    {time:"03 Jun 2026 14:09:01",user:"AI Agent",cat:"AI Decision",action:"Referee check transcript generated & summarised — Dr. L. Hassan",sev:"info",idx:0},
    {time:"03 Jun 2026 11:30:55",user:"M. Omar",cat:"Document",action:"Generated & sent Letter of Offer — OFF-4470 (Sarah Ahmed)",sev:"info",idx:0},
    {time:"02 Jun 2026 15:55:20",user:"Integration",cat:"Integration",action:"Synergetic sync completed — 218 employee records reconciled",sev:"info",idx:3},
    {time:"02 Jun 2026 09:12:44",user:"Dr. A. Rashid",cat:"Approval",action:"Approved offer OFF-4471 (Fatima Ali) at Principal step",sev:"info",idx:3},
  ];
  const sevDot=s=>({critical:"dot-r",warning:"dot-a",info:"dot-b"}[s]||"dot-gray");
  const catBadge=c=>({"AI Decision":"b-purple","Compliance":"b-red","Permission":"b-amber","Data Change":"b-blue","Document":"b-teal","Integration":"b-gray","Approval":"b-green"}[c]||"b-gray");
  return(
    <div className="page-in">
      <FiltersRow>
        <SearchBar placeholder="Search audit events, users, actions…" width={300}/>
        <select className="sel"><option>Category  All</option></select>
        <select className="sel"><option>User  All</option></select>
        <select className="sel"><option>Date  Last 7 days</option></select>
        <div style={{marginLeft:"auto"}}><button className="btn btn-secondary btn-sm">⬇ Export Audit Trail</button></div>
      </FiltersRow>
      <div className="g4" style={{marginBottom:16}}>
        {[{v:"2,418",l:"Events (30 days)",c:C.goldDark},{v:312,l:"AI Decisions Logged",c:C.purple},{v:1,l:"Critical Events",c:C.red},{v:"Immutable",l:"Trail Integrity",c:C.green}].map(s=>(
          <div key={s.l} className="stat-card"><div className="stat-val" style={{color:s.c,fontSize:s.v==="Immutable"?16:22}}>{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
      <div className="card">
        <div className="card-hd"><div><div className="card-title">Activity Trail</div><div className="card-sub">Tamper-evident · AI decisions, data changes & access events</div></div><span className="badge b-green">🔒 Write-once</span></div>
        <table className="tbl">
          <thead><tr><th>TIMESTAMP</th><th>USER</th><th>CATEGORY</th><th>ACTION</th><th></th></tr></thead>
          <tbody>
            {events.map((e,i)=>(
              <tr key={i}>
                <td style={{fontFamily:"ui-monospace,monospace",fontSize:11,color:C.textSub,whiteSpace:"nowrap"}}><span className={`dot ${sevDot(e.sev)}`} style={{marginRight:7}}/>{e.time}</td>
                <td><div style={{display:"flex",alignItems:"center",gap:7}}>{e.user==="System"||e.user==="AI Agent"||e.user==="Integration"?<div style={{width:24,height:24,borderRadius:7,background:C.sidebar,color:C.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800}}>{e.user==="AI Agent"?"AI":e.user==="System"?"SY":"IN"}</div>:<Av name={e.user} size={24} idx={e.idx}/>}<span style={{fontWeight:700,fontSize:12}}>{e.user}</span></div></td>
                <td><span className={`badge ${catBadge(e.cat)}`}>{e.cat}</span></td>
                <td style={{fontSize:12,color:C.textSub,lineHeight:1.4}}>{e.action}</td>
                <td><button className="btn btn-ghost btn-xs">Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PLACEHOLDER for remaining pages
═══════════════════════════════════════════════════════════════════ */
function PagePlaceholder({id}){
  const msgs={
    "workflow-designer":{icon:"⚙",title:"Workflow Designer",desc:"Drag-drop recruitment process builder. Configure approval chains, AI triggers, notifications and routing rules without developer support."},
    "employees":{icon:"👤",title:"Employee Records",desc:"Centralised employee profiles with contracts, certifications, employment history, POR management and offboarding workflows."},
    "doc-templates":{icon:"📝",title:"Document Templates",desc:"HR letters, warnings, statements of service, contract variations and salary review letters with version control."},
    "tasks":{icon:"✅",title:"Tasks & Acknowledgements",desc:"Issue compliance tasks and policy acknowledgements, track completion and escalate overdue items with manager dashboards."},
    "comms":{icon:"💬",title:"Communications",desc:"Centralised communication history for every candidate and employee record, reducing reliance on individual email accounts."},
    "reporting":{icon:"📊",title:"Reporting & Exports",desc:"Configurable dashboards, pipeline analytics, compliance exports, AI-generated recruitment summaries and scheduled reports."},
    "integrations":{icon:"🔗",title:"Integrations Hub",desc:"Synergetic SIS, Microsoft 365, Active Directory, Azure OpenAI, Canvas LMS, Teams, Seek, LinkedIn — all connected and monitored."},
    "visa":{icon:"✈",title:"Visa Management",desc:"Monitor 482 visa conditions, sponsorship obligations, residency transitions and VEVO status for all overseas staff."},
    "permissions":{icon:"🔒",title:"Permission Management",desc:"94 atomic permissions across 12 modules. Role-based access control with full audit trail for every permission change."},
    "audit":{icon:"🗒",title:"Audit Log",desc:"Immutable tamper-evident audit trail for all permissions, data changes, AI decisions and integration events."},
  };
  const m=msgs[id]||{icon:"⊞",title:id,desc:"This module is included in the full platform build."};
  return(
    <div className="page-in" style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:400}}>
      <div style={{textAlign:"center",maxWidth:460}}>
        <div style={{fontSize:52,marginBottom:16}}>{m.icon}</div>
        <div style={{fontSize:18,fontWeight:800,marginBottom:8}}>{m.title}</div>
        <div style={{fontSize:13,color:C.textSub,lineHeight:1.7,marginBottom:20}}>{m.desc}</div>
        <span className="badge b-gold" style={{padding:"4px 14px",fontSize:11}}>Phase 1 · Included in build</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════════════════════ */
export default function App(){
  const [page,setPage]=useState("dashboard");
  const [openSecs,setOpenSecs]=useState<Set<string>>(()=> new Set([SECTION_OF["dashboard"]]));
  const toggleSec=(sec:string)=> setOpenSecs(prev=>{
    const next=new Set(prev);
    next.has(sec) ? next.delete(sec) : next.add(sec);
    return next;
  });
  const goTo=(id:string)=>{ setPage(id); setOpenSecs(prev=>new Set(prev).add(SECTION_OF[id])); };

  const PAGES={
    dashboard:          <PageDashboard nav={goTo}/>,
    positions:          <PagePositions/>,
    "job-ads":          <PageJobAds/>,
    candidates:         <PageCandidates/>,
    "ai-screening":     <PageAIScreening/>,
    interviews:         <PageInterviews/>,
    "ai-interview":     <PageAIInterview/>,
    referee:            <PageReferee/>,
    offers:             <PageOffers/>,
    overseas:           <PageOverseas/>,
    onboarding:         <PageOnboarding/>,
    induction:          <PageInduction/>,
    compliance:         <PageCompliance/>,
    visa:               <PageVisa/>,
    employees:          <PageEmployees/>,
    "doc-templates":    <PageDocTemplates/>,
    tasks:              <PageTasks/>,
    comms:              <PageComms/>,
    "my-leave":         <PageMyLeave/>,
    "leave-mgmt":       <PageLeaveMgmt/>,
    rostering:          <PageRoster/>,
    timesheets:         <PageTimesheets/>,
    "pay-runs":         <PagePayRuns/>,
    stp:                <PageSTP/>,
    super:              <PageSuper/>,
    payslips:           <PagePaySlips/>,
    "expense-claims":   <PageExpenseClaims/>,
    "expenses-mgmt":    <PageExpensesManagement/>,
    compensation:       <PageCompensation/>,
    engagement:         <PageEngagement/>,
    development:        <PageDevelopment/>,
    performance:        <PagePerformance/>,
    benefits:           <PageBenefits/>,
    billing:            <PageBilling/>,
    "workflow-designer":<PageWorkflowDesigner/>,
    reporting:          <PageReporting/>,
    integrations:       <PageIntegrations/>,
    permissions:        <PagePermissions/>,
    audit:              <PageAudit/>,
  };

  const meta=PAGE_META[page]||{title:(NAV.find(n=>n.id===page)||{}).label||page,sub:"Al Siraat College · HRM Platform"};

  return(
    <>
      <style>{GS}</style>
      <div className="layout">
        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="sb-brand">
            <div className="sb-logo">AS</div>
            <div><div className="sb-brand-text">Al Siraat</div><div className="sb-brand-sub">College</div></div>
          </div>
          {NAV.map((item,i)=>{
            if(item.sec){
              const open=openSecs.has(item.sec);
              return (
                <div key={i} className={`sb-section ${open?"open":""}`} onClick={()=>toggleSec(item.sec)}>
                  <span style={{flex:1}}>{item.sec}</span>
                  <span className="sb-chev">{open?"▾":"▸"}</span>
                </div>
              );
            }
            if(!openSecs.has(SECTION_OF[item.id])) return null;
            return(
              <div key={item.id} className={`sb-item ${page===item.id?"active":""}`} onClick={()=>goTo(item.id)}>
                <span className="sb-icon">{item.icon}</span>
                <span style={{flex:1}}>{item.label}</span>
                <div className="sb-dot"/>
              </div>
            );
          })}
          <div className="sb-foot">© 2026 Al Siraat College · HRM Platform v2.0</div>
        </div>

        {/* MAIN */}
        <div className="main">
          <div className="topbar">
            <div className="tb-left">
              <div className="tb-title">{meta.title}</div>
              <div className="tb-sub">{meta.sub}</div>
            </div>
            <div className="tb-right">
              <div className="yr-pill">Recruitment Year <span className="yr">2026 ✕</span> ▾</div>
              <div className="av" style={{background:"linear-gradient(135deg,#c6a35a,#9c7e3c)",color:"#fff"}}>FB</div>
            </div>
          </div>
          <div className="content" key={page}>
            {PAGES[page]||<PagePlaceholder id={page}/>}
          </div>
        </div>
      </div>
    </>
  );
}
