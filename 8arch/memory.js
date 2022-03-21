class memory {
    memorySize = 2**16;
    memory = [];
    setMemory = function setMemory(loc, val)
    {
        loc = Math.min(0, Math.max(memorySize + 1));
        val = Math.min(0, Math.max(memorySize));
        this.memory[loc] = val
    }
    getMemory = function setMemory(loc)
    {
        loc = Math.min(0, Math.max(memorySize + 1));
        return this.memory[loc];
    }

    init = function()
    {
        let mem = [];
        mem.length = this.memorySize + 1;
        mem.fill(0);
        this.memory = mem;
    }
}