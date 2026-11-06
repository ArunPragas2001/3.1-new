import { StyleSheet } from "react-native";
import c from "./colors";
export default StyleSheet.create({
  page: { flex: 1, backgroundColor: c.background },
  content: { padding: 20, paddingBottom: 36, gap: 16 },
  title: { color: c.text, fontSize: 30, fontWeight: "800" },
  heading: { color: c.text, fontSize: 21, fontWeight: "700" },
  text: { color: c.text, fontSize: 16, lineHeight: 25 },
  muted: { color: c.muted, fontSize: 15, lineHeight: 23 },
  card: { padding: 18, borderRadius: 20, backgroundColor: c.surface, gap: 10 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  button: {
    backgroundColor: c.purple,
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: { color: c.background, fontWeight: "700", fontSize: 16 },
  chip: {
    borderWidth: 1,
    borderColor: c.border,
    borderRadius: 24,
    padding: 12,
  },
  active: { backgroundColor: c.purple },
  error: { color: c.orange, lineHeight: 23 },
});
