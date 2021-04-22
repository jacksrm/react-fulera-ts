import { HTMLAttributes } from 'react'
import './ErrorBox.css'

interface ErrorBoxProps extends HTMLAttributes<HTMLOrSVGElement> {

}
export default function ErrorBox(props: ErrorBoxProps) {
  return (
    <span {...props} id="ErrorBox">
      { props.children}
    </span>
  )
}