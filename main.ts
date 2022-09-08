namespace SpriteKind {
    export const item = SpriteKind.create()
}
function question_1 () {
    game.showLongText("what is 1+1?", DialogLayout.Bottom)
    story.showPlayerChoices("2", "12", "a number")
    pause(500)
    if (story.checkLastAnswer("2") || story.checkLastAnswer("a number")) {
        mySprite = sprites.create(img`
            ............................................................
            ............................................................
            ...111111..1111111..11111...11111...11111..111111.11111111..
            ..1111111.111111111.111111..111111..11111.1111111.11111111..
            ..11......11.....11.11..111.11..111.11....11.........11.....
            ..11......11.....11.11...11.11...11.11111.11.........11.....
            ..11......11.....11.11......11......11111.11.........11.....
            ..11......11.....11.11......11......11....11.........11.....
            ..11......11.....11.11......11......11....11.........11.....
            ..1111111.111111111.11......11......11111.1111111....11.....
            ...111111..1111111..11......11......11111..111111....11.....
            ............................................................
            ..11111111111111111111111111111111111111111111111111111111..
            ..11111111111111111111111111111111111111111111111111111111..
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `, SpriteKind.Player)
        info.changeScoreBy(3)
    }
    if (story.checkLastAnswer("12")) {
        mySprite = sprites.create(img`
            ................................................................
            ................................................................
            ..11..............11.11111....1111111...111.......11..1111111...
            ..11......11......11.111111..111111111.11111......11.111111111..
            ..11.....1111.....11.11..111.11.....11.11.111.....11.11.....11..
            ..11....111111....11.11...11.11.....11.11..111....11.11.....11..
            ..11...111..111...11.11......11.....11.11...111...11.111111111..
            ..11..111....111..11.11......11.....11.11....111..11..11111111..
            ..11.111......111.11.11......11.....11.11.....111.11........11..
            ..11111........11111.11......111111111.11......11111.111111111..
            ...111..........111..11.......1111111..11.......111..11111111...
            ................................................................
            ..111111111111111111111111111111111111111111111111111111111111..
            ..111111111111111111111111111111111111111111111111111111111111..
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            `, SpriteKind.Player)
        info.changeLifeBy(-1)
    }
    pause(1000)
    mySprite.destroy()
    wait()
}
function question_2 () {
    game.showLongText("what is enjoi?", DialogLayout.Bottom)
    story.showPlayerChoices("a skateboard company", "i didn't spell enjoy correctly")
    pause(500)
    if (story.checkLastAnswer("a skateboard company")) {
        mySprite = sprites.create(img`
            ............................................................
            ............................................................
            ...111111..1111111..11111...11111...11111..111111.11111111..
            ..1111111.111111111.111111..111111..11111.1111111.11111111..
            ..11......11.....11.11..111.11..111.11....11.........11.....
            ..11......11.....11.11...11.11...11.11111.11.........11.....
            ..11......11.....11.11......11......11111.11.........11.....
            ..11......11.....11.11......11......11....11.........11.....
            ..11......11.....11.11......11......11....11.........11.....
            ..1111111.111111111.11......11......11111.1111111....11.....
            ...111111..1111111..11......11......11111..111111....11.....
            ............................................................
            ..11111111111111111111111111111111111111111111111111111111..
            ..11111111111111111111111111111111111111111111111111111111..
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `, SpriteKind.Player)
        info.changeScoreBy(3)
    }
    if (story.checkLastAnswer("i didn't spell enjoy correctly")) {
        mySprite = sprites.create(img`
            ................................................................
            ................................................................
            ..11..............11.11111....1111111...111.......11..1111111...
            ..11......11......11.111111..111111111.11111......11.111111111..
            ..11.....1111.....11.11..111.11.....11.11.111.....11.11.....11..
            ..11....111111....11.11...11.11.....11.11..111....11.11.....11..
            ..11...111..111...11.11......11.....11.11...111...11.111111111..
            ..11..111....111..11.11......11.....11.11....111..11..11111111..
            ..11.111......111.11.11......11.....11.11.....111.11........11..
            ..11111........11111.11......111111111.11......11111.111111111..
            ...111..........111..11.......1111111..11.......111..11111111...
            ................................................................
            ..111111111111111111111111111111111111111111111111111111111111..
            ..111111111111111111111111111111111111111111111111111111111111..
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            `, SpriteKind.Player)
        info.changeLifeBy(-1)
    }
    pause(1000)
    mySprite.destroy()
    wait()
}
function wait () {
    mySprite = sprites.create(img`
        ..ffffffffffffffff..
        ..ffffffffffffffff..
        ..ff111111111111ff..
        ..ff111111111111ff..
        ..ffffffffffff11ff..
        ..ffffffffffff11ff..
        ............ff11ff..
        ..ffffffffffff11ff..
        ..ffffffffffff11ff..
        ..ff111111111111ff..
        ..ff111111111111ff..
        ..ffffffffffff11ff..
        ..ffffffffffff11ff..
        ............ff11ff..
        ..ffffffffffff11ff..
        ..ffffffffffff11ff..
        ..ff111111111111ff..
        ..ff111111111111ff..
        ..ffffffffffffffff..
        ..ffffffffffffffff..
        `, SpriteKind.Player)
    scaling.scaleToPixels(mySprite, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    music.playMelody("D D - - - - - - ", 500)
    pause(1000)
    mySprite.destroy()
    mySprite = sprites.create(img`
        ..ffffffffffffffff..
        ..ffffffffffffffff..
        ..ff111111111111ff..
        ..ff111111111111ff..
        ..ffffffffffff11ff..
        ..ffffffffffff11ff..
        ............ff11ff..
        ..ffffffffffff11ff..
        ..ffffffffffff11ff..
        ..ff111111111111ff..
        ..ff111111111111ff..
        ..ff11ffffffffffff..
        ..ff11ffffffffffff..
        ..ff11ff............
        ..ff11ffffffffffff..
        ..ff11ffffffffffff..
        ..ff111111111111ff..
        ..ff111111111111ff..
        ..ffffffffffffffff..
        ..ffffffffffffffff..
        `, SpriteKind.Player)
    scaling.scaleToPixels(mySprite, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    music.playMelody("F F - - - - - - ", 500)
    pause(1000)
    mySprite.destroy()
    mySprite = sprites.create(img`
        ............ffffff..
        ............ffffff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ff11ff..
        ............ffffff..
        ............ffffff..
        ....................
        `, SpriteKind.Player)
    scaling.scaleToPixels(mySprite, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    music.playMelody("A A - - - - - - ", 500)
    pause(1000)
    mySprite.destroy()
    mySprite = sprites.create(img`
        ......................
        ffffffffffffffffffffff
        ffffffffffffffffffffff
        ff11111111ff1111111fff
        ff11111111f111111111ff
        ff11ffff11f11fffff11ff
        ff11ffff11f11f...f11ff
        ff11111111f11f...f11ff
        ff11111111f11f...f11ff
        ffffffff11f11fffff11ff
        ff11111111f111111111ff
        ff11111111ff1111111fff
        ffffffffffffffffffffff
        ffffffffffffffffffffff
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        `, SpriteKind.Player)
    scaling.scaleToPixels(mySprite, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    music.playMelody("C5 C5 C5 C5 C5 - - - ", 500)
    pause(1000)
    mySprite.destroy()
    generate()
}
function question_3 () {
    game.showLongText("which ones a shoe brand?", DialogLayout.Bottom)
    story.showPlayerChoices("brooks", "freshmans")
    pause(500)
    if (story.checkLastAnswer("brooks")) {
        mySprite = sprites.create(img`
            ............................................................
            ............................................................
            ...111111..1111111..11111...11111...11111..111111.11111111..
            ..1111111.111111111.111111..111111..11111.1111111.11111111..
            ..11......11.....11.11..111.11..111.11....11.........11.....
            ..11......11.....11.11...11.11...11.11111.11.........11.....
            ..11......11.....11.11......11......11111.11.........11.....
            ..11......11.....11.11......11......11....11.........11.....
            ..11......11.....11.11......11......11....11.........11.....
            ..1111111.111111111.11......11......11111.1111111....11.....
            ...111111..1111111..11......11......11111..111111....11.....
            ............................................................
            ..11111111111111111111111111111111111111111111111111111111..
            ..11111111111111111111111111111111111111111111111111111111..
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `, SpriteKind.Player)
        info.changeScoreBy(3)
    }
    if (story.checkLastAnswer("freshmans")) {
        mySprite = sprites.create(img`
            ................................................................
            ................................................................
            ..11..............11.11111....1111111...111.......11..1111111...
            ..11......11......11.111111..111111111.11111......11.111111111..
            ..11.....1111.....11.11..111.11.....11.11.111.....11.11.....11..
            ..11....111111....11.11...11.11.....11.11..111....11.11.....11..
            ..11...111..111...11.11......11.....11.11...111...11.111111111..
            ..11..111....111..11.11......11.....11.11....111..11..11111111..
            ..11.111......111.11.11......11.....11.11.....111.11........11..
            ..11111........11111.11......111111111.11......11111.111111111..
            ...111..........111..11.......1111111..11.......111..11111111...
            ................................................................
            ..111111111111111111111111111111111111111111111111111111111111..
            ..111111111111111111111111111111111111111111111111111111111111..
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            `, SpriteKind.Player)
        info.changeLifeBy(-1)
    }
    pause(1000)
    mySprite.destroy()
    wait()
}
info.onLifeZero(function () {
    if (info.score() < 10) {
        game.over(false, effects.starField)
    }
    game.over(true, effects.starField)
})
function generate () {
    if (Math.percentChance(3)) {
        question_1()
    }
    if (!(Math.percentChance(3)) && Math.percentChance(4)) {
        question_3()
    }
    if (!(Math.percentChance(4))) {
        question_2()
    }
}
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1fffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1fffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff111111111111111111111111111111111111fffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithSpeed(50, 50)
game.setDialogTextColor(1)
game.setDialogCursor(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    .......1111111111111111.
    ......11111111111111111.
    .....11..............11.
    .....11..1.....1.....11.
    ....11.....11.......11..
    ....11..............11..
    ....11111111111111111...
    ....11111111111111111...
    ........................
    ........................
    `)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 f f f f f f f f f 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f 
    `)
game.showLongText("this a test", DialogLayout.Bottom)
info.setLife(3)
info.setScore(0)
wait()
