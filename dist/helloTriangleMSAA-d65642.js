!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=3)}([function(e,t,n){"use strict";var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))};let o=void 0;t.a=function(){return r(this,void 0,void 0,(function*(){if(void 0!==o)return o;const e=yield import("https://unpkg.com/@webgpu/glslang@0.0.7/web/glslang.js");return o=yield e.default()}))}},,,function(e,t,n){"use strict";n.r(t),n.d(t,"title",(function(){return i})),n.d(t,"description",(function(){return u})),n.d(t,"init",(function(){return a}));var r=n(0),o=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))};const i="Hello Triangle MSAA",u="Shows rendering a basic triangle with multisampling.";function a(e){return o(this,void 0,void 0,(function*(){const t="#version 450\n      const vec2 pos[3] = vec2[3](vec2(0.0f, 0.5f), vec2(-0.5f, -0.5f), vec2(0.5f, -0.5f));\n\n      void main() {\n          gl_Position = vec4(pos[gl_VertexIndex], 0.0, 1.0);\n      }\n    ",n="#version 450\n      layout(location = 0) out vec4 outColor;\n\n      void main() {\n          outColor = vec4(1.0, 0.0, 0.0, 1.0);\n      }\n    ",o=yield navigator.gpu.requestAdapter(),i=yield o.requestDevice(),u=yield Object(r.a)(),a=e.getContext("gpupresent").configureSwapChain({device:i,format:"bgra8unorm"}),c=i.createRenderPipeline({layout:i.createPipelineLayout({bindGroupLayouts:[]}),vertexStage:{module:i.createShaderModule({code:u.compileGLSL(t,"vertex"),source:t,transform:e=>u.compileGLSL(e,"vertex")}),entryPoint:"main"},fragmentStage:{module:i.createShaderModule({code:u.compileGLSL(n,"fragment"),source:n,transform:e=>u.compileGLSL(e,"fragment")}),entryPoint:"main"},primitiveTopology:"triangle-list",colorStates:[{format:"bgra8unorm"}],sampleCount:4}),l=i.createTexture({size:{width:e.width,height:e.height,depth:1},sampleCount:4,format:"bgra8unorm",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}).createView();return function(){const e=i.createCommandEncoder({}),t={colorAttachments:[{attachment:l,resolveTarget:a.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1}}]},n=e.beginRenderPass(t);n.setPipeline(c),n.draw(3,1,0,0),n.endPass(),i.defaultQueue.submit([e.finish()])}}))}}]);
//# sourceMappingURL=helloTriangleMSAA-d65642.js.map