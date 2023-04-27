export interface RatingPoint {
  id: number;
  selected: boolean;
}

export const points: RatingPoint[] = [];
for (let i = 1; i < 6; i++) {
  points.push({ id: i, selected: false });
}
