export function mapNumericValueToRange(
  value,
  in_min,
  in_max,
  out_min,
  out_max
) {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export function testForHSLAColorString(string) {
  const regex = /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)/;
  return string.match(regex);
}

export function getColorCustomOpacityFromHSLA(color, opacity = 0) {
  const regexResult = testForHSLAColorString(color);

  if (regexResult) {
    const h = regexResult[1] || 0;
    const s = regexResult[2] || 50;
    const l = regexResult[3] || 50;
    const a = mapNumericValueToRange(opacity, 0, 1, 0.2, 1);
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  }
  return "coral";
}
