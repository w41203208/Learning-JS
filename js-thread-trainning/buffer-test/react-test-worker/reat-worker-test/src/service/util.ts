export const _craeteBlobObjectURL = (
  func: Function | string
): string | null => {
  if (typeof func !== 'function' && typeof func !== 'string') return null;
  let blob;
  if (typeof func === 'string') {
    blob = new Blob([`(${func})()`], { type: 'text/javascript' });
  } else {
    const code = func.toString();
    blob = new Blob([`(${code})()`], { type: 'text/javascript' });
  }

  const url = URL.createObjectURL(blob);
  return url;
};
