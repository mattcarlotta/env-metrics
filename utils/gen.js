const { writeFileSync } = require("fs");

const ENV = new Array(20000).fill(0).reduce(
  (acc, _, index) => ({
    ...acc,
    [index]: index % 5 !== 0 ? `${index}` : `\$${index + 1}`
  }),
  {}
);

const file = Object.keys(ENV).reduce((str, index) => {
  let val = "";

  const r = index % 10;

  switch (r) {
    case 0: {
      val = `'${index}'`;
      break;
    }
    case 1: {
      val = `    ${index}    `;
      break;
    }
    case 2: {
      val = `"${index}"`;
      break;
    }
    case 3: {
      val = `{"foo": ${index}, ${[index]}: "bar"}`;
      break;
    }
    case 4: {
      val = `\\n${index}`;
      break;
    }
    case 5: {
      val = `# COMMENTS=${index}`;
    }
    default: {
      val = ENV[index];
    }
  }

  str += `${index > 0 ? "\n" : ""}${index}=${val}`;

  return str;
}, "");

writeFileSync(".env", file, { encoding: "utf-8" });
