import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";


export function CloseButton () {

return(
  <Popover.Button className="top-5 right-5 absolute text-light-text_secondary dark:text-dark-text_secondary hover:text-light-text_primary dark:hover:text-dark-text_primary" title="Fechar formulário de feedback">
    <X weight="bold" className="w-4 h-4 " />
  </Popover.Button>

)
}