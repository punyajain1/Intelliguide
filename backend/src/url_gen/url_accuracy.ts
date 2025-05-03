import * as crypto from "crypto";

export const URL_gen_accuracy=(userHandle: string): string => {

  const baseUrl = `https://codeforces.com/api/user.status`;
  const apiKey = process.env["ACCU_API"];
  const secret = process.env["ACCU_SEC"];

  const randomString = Math.random().toString(36).substring(2, 8);
  const time = Math.floor(Date.now() / 1000);

  const queryParams = {handle: userHandle,apiKey,time: time.toString(),};

  const sortedParams = Object.entries(queryParams)
    .sort(([keyA, valueA], [keyB, valueB]) =>
      keyA === keyB ? (valueA as string).localeCompare(valueB as string) : keyA.localeCompare(keyB)
    )
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const toHash = `${randomString}/user.status?${sortedParams}#${secret}`;
  const apiSigHash = crypto.createHash("sha512").update(toHash).digest("hex");
  const apiSig = `${randomString}${apiSigHash}`;

  return `${baseUrl}?${sortedParams}&apiSig=${apiSig}`;
};