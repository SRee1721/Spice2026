import Header from "../components/header";
import Institution from "../components/institution";
import Department from "../components/department";
import Organising from "../components/organising";
import Advisory from "../components/advisory";
import Conference from "../components/conference";
import Theme from "../components/theme";
import Publications from "../components/publications";
import Registration from "../components/registration";
import Author from "../components/author";
import Footer from "../components/footer";
import Contacts from "../components/contacts";

function App() {
  return (
    <div>
      <Header />
      <Conference />
      <Institution />
      <Department />
      <Organising />
      <Advisory />
      <Theme />
      <Publications />
      <Registration />
      <Author />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
