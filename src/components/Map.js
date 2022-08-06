import React from "react"

export default function Map() {
  return (
    <article className="card">
      <header className="card__header">Dove siamo:</header> 
      <div id = "maps-wrapper">
        <iframe id="maps-iframe"
          width = "100%"
          height = "440"
          title="Montaldo"
          src = "https://maps.google.com/maps?width=600&amp;height=440&amp;hl=en&amp;q=Montaldo%20di%20Cerrina%20Monferrato%2C%20via%20Villa%206+(Montaldo%20di%20Cerrina%20Monferrato)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
          frameborder = "0"
          scrolling = "no">
        </iframe>
      </div>
    </article>
  )
}