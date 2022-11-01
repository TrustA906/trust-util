import lume from "lume/mod.ts";

const site = lume({
  dest: "./docs",
  server: {
    open: true,
  },
});

export default site;
