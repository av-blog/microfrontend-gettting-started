import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@tecmec/tecmec-layout",
  app: () => System.import("@tecmec/tecmec-layout"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@tecmec/tecmec-user-manager",
  app: () => System.import("@tecmec/tecmec-user-manager"),
  activeWhen: ["/user"],
});

registerApplication({
  name: "@tecmec/tecmec-product-catlog",
  app: () => System.import("@tecmec/tecmec-product-catlog"),
  activeWhen: ["/product"],
});

start({
  urlRerouteOnly: true,
});
