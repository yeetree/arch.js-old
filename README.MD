# Arch.js

## About
Arch.js simulates a new computer architecture (like x86 or arm) in JavaScript.
It includes its own instruction set, arch16, and also has its own display system, input system,
RAM, VRAM, and Storage systems.

## Difference between Arch.js and arch16
Arch.js is the virtual computer itself, which includes the display, input, RAM, VRAM, and storage.
arch16 is the instruction set that comes with Arch.js, which the programs run on.
It is possible to implement your own instruction set, and modify Arch.js to be 8bit, 32bit, 64bit,
and even 128bit! But Arch.js is mainly 16bit for simplicity, and isn't expected to run Cyberpunk 2077 anytime
soon, (though if you want to try it, go ahead!)

## How do I program in arch16?
You can, but it's just like programming in machine code (binary and/or hex), the only difference being that data is
stored in base 10, which arguably makes it easier to program in just arch16. However, I made a simple
assembler that is included with Arch.js, which has its own assembly language that translates it into pure arch16.
(If you will, arch16 Assembly Language)
