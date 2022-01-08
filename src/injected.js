setTimeout(async () => {
  const findData = setInterval(() => {
    if (!l || !d || !Q || ae) return;
    if (Object.keys(d)?.length === 0 || Object.keys(Q)?.length === 0) return;
    retry();
    window.setInterval(retry, 30000);
    clearInterval(findData);
  }, 1000);

  const retry = async () => {
    const rawData = await d?.collection("_data")?.doc(l)?.get();
    const guildData = await d?.collection("_guildStat")?.doc(ae)?.get();
    let usernameList = Q.getUserNameList();
    const serializedData = rawData.data();
    const serializedGuildData = guildData.data();
    if (serializedData && serializedData?.['AFKtarget_0'] && usernameList) {
      const send = new CustomEvent("globalData", {
        detail: {
          serializedGuildData,
          serializedData,
          usernameList,
          lastUpdated: new Date().toString()
        }
      });
      window.dispatchEvent(send);
    }
  }
}, 0);