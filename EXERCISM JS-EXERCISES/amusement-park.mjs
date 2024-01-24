export const createVisitor = (n, a, t) => ({name:n, age:a, ticketId:t}),
revokeTicket = (v) => (v.ticketId = null, v),
ticketStatus = (t, id) =>  t in id ? t[id] ? `sold to ${t[id]}` : 'not sold' : 'unknown ticket id',
simpleTicketStatus = (t, id) => t[id]??'invalid ticket !!!',
gtcVersion = (v) => v.gtc?.version;
