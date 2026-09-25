const Floral = ({ side = "right", soft = false }) => (
  <svg className={`floral floral-${side} ${soft ? "floral-soft" : ""}`} viewBox="0 0 420 520" aria-hidden="true">
    <defs>
      <linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#78906f"/><stop offset="1" stopColor="#48634c"/></linearGradient>
      <radialGradient id="petalFill" cx="45%" cy="38%" r="70%"><stop offset="0" stopColor="#f4d3c7"/><stop offset=".68" stopColor="#cf9c8d"/><stop offset="1" stopColor="#a87369"/></radialGradient>
      <radialGradient id="lilacFill" cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="#c6a3ce"/><stop offset="1" stopColor="#7e5c8b"/></radialGradient>
    </defs>
    <g className="vine">
      <path className="main-stem" d="M54 506C136 419 96 329 183 248C240 194 278 129 291 25" />
      <path d="M130 405c-49-11-70-46-65-82 41 2 75 26 86 62" />
      <path d="M159 330c33-41 76-45 105-25-18 41-52 61-93 54" />
      <path d="M210 241c-38-25-44-62-29-91 38 13 60 43 56 79" />
      <path d="M260 151c34-26 70-21 92 1-24 32-56 43-88 28" />
      <path className="leaf-vein" d="M83 337c28 22 47 35 68 48M183 322c23 8 44 1 68-12M193 170c14 24 25 41 43 58M278 158c20 7 42 5 67-2"/>
    </g>
    <g className="lilacs">
      {[ [109,298,15],[89,280,13],[118,270,12],[97,252,10],[78,260,9],[124,291,9],[274,133,13],[294,116,11],[270,105,10],[305,93,9],[289,140,9],[317,111,8] ].map(([cx,cy,r],i)=><circle key={i} cx={cx} cy={cy} r={r}/>)}
    </g>
    <g className="peony">
      <ellipse cx="188" cy="229" rx="58" ry="39" transform="rotate(-15 188 229)"/>
      <ellipse cx="181" cy="205" rx="44" ry="57" transform="rotate(18 181 205)"/>
      <ellipse cx="219" cy="207" rx="43" ry="54" transform="rotate(47 219 207)"/>
      <ellipse cx="153" cy="214" rx="39" ry="51" transform="rotate(-42 153 214)"/>
      <ellipse cx="204" cy="190" rx="31" ry="42" transform="rotate(10 204 190)"/>
      <ellipse cx="163" cy="194" rx="29" ry="40" transform="rotate(-18 163 194)"/>
      <ellipse cx="197" cy="226" rx="34" ry="39"/>
      <ellipse cx="172" cy="226" rx="28" ry="34"/>
      <ellipse cx="188" cy="213" rx="22" ry="28"/>
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
