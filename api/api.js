import fetch from "node-fetch";

export const photoApi = {
  async postImageApi(session, images) {
    const response = await fetch(
      "https://miniandroid.top:8080/rate_image/base64/",
      {
        method: "POST",
        body: JSON.stringify({ images }),
        headers: {
          Authorization: `Bearer ${session}`,
          accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response;
  },
};
export const userApi = {
  async getUserRefferallCountApi(session) {
    const response = await fetch(
      "https://miniandroid.top:8080/referral_use/count",
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${session}`,
          accept: "application/json",
        },
      }
    );

    return response;
  },
  async getUserRefferallLinkApi(
    session = "lRkdP0CKCytXWW9NJcWo0kxqrg6q5lWOJ90XV0c3mW8="
  ) {
    const response = await fetch(
      "https://miniandroid.top:8080/referral_link/",
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${session}`,
          accept: "application/json",
        },
      }
    );

    return response;
  },
};
