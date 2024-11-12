import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
interface InputWithLabelProps {
label: string,
type: string,
placeHolder: string,
}
const InputWithLabel:React.FC<InputWithLabelProps> =({label,type,placeHolder})=> {
  return (
    <div className="grid w-full mb-4 items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input type={type} id={type} placeholder={placeHolder} />
    </div>
  )
}
export default InputWithLabel;