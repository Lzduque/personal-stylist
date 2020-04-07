import * as React from "react";
import { IErrors, IFormContext, FormContext } from "./Form";
import { getElementError } from "@testing-library/react";

/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string;
  args: any;
}

export interface IFieldProps {
  //  Unique field name
  id: string;

  // The label text fo the field
  label?: string;

  // The editor for the field
  editor?: Editor;

  // The dropdownitems for the field
  options?: string[];

  // The field value
  value?: any;

  // The field validator function and argument
  validation?: IValidation;
}

export const Field: React.SFC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value
}) => {
  /**
   * Gets the inline styles for editor
   * @param {IErrors} errors - All the errors from the form
   * @returns {any} - The style object
   */
  const getEditorStyle = (errors: IErrors): any =>
    getError(errors) ? { borderColor: "red" } : {};

  /**
   * Gets the validation error for the field
   * @param {IErrors} errors - All the errors from the form
   * @returns {string[]} - The validation error
   */
  const getError = (errors: IErrors): string => (errors ? errors[id] : "");

  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div className="form-group">
          {label && <label htmlFor={id}>{label}</label>}

          {editor!.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              style={getEditorStyle(context.errors)}
              onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context.validate(id)}
              className="form-control"
            />
          )}

          {editor!.toLowerCase() === "multilinetextbox" && (
            <textarea
              id={id}
              value={value}
              style={getEditorStyle(context.errors)}
              onChange={
                (e: React.FormEvent<HTMLTextAreaElement>) =>
                  console.log(e) /* TODO: push change to form values */
              }
              onBlur={() => context.validate(id)}
              className="form-control"
            />
          )}

          {editor!.toLowerCase() === "dropdown" && (
            <select
              id={id}
              name={id}
              value={value}
              style={getEditorStyle(context.errors)}
              onChange={
                (e: React.FormEvent<HTMLSelectElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context.validate(id)}
              className="form-control"
            >
              {options &&
                options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          )}

          {getError(context.errors) && (
            <div style={{color: "red", fontSize: "80%" }}>
              <p>{getError(context.errors)}</p>
            </div>
          )}
        </div>
      )}
    </FormContext.Consumer>
  );
};
Field.defaultProps = {
  editor: "textbox"
};
