function saveStorage()
{
    let slot = document.getElementById("slot");
    arch.storage.save(slot.value);
}

function loadStorage()
{
    let slot = document.getElementById("slot");
    arch.storage.load(slot.value);
}