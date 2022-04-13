import { InputField, InputSelect } from "../components";
import InputCheckbox from "../components/atoms/forms/inputFields/InputCheckbox";
import FormButton from "../components/molecules/FormButton";

const Forms = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-6">
          <div className="form-wrapper">
            <h3 className="mb-3">Input fields</h3>
            <form noValidate>
              <InputField
                type="text"
                id="defaultInput"
                label="Default"
              ></InputField>
              <InputField
                type="text"
                id="defaultHelperText"
                label="With helper text"
                helperText="Some important text"
              ></InputField>
              <InputField
                type="email"
                id="emailInput"
                label="Email"
              ></InputField>
              <InputField
                type="password"
                id="passwordInput"
                label="Password"
              ></InputField>
              <InputField
                type="text"
                id="defaultDisabled"
                label="disabled"
                disabled
              ></InputField>
              <FormButton right variant="primary" type="submit">
                Submit
              </FormButton>
            </form>
          </div>
        </div>
        <div className="col-6">
          <div className="form-wrapper">
            <h3 className="mb-3">Checkboxes</h3>
            <form noValidate>
              <InputCheckbox id="checkbox_A" label="Checkbox"></InputCheckbox>
              <InputCheckbox
                id="checkbox_B"
                label="Checkbox checked"
                checked
              ></InputCheckbox>
              <InputCheckbox
                id="checkbox_C"
                label="Checkbox disabled"
                disabled
              ></InputCheckbox>
              <InputCheckbox
                id="checkbox_D"
                label="Checkbox required"
                required
              ></InputCheckbox>
              <InputCheckbox
                id="checkbox_E"
                label="Checkbox disabled checked"
                disabled
                checked
              ></InputCheckbox>
              <FormButton right variant="primary" type="submit">
                Submit
              </FormButton>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-wrapper">
            <h3 className="mb-3">Invalid states</h3>
            <form noValidate>
              <InputCheckbox
                id="checkbox_G"
                label="Invalid checkbox"
                required
                errorMessage="Required"
              ></InputCheckbox>
              <InputField
                type="text"
                id="defaultInvalid"
                label="invalid"
                errorMessage="Sample Error Message"
                required
              ></InputField>
              <InputField
                type="text"
                id="defaultInvalid2"
                label="valid"
              ></InputField>
              <InputCheckbox
                id="checkbox_H"
                label="Invalid checkbox"
                required
                errorMessage="Required"
              ></InputCheckbox>
              <InputCheckbox
                id="checkbox_I"
                label="Valid checkbox"
              ></InputCheckbox>
              <InputField
                type="text"
                id="defaultInvalid3"
                label="valid"
                helperText="allright"
              ></InputField>

              <FormButton right variant="primary" type="submit">
                Submit
              </FormButton>
            </form>
          </div>
        </div>
        <div className="col-6">
          <div className="form-wrapper">
            <h3 className="mb-3">Select</h3>
            <form noValidate>
              <InputSelect
                id="select1"
                label="Select"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                  { value: "option4", label: "Option 4" },
                ]}
              ></InputSelect>
              <InputSelect
                id="select2"
                label="Select"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                  { value: "option4", label: "Option 4" },
                ]}
                disabled
              ></InputSelect>
              <InputSelect
                id="select3"
                label="Select"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                  { value: "option4", label: "Option 4" },
                ]}
                required
                errorMessage="Bitte auswählen"
              ></InputSelect>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
