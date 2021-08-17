(function (xhr) {
  const XHR = XMLHttpRequest.prototype;

  const open = XHR.open;
  const send = XHR.send;
  const setRequestHeader = XHR.setRequestHeader;

  XHR.open = function (method, url) {
    this._method = method;
    this._url = url;
    this._requestHeaders = {};
    this._startTime = new Date().toISOString();

    return open.apply(this, arguments);
  };

  XHR.setRequestHeader = function (header, value) {
    this._requestHeaders[header] = value;
    return setRequestHeader.apply(this, arguments);
  };

  XHR.send = function (postData) {
    if (
      this._url.includes(
        "firestore.googleapis.com/google.firestore.v1.Firestore"
      )
    ) {
      this.addEventListener(
        "readystatechange",
        () => {
          const res = this.response;
          console.log();
          let data = res.substring(res.indexOf("\n") + 1);

          // divide each request into a list of JSON strings (some cleanup is still needed)
          data = data.split(/\]\][0-9]*[\s]*[\n]?\[\[/g);
          for (let i in data) {
            // take off the first  "#,[" where # is any integer
            // take off a ] at the end (last char)
            data[i] = data[i].replace(/[0-9]*,\[/, "").slice(0, -1);

            // try to parse the data. If it fails in any way, skip it.
            try {
              const jsonData = JSON.parse(data[i]);
              if (
                jsonData["documentChange"]["document"]["name"].includes(
                  "projects/idlemmo/databases/(default)/documents/_data/"
                )
              ) {
                // the data is needed, so pass it on to inject.js
                const event = new CustomEvent("data", { detail: jsonData });
                window.dispatchEvent(event);
              } else if (this._url.search(/_uid\//) !== -1) {
                const event = new CustomEvent("charNames", {
                  detail: jsonData,
                });
                window.dispatchEvent(event);
              }
            } catch (e) {
              continue;
            }
          }
        },
        false
      );
    }
    return send.apply(this, arguments);
  };
})(XMLHttpRequest);

(function () {
  const OrigWebSocket = window.WebSocket;
  let wsSend = OrigWebSocket.prototype.send;
  wsSend = wsSend.apply.bind(wsSend);
  OrigWebSocket.prototype.send = function (data) {
    if (this.addedListener == undefined) {
      this.addEventListener("message", function (event) {
        const request = JSON.parse(event.data).d.b;
        const jsonData = request.d;
        const messageIntent = request.p;
        
        // check that the data is what is needed
        try {
          if (messageIntent.search(/_uid\//) !== -1) {
            // data is char names, send it to inject.js
            const send = new CustomEvent("charNames", { detail: jsonData });
            window.dispatchEvent(send);
          } else if (messageIntent.search(/_guild\/[a-zA-Z0-9]*\/m$/) !== -1) {
            // data is guild member information
            const send = new CustomEvent("guildInfo", { detail: jsonData });
            window.dispatchEvent(send);
          }
        } catch (e) {
          // ignore
        }
      });
      this.addedListener = true;
    }
    return wsSend(this, arguments);
  };
})();
