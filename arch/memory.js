// Arch.js Memory

class memory {
    
    data = [];
    bits = 16;
    default = 0;

    init = function ()
    {
        let mem = [];
        mem.length = (2**this.bits)-1;
        mem.fill(this.default);
        this.data = mem;
    }
    get = function (loc)
    {
        loc = limitNumber(loc, 0, (2**this.bits)-1);
        return this.data[loc];
    }
    set = function (loc, val)
    {
        loc = limitNumber(loc, 0, (2**(this.bits))-1);
        val = limitNumber(val, 0, (2**(this.bits))-1);
        this.data[loc] = val;
    }
    sget = function (loc) { return this.get(this.get(loc)) }
    
    loadString = function(start, string)
    {
        let str = JSON.parse(string);
        for(let i = 0; i < str.length; i++)
        {
            this.set(i, str[i]);
        }
    }
}