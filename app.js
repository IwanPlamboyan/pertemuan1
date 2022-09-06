// mengimport core module readline
const readline = require('readline');

// membuat interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat beberapa pertanyaan
rl.question('What is your name? ', (name) => {
  rl.question('What is your phone nomor? ', (nomor) => {
    rl.question('What is your email? ', (email) => {
      console.log(`Thank you ${name}, Thank you ${nomor}, Thank you ${email}`);
      rl.close();
    });
  });
});
