import React, { useState } from "react"
import { Input, CustomInput, Form, FormGroup, Label, Button } from "reactstrap"
import SearchParams from "../types/searchParams"
import IComponentProps from "../types/componentProps"

import "./searchForm.scss"

interface ISearchFormProps extends IComponentProps {
  onSubmit: (params?: SearchParams) => void
}

const SearchForm: React.FC<ISearchFormProps> = ({
  onSubmit,
  className,
  style,
}) => {
  const [formState, setFormState] = useState<SearchParams>(new SearchParams())

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSubmit(formState)
  }

  return (
    <Form
      className={`search-form ${className}`}
      style={{ ...style }}
      onSubmit={handleSubmit}
    >
      <FormGroup className="search-form__group pr-2">
        <Label className="mb-0" for="zip">
          <small>Zip Code</small>
        </Label>
        <Input
          name="zip"
          id="zip"
          placeholder="72712"
          maxLength={5}
          required
          pattern="\d{5}"
          value={formState?.zipCode}
          onChange={(e) =>
            setFormState({
              zipCode: e.target.value,
              distance: formState?.distance,
            })
          }
        />
      </FormGroup>

      <FormGroup className="search-form__group pl-2 pr-sm-3">
        <Label className="mb-0" for="distance">
          <small>Distance</small>
        </Label>
        <CustomInput
          type="select"
          id="distance"
          name="distance"
          value={formState?.distance}
          onChange={(e) =>
            setFormState({
              zipCode: formState?.zipCode,
              distance: e.target.value,
            })
          }
        >
          <option value="">10 miles</option>
          <option value="25">25 miles</option>
          <option value="50">50 miles</option>
        </CustomInput>
      </FormGroup>

      <Button className="search-form__btn">
        Search
        <svg
          className="ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" style={{ fill: "none" }} />
        </svg>
      </Button>
    </Form>
  )
}

export default SearchForm
