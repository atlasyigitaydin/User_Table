import { _ as __nuxt_component_0 } from './nuxt-layout-DzmqKrR1.mjs';
import { g as useScreenShotStore, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, computed, unref, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/nitro.mjs';
import '@iconify/utils';
import 'unhead';
import 'firebase/app';
import 'firebase/firestore';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "filters",
  __ssrInlineRender: true,
  setup(__props) {
    const screenshotStore = useScreenShotStore();
    const isDesktop = computed(() => screenshotStore.width === 1920);
    const isTablet = computed(() => screenshotStore.width === 1024);
    const isMobile = computed(() => screenshotStore.width === 375);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:h-full lg:p-4 p-2 flex flex-col justify-between gap-8 lg:max-w-[400px] border rounded border-gray-950" }, _attrs))}><div class="${ssrRenderClass(`flex flex-col gap-4 ${unref(screenshotStore).screenshot ? "hidden lg:flex" : "flex"}`)}"><div class="w-full"><div>${ssrInterpolate("Link")}</div><input${ssrRenderAttr("value", unref(screenshotStore).url)} placeholder="https://example.com" class="border w-full border-gray-950 rounded px-3 py-2"></div><div class="flex flex-col"><div>${ssrInterpolate("\xD6l\xE7ek")}</div><div class="flex w-full gap-2"><button class="${ssrRenderClass(`${unref(isDesktop) ? "bg-gray-950 text-white" : ""} w-full py-1 border border-gray-950 rounded flex items-center justify-center`)}">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-3xl",
        name: "material-symbols-light:desktop-windows-outline-rounded"
      }, null, _parent));
      _push(`</button><button class="${ssrRenderClass(`${unref(isTablet) ? "bg-gray-950 text-white" : ""} w-full py-1 border border-gray-950 rounded flex items-center justify-center`)}">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-3xl",
        name: "material-symbols-light:tablet-outline"
      }, null, _parent));
      _push(`</button><button class="${ssrRenderClass(`${unref(isMobile) ? "bg-gray-950 text-white" : ""} w-full py-1 border border-gray-950 rounded flex items-center justify-center`)}">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-2xl",
        name: "mynaui:mobile"
      }, null, _parent));
      _push(`</button></div><div class="flex w-full mt-2"><div class="border-l w-3/12 flex items-center px-3 justify-center lg:text-lg border-gray-950 border-y rounded-l"> width </div><input${ssrRenderAttr("value", unref(screenshotStore).width)} class="border border-gray-950 lg:px-3 py-2 text-center w-full" type="number"><div class="border-r w-3/12 flex items-center px-3 justify-center lg:text-lg border-gray-950 border-y rounded-r"> px </div></div></div></div><div class="flex lg:flex-col flex-col gap-4">`);
      if (unref(screenshotStore).screenshot) {
        _push(`<button class="${ssrRenderClass(`lg:w-[300px] bg-white border-gray-950 border text-gray-950 flex gap-2 items-center justify-center rounded text-lg py-1
          ${unref(screenshotStore).screenshot ? "flex lg:hidden" : "cursor-auto opacity-70"}`)}">${ssrInterpolate("Yeni Site")} `);
        _push(ssrRenderComponent(_component_Icon, {
          class: "text-3xl",
          name: "material-symbols-light:edit"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(screenshotStore).screenshot) {
        _push(`<button class="${ssrRenderClass(`lg:w-[300px] bg-gray-950 text-white flex items-center justify-center rounded text-lg py-1
          ${unref(screenshotStore).screenshot ? "" : "cursor-auto opacity-70"}`)}">${ssrInterpolate("\u0130ndir")} `);
        _push(ssrRenderComponent(_component_Icon, {
          class: "text-3xl",
          name: "material-symbols-light:download"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="${ssrRenderClass(`${unref(screenshotStore).screenshot ? "lg:flex hidden" : ""} bg-gray-950 text-white flex items-center justify-center rounded text-lg py-1
          ${unref(screenshotStore).url ? "" : "cursor-auto opacity-70"}`)}">${ssrInterpolate("G\xF6r\xFCnt\xFCy\xFC Yakala")} `);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-3xl",
        name: "material-symbols-light:control-camera-rounded"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/filters.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screenshot",
  __ssrInlineRender: true,
  setup(__props) {
    const screenshotStore = useScreenShotStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Filters = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex lg:flex-row flex-col border gap-4 p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Filters, null, null, _parent2, _scopeId));
            _push2(`<div class="overflow-auto w-full"${_scopeId}>`);
            if (unref(screenshotStore).screenshot) {
              _push2(`<img class="w-full"${ssrRenderAttr("src", unref(screenshotStore).screenshot)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex lg:flex-row flex-col border gap-4 p-4" }, [
                createVNode(_component_Filters),
                createVNode("div", { class: "overflow-auto w-full" }, [
                  unref(screenshotStore).screenshot ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "w-full",
                    src: unref(screenshotStore).screenshot
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/screenshot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=screenshot-9mn60H3w.mjs.map
