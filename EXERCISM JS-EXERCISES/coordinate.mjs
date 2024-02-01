export const translate2d = (x,y) => (X,Y) => [x+X, y+Y],
scale2d = (x,y) => (X,Y) => [x*X, y*Y],
composeTransform = (f, g) => (x,y) => g(...f(x,y)),
memoizeTransform = (f, X, Y, F) => (x,y) => {if(x==X && y==Y) return F; X=x, Y=y; return F = f(x,y)};




