// global - Node.js האוביקט הראשי של
// global.process - Node.js מידע לגבי אפליקציית
// global.process.env - משתני סביבה - מכילים מידע על המחשב, על מע' ההפעלה ועוד
// global לא חובה לכתוב את המילה
// global.process.env = process.env

// console.log(global);

// global.setInterval(() => {
//     const date = new Date();
//     console.log(date.toLocaleTimeString());
// }, 1000);

// console.log(global.process);
console.log(global.process.env.NUMBER_OF_PROCESSORS);
console.log(global.process.env.USERNAME);
console.log(global.process.env.COMPUTERNAME);
console.log(process.env.COMPUTERNAME);
