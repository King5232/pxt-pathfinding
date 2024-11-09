// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1800100001020202020202020202020a0202020202020a020a020203080909090a0a0a0a0a0a0a0a090a090a09090a090a090a040809090a0a0909090909090a090a090a0a0a0a090a090a0408090a0a09090a0a0a0a0a0a090a0909090909090a090a0408090a090909090909090909090a090a0a090a0909090a0408090a090a0909090a0a0a09090a090a09090a09090a0a04080909090a0909090a0a0a09090a090a09090a090a0a09040a0a0a0a0a0909090a0a0a090a0a090a0a0a0a09090a090a08090909090909090a0a0a090909090909090a09090a090a08090a0a0a090a09090909090a0a0a0a0a090a0a090a090a0809090a09090a09090909090a0909090a09090a090a090a0809090909090a09090909090a090a090a0a090a090a0904080909090a0a0a090a0a09090a090a09090a090a090a0a040809090909090a09090a090909090a090a0a090a090a0a0408090a0a0a0a0a09090a090a0a0a0a090a09090a090a0a04070606060606060606060606060606060a060606060a0a05`, img`
...........2......2.2...
....22222222.2.2..2.2.2.
...22......2.2.2222.2.2.
..22..222222.2......2.2.
..2..........2.22.2...2.
..2.2...222..2.2..2..22.
....2...222..2.2..2.22..
22222...222.22.2222..2.2
........222.......2..2.2
..222.2.....22222.22.2.2
...2..2.....2...2..2.2.2
......2.....2.2.22.2.2..
....222.22..2.2..2.2.22.
......2..2....2.22.2.22.
..22222..2.2222.2..2.22.
................2....22.
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "path":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
