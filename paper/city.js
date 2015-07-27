    function init() {
        var stage = new createjs.Stage("demoCanvas");

        var building1 = new createjs.Shape();
        building1.graphics.beginFill("Black").drawRect(0, 100, 5, 50);
        building1.graphics.beginFill("Grey").drawRect(0, 100, 5, 1);
 
        var building2 = new createjs.Shape();
        building2.graphics.beginFill("Black").drawRect(5, 75, 10, 75);
        building2.graphics.beginFill("Grey").drawRect(5, 75, 1, 26);
        building2.graphics.beginFill("Grey").drawRect(5, 75, 10, 1);

        var building3 = new createjs.Shape();
        building3.graphics.beginFill("Black").drawRect(15, 15, 15, 135);
        building3.graphics.beginFill("Grey").drawRect(15, 15, 15, 1);
        building3.graphics.beginFill("Grey").drawRect(15, 15, 1, 61);
        building3.graphics.beginFill("Grey").drawRect(30, 15, 1, 41);

        var building4 = new createjs.Shape();
        building4.graphics.beginFill("Black").drawRect(30, 50, 10, 100);
        building4.graphics.beginFill("Grey").drawRect(30, 50, 10, 1);

        var building5 = new createjs.Shape();
        building5.graphics.beginFill("Black").drawRect(40, 0, 7, 150);
        building5.graphics.beginFill("Grey").drawRect(40, 0, 1, 51);
        building5.graphics.beginFill("Grey").drawRect(40, 0, 7, 1);
        building5.graphics.beginFill("Grey").drawRect(47, 0, 1, 51);


        var building6 = new createjs.Shape();
        building6.graphics.beginFill("Black").drawRect(47, 50, 10, 100);
        building6.graphics.beginFill("Grey").drawRect(47, 50, 10, 1);
        building6.graphics.beginFill("Grey").drawRect(57, 50, 1, 47);

        var building7 = new createjs.Shape();
        building7.graphics.beginFill("Black").drawRect(57, 100, 10, 48);
        building7.graphics.beginFill("Grey").drawRect(57, 96, 11, 1);
    
        var building8 = new createjs.Shape();
        building8.graphics.beginFill("Black").drawRect(67, 75, 20, 75);
        building8.graphics.beginFill("Grey").drawRect(67, 76, 1, 21);
        building8.graphics.beginFill("Grey").drawRect(67, 75, 20, 1);

        var building9 = new createjs.Shape();
        building9.graphics.beginFill("Black").drawRect(87, 25, 18, 125);
        building9.graphics.beginFill("Grey").drawRect(87, 25, 18, 1);
        building9.graphics.beginFill("Grey").drawRect(87, 25, 1, 51);
        building9.graphics.beginFill("Grey").drawRect(105, 25, 1, 51);

        var building10 = new createjs.Shape();
        building10.graphics.beginFill("Black").drawRect(105, 50, 15, 100);
        building10.graphics.beginFill("Grey").drawRect(105, 50, 15, 1);
        building10.graphics.beginFill("Grey").drawRect(120, 50, 1, 25);

        var building11 = new createjs.Shape();
        building11.graphics.beginFill("Black").drawRect(120, 60, 15, 90);
        building11.graphics.beginFill("Grey").drawRect(120, 60, 15, 1);

        var building12 = new createjs.Shape();
        building11.graphics.beginFill("Black").drawRect(135, 40, 10, 110);
        building11.graphics.beginFill("Grey").drawRect(135, 40, 1, 21);
        building11.graphics.beginFill("Grey").drawRect(135, 40, 10, 1);

        stage.addChild(building1);
        stage.addChild(building2);
        stage.addChild(building3);
        stage.addChild(building4);
        stage.addChild(building5);
        stage.addChild(building6);
        stage.addChild(building7);
        stage.addChild(building8);
        stage.addChild(building9);
        stage.addChild(building10);
        stage.addChild(building11);
        stage.addChild(building12);

        stage.update();
    }
