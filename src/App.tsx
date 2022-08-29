import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://qmod.quotemedia.com/js/qmodLoader.js";
    script.setAttribute("data-qmod-wmid", "104537");
    script.type = "application/javascript";
    script.id = "qmod";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <div
        data-qmod-tool="companyprofile"
        data-qmod-params='{"symbol":"GOOGL","lang":"en","collapseDescription":true,"description":"full","descCharLimit":500,"showLogo":false}'
        className="qtool"
      >
        <script type="text/template">
          <div className="qmod-ui-tool qmod-corpprofile">
            <div className="qmod-desc qmod-comp-desc">
              {"{ profileData.description }"}
            </div>
            <div className="pure-g">
              <div className="pure-u-1-3 pure-u-sm-1-4">
                <div className="qmod-label">
                  {"{tplLang.address | toLang tLang}"}
                </div>
              </div>
              <div className="pure-u-2-3 pure-u-sm-3-4">
                <div className="qmod-desc">
                  {"{profileData.profile.info.address | asAddress}"}
                </div>
              </div>
            </div>
          </div>
        </script>
      </div>
    </div>
  );
}

export default App;
