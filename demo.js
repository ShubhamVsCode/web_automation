async function newFunction() {
  const logger = (msg) => {
    console.log(`
      ${msg}
      _______________________________________________________________________________
    `);
  };

  logger("Starting function");
}

newFunction();
