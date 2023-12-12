import "./App.css";
import FormLayout from "./components/FormLayout";
import GenrealForm from "./components/GenrealForm";
import Input from "./components/Input";
import OrganizationDetailForm from "./components/OrganizationDetailForm";
import PurposeForm from "./components/PurposeForm";

function App() {
  return (
    <>
      <div className="container m-auto p-2 lg:w-[1124px]  flex flex-col gap-16">
        <FormLayout FormComponent={GenrealForm} />
        <FormLayout FormComponent={OrganizationDetailForm} />
        <FormLayout FormComponent={PurposeForm} />
        <Input />
      </div>
    </>
  );
}

export default App;
