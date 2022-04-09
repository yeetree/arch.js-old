class arch
{
    gfx;
    ram;
    store;
    arch_16;
    init = function init()
    {
        this.gfx = new video;
        this.ram = new memory;
        this.store = new storage;
        this.arch_16 = new arch_16;
        if(this.store.memoryExists())
        {
            this.store.load();
        }
        else
        {
            this.store.init();
            this.store.save();
        }
        this.gfx.init();
        input_init();
        this.ram.init();
        this.arch_16.gfx = this.gfx;
        this.arch_16.ram = this.ram;
        this.arch_16.store = this.store;
        this.arch_16.init();
    }
}
