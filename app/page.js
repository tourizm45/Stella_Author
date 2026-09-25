const Floral = ({ side = "right", soft = false }) => (
  <svg className={`floral floral-${side} ${soft ? "floral-soft" : ""}`} viewBox="0 0 420 520" aria-hidden="true">
    <g className="vine">
      <path d="M54 506C136 419 96 329 183 248C240 194 278 129 291 25" />
      <path d="M130 405c-49-11-70-46-65-82 41 2 75 26 86 62" />
      <path d="M159 330c33-41 76-45 105-25-18 41-52 61-93 54" />
      <path d="M210 241c-38-25-44-62-29-91 38 13 60 43 56 79" />
      <path d="M260 151c34-26 70-21 92 1-24 32-56 43-88 28" />
    </g>
    <g className="lilacs">
      <circle cx="109" cy="298" r="17"/><circle cx="89" cy="280" r="15"/><circle cx="118" cy="270" r="14"/><circle cx="97" cy="252" r="12"/>
      <circle cx="274" cy="133" r="15"/><circle cx="294" cy="116" r="13"/><circle cx="270" cy="105" r="12"/><circle cx="305" cy="93" r="11"/>
    </g>
    <g className="peony">
      <ellipse cx="188" cy="229" rx="58" ry="39" transform="rotate(-15 188 229)"/>
      <ellipse cx="181" cy="205" rx="44" ry="57" transform="rotate(18 181 205)"/>
      <ellipse cx="219" cy="207" rx="43" ry="54" transform="rotate(47 219 207)"/>
      <ellipse cx="153" cy="214" rx="39" ry="51" transform="rotate(-42 153 214)"/>
      <ellipse cx="197" cy="226" rx="34" ry="39"/>
      <ellipse cx="172" cy="226" rx="28" ry="34"/>
    </g>
  </svg>
);

const Scribble = ({ children }) => <span className="scribble">{children}</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">Rose Recchia</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#inspiration">Inspiration</a>
          <a href="#working">Working On</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="wash wash-yellow" />
        <div className="wash wash-lilac" />
        <Floral side="right" />
        <div className="hero-copy">
          <Scribble>from Rose’s notebook</Scribble>
          <h1>Stories about<br/><em>love, laughter,</em><br/>and the messy middle.</h1>
          <p>Rose Recchia writes contemporary romantic stories with heart, humor, and people who rarely have everything figured out.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#working">What I’m working on</a>
            <a className="text-link" href="#about">A little about Rose <span>↘</span></a>
          </div>
        </div>
        <div className="hero-note">
          <span>currently</span>
          <strong>writing something<br/>funny & romantic</strong>
        </div>
      </section>

      <div className="botanical-break" aria-hidden="true">
        <span>❦</span><i/><span>❦</span>
      </div>

      <section className="about section" id="about">
        <div className="portrait-wrap">
          <div className="portrait-arch">
            <div className="portrait-placeholder">
              <span>R</span>
              <small>author photo<br/>coming soon</small>
            </div>
          </div>
          <div className="mini-flower">✿</div>
          <Scribble>hello, there</Scribble>
        </div>
        <div className="about-copy">
          <p className="eyebrow">ABOUT ROSE</p>
          <h2>I like stories that feel<br/><em>a little lived in.</em></h2>
          <p className="lead">The best love stories aren’t perfect. The people in them aren’t either.</p>
          <p>Rose writes about unexpected chemistry, questionable timing, complicated feelings, and the tiny absurdities that make real life funny. This is where she shares a little of what she’s writing, noticing, and collecting along the way.</p>
          <a className="text-link" href="#inspiration">See what inspires the stories <span>→</span></a>
        </div>
      </section>

      <section className="inspiration section" id="inspiration">
        <div className="inspiration-heading">
          <Scribble>things worth noticing</Scribble>
          <p className="eyebrow">INSPIRATION</p>
          <h2>Every story starts<br/>somewhere.</h2>
          <p>Sometimes it’s a place. Sometimes it’s a conversation. Sometimes it’s a flower, a badly timed joke, or something too strange not to write down.</p>
        </div>
        <div className="inspiration-cards">
          <article className="mood-card card-yellow">
            <span className="card-number">01</span>
            <div className="paint-mark">✿</div>
            <h3>Places</h3>
            <p>The corners of the world that linger after you leave them.</p>
          </article>
          <article className="mood-card card-lilac">
            <span className="card-number">02</span>
            <div className="quote-mark">“</div>
            <h3>Conversations</h3>
            <p>The things people say—and the things they almost say.</p>
          </article>
          <article className="mood-card card-sage">
            <span className="card-number">03</span>
            <div className="leaf-mark">❧</div>
            <h3>Small obsessions</h3>
            <p>Flowers, details, rituals, books, and whatever won’t leave the imagination alone.</p>
          </article>
        </div>
      </section>

      <section className="working section" id="working">
        <Floral side="left" soft />
        <div className="manuscript-wrap">
          <div className="manuscript-card">
            <span className="tape tape-one"/>
            <span className="tape tape-two"/>
            <small>WORK IN PROGRESS</small>
            <h3>A new<br/>romantic<br/><em>comedy.</em></h3>
            <div className="manuscript-flower">❀</div>
            <p>title pending · story very much happening</p>
          </div>
        </div>
        <div className="working-copy">
          <Scribble>currently dreaming up</Scribble>
          <p className="eyebrow">WHAT I’M WORKING ON</p>
          <h2>Something funny.<br/><em>Something romantic.</em></h2>
          <p className="lead">A new romantic comedy is taking shape.</p>
          <p>No cover yet. No publication date to announce. Just a story in progress—and the enjoyable chaos of figuring out exactly what it wants to become.</p>
          <div className="status-pill"><span/> CURRENTLY WRITING</div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-flower">✿</div>
        <Scribble>say hello</Scribble>
        <p className="eyebrow">CONTACT</p>
        <h2>Stay in Rose’s<br/><em>little corner of the world.</em></h2>
        <p>For now, this is a quiet place for stories in progress. Contact details and future updates will live here soon.</p>
        <a className="button button-primary" href="#top">Back to the beginning ↑</a>
      </section>

      <footer>
        <a className="wordmark" href="#top">Rose Recchia</a>
        <span>Romance · Humor · Heart</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
