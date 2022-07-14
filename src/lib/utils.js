export const BooleanParam = {
  encode: (bool) => (bool ? null : undefined),
  decode: (bool) => bool === null,
};
