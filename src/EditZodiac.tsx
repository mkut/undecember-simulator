import { useEffect, useState } from "react";
import produce from "immer";
import EditConstellation from "./EditConstellation";
import { zodiac, initialZodiacSelected } from "./fixture/zodiac";
import { activeMods, drySelectNode } from "./game/zodiac";
import "./EditZodiac.css";
import { printModifier } from "game/modifier";
import {
   setSharedUrlToClipBoard,
   loadFromLocalStorage,
   storeIntoLocalStorage,
   loadFromUrl,
} from "stored/stored";

export default function EditZodiac() {
   const [zodiacSelected, setZodiacSelected] = useState(initialZodiacSelected);
   const [tier, setTier] = useState(0);
   const [page, setPage] = useState(0);

   useEffect(() => {
      const requested = loadFromUrl();
      if (requested) {
         setZodiacSelected(requested);
         return;
      }
      const stored = loadFromLocalStorage();
      if (stored) {
         setZodiacSelected(stored);
         return;
      }
   }, []);

   useEffect(() => {
      if (zodiacSelected !== initialZodiacSelected) {
         storeIntoLocalStorage(zodiacSelected);
      }
   }, [zodiacSelected]);

   const modifiers = activeMods(zodiac, zodiacSelected);
   const tierSpent = zodiacSelected.map(
      (tier) => tier.flat(2).filter((x) => x).length
   );
   const pageSpent = zodiacSelected[tier].map(
      (tier) => tier.flat().filter((x) => x).length
   );

   return (
      <div className="flex">
         <div className="tier-menu">
            {zodiac.map((zodiacTier, i) => (
               <div
                  key={i}
                  className={"tier-menu-item" + (i === tier ? " selected" : "")}
                  onClick={() => {
                     setTier(i);
                     setPage(0);
                  }}
               >
                  {zodiacTier.name}
                  {tierSpent[i] !== 0 && `(${tierSpent[i]})`}
               </div>
            ))}
            <div
               className="tier-menu-item reset-button"
               onClick={() => setZodiacSelected(initialZodiacSelected)}
            >
               全リセット
            </div>
            <div
               className="tier-menu-item special-button"
               onClick={() => setSharedUrlToClipBoard(zodiacSelected)}
            >
               エクスポート
            </div>
         </div>
         <div className="page-menu">
            {zodiac[tier].constellations.map((zodiacPage, i) => (
               <div
                  key={i}
                  className={"page-menu-item" + (i === page ? " selected" : "")}
                  onClick={() => setPage(i)}
               >
                  {zodiacPage.name}
                  {pageSpent[i] !== 0 && `(${pageSpent[i]})`}
               </div>
            ))}
         </div>
         <div>
            <EditConstellation
               constellation={zodiac[tier].constellations[page]}
               selected={zodiacSelected[tier][page]}
               onClick={(id) =>
                  setZodiacSelected((prev) =>
                     produce(prev, (draft) => {
                        draft[tier][page] = drySelectNode(
                           zodiac[tier].constellations[page],
                           draft[tier][page],
                           id
                        );
                     })
                  )
               }
            />
         </div>
         <div>
            {modifiers.map((mod, i) => (
               <div key={i}>{printModifier(mod)}</div>
            ))}
         </div>
      </div>
   );
}
