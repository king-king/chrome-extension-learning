define(function(require,exports){Backbone.Model.prototype.toJSON=function(){var a=_.clone(this.attributes);return a.local=this.local,a},Backbone.Model.prototype.isNew=function(){return this.local?!0:this.get("local")?!0:null==this.id}});