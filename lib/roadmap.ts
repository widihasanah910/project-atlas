export const START_DATE=new Date("2026-09-05");
export const getCurrentDay=()=>Math.max(1,Math.min(84,Math.floor((Date.now()-START_DATE.getTime())/86400000)+1));
export const getWeek=(d:number)=>Math.ceil(d/7);
export const getProgress=(d:number)=>Math.round(d/84*100);
