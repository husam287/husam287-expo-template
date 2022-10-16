import React from "react";
import { useFormikContext } from "formik";

import ButtonComponent from "../ButtonComponent";

function SubmitButton({ title, style, disabled = false }) {
  const { handleSubmit } = useFormikContext();

  return <ButtonComponent disabled={disabled} title={title} onPress={handleSubmit} style={style} />
}

export default SubmitButton;