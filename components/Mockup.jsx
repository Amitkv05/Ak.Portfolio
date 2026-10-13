export default function Mockup({ label, variant = 0, phone = false }) {
  if (phone) {
    return (
      <div className={`phone-mock mock-v${variant % 6}`}>
        <div className="phone-notch" />
        <div className="phone-ui">
          <span className="tiny-label">{label}</span>
          <div className="phone-card large" />
          <div className="phone-row"><i /><i /></div>
          <div className="phone-card" />
          <div className="phone-card short" />
        </div>
      </div>
    );
  }

  return (
    <div className={`browser-mock mock-v${variant % 6}`}>
      <div className="browser-top"><i /><i /><i /><span>{label}</span></div>
      <div className="browser-body">
        <aside>
          <b>AK</b>
          <i /><i /><i /><i />
        </aside>
        <main>
          <div className="ui-kicker">{label}</div>
          <div className="ui-title" />
          <div className="ui-grid">
            <div className="ui-panel tall" />
            <div className="ui-panel" />
            <div className="ui-panel" />
          </div>
        </main>
      </div>
    </div>
  );
}
