import { fromByteArray, toByteArray } from "base64-js";
import { initialZodiacSelected } from "fixture/zodiac";
import { DataV1, decode, encode, sanitize } from "./v1";

export {
   loadFromLocalStorage,
   storeIntoLocalStorage,
   loadFromUrl,
   setSharedUrlToClipBoard,
};

const LOCAL_STORAGE_KEY = "zodiacSelected";
const ROOT_URL =
   process.env.NODE_ENV === "production"
      ? "https://mkut.github.io/undecember-simulator/"
      : "http://localhost:3000/";

function loadFromLocalStorage(): DataV1 | null {
   const storedRaw: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);

   if (storedRaw === null) {
      return null;
   }

   const stored: any = JSON.parse(storedRaw);

   if (stored.v === 1) {
      return sanitize(stored.value as DataV1);
   } else {
      return null;
   }
}

function storeIntoLocalStorage(data: DataV1): void {
   const stored = {
      v: 1,
      value: data,
   };
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stored));
}

function loadFromUrl(): DataV1 | null {
   const req = new URLSearchParams(window.location.search);
   window.history.replaceState(null, "", ROOT_URL);
   if (req.get("v") === "1") {
      const a = req.get("a")?.replaceAll("-", "=");
      if (!a) {
         return null;
      }
      const bytes = toByteArray(a);
      return decode(bytes);
   }

   return null;
}

function setSharedUrlToClipBoard(data: DataV1): void {
   const encoded = encode(data);
   const sharedUrl = `${ROOT_URL}?v=1&a=${fromByteArray(encoded).replaceAll(
      "=",
      "-"
   )}`;
   if (!navigator.clipboard) {
      alert(sharedUrl);
   } else {
      navigator.clipboard.writeText(sharedUrl).then(() => {});
   }
}
