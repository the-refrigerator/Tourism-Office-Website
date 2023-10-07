import { useEffect, useState } from "react";
import "../UI.scss";

function Hotspot({ hotspot }) {
  return (
    <div className="hotspot-container">
      <div className="hotspot-name">{hotspot.name}</div>
    </div>
  );
}

function UI({ planets, state, single, focus }) {
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    function showSelect() {
      setShowSelect(true);
    }

    function hideSelect() {
      setShowSelect(false);
    }

    document.addEventListener("i-show-select", showSelect);
    document.addEventListener("i-hide-select", hideSelect);

    return () => {
      document.removeEventListener("i-show-select", showSelect);
      document.removeEventListener("i-hide-select", hideSelect);
    };
  }, []);

  return (
    <>
      <section className="container">
        <h1 className="logo">ALEPH</h1>

        <form className="bottom-panel">
          <input type="text" className="chat-input" />
          <button
            className="chat-button"
            onClick={(e) => {
              e.preventDefault();
              document.dispatchEvent(new Event("i-single"));
            }}
          >
            Send
          </button>
        </form>

        <div className={state.includes("-library-") ? "visible-library" : "visible-library inactive"}>
          <div className="scroll-buttons">
            <button
              onClick={() => {
                document.dispatchEvent(new Event("i-scroll-left"));
              }}
              className="scroll-button"
            >
              <i className="bx bx-left-arrow-alt"></i>
            </button>
            <button
              onClick={() => {
                document.dispatchEvent(new Event("i-scroll-right"));
              }}
              className="scroll-button"
            >
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>

          <div className="planet-name">{planets[focus].name.toUpperCase()}</div>

          {showSelect && state.includes("-library-") && <div className="select-planet">Click to show more info</div>}
        </div>

        <div className={single >= 0 ? "visible-single" : "visible-single inactive"}>
          <div className="wrapper">
            <div className="title">{planets[focus].name.toUpperCase()}</div>
            <div className="info-tabs-container">
              <div className="info-tab">
                <div className="info-subtitle">Distance</div>
                <p className="info-text">24.4 light years</p>
              </div>
              <div className="info-tab">
                <div className="info-subtitle">Speed</div>
                <p className="info-text">20.5 km/h</p>
              </div>
              <div className="info-tab">
                <div className="info-subtitle">Temperature</div>
                <p className="info-text">-56° celsius</p>
              </div>
            </div>
            <div className="hotspots-tab">
              <div className="info-subtitle">Hotspots</div>
              <div className="hotspots-container">
                <Hotspot hotspot={{ name: "Acid Rains" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UI;
