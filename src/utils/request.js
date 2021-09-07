const request = {
  async get(url) {
    const res = await fetch(url, {
      method: "GET",
      referrer: "",
    });
    return res.json();
  },

  async post(url, params) {
    const res = await fetch(url, {
      method: "POST",
      referrer: "",
      body: JSON.stringify(params),
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    return res.json();
  },
};

export default request;
