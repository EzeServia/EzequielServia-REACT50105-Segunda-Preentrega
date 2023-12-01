import { helix } from "ldrs";
const LoaderComponent = () => {
  helix.register();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}>
      <l-helix size="100" speed="8.5" color="white"></l-helix>
    </div>
  );
};
export default LoaderComponent;
