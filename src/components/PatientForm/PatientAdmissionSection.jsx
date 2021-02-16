import HMTextField from "../inputs/TextField";
import FormSection from "../layout/Section";
import HMDatePicker from "../inputs/DatePicker";

export default function PatientAdmissionSection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
  onAdmissionDateChange: handleAdmissionDateChange
}) {
  return (
    <FormSection title="Admission Info.">

      <HMDatePicker
        value={values.admissionDate}
        onChange={handleAdmissionDateChange}
        onBlur={handleBlur}
        label="Admission Date"
        maxDate={new Date()}
      />

      <HMTextField
        name="admittorName"
        label="Patient admitted by"
        value={values.admittorName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.admittorName)}
        helperText={errors.admittorName}
      />
    </FormSection>
  );
}
