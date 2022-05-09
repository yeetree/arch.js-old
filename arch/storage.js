class storage {
    
    memory;
    default = 0;

    init = function () {
        this.memory = new memory;
        this.memory.init();
        this.load(this.default);
    }
    save = function(slot)
    {
        let memstr = JSON.stringify(this.memory.data);
        window.localStorage.setItem('storage_' + slot, memstr);
        this.load(slot);
    }
    load = function(slot)
    {
        if(window.localStorage.getItem('storage_' + slot) == null || window.localStorage.getItem('storage_' + slot) == "[]")
        {
            let tempmem = new memory;
            tempmem.init();
            let memstr = JSON.stringify(tempmem.data);
            window.localStorage.setItem('storage_' + slot, memstr);
        }
        this.memory.data = JSON.parse(window.localStorage.getItem('storage_' + slot));
    }
}