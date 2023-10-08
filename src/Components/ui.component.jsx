import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import newRequest from "../utils/req.utils";
import axios from "axios";
import "../UI.scss";

axios.defaults.timeout = 200000;

function Hotspot({ hotspot, onClick }) {
  return (
    <div onClick={onClick} className="hotspot-container">
      <div className="hotspot-name">{hotspot.name}</div>
      {/*<div className="info-tabs-container">
        <InfoTab name={"Distance"} text={"215 ly"} />
        <InfoTab name={"Speed"} text={"215 km/h"} />
        <InfoTab name={"Temperature"} text={"215 °c"} />
        <InfoTab name={"Size"} text={"2x Earth"} />
  </div>*/}
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

function Chat({ setFocus, setSingle, planets, setHotspot }) {
  const [openChat, setOpenChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ value: "Hello there, space enthusiast! I'm Rocket, your friendly planetary tourism guide. Ask me anything about our stellar destinations, and I'll give you all the cosmic details you need! Question away, and let's explore the wonders of our celestial neighbors together! 🚀✨", sender: "bot", type: "text" }]);
  const [isPending, setIsPending] = useState(false);
  const [convoId, setConvoId] = useState(-1);

  const inputRef = useRef();

  const messageList = useRef();

  async function sendMessage(message) {
    if (isPending) return;

    setInput("");

    setMessages([...messages, { value: message, sender: "user", type: "text" }, { value: "Thinking...", sender: "bot", type: "text" }]);

    setIsPending(true);

    try {
      var res;
      if (convoId > 0) {
        res = await axios.post("https://nasa-tourism-api.onrender.com/api/ask/", {
          message: message,
          id: convoId
        });
      } else {
        res = await axios.post("https://nasa-tourism-api.onrender.com/api/ask/", {
          message: message
        });
      }
      setIsPending(false);

      console.log(res);

      setConvoId(res.data.id);
      setMessages((currentMessages) => {
        const newMessages = [...currentMessages];
        newMessages[newMessages.length - 1] = { value: res.data.content[res.data.content.length - 1].content, sender: "bot", type: "text" };
        if (res.data.planet_id && res.data.planet_id >= 1) {
          console.log("ID: " + res.data.planet_id);
          newMessages.push({ id: res.data.planet_id - 1, type: "link", sender: "bot" });
        }

        return newMessages;
      });
    } catch (error) {
      toast.error(error.message);
      setIsPending(false);
    }
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
                <>
                  {message.type == "text" && (
                    <>
                      <div key={"MESSAGE: " + index} className={message.sender != "user" ? "chat-message" : "chat-message user"}>
                        {message.sender != "user" && (
                          <div className="chat-message-profile">
                            <img src={"icons/robot.png"} />
                          </div>
                        )}
                        <div className="chat-message-text">{message.value}</div>
                        {message.sender == "user" && (
                          <div className="chat-message-profile">
                            <img src={"icons/user.png"} />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  {message.type == "link" && (
                    <>
                      <div key={"MESSAGE: " + index} className={message.sender != "user" ? "chat-link" : "chat-link user"}>
                        {message.sender != "user" && (
                          <div className="chat-message-profile">
                            <img src={"icons/robot.png"} />
                          </div>
                        )}
                        <div className="chat-link-container">
                          <button
                            onClick={() => {
                              const a = async () => {
                                setOpenChat(false);
                                setFocus(message.id);
                                setSingle(message.id);

                                await new Promise((resolve) => setTimeout(resolve, 1500));
                                setHotspot(-1);
                              };

                              a();
                            }}
                            className="chat-link-planet"
                          >
                            Go to {planets[message.id].name}
                          </button>
                          <div className="chat-link-hotspots-container">
                            {planets[message.id].hotspots.map((hot, index) => {
                              return (
                                <button
                                  key={"HOTSPOT CHAT: " + message.id + "__" + index}
                                  className="chat-link-hotspot"
                                  onClick={() => {
                                    const a = async () => {
                                      setOpenChat(false);
                                      setFocus(message.id);
                                      setSingle(message.id);

                                      await new Promise((resolve) => setTimeout(resolve, 1500));
                                      setHotspot(index);
                                    };

                                    a();
                                  }}
                                >
                                  {hot.name}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        {message.sender == "user" && (
                          <div className="chat-message-profile">
                            <img src={"user.png"} />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </>
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
          <img src="icons/send-button.png" />
        </button>
      </form>
    </div>
  );
}

function UI({ setHotspot, hotspotPositions, selectedHotspot, setSelectedHotspot, planets, state, single, focus, setFocus, setSingle }) {
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
      {planets.length > 0 && (
        <section className="container">
          <h1 onClick={() => {}} className="logo">
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
                  <div className="desc">{selectedHotspot >= 0 ? planets[focus].hotspots[selectedHotspot].description : planets[focus].description}</div>
                  {selectedHotspot < 0 && (
                    <>
                      <div className="info-tabs-container">
                        <InfoTab name={"Distance"} text={planets[focus].distance_to_closest_star} />
                        <InfoTab name={"Speed"} text={planets[focus].speed} />
                        <InfoTab name={"Temperature"} text={planets[focus].average_surface_temperature} />
                        <InfoTab name={"Size"} text={planets[focus].size} />
                      </div>
                      <div className="hotspots-tab">
                        <div className="info-subtitle">Hotspots</div>
                        <div className="hotspots-container">
                          {planets[focus].hotspots.map((hotspot, index) => {
                            return (
                              <Hotspot
                                onClick={() => {
                                  setSelectedHotspot(index);
                                }}
                                key={"HOTSPOT UI: " + focus + " " + index}
                                hotspot={hotspot}
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

          <Chat setFocus={setFocus} setSingle={setSingle} planets={planets} setHotspot={setHotspot} />
        </section>
      )}
    </>
  );
}

export default UI;
