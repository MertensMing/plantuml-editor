"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[98],{6098:function(n,t,e){e.r(t),e.d(t,{AsyncUseObjectDetailController:function(){return d},default:function(){return u}});var o=e(4510),r=e(1718),c=e(8432),i=e(7500),l=e(7043),a=e(1993),d=function(){var n=(0,r.G)(a.L),t=function(){var n=(0,r.G)(i.O);return{handleSelectObjectBgColor:function(t,e){n.setState((function(n){return(0,l.Uy)(n,(function(n){var o,r=(0,c.dn)(null===(o=n.deployment)||void 0===o?void 0:o.root,t);r&&(r.bgColor=e)}))}))},handleMoveObject:function(t,e){n.setState((function(n){return(0,l.Uy)(n,(function(n){var o=(0,c.dn)(n.deployment.root,e);if(!o||null===o||void 0===o||!o.isContainer)throw new Error("targetId ".concat(e," \u4e0d\u662f\u5bb9\u5668"));var r=(0,c.dn)(n.deployment.root,t);if(null!==r&&void 0!==r&&r.isContainer&&(0,c.dn)(r,e))throw new Error("\u7236\u5bf9\u8c61 ".concat(t," \u4e0d\u80fd\u79fb\u52a8\u5230\u5b50\u5bf9\u8c61 ").concat(e," \u4e2d"));var i=(0,c.GZ)(n.deployment.root,t);if(!i)throw new Error("\u627e\u4e0d\u5230\u5bf9\u8c61 ".concat(e));(0,c.Qf)(o,i)}))}))},handleDelete:function(t){n.setState((function(n){return(0,l.Uy)(n,(function(n){(0,c.GZ)(n.deployment.root,t)&&(n.currentObjectId=n.deployment.root.id,(0,c.Lg)(n.deployment,t))}))}))},handleAddRelation:function(t,e){n.setState((function(n){return(0,l.Uy)(n,(function(n){[t,e].includes(n.deployment.root.id)||(0,c.Hi)(n.deployment,t,e)}))}))}}}(),e=t.handleAddRelation,d=t.handleMoveObject,u=t.handleDelete,f=t.handleSelectObjectBgColor;return(0,o.m)(n.relation$,(function(n){var t=n.id,o=n.target;e(t,o)})),(0,o.m)(n.move$,(function(n){var t=n.id,e=n.target;d(t,e)})),(0,o.m)(n.color$,(function(n){var t=n.id,e=n.color;f(t,e)})),(0,o.m)(n.delete$,(function(n){var t=n.id;u(t)})),null},u=d}}]);
//# sourceMappingURL=98.f9910376.chunk.js.map