export default function Model({ id, header, body, footer,onClose }) {
  return (
    <div id={id || "model"} className="model">
      <div className="model-content">
        <div className="header">
            <span onClick={onClose} className="close-model-icon">&times;</span>
          <h2>{header ? header : "Coustomized Header"}</h2>
        </div>
        <div className="body">
          {body ? body : <div><p>Coustomized Body</p></div>}
        </div>
        <div className="footer">
          <h2>{footer ? footer : "Coustomized Footer"}</h2>
        </div>
      </div>
    </div>
  );
}
