import React from "react"

export default function Newsletter() {

  function submitNewsletter() {
    window.open('https://tinyletter.com/amicidimontaldo', 'popupwindow', 'scrollbars=yes,width=800,height=600');
    return true;
  }

  return (
    <article className="card">
      <header className="card__header">
        Newsletter:
      </header>
      <form action="https://tinyletter.com/amicidimontaldo" method="post" className="form__newsletter" target="popupwindow" onSubmit={submitNewsletter}>
        <p className="form__label">
           <label>Inserisci qui sotto la tua email per rimanere informato su tutti gli eventi organizzati nel nostro piccolo paese!</label>
           <input className="form__input" type="text" name="email" placeholder="Inserisci qui la tua email" />
        </p>
        <input type="hidden" value="1" name="embed"/>
        <input id="btn-submit" type="submit" className="custom-btn" value="Iscriviti" />
      </form>
    </article>
  )
}