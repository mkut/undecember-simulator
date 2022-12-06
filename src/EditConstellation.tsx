import { useEffect, useRef, useState } from "react";
import "./EditConstellation.css";
import { Constellation, drySelectNode } from "./game/zodiac";
import { printModifier } from "./game/modifier";
import { distance, Position } from "./util/position";

const WIDTH = 1200;
const HEIGHT = 600;
const NODE_RADIUS = 20;

type Props = {
   constellation: Constellation;
   selected: boolean[];
   onClick: (nodeId: number) => void;
};

export default function EditConstellation({
   constellation,
   selected,
   onClick,
}: Props) {
   const canvas = useRef<any>(null);

   const [hovering, setHovering] = useState(null);
   const [clicked, setClicked] = useState(null);
   const hoveringSelected = drySelectNode(
      constellation,
      selected,
      clicked === hovering ? null : hovering
   );

   // setEventListener for hover
   useEffect(() => {
      const eventListener = (e: MouseEvent) => {
         const rect = canvas.current.getBoundingClientRect();
         let selectedNodeId = null;
         constellation.nodes.forEach((node, nodeId) => {
            const position = toCanvasPosition(node.position);
            const cursorPosition = {
               x: e.clientX - rect.left,
               y: e.clientY - rect.top,
            };
            if (distance(position, cursorPosition) < NODE_RADIUS) {
               selectedNodeId = nodeId;
            }
         });
         setHovering(selectedNodeId);
         if (selectedNodeId === null) {
            setClicked(null);
         }
      };
      canvas.current.addEventListener("mousemove", eventListener);

      return () => {
         canvas.current.removeEventListener("mouseMove", eventListener);
      };
   }, [constellation]);

   // setEventListener for click
   useEffect(() => {
      const eventListener = (e: MouseEvent) => {
         const rect = canvas.current.getBoundingClientRect();
         let selectedNodeId = null;
         constellation.nodes.forEach((node, nodeId) => {
            const position = toCanvasPosition(node.position);
            const cursorPosition = {
               x: e.clientX - rect.left,
               y: e.clientY - rect.top,
            };
            if (distance(position, cursorPosition) < NODE_RADIUS) {
               selectedNodeId = nodeId;
            }
         });
         if (selectedNodeId !== null) {
            onClick(selectedNodeId);
            setClicked(selectedNodeId);
         }
      };
      canvas.current.addEventListener("click", eventListener);

      return () => {
         canvas.current.removeEventListener("click", eventListener);
      };
   }, [constellation]);

   // draw canvas
   useEffect(() => {
      const context = canvas.current.getContext("2d");
      context.clearRect(0, 0, WIDTH, HEIGHT);

      // Draw Edges
      context.strokeStyle = "#606060";
      context.lineWidth = 2;
      for (const edge of constellation.edges) {
         const [nodeId1, nodeId2] = edge;
         const node1 = constellation.nodes[nodeId1];
         const node2 = constellation.nodes[nodeId2];
         const position1 = toCanvasPosition(node1.position);
         const position2 = toCanvasPosition(node2.position);

         if (hoveringSelected[nodeId1] && hoveringSelected[nodeId2]) {
            context.strokeStyle = "#a0a0a0";
            context.lineWidth = 3;
         } else {
            context.strokeStyle = "#404040";
            context.lineWidth = 1;
         }

         context.beginPath();
         context.moveTo(position1.x, position1.y);
         context.lineTo(position2.x, position2.y);
         context.stroke();
      }

      // Draw Nodes
      constellation.nodes.forEach((node, nodeId) => {
         const position = toCanvasPosition(node.position);
         if (node.isNotable) {
            context.strokeStyle = "#c4d042";
            context.fillStyle = "#646930";
         } else if (node.isEntry) {
            context.strokeStyle = "#20e484";
            context.fillStyle = "#357a59";
         } else {
            context.strokeStyle = "white";
            context.fillStyle = "#7d7c7c";
         }

         // selected
         if (selected[nodeId]) {
            context.beginPath();
            context.arc(
               position.x,
               position.y,
               NODE_RADIUS,
               0,
               Math.PI * 2,
               false
            );
            context.fill();
         }

         // will be selected
         context.beginPath();
         context.arc(
            position.x,
            position.y,
            NODE_RADIUS,
            0,
            Math.PI * 2,
            false
         );
         if (hoveringSelected[nodeId]) {
            context.lineWidth = 3;
         } else {
            context.lineWidth = 1;
         }
         context.stroke();

         // description
         context.font = "16px serif";
         context.textAlign = "center";
         if (hoveringSelected[nodeId]) {
            context.fillStyle = "white";
         } else {
            context.fillStyle = "#909090";
         }
         node.mods.forEach((mod, i) => {
            context.fillText(
               printModifier(mod),
               position.x,
               position.y + NODE_RADIUS + 20 * (i + 1)
            );
         });
      });
   }, [constellation, selected, hovering, clicked]);

   return (
      <canvas ref={canvas} width={WIDTH} height={HEIGHT} id="constellation" />
   );
}

function toCanvasPosition(dataPosition: Position): Position {
   const paddingWidth = 120;
   const PaddingHeight = 80;
   const internalWidth = WIDTH - paddingWidth * 2;
   const internalHeight = HEIGHT - PaddingHeight * 2;
   return {
      x: paddingWidth + (internalWidth * dataPosition.x) / 100,
      y: PaddingHeight + (internalHeight * dataPosition.y) / 100,
   };
}
