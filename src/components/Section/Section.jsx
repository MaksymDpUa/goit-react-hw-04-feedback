import css from './Section.module.css' 

export const Section = (props) => {
      console.log(props)
    return <section className={css.section}>
        <h2 className='title'>{props.title}</h2>
        {props.children}
    </section>
}