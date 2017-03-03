/**
 * gridContent helpers
 */

Template.gridContent.helpers({
  displayPrice: function () {
    if (this.price && this.price.range) {
      return this.price.range;
    }
  },
  displayMeta: function () {
    if (this.metafields[0].value) {
      return this.metafields[0].value;
    }
  }
});

Template.evereveContent.replaces("gridContent");
Template.evereveContent.inheritsHelpersFrom("gridContent");
