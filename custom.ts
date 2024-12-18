
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=99 color=#0fbc11 icon=""
namespace pathfinding {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    
    let pathTileLocations: number[][] = []

    function resetPath() {
        pathTileLocations = []
        for (let i = 0; i < tiles.tilemapRows(); i++) {
            pathTileLocations.push([])
            for (let j = 0; j < tiles.tilemapColumns(); j++) {
                pathTileLocations[i].push(999)
            }
        }
    }

    function checkAroundTile(row: number, col: number, currentPathTileDistance: number) {
        if (col > 0) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(col - 1, row))) {
                pathTileLocations[row][col - 1] = 1000
            } else {
                if (pathTileLocations[row][col - 1] == 999) {
                    pathTileLocations[row][col - 1] = currentPathTileDistance + 1
                }
            }
        }
        if (col < tiles.tilemapColumns() - 1) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(col + 1, row))) {
                pathTileLocations[row][col + 1] = 1000
            } else {
                if (pathTileLocations[row][col + 1] == 999) {
                    pathTileLocations[row][col + 1] = currentPathTileDistance + 1
                }
            }
        }
        if (row > 0) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(col, row - 1))) {
                pathTileLocations[row - 1][col] = 1000
            } else {
                if (pathTileLocations[row - 1][col] == 999) {
                    pathTileLocations[row - 1][col] = currentPathTileDistance + 1
                }
            }
        }
        if (row < tiles.tilemapRows() - 1) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(col, row + 1))) {
                pathTileLocations[row + 1][col] = 1000
            } else {
                if (pathTileLocations[row + 1][col] == 999) {
                    pathTileLocations[row + 1][col] = currentPathTileDistance + 1
                }
            }
        }
    }

    function generatePath(target: Sprite, pather: Sprite) {
        resetPath()
        let currentPathTileDistance = 0
        pathTileLocations[target.tilemapLocation().row][target.tilemapLocation().column] = 0
        while (pathTileLocations[pather.tilemapLocation().row][pather.tilemapLocation().column] == 999) {
            for (let k = 0; k < tiles.tilemapRows(); k++) {
                for (let l = 0; l < tiles.tilemapColumns(); l++) {
                    if (pathTileLocations[k][l] == currentPathTileDistance) {
                        checkAroundTile(k, l, currentPathTileDistance)
                    }
                }
            }
            currentPathTileDistance += 1
        }
    }

    function stepEnemyToPlayerWithSpeed(enemy: Sprite, player2: Sprite, speed: number) {
        generatePath(player2, enemy)
        let currentEnemyDistance = pathTileLocations[enemy.tilemapLocation().row][enemy.tilemapLocation().column]
        if (enemy.tilemapLocation().column > 0 && pathTileLocations[enemy.tilemapLocation().row][enemy.tilemapLocation().column - 1] < currentEnemyDistance) {
            enemy.vx = -1 * speed
        } else if (enemy.tilemapLocation().column < tiles.tilemapColumns() - 1 && pathTileLocations[enemy.tilemapLocation().row][enemy.tilemapLocation().column + 1] < currentEnemyDistance) {
            enemy.vx = speed
        } else {
            enemy.vx = Math.constrain(enemy.vx, -1, 1) * speed / 3
        }
        if (enemy.tilemapLocation().row > 0 && pathTileLocations[enemy.tilemapLocation().row - 1][enemy.tilemapLocation().column] < currentEnemyDistance) {
            enemy.vy = -1 * speed
        } else if (enemy.tilemapLocation().row < tiles.tilemapRows() - 1 && pathTileLocations[enemy.tilemapLocation().row + 1][enemy.tilemapLocation().column] < currentEnemyDistance) {
            enemy.vy = speed
        } else {
            enemy.vy = Math.constrain(enemy.vy, -1, 1) * speed / 3
        }
    }

    //% block="set all enemies pathfind to $player2 || with speed $speed"
    //% player2.defl=myPlayer
    //% player2.shadow=variables_get
    //% speed.defl=100
    export function startEnemiesFollowingPlayerWithSpeed(player2: Sprite, speed: number=100) {
        game.onUpdate(function () {
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                stepEnemyToPlayerWithSpeed(value, player2, speed)
            }
        })
    }

    //% block="set $enemy pathfind to $player || with speed $speed"
    //% enemy.defl=myEnemy
    //% enemy.shadow=variables_get
    //% player.defl=myPlayer
    //% player.shadow=variables_get
    //% speed.defl=100
    export function setEnemyPathfindToPlayer(enemy: Sprite, player: Sprite, speed: number=100) {
        game.onUpdate(function () { stepEnemyToPlayerWithSpeed(enemy, player, speed) })
    }
}
