"use strict";

// these sprites are used by several objects on the screen at once
var spritessy = {};
spritessy.imgs = [];

// image preload functions
function preloadsprites()
{
    spritessy.imgs.bullet = new Image();
    spritessy.imgs.enemy = new Image();
    spritessy.imgs.enemykmt = new Image();

    spritessy.imgs.bullet.rdy = false;
    spritessy.imgs.enemy.rdy = false;
    spritessy.imgs.enemykmt.rdy = false;

    spritessy.imgs.bullet.src = "imgs/bullet.png";
    spritessy.imgs.enemy.src = "imgs/enemydefault.png";
    spritessy.imgs.enemykmt.src = "imgs/enemykmt.png";

    spritessy.imgs.bullet.onload = function () {
        spritessy.imgs.bullet.rdy = true;
    };
    spritessy.imgs.enemy.onload = function () {
        spritessy.imgs.enemy.rdy = true;
    };
    spritessy.imgs.enemykmt.onload = function () {
        spritessy.imgs.enemykmt.rdy = true;
    };

}

function allspritesready(sprites)
{
    for (var i in sprites) {
        if (sprites[i].reader === false) {
            return false;
        }
    }
    return true;
}

function GameEntity()
{
    var ent = {};

    ent.x = 0;
    ent.y = 0;
    ent.speed = 0;
    ent.height = 32;
    ent.width = 32;
    ent.rdy = false;

    /* helper functions */
    ent.upper = function () {
        return ent.y - (ent.height / 2);
    };
    ent.lower = function () {
        return ent.y + (ent.height / 2);
    };
    ent.exleft = function () {
        return ent.x - (ent.width / 2);
    };
    ent.exright = function () {
        return ent.x + (ent.width / 2);
    };
    ent.isrdy = function () {
        return ent.rdy;
    };

    return ent;
}

function PlayerBullet(playerx, playery, playerdmg)
{
    var pbullet = new GameEntity();

    pbullet.x = playerx;
    pbullet.y = playery;
    pbullet.speed = 512;
    pbullet.height = 32;
    pbullet.width = 16;
    pbullet.damage = playerdmg;

    pbullet.rdy = spritessy.bullet.rdy;

    pbullet.move = function (modifier) {
        pbullet.y -= (pbullet.speed * modifier);
    };

    return pbullet;
}

function EnemyBullet(enemyx, enemyy, enemydmg)
{
}

function Player()
{
    // var player = {};
    var player = new GameEntity();

    player.speed = 256;
    player.height = 68;
    player.width = 87;
    player.maxhp = 20;
    player.hitpoints = player.maxhp;
    player.damage = 2;

    player.kills = 0;
    player.distance = 0;

    player.sprites = [];
    player.sprites.level = new Image();
    player.sprites.bankr = new Image();
    player.sprites.bankl = new Image();
    player.sprites.level.src = "imgs/reisenlevel.png";
    player.sprites.bankr.src = "imgs/reisenbankr.png";
    player.sprites.bankl.src = "imgs/reisenbankl.png";
    player.img = player.sprites.level;

    player.sprites.level.onload = function() {
        player.sprites.level.ready = true;
        player.rdy = allspritesready(player.sprites);
    };
    player.sprites.bankl.onload = function() {
        player.sprites.bankl.ready = true;
        player.rdy = allspritesready(player.sprites);
    };
    player.sprites.bankr.onload = function() {
        player.sprites.bankr.ready = true;
        player.rdy = allspritesready(player.sprites);
    };



    player.move = function (direc, modifier) {
        switch (direc) {
            case "up":
                player.y -= (player.speed * 0.7) * modifier;
                break;
            case "down":
                player.y += (player.speed * 1.3) * modifier;
                break;
            case "left":
                player.x -= player.speed * modifier;
                player.img = player.sprites.bankl;
                break;
            case "right":
                player.x += player.speed * modifier;
                player.img = player.sprites.bankr;
                break;
        }
    };

    player.fire = function () {
        var bullet = new PlayerBullet(player.x, player.y, player.strength);
        return bullet;
    };

    player.level = function () {
        player.img = player.sprites.level;
    };
    player.getheight = function () {
        return player.img.height;
    };
    player.getwidth = function () {
        return player.img.width;
    };

    console.log("reisen height: " + player.getheight() + " | width: " + player.getwidth());

    return player;
}

/* enemy class, inherited from */
function Enemy()
{
    var enemy = new GameEntity();

    enemy.speed = 128;
    enemy.height = 68;
    enemy.width = 87;
    enemy.hitpoints = 2;
    enemy.damage = 1;

    //enemy.img = new Image();
    enemy.rdy = false;
    enemy.img = spritessy.imgs.enemy;
    enemy.rdy = true;

    enemy.move = function (modifier) {
        enemy.y += (enemy.speed) * modifier;
    };

    return enemy;
}

/* kuomintang plane. most common enemy */
function EnemyKMT(newx, newy)
{
    var kmt = new Enemy();

    kmt.x = newx;
    kmt.y = newy;

    //kmt.img = new Image();
    kmt.rdy = false;
    kmt.img = spritessy.imgs.enemykmt;
    kmt.rdy = true;

    kmt.move = function (modifier) {
        kmt.y += (kmt.speed) * modifier;
    };

    /* sprite */
    return kmt;
}

