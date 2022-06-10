import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";


interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot : string | null) => void;
}

export function ScreenshotButton ({
  screenshot, 
  onScreenshotTook
} : ScreenshotButtonProps) {

  const[isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot () {

    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return(
      <button
      type="button"
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end 
      text-light-text_secondary
      hover:text-light-text_primary
      dark:text-dark-text_secondary dark:hover:text-dark-text_primary transition-colors"
      onClick={() => onScreenshotTook(null)}
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition:`right bottom`,
        backgroundSize: 180,
      }}
      
      >
      <Trash weight="fill" />
      </button>
    )
  }

  return( 
    <button 
    type="button"
    onClick={handleTakeScreenshot}
    className="p-2 dark:bg-dark-surface_secondary bg-light-surface_secondary rounded-md border-transparent hover:bg-light-surface_secondary_hover dark:hover:bg-dark-surface_secondary_hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-light-surface_primary dark:focus:ring-offset-dark-surface_primary focus:ring-brand-500"
    title="Capturar tela"
    >

      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 dark:text-dark-text_primary text-light-text_primary " />
}
    </button>

  )
}