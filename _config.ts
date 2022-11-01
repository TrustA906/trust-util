import lume from "lume/mod.ts";

const site = lume({
  dest: "./output",
  server: {
    open: true,
  },
});

export default site;
