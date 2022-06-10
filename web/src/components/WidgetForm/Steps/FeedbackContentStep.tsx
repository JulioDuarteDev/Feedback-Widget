import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from './../ScreenshotButton';


interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep ({ 
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
  } : FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null> (null);
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    async function handleSubmitFeedback (event: FormEvent) {
      event.preventDefault();

      setIsSendingFeedback(true);

      await api.post('/feedbacks',{
        type: feedbackType,
        comment,
        screenshot
      })

      setIsSendingFeedback(true);
      onFeedbackSent();
    }

  return (
    <>
      <header>

        <button 
        type="button" 
        className="top-5 left-5 absolute text-light-text_secondary dark:text-dark-text_secondary hover:text-light-text_primary dark:hover:text-dark-text_primary"
        onClick={onFeedbackRestartRequested}
        >

          <ArrowLeft weight="bold" className="w-4 h-4"/>

        </button>

        <span className="text-xl leading-6 flex items-center gap-2 dark:text-dark-text_primary text-light-text_primary" > 
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.source} className="w-6 h-6"/>
          {feedbackTypeInfo.title} 
        </span>
        <CloseButton />

      </header>


      <form onSubmit={handleSubmitFeedback} className="my-4 w-full"> 
        <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm dark:placeholder-dark-text_secondary placeholder-light-text_secondary text-light-text_primary dark:text-dark-text_primary border-light-s dark:border-dark-stroke border-light-stroke bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outlined resize-none dark:scrollbar-thumb-dark-surface_secondary_hover scrollbar-thumb-light-surface_secondary_hover scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontecendo..."
        onChange={event => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
          screenshot = {screenshot}
          onScreenshotTook = {setScreenshot}
          />

          <button type="submit" 
          disabled={comment.length === 0 || isSendingFeedback }
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface_primary dark:focus:ring-offset-dark-surface_primary focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 text-brand-text"
          > 
            
            {isSendingFeedback ? <Loading /> : 'Enviar feedback' }

          </button>
        </footer>
      </form> 
    </>
  )
}