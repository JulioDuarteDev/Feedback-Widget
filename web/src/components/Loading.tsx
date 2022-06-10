import { CircleNotch } from "phosphor-react";

export function Loading () {
  return(
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden" >
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin dark:text-dark-text_primary text-light-text_primary" />
    </div>

)
}