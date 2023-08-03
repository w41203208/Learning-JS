const map = { imports: {} };
function getBlobURL(content, type = 'text/javascript') {
  const blob = new Blob([content], { type });
  return URL.createObjectURL(blob);
}
const currentScript =
  document.currentScript || document.querySelector('script');

function setup() {
  const modules = document.querySelectorAll('script[type="inline-module"]');
  const importMap = {};
  [...modules].forEach((module) => {
    const { id } = module;
    if (id) {
      importMap[`${id}`] = getBlobURL(module.innerHTML);
    }
  });
  // const importMapEl = document.querySelector('script[type="importmap"]');
  // if (importMapEl) {
  //   // map = JSON.parse(mapEl.innerHTML);
  //   throw new Error(
  //     'Cannot setup after importmap is set. Use <script type="inline-module-importmap"> instead.'
  //   );
  // }

  // const externalMapEl = document.querySelector(
  //   'script[type="inline-module-importmap"]'
  // );
  // if (externalMapEl) {
  //   const externalMap = JSON.parse(externalMapEl.textContent);
  //   Object.assign(map.imports, externalMap.imports);
  //   Object.assign(map.scopes, externalMap.scopes);
  // }

  Object.assign(map.imports, importMap);

  const mapEl = document.createElement('script');
  mapEl.setAttribute('type', 'importmap');
  mapEl.textContent = JSON.stringify(map);
  currentScript.after(mapEl);
}

if (currentScript.hasAttribute('setup')) {
  setup();
}
