export type TErrorMessageType = {
  errorMessage?: string;
};

export type TFormProps = {
  isFormLoading: boolean;
  handleSubmitForm: () => void;
  formMethods: any;
};
