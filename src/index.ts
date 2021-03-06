import styled, { css, useTheme, createGlobalStyle } from 'styled-components'

import theme, { BgTypes, ColorsTemplate } from './styles/theme'
import { keyActionClick, keyArrowDown, keyArrowUp, keyEsc } from './events'

import Loading from './components/loading'
import BoxContainer from './components/box-container'
import WecancerProvider from './wecancer-provider'
import Tooltip from './components/tooltip'
import Dropdown from './components/dropdown/panel'
import DropdownIcon from './components/dropdown/icon'

import TimePicker from './components/time-picker'
import DatePicker from './components/date-picker'
import DateTimePicker from './components/datetime-picker'
import RangeDatePicker, {
  RangePickerDate,
} from './components/date-picker/range'

import Button from './components/button'
import ButtonIcon from './components/button/icon'

import Avatar from './components/avatar'
import Icon from './components/icon'
import Pagination from './components/pagination'
import Pill from './components/pill'
import Modal from './components/modal'
import ModalConfirm from './components/modal/confirm'

import Accordion from './components/accordion'
import AccordionItem from './components/accordion/item'

import Card from './components/card'
import CardIcon from './components/card/card-icon'
import CardImage from './components/card/card-image'
import CardValue from './components/card/card-value'
import CardContent from './components/card/card-content'

import Select from './components/form/select'
import Checkbox from './components/form/checkbox'
import Input from './components/form/input/input'
import Textarea from './components/form/textarea'
import InputText from './components/form/input/text'
import InputEmail from './components/form/input/email'
import RadioGroup from './components/form/radio/group'
import InputSearch from './components/form/input/search'
import SelectGroup from './components/form/select-group'
import InputPassword from './components/form/input/password'
import Radio, { RadioItem } from './components/form/radio'

import Stepper from './components/stepper'
import IncrementStepper from './components/increment-stepper'

import Table from './components/table'
import TableRow from './components/table/row'
import TableCell from './components/table/cell'
import TableHeader from './components/table/header'
import TableHeaderCell from './components/table/header-cell'

import Tab from './components/tab/selection/tab'
import Tabs from './components/tab/selection/tabs'
import TabContext from './components/tab/selection'
import TabContent from './components/tab/selection/tab-content'

import useToast from './hooks/toast'
import { SelectOption, SelectOptions } from './components/form/select/types'

export type {
  RadioItem,
  SelectOption,
  SelectOptions,
  ColorsTemplate,
  RangePickerDate,
}

export {
  Accordion,
  AccordionItem,
  Avatar,
  BgTypes,
  BoxContainer,
  Button,
  ButtonIcon,
  Card,
  CardContent,
  CardIcon,
  CardImage,
  CardValue,
  Checkbox,
  TimePicker,
  DatePicker,
  DateTimePicker,
  Dropdown,
  DropdownIcon,
  Icon,
  IncrementStepper,
  Input,
  InputEmail,
  InputPassword,
  InputSearch,
  InputText,
  Loading,
  Modal,
  ModalConfirm,
  Pagination,
  Pill,
  Radio,
  RadioGroup,
  RangeDatePicker,
  Select,
  SelectGroup,
  Stepper,
  Tab,
  TabContent,
  TabContext,
  Table,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tabs,
  Textarea,
  Tooltip,
  WecancerProvider,
  // hooks
  useToast,
  // styled
  createGlobalStyle,
  css,
  styled,
  theme,
  useTheme,
  // helpers
  keyActionClick,
  keyArrowDown,
  keyArrowUp,
  keyEsc,
}
