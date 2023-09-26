import "./App.css";
import ImageUpload from "./components/ImageUpload";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  const handleImageUpload = (file: File) => {
    console.log("Uploaded file:", file);
  };
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: "white",
        padding: "20px",
        gap: "20px",
        overflow: "scroll",
      }}
    >
      <ImageUpload onUpload={handleImageUpload} />
      <PersonalInfo />
    </main>
  );
}

export default App;
