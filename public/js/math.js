export class Matrix {
    constructor(){
        this.grid = [];
    }

    set(x, y, value){
        if(!this.grid[x]){
            this.grid[x] = []
        }
    }
}

export class Vec2{
    constructor(x,y){
        this.set(x,y);
    }
    
    set(x, y){
        this.x=x;
        this.y=y;
    }
}