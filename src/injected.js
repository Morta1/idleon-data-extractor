setTimeout(async () => {
  const findData = setInterval(() => {
    if (!l || !d || !Q) return;
    if (Object.keys(d)?.length === 0 || Object.keys(Q)?.length === 0) return;
    retry();
    window.setInterval(retry, 30000);
    clearInterval(findData);
  }, 1000);

  const retry = async () => {
    const rawData = await d?.collection("_data")?.doc(l)?.get();
    let usernameList = Q.getUserNameList();
    const serializedData = rawData.data();
    if (serializedData && serializedData?.['AFKtarget_0'] && usernameList) {
      const send = new CustomEvent("globalData", {
        detail: {
          serializedData,
          usernameList,
          lastUpdated: new Date().toString()
        }
      });
      window.dispatchEvent(send);
    }
  }
}, 0);