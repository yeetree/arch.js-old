class arch
{
    gfx;
    ram;
    store;
    insts = [
        []
    ]
    init = function init()
    {
        this.gfx = new video;
        this.ram = new memory;
        this.store = new storage;
        if(this.store.memoryExists())
        {
            this.store.loadMemory();
        }
        else
        {
            this.store.init();
            this.store.saveMemory();
        }
        this.gfx.init();
        input_init();
        this.ram.init();
    }
}
