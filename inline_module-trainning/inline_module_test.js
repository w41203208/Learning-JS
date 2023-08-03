function getBlobURL(content, type = 'text/javascript') {
  const blob = new Blob([content], { type });
  return URL.createObjectURL(blob);
}

// 存放經由 blob 轉換後的模組 url 路徑
const blobUrlMap = {};

// 我們的主角～
async function inlineImport(moduleId) {
  let blobUrl;
  if (moduleId in blobUrlMap) {
    // 解析過的直接拿
    blobUrl = blobUrlMap[moduleId];
  } else {
    // 還沒解析的進行轉換
    const module = document.querySelector(`script[type="module"]${moduleId}`);
    if (module) {
      blobUrl = getBlobURL(module.innerHTML);
      console.log(blobUrl);
      blobUrlMap[moduleId] = blobUrl;
    }
  }

  if (blobUrl) {
    // 動態載入
    const result = await import(blobUrl);
    return result;
  }
  return null;
}

// const f = Symbol('gg');
// console.log(f);
