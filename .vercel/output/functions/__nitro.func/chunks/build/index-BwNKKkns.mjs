import { f as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-layout-DzmqKrR1.mjs';
import { u as useRouter, f as useFirebaseStore, g as useScreenShotStore, _ as __nuxt_component_0$1, i as isValidUrl, k as removeHttps } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, withDirectives, isRef, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'node:fs';
import 'node:path';
import 'vue-router';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'unhead';
import 'firebase/app';
import 'firebase/firestore';

const _imports_0 = "" + buildAssetsURL("nuxt.BWzs_hDY.jpg");
const _imports_1 = "" + buildAssetsURL("nasa.BxfKMRU6.jpg");
const _imports_2 = "" + buildAssetsURL("dribbble.HQX0kZKj.jpg");
const _imports_3 = "" + buildAssetsURL("wikipedia.B3SNSuXJ.jpg");
const _imports_4 = "" + buildAssetsURL("tailwindcss.BRGUOrtq.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute -z-20 -top-[500px] left-[1200px] justify-end w-full h-full flex transform-gpu brightness-75" }, _attrs))}><div class="flex gap-4 transform rotate-[30deg] -skew-x-[25deg]"><div class="flex flex-col w-[350px] shadow-lg gap-4"><img class="shadow-xl"${ssrRenderAttr("src", _imports_0)}><img class="shadow-xl"${ssrRenderAttr("src", _imports_1)}><img class="shadow-xl"${ssrRenderAttr("src", _imports_2)}></div><div class="flex flex-col w-[350px] shadow-lg gap-4"><img class="shadow-xl"${ssrRenderAttr("src", _imports_2)}><img class="shadow-xl"${ssrRenderAttr("src", _imports_3)}><img class="shadow-xl"${ssrRenderAttr("src", _imports_4)}></div><div class="flex flex-col w-[350px] shadow-lg gap-4 mt-24"><img class="shadow-xl"${ssrRenderAttr("src", _imports_0)}><img class="shadow-xl"${ssrRenderAttr("src", _imports_1)}><img class="shadow-xl"${ssrRenderAttr("src", _imports_2)}></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home-bg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const firebase = useFirebaseStore();
    const fastCreateDisplay = ref("lg");
    const fastCreateUrl = ref();
    const createAndDownload = ref(false);
    const screenshotStore = useScreenShotStore();
    async function fast(url) {
      if (url) {
        screenshotStore.url = removeHttps(url);
        screenshotStore.width = fastCreateDisplay.value === "lg" ? 1920 : fastCreateDisplay.value === "md" ? 1024 : 375;
        router.push({ name: "screenshot" });
        await screenshotStore.fetchSs();
        if (createAndDownload.value) {
          screenshotStore.download();
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_HomeBg = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-x-hidden overflow-y-auto w-full h-full z-20 flex justify-start lg:pt-24 pt-6 lg:p-8 p-4 flex-col gap-6 lg:text-gray-950 text-white lg:bg-transparent bg-gray-950/75"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "lg:text-7xl text-5xl",
              name: "material-symbols-light:control-camera-rounded"
            }, null, _parent2, _scopeId));
            _push2(`<div class="lg:text-5xl text-2xl text-balance tracking-tight"${_scopeId}> Web Screen Shot </div></div><div class="lg:text-2xl"${_scopeId}><p${_scopeId}> Kolayca Web Sitenizden || Ba\u015Fka Bir Siteden <label class=""${_scopeId}> Ekran G\xF6r\xFCnt\xFCs\xFC Al\u0131n</label> ! </p></div><div class="flex flex-col text-xl gap-2 font-light"${_scopeId}><label class="border-l pl-2 lg:border-gray-900"${_scopeId}> Tam sayfa veya g\xF6r\xFCn\xFCr alan se\xE7enekleriyle \xF6zelle\u015Ftirin. </label><label class="border-l pl-2 lg:border-gray-900"${_scopeId}> Y\xFCksek \xE7\xF6z\xFCn\xFCrl\xFCkl\xFC ekran g\xF6r\xFCnt\xFCleri elde edin. </label><label class="border-l pl-2 lg:border-gray-900"${_scopeId}> H\u0131zl\u0131 sonu\xE7lar al\u0131n. </label></div><div class="text-lg"${_scopeId}><label class="text-xl"${_scopeId}>${ssrInterpolate(unref(firebase).count)}</label><label${_scopeId}> Adet Ekran G\xF6r\xFCnt\xFCs\xFC Al\u0131nd\u0131 </label></div><div class="flex items-end text-xl mt-6 gap-2 font-light"${_scopeId}><button class="text-gray-950 lg:text-white lg:w-auto w-full bg-white lg:bg-gray-950 py-2 px-3 rounded flex justify-center lg:justify-start items-center gap-2"${_scopeId}> Ba\u015Flay\u0131n `);
            _push2(ssrRenderComponent(_component_Icon, { name: "material-symbols-light:arrow-forward-ios-rounded" }, null, _parent2, _scopeId));
            _push2(`</button></div><div class="flex flex-col lg:bg-white lg:p-4 rounded mt-20 pl-2 gap-1 lg:w-[400px]"${_scopeId}><label class="text-xl"${_scopeId}> H\u0131zl\u0131 Ba\u015Fla </label><div class="flex w-full gap-2"${_scopeId}><button class="${ssrRenderClass(`${unref(fastCreateDisplay) === "lg" ? "bg-gray-950 text-white" : "bg-white text-gray-950"} w-full py-1 border-gray-950 rounded flex items-center justify-center`)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-3xl",
              name: "material-symbols-light:desktop-windows-outline-rounded"
            }, null, _parent2, _scopeId));
            _push2(`</button><button class="${ssrRenderClass(`${unref(fastCreateDisplay) === "md" ? "bg-gray-950 text-white" : "bg-white text-gray-950"} w-full py-1 border-gray-950 rounded flex items-center justify-center`)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-3xl",
              name: "material-symbols-light:tablet-outline"
            }, null, _parent2, _scopeId));
            _push2(`</button><button class="${ssrRenderClass(`${unref(fastCreateDisplay) === "sm" ? "bg-gray-950 text-white" : "bg-white text-gray-950"} w-full py-1 border-gray-950 rounded flex items-center justify-center`)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-2xl",
              name: "mynaui:mobile"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><input${ssrRenderAttr("value", unref(fastCreateUrl))} placeholder="H\u0131zl\u0131 ba\u015Flamak i\xE7in linki yap\u0131\u015Ft\u0131r" class="border border-gray-950 text-gray-950 bg-white rounded px-3 py-2"${_scopeId}><button class="switch border-gray-950 rounded flex items-center gap-2 py-2"${_scopeId}><div class="${ssrRenderClass(`${unref(createAndDownload) ? "bg-green-400" : ""} border lg:border-gray-950 border-white rounded h-4 w-4`)}"${_scopeId}></div><p${_scopeId}>${ssrInterpolate("Y\xFCklenmenin ard\u0131ndan indir")}</p></button><button class="${ssrRenderClass(`text-white rounded text-lg py-1
          ${("isValidUrl" in _ctx ? _ctx.isValidUrl : unref(isValidUrl))(unref(fastCreateUrl)) ? "bg-green-400" : "bg-gray-950 cursor-auto opacity-70"}`)}"${_scopeId}>${ssrInterpolate(unref(createAndDownload) ? "G\xF6r\xFCnt\xFCle ve \u0130ndir" : "G\xF6r\xFCnt\xFCle")}</button></div></div>`);
            _push2(ssrRenderComponent(_component_HomeBg, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "overflow-x-hidden overflow-y-auto w-full h-full z-20 flex justify-start lg:pt-24 pt-6 lg:p-8 p-4 flex-col gap-6 lg:text-gray-950 text-white lg:bg-transparent bg-gray-950/75" }, [
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode(_component_Icon, {
                    class: "lg:text-7xl text-5xl",
                    name: "material-symbols-light:control-camera-rounded"
                  }),
                  createVNode("div", { class: "lg:text-5xl text-2xl text-balance tracking-tight" }, " Web Screen Shot ")
                ]),
                createVNode("div", { class: "lg:text-2xl" }, [
                  createVNode("p", null, [
                    createTextVNode(" Kolayca Web Sitenizden || Ba\u015Fka Bir Siteden "),
                    createVNode("label", { class: "" }, " Ekran G\xF6r\xFCnt\xFCs\xFC Al\u0131n"),
                    createTextVNode(" ! ")
                  ])
                ]),
                createVNode("div", { class: "flex flex-col text-xl gap-2 font-light" }, [
                  createVNode("label", { class: "border-l pl-2 lg:border-gray-900" }, " Tam sayfa veya g\xF6r\xFCn\xFCr alan se\xE7enekleriyle \xF6zelle\u015Ftirin. "),
                  createVNode("label", { class: "border-l pl-2 lg:border-gray-900" }, " Y\xFCksek \xE7\xF6z\xFCn\xFCrl\xFCkl\xFC ekran g\xF6r\xFCnt\xFCleri elde edin. "),
                  createVNode("label", { class: "border-l pl-2 lg:border-gray-900" }, " H\u0131zl\u0131 sonu\xE7lar al\u0131n. ")
                ]),
                createVNode("div", { class: "text-lg" }, [
                  createVNode("label", { class: "text-xl" }, toDisplayString(unref(firebase).count), 1),
                  createVNode("label", null, " Adet Ekran G\xF6r\xFCnt\xFCs\xFC Al\u0131nd\u0131 ")
                ]),
                createVNode("div", { class: "flex items-end text-xl mt-6 gap-2 font-light" }, [
                  createVNode("button", {
                    class: "text-gray-950 lg:text-white lg:w-auto w-full bg-white lg:bg-gray-950 py-2 px-3 rounded flex justify-center lg:justify-start items-center gap-2",
                    onClick: ($event) => unref(router).push({ name: "screenshot" })
                  }, [
                    createTextVNode(" Ba\u015Flay\u0131n "),
                    createVNode(_component_Icon, { name: "material-symbols-light:arrow-forward-ios-rounded" })
                  ], 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex flex-col lg:bg-white lg:p-4 rounded mt-20 pl-2 gap-1 lg:w-[400px]" }, [
                  createVNode("label", { class: "text-xl" }, " H\u0131zl\u0131 Ba\u015Fla "),
                  createVNode("div", { class: "flex w-full gap-2" }, [
                    createVNode("button", {
                      class: `${unref(fastCreateDisplay) === "lg" ? "bg-gray-950 text-white" : "bg-white text-gray-950"} w-full py-1 border-gray-950 rounded flex items-center justify-center`,
                      onClick: ($event) => fastCreateDisplay.value = "lg"
                    }, [
                      createVNode(_component_Icon, {
                        class: "text-3xl",
                        name: "material-symbols-light:desktop-windows-outline-rounded"
                      })
                    ], 10, ["onClick"]),
                    createVNode("button", {
                      class: `${unref(fastCreateDisplay) === "md" ? "bg-gray-950 text-white" : "bg-white text-gray-950"} w-full py-1 border-gray-950 rounded flex items-center justify-center`,
                      onClick: ($event) => fastCreateDisplay.value = "md"
                    }, [
                      createVNode(_component_Icon, {
                        class: "text-3xl",
                        name: "material-symbols-light:tablet-outline"
                      })
                    ], 10, ["onClick"]),
                    createVNode("button", {
                      class: `${unref(fastCreateDisplay) === "sm" ? "bg-gray-950 text-white" : "bg-white text-gray-950"} w-full py-1 border-gray-950 rounded flex items-center justify-center`,
                      onClick: ($event) => fastCreateDisplay.value = "sm"
                    }, [
                      createVNode(_component_Icon, {
                        class: "text-2xl",
                        name: "mynaui:mobile"
                      })
                    ], 10, ["onClick"])
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => isRef(fastCreateUrl) ? fastCreateUrl.value = $event : null,
                    placeholder: "H\u0131zl\u0131 ba\u015Flamak i\xE7in linki yap\u0131\u015Ft\u0131r",
                    class: "border border-gray-950 text-gray-950 bg-white rounded px-3 py-2",
                    onFocus: (event) => {
                      event.target.select();
                    }
                  }, null, 40, ["onUpdate:modelValue", "onFocus"]), [
                    [vModelText, unref(fastCreateUrl)]
                  ]),
                  createVNode("button", {
                    class: "switch border-gray-950 rounded flex items-center gap-2 py-2",
                    onClick: ($event) => createAndDownload.value = !unref(createAndDownload)
                  }, [
                    createVNode("div", {
                      class: `${unref(createAndDownload) ? "bg-green-400" : ""} border lg:border-gray-950 border-white rounded h-4 w-4`
                    }, null, 2),
                    createVNode("p", null, toDisplayString("Y\xFCklenmenin ard\u0131ndan indir"))
                  ], 8, ["onClick"]),
                  createVNode("button", {
                    class: `text-white rounded text-lg py-1
          ${("isValidUrl" in _ctx ? _ctx.isValidUrl : unref(isValidUrl))(unref(fastCreateUrl)) ? "bg-green-400" : "bg-gray-950 cursor-auto opacity-70"}`,
                    onClick: () => {
                      if (("isValidUrl" in _ctx ? _ctx.isValidUrl : unref(isValidUrl))(unref(fastCreateUrl)))
                        fast(unref(fastCreateUrl));
                    }
                  }, toDisplayString(unref(createAndDownload) ? "G\xF6r\xFCnt\xFCle ve \u0130ndir" : "G\xF6r\xFCnt\xFCle"), 11, ["onClick"])
                ])
              ]),
              createVNode(_component_HomeBg)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BwNKKkns.mjs.map
