function SpritesLoader()
{
    // these sprites are used by several objects on the screen at once
    var spr = {};
    spr.imgs = [];
    spr.imgs.reisen = [];
    spr.imgs.enemyusn = [];
    spr.imgs.explosions = [];

    spr.imgs.reisen.level = new Image();
    spr.imgs.reisen.bankl = new Image();
    spr.imgs.reisen.bankr = new Image();
    spr.imgs.enemyusn.level = new Image();
    spr.imgs.enemyusn.bankl = new Image();
    spr.imgs.enemyusn.bankr = new Image();
    spr.imgs.bullet = new Image();
    spr.imgs.enemy = new Image();
    spr.imgs.enemykmt = new Image();
    spr.imgs.enemyp38 = new Image();
    spr.imgs.seatile = new Image();
    spr.imgs.explosions[0] = new Image();
    spr.imgs.explosions[1] = new Image();
    spr.imgs.explosions[2] = new Image();
    spr.imgs.healthpickup = new Image();

    spr.imgs.bullet.rdy = false;
    spr.imgs.enemy.rdy = false;
    spr.imgs.enemykmt.rdy = false;
    spr.imgs.seatile.rdy = false;
    spr.imgs.healthpickup.rdy = false;

    spr.imgs.reisen.level.src = "imgs/reisenlevel.png";
    spr.imgs.reisen.bankl.src = "imgs/reisenbankl.png";
    spr.imgs.reisen.bankr.src = "imgs/reisenbankr.png";

    spr.imgs.enemyusn.level.src = "imgs/enemyusnlevel.png";
    spr.imgs.enemyusn.bankl.src = "imgs/enemyusnbankl.png";
    spr.imgs.enemyusn.bankr.src = "imgs/enemyusnbankr.png";

    spr.imgs.explosions[0].src = "imgs/exp1.png";
    spr.imgs.explosions[1].src = "imgs/exp2.png";
    spr.imgs.explosions[2].src = "imgs/exp3.png";

    spr.imgs.bullet.src = "imgs/bullet.png";
    spr.imgs.enemy.src = "imgs/enemydefault.png";
    spr.imgs.enemykmt.src = "imgs/enemykmt.png";
    spr.imgs.seatile.src = "imgs/seatile.png";
    spr.imgs.healthpickup.src = "imgs/health.png";
    spr.imgs.enemyp38.src = "imgs/enemyp38.png";

    spr.imgs.reisen.level.onload = function () {
        spr.imgs.reisen.level.rdy = true;
    };
    spr.imgs.reisen.bankl.onload = function () {
        spr.imgs.reisen.bankl.rdy = true;
    };
    spr.imgs.reisen.bankr.onload = function () {
        spr.imgs.reisen.bankr.rdy = true;
    };

    spr.imgs.enemyusn.level.onload = function () {
        spr.imgs.enemyusn.level.rdy = true;
    };
    spr.imgs.enemyusn.bankl.onload = function () {
        spr.imgs.enemyusn.bankl.rdy = true;
    };
    spr.imgs.enemyusn.bankr.onload = function () {
        spr.imgs.enemyusn.bankr.rdy = true;
    };

    spr.imgs.explosions[0].onload = function () {
        spr.imgs.explosions[0].rdy = true;
    };
    spr.imgs.explosions[1].onload = function () {
        spr.imgs.explosions[1].rdy = true;
    };
    spr.imgs.explosions[2].onload = function () {
        spr.imgs.explosions[2].rdy = true;
    };

    spr.imgs.bullet.onload = function () {
        spr.imgs.bullet.rdy = true;
    };
    spr.imgs.enemy.onload = function () {
        spr.imgs.enemy.rdy = true;
    };
    spr.imgs.enemykmt.onload = function () {
        spr.imgs.enemykmt.rdy = true;
    };
    spr.imgs.seatile.onload = function () {
        spr.imgs.seatile.rdy = true;
    };
    spr.imgs.healthpickup.onload = function () {
        spr.imgs.healthpickup.rdy = true;
    };
    spr.imgs.enemyp38.onload = function () {
        spr.imgs.enemyp38.rdy = true;
    };

    spr.allReady = function () {
        for (var i = 0; i < spr.imgs.length; ++i) {
            if (spr.imgs[i] instanceof Array) {
                for (var j = 0; i < spr.imgs[i].length; ++j) {
                    if (!spr.imgs[i][j].rdy) {
                        return false;
                    }
                }
            } else if (!spr.imgs[i].rdy) {
                return false;
            }
        }
        return true;
    };

    return spr;
}

function SoundsLoader()
{
    var snd = {};

    snd.shoot = new Array();
    snd.hit = new Array();
    snd.explode = new Array();

    snd.shoot.push(new Howl({ urls: ['sounds/shoot1.ogg'] }));
    snd.shoot.push(new Howl({ urls: ['sounds/shoot2.ogg'] }));

    snd.hit.push(new Howl({ urls: ['sounds/hit1.ogg'] }));
    snd.hit.push(new Howl({ urls: ['sounds/hit2.ogg'] }));

    snd.explode.push(new Howl({ urls: ['sounds/explode1.ogg'] }));
    snd.explode.push(new Howl({ urls: ['sounds/explode2.ogg'] }));

    return snd;
}

