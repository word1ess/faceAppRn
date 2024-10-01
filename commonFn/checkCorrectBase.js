export default function checkCorrectBase(uri) {
  const paddingLength = 4 - (uri.length % 4);
  return uri + "=".repeat(paddingLength);
}
