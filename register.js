import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Products",
  name: "evereve-product",
  icon: "fa fa-cubes",
  autoEnable: true,
  registry: [{
    route: "/tag/:slug?",
    name: "tag",
    template: "myProducts",
    workflow: "coreProductWorkflow"
  }, {
    route: "/products/createProduct",
    name: "createProduct",
    label: "Add Product",
    icon: "fa fa-plus",
    template: "productDetail",
    provides: "shortcut",
    container: "addItem",
    priority: 1,
    permissions: [{
      label: "Create Product",
      permission: "createProduct"
    }]
  }],
  layout: [{
    layout: "evereveCore",
    workflow: "coreProductWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "productDetail",
      layoutHeader: "layoutHeader",
      layoutFooter: "",
      notFound: "productNotFound",
      dashboardHeader: "productDetailSimpleToolbar",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }, {
    layout: "evereveCore",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "myProducts",
      layoutHeader: "layoutHeader",
      layoutFooter: "",
      notFound: "productNotFound",
      dashboardHeader: "gridPublishControls",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  },
  {
    layout: "evereveCore",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "evereveProductGrid",
      layoutHeader: "layoutHeader",
      layoutFooter: "",
      notFound: "productNotFound",
      dashboardHeader: "gridPublishControls",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
