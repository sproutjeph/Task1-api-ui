import AdditionalQuestion from "./components/AdditionalQuestion";
import PersonalInfo from "./components/PersonalInfo";
import ImageUpload from "./components/ImageUpload";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const handleImageUpload = (file: File) => {
    console.log("Uploaded file:", file);
  };
  return (
    <main className="main">
      <ImageUpload onUpload={handleImageUpload} />
      <PersonalInfo />
      <Profile />
      <AdditionalQuestion />
    </main>
  );
}

export default App;
