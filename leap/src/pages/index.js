import Box from "../components/Box2";

const styles = {
  container: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    width: 1300,
    justipyContent: "center",
    alignItems: "center",
    padding: 50,
  },
};

export default function test() {
  return (
    <div style={styles.container}>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}
