import { useEffect, useState } from "react";
import "../UI.scss";

function Hotspot({ hotspot, onClick }) {
  return (
    <div onClick={onClick} className="hotspot-container">
      <div className="hotspot-name">{hotspot.name}</div>
    </div>
  );
}

function InfoTab({ name, text }) {
  return (
    <div className="info-tab">
      <div className="info-subtitle">{name}</div>
      <p className="info-text">{text}</p>
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
        <h1 className="logo">
          <img className="logo-img" src="logo.svg" />
        </h1>

        {/*<form className="bottom-panel">
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
          </form>*/}

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
            <div className="wrapper-left"></div>
            <div className="wrapper-right">
              <div className="title">{planets[focus].name.toUpperCase()}</div>
              <div className="planet-info">
                <div className="desc">Discover Saturn, a celestial wonderland beckoning travelers from across the universe. Explore its iconic ring system and 60 enchanting moons. Behold the enduring Great Red Storm, a 350-year-old marvel. Saturn's grandeur and cosmic beauty await your arrival – an interstellar adventure like no other!</div>
                <div className="info-tabs-container">
                  <InfoTab name={"Distance"} text={"215 ly"} />
                  <InfoTab name={"Speed"} text={"215 km/h"} />
                  <InfoTab name={"Temperature"} text={"215 °c"} />
                  <InfoTab name={"Size"} text={"2x Earth"} />
                </div>
                <div className="hotspots-tab">
                  <div className="info-subtitle">Hotspots</div>
                  <div className="hotspots-container">
                    {planets[focus].hotspots.map((hotspot, index) => {
                      return (
                        <Hotspot
                          onClick={() => {
                            document.dispatchEvent(new Event("i-focus-hotspot-" + focus + "-" + index)); // document.addEventListener("i-focus-hotspot-" + focus + "-" + j
                          }}
                          key={"HOTSPOT UI: " + focus + " " + index}
                          hotspot={{ name: "Acid Rains", id: index }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UI;
