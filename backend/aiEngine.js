function analyzeTicket(text){

  const lower = text.toLowerCase();

  let intent="general";
  let urgency="low";
  let emotion="neutral";
  let action="respond";

  if(lower.includes("refund") || lower.includes("charged")){
    intent="refund";
    action="issue_refund";
  }

  if(lower.includes("urgent") || lower.includes("asap")){
    urgency="high";
  }

  if(lower.includes("angry") || lower.includes("terrible")){
    emotion="negative";
  }

  if(urgency==="high" && emotion==="negative"){
    action="escalate_to_human";
  }

  return {intent,urgency,emotion,action};

}

module.exports=analyzeTicket;