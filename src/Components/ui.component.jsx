import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
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

function Chat() {
  const [openChat, setOpenChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ value: "Hello! My name's Rocket, a space tourist guide. I can help you find your perfect destination! Ask me anything!", sender: "bot" }]);
  const [isPending, setIsPending] = useState(false);

  const inputRef = useRef();

  const messageList = useRef();

  async function sendMessage(message) {
    if (isPending) return;

    setInput("");

    setMessages([...messages, { value: "USER SENT: " + message, sender: "user" }, { value: "Thinking...", sender: "bot" }]);
    setIsPending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsPending(false);

    setMessages((currentMessages) => {
      const newMessages = [...currentMessages];
      newMessages[newMessages.length - 1] = { value: "BOT RESPONSE: " + message + " LOL", sender: "bot" };
      return newMessages;
    });
  }

  useEffect(() => {
    if (input.length > 0) {
      setOpenChat(true);
    }
  }, [input]);

  useEffect(() => {
    if (isPending) inputRef.current.setAttribute("readonly", true);
    else inputRef.current.removeAttribute("readonly");
  }, [isPending]);

  useEffect(() => {
    if (messages.length > 1) setOpenChat(true);
  }, [messages]);

  useEffect(() => {
    const domNode = messageList.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  }, [openChat, messages]);

  return (
    <div className="chat-container">
      <div className={openChat && messages.length > 0 ? "show-full-chat" : "show-full-chat not-really"}>
        <div className="x-button">
          <i
            onClick={() => {
              setOpenChat(false);
            }}
            className="bx bx-x"
          ></i>
        </div>
        <div ref={messageList} className="chat-full">
          <div className="chat-panel">
            {messages.map((message, index) => {
              return (
                <div key={"MESSAGE: " + index} className={message.sender != "user" ? "chat-message" : "chat-message user"}>
                  {message.sender != "user" && (
                    <div className="chat-message-profile">
                      <img src={"robot.png"} />
                    </div>
                  )}
                  <div className="chat-message-text">{message.value}</div>
                  {message.sender == "user" && (
                    <div className="chat-message-profile">
                      <img src={"user.png"} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <form
        className="chat-form"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Rocket opened Mars for you!");
          if (input.length > 0) {
            sendMessage(input);
            inputRef.current.value = "";
          }
        }}
      >
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onFocus={() => {
            setOpenChat(true);
          }}
          type="text"
          defaultValue={input}
          ref={inputRef}
          className="chat-input"
          placeholder="Ask Rocket here..."
        />
        <button className="chat-send">
          SEND
          <img src="icons/right-arrow.svg" />
        </button>
      </form>
    </div>
  );
}

function UI({ selectedHotspot, setSelectedHotspot, planets, state, single, focus }) {
  const [showSelect, setShowSelect] = useState(false);

  /*useEffect(() => {
    function showSelect() {
      setShowSelect(true);
    }

    function hideSelect() {
      setShowSelect(false);
    }

    function setSelectedHotspot(i) {
      setSelectedHotspot(planets[focus].hotspots[i]);
    }

    document.addEventListener("i-show-select", showSelect);
    document.addEventListener("i-hide-select", hideSelect);
    for (var i = 0; i < planets[focus].hotspots.length; i++) {
      const j = i;
      document.addEventListener("i-focus-hotspot-" + focus + "-" + j, () => {
        setSelectedHotspot(j);
      });
    }

    return () => {
      document.removeEventListener("i-show-select", showSelect);
      document.removeEventListener("i-hide-select", hideSelect);
      for (var i = 0; i < planets[focus].hotspots.length; i++) {
        const j = i;
        document.removeEventListener("i-focus-hotspot-" + focus + "-" + j, () => {
          setSelectedHotspot(j);
        });
      }
    };
  }, []);*/

  return (
    <>
      <Toaster position="top-left" richColors />
      <section className="container">
        <h1 className="logo">
          <img className="logo-img" src="logo.svg" />
        </h1>

        <div className={state.includes("-library-") ? "visible-library" : "visible-library inactive"}>
          <div className="scroll-buttons">
            <button
              onClick={() => {
                document.dispatchEvent(new Event("i-scroll-left"));
              }}
              className="scroll-button"
            >
              {/*<i className="bx bx-left-arrow-alt"></i>*/}
              <img src="icons/left-arrow.svg" />
            </button>
            <button
              onClick={() => {
                document.dispatchEvent(new Event("i-scroll-right"));
              }}
              className="scroll-button"
            >
              {/*<i className="bx bx-right-arrow-alt"></i>*/}
              <img src="icons/right-arrow.svg" />
            </button>
          </div>

          <div className="planet-name">{planets[focus].name.toUpperCase()}</div>

          {showSelect && state.includes("-library-") && <div className="select-planet">Click to show more info</div>}
        </div>

        <div className={single >= 0 ? "visible-single" : "visible-single inactive"}>
          <div className="wrapper">
            <div className="wrapper-left"></div>
            <div className="wrapper-right">
              <div className="title">
                {selectedHotspot >= 0 ? planets[focus].hotspots[selectedHotspot].name : planets[focus].name.toUpperCase()}
                <button
                  className="back-button"
                  onClick={() => {
                    if (focus >= 0) {
                      if (selectedHotspot >= 0) {
                        setSelectedHotspot(-1);
                      } else {
                        document.dispatchEvent(new Event("i-go-to-library"));
                      }
                    }
                  }}
                >
                  <img src="icons/left-arrow.svg" />
                  Back
                </button>
              </div>
              <div className="planet-info">
                <div className="desc">{selectedHotspot >= 0 ? planets[focus].hotspots[selectedHotspot].desc : "Discover Saturn, a celestial wonderland beckoning travelers from across the universe. Explore its iconic ring system and 60 enchanting moons. Behold the enduring Great Red Storm, a 350-year-old marvel. Saturn's grandeur and cosmic beauty await your arrival – an interstellar adventure like no other!"}</div>
                {selectedHotspot < 0 && (
                  <>
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
                                //document.dispatchEvent(new Event("i-focus-hotspot-" + focus + "-" + index)); // document.addEventListener("i-focus-hotspot-" + focus + "-" + j
                                setSelectedHotspot(index);
                              }}
                              key={"HOTSPOT UI: " + focus + " " + index}
                              hotspot={{ name: "Acid Rains", id: index }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <Chat openChat={false} />
      </section>
    </>
  );
}

export default UI;
