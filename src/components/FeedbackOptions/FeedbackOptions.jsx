import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    function handelClick(e) {
       const label = e.target.name;        
        onLeaveFeedback(label)
    };
    
    const OptionBtns = options.map((option) => {
        return <button key={option} type="button" className={css.button} name={option} onClick={handelClick}>{option}</button>
    })
    
    
    return <div className={css.buttonThumb}>{OptionBtns}</div>
}