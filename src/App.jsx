import MultiStepForm from "./components/forms/trigger/MultistepForm";
import SimpleForm from "./components/forms/trigger/SimpleForm";
import SubscriptionForm from "./components/forms/trigger/SubscriptionForm";





function App() {
  return (
    <>
      <h1 className=" text-center text-3xl font-bold ">
        React Hook Form Crash Course
      </h1>
      {/* <LoginForm /> */}

      {/* <RegistrationForm /> */}
      {/* <Easy /> */}
      {/* <SimpleForm /> */}
      {/* <RegistrationForm /> */}
      {/* <OrderForm /> */}
      {/* <AdvancedForm /> */}
      {/* <Adv2 /> */}
      <SimpleForm />
      <SubscriptionForm />
      <MultiStepForm />
    </>
  );
}

export default App;
