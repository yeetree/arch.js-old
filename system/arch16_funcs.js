class arch16_funcs {
    vid;
    vidmem;
    mem;
    store;
    inp;

    set = function(i)
    {  
        this.mem.set(this.mem.get(i+1), this.mem.get(i+2));
        return i+2;
    }
    move = function(i)
    {  
        this.mem.set(this.mem.sget(i+1), this.mem.sget(i+2));
        return i+2;
    }
    add = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.mem.sget(i+1) + this.mem.sget(i+2));
        return i+2;
    }
    sub = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.mem.sget(i+1) - this.mem.sget(i+2));
        return i+2;
    }
    mul = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.mem.sget(i+1) * this.mem.sget(i+2));
        return i+2;
    }
    div = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.mem.sget(i+1) / this.mem.sget(i+2));
        return i+2;
    }
    movev = function(i)
    {
        this.vidmem.set(this.mem.sget(i+1), this.mem.sget(i+2));
        return i+2;
    }

    vset = function(i)
    {  
        this.vidmem.set(this.vidmem.get(i+1), this.vidmem.get(i+2));
        return i+2;
    }
    vmove = function(i)
    {  
        this.vidmem.set(this.mem.sget(i+1), this.vidmem.get(this.mem.get(i+2)));
        return i+2;
    }
    vadd = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.vidmem.get(this.mem.get(i+1)) + this.mem.sget(i+2));
        return i+2;
    }
    vsub = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.vidmem.get(this.mem.get(i+2)) - this.mem.sget(i+2));
        return i+2;
    }
    vmul = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.vidmem.get(this.mem.get(i+2)) * this.mem.sget(i+2));
        return i+2;
    }
    vdiv = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.vidmem.get(this.mem.get(i+2)) / this.mem.sget(i+2));
        return i+2;
    }
    mover = function(i)
    {
        this.mem.set(this.mem.sget(i+1), this.vidmem.get(this.mem.get(i+2)));
        return i+2;
    }
    update = function(i)
    {
        this.vid.update();
        return i;
    }
}