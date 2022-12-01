export type { Position };

export { distance };

type Position = {
   x: number;
   y: number;
};

function distance(a: Position, b: Position): number {
   return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
