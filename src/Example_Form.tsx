import React from "react"
import { useTranslation } from "react-i18next"
import { Box } from "rebass"
import { TextInput } from "shared"
import { TValidationTypes } from "shared/validation-text"
interface IAddressFormProps {
  fields: IAddressField[]
  disabledFields?: boolean
}
interface IAddressField {
  field: string
  value: string
  validationText?: string
  validationType?: TValidationTypes
  setValue: (value: string) => void
}
export const AddressForm: React.SFC<IAddressFormProps> = ({ fields, disabledFields }) => {
  const { t } = useTranslation()
  return (
    <Box>
      {fields.map(({ field, value, validationText, validationType, setValue }, idx) => (
        <Box style={{ marginTop: "3rem" }}>
          <TextInput
            placeholderText={t(`shared.addressForm.placeholder.${field}`)}
            onChange={setValue}
            value={value}
            focus={!idx}
            disabled={disabledFields}
            validationText={validationText}
            validationType={validationType}
          />
        </Box>
      ))}
    </Box>
  )
}

import React from "react"
import { Box } from "rebass"
import { theme } from "theme/theme"
import downArrow from "images/downArrow.svg"
interface IProps {
  options: string[]
  newValue: string
  setNewValue: (value: string) => void
  placeholder: string
}
export const DropDown: React.SFC<IProps> = ({ options, newValue, setNewValue, placeholder }) => (
  <Box style={{ marginTop: "3rem" }}>
    <select
      style={{
        backgroundColor: "transparent",
        width: "27rem",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.colors.mediumGrey,
        borderStyle: "solid",
        borderRadius: 0,
        WebkitAppearance: "none",
        appearance: "none",
        MozAppearance: "none",
        color: theme.colors.mediumGrey,
        fontSize: theme.fontSizes[3],
        backgroundImage: `url(${downArrow})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 50%",
        padding: "0.5em",
        paddingLeft: "0em",
        outline: "none",
      }}
      onChange={(e) => setNewValue(e.target.value)}
      value={newValue}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </Box>
)
