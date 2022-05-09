function limitNumber(val, min, max) {
    return Math.min(Math.max(min, +val), max);
}

class memory {
    memorySize = 2**16;
    memory = [];
    set = function setMemory(loc, val)
    {
        loc = limitNumber(loc, 0, this.memorySize);
        val = limitNumber(val, 0, this.memorySize);
        this.memory[loc] = val;
    }
    get = function setMemory(loc)
    {
        loc = limitNumber(loc, 0, this.memorySize);
        return this.memory[loc];
    }
    init = function()
    {
        let mem = [];
        mem.length = this.memorySize;
        mem.fill(0);
        this.memory = mem;
    }
}