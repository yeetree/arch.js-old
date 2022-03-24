class asm
{
    insts = [
        //Standard RAM
        ["SET", 2, 1],
        ["MOVE", 2, 2],
        ["SWAP", 2, 3],
        ["ADD", 2, 4],
        ["SUB", 2, 5],
        ["MUL", 2, 6],
        ["DIV", 2, 7],
        ["MOVEV", 2, 8],
        ["SWAPV", 2, 9],
        //Video RAM
        ["VSET", 2, 10],
        ["VMOVE", 2, 11],
        ["VSWAP", 2, 12],
        ["VADD", 2, 13],
        ["VSUB", 2, 14],
        ["VMUL", 2, 15],
        ["VDIV", 2, 16],
        ["MOVER", 2, 17],
        ["SWAPR", 2, 18],
        //Video
        ["UPDATE", 0, 19],
        //Input
        ['IN', 1, 20],
        ['NUMIN', 1, 21],
        ['RGIN', 2, 22],
        //Control
        ['IFEQ', 3, 23],
        ['NOTEQ', 3, 24],
        ['IFGT', 3, 25],
        ['NOTGT', 3, 26],
        ['IFLT', 3, 27],
        ['NOTLT', 3, 28],
        ['WHILE', 3, 29],
        ['LOOP', 3, 30],

        ['FUNC', 1, 31],
        ['CALL', 1 , 32],

        //Storage

        ['LD', 3, 33],
        ['SV', 3, 34],

        //Execution

        ['EXEC', 2, 35],
        ['EXECO', 2, 36],
        ['EXECR', 4, 37],


    ]
    prg = [];
    lines = [];
    inst = [];
    compile = function compile(string)
    {
        this.prg = [];
        console.log(string);
        this.lines = string.split(";");
        
        for(let i = 0; i < this.lines.length; i++)
        {
            this.inst = this.lines[i].toUpperCase().split(',');
            this.prg.push(this.getInst(this.inst));
        }
        return this.prg;
    }
    getInst(inst)
    {
        let prgSeg = [];
        switch(inst[0])
        {
            //Standard RAM
            case "SET":
                prgSeg.push(1);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "MOVE":
                prgSeg.push(2);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "SWAP":
                prgSeg.push(3);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "ADD":
                prgSeg.push(4);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "SUB":
                prgSeg.push(5);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "MUL":
                prgSeg.push(6);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "DIV":
                prgSeg.push(7);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "MOVEV":
                prgSeg.push(8);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "SWAPV":
                prgSeg.push(9);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            //Video RAM
            case "VSET":
                prgSeg.push(10);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VMOVE":
                prgSeg.push(11);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VSWAP":
                prgSeg.push(12);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VADD":
                prgSeg.push(13);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VSUB":
                prgSeg.push(14);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VMUL":
                prgSeg.push(15);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VDIV":
                prgSeg.push(16);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "MOVER":
                prgSeg.push(17);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "SWAPR":
                prgSeg.push(18);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            //Video
            case "UPDATE":
                prgSeg.push(19);
                break;

            //Input
            case "IN":
                prgSeg.push(20);
                prgSeg.push(inst[1]);
                break;
            case "NUMIN":
                prgSeg.push(inst[1]);
                prgSeg.push(21);
                break;
            case "RGIN":
                prgSeg.push(22);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;

            //Control
            case "IFEQ":
                prgSeg.push(23);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                prgSeg.push(inst[3]);
                break;
            case "NOTEQ":
                prgSeg.push(24);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                prgSeg.push(inst[3]);
                break;
            case "IFGT":
                prgSeg.push(25);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "NOTGT":
                prgSeg.push(26);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                prgSeg.push(inst[3]);
                break;
            case "IFLT":
                prgSeg.push(27);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                prgSeg.push(inst[3]);
                break;
            case "NOTLT":
                prgSeg.push(28);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "WHILE":
                prgSeg.push(29);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                prgSeg.push(inst[3]);
                break;
            case "LOOP":
                prgSeg.push(30);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "FUNC":
                prgSeg.push(31);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "CALL":
                prgSeg.push(32);
                prgSeg.push(inst[1]);
                break;
            case "LD":
                prgSeg.push(33);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "SV":
                prgSeg.push(34);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;

            //Execution
            case "EXEC":
                prgSeg.push(35);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "EXEC":
                prgSeg.push(36);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "EXECR":
                prgSeg.push(37);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                prgSeg.push(inst[3]);
                break;
        }
        
        return prgSeg;
    }
}