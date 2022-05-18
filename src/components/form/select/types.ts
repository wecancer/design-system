export type SelectOption =
  | null
  | undefined
  | {
      value: string
      label: string
    }

export type SelectOptions = SelectOption[]
