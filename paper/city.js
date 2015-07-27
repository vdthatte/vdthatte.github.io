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
        building7.graphics.beginFill("Black").drawRect(57, 100, 10, 50);
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
        building12.graphics.beginFill("Black").drawRect(135, 40, 10, 110);
        building12.graphics.beginFill("Grey").drawRect(135, 40, 1, 21);
        building12.graphics.beginFill("Grey").drawRect(135, 40, 10, 1);
        building12.graphics.beginFill("Grey").drawRect(145, 40, 1, 21);

        var building13 = new createjs.Shape();
        building13.graphics.beginFill("Black").drawRect(145, 60, 10, 90);
        building13.graphics.beginFill("Grey").drawRect(145, 60, 10, 1);

        var building14 = new createjs.Shape();
        building14.graphics.beginFill("Black").drawRect(155, 30, 10, 120);
        building14.graphics.beginFill("Grey").drawRect(155, 30, 1, 31);
        building14.graphics.beginFill("Grey").drawRect(155, 30, 10, 1);
        building14.graphics.beginFill("Grey").drawRect(165, 30, 1, 50);

        var building15 = new createjs.Shape();
        building15.graphics.beginFill("Black").drawRect(165, 80, 10, 70);
        building15.graphics.beginFill("Grey").drawRect(165, 80, 10, 1);

        var building16 = new createjs.Shape();
        building16.graphics.beginFill("Black").drawRect(175, 70, 10, 80);
        building16.graphics.beginFill("Grey").drawRect(175, 70, 10, 1);//top
        building16.graphics.beginFill("Grey").drawRect(175, 70, 1, 11);//left

        var building17 = new createjs.Shape();
        building17.graphics.beginFill("Black").drawRect(185, 50, 10, 100);
        building17.graphics.beginFill("Grey").drawRect(185, 50, 1, 21);//left
        building17.graphics.beginFill("Grey").drawRect(185, 50, 10, 1);//top
        building17.graphics.beginFill("Grey").drawRect(195, 50, 1, 21);//right

        var building18 = new createjs.Shape();
        building18.graphics.beginFill("Black").drawRect(195, 70, 15, 80);
        building18.graphics.beginFill("Grey").drawRect(195, 70, 15, 1);//top

        var building19 = new createjs.Shape();
        building19.graphics.beginFill("Black").drawRect(210, 50, 10, 100);
        building19.graphics.beginFill("Grey").drawRect(210, 50, 1, 21);//left
        building19.graphics.beginFill("Grey").drawRect(210, 50, 10, 1);//top
        building19.graphics.beginFill("Grey").drawRect(220, 50, 1, 50);//left

        var building20 = new createjs.Shape();
        building20.graphics.beginFill("Black").drawRect(220, 100, 20, 50);
        building20.graphics.beginFill("Grey").drawRect(220, 100, 20, 1);//top

        var building21 = new createjs.Shape();
        building21.graphics.beginFill("Black").drawRect(240, 80, 10, 70);
        building21.graphics.beginFill("Grey").drawRect(240, 80, 20, 1);//top
        building21.graphics.beginFill("Grey").drawRect(240, 80, 1, 21);//left

        var building22 = new createjs.Shape();
        building22.graphics.beginFill("Black").drawRect(250, 70, 10, 80);
        building22.graphics.beginFill("Grey").drawRect(250, 70, 10, 1);//top
        building22.graphics.beginFill("Grey").drawRect(250, 70, 1, 11);//left

        var building23 = new createjs.Shape();
        building23.graphics.beginFill("Black").drawRect(260, 100, 10, 50);
        building23.graphics.beginFill("Grey").drawRect(260, 100, 10, 1);//top

        var building24 = new createjs.Shape();
        building24.graphics.beginFill("Black").drawRect(270, 80, 10, 70);
        building24.graphics.beginFill("Grey").drawRect(270, 80, 10, 1);//top

        var building25 = new createjs.Shape();
        building25.graphics.beginFill("Black").drawRect(260, 20, 20, 130);
        building25.graphics.beginFill("Grey").drawRect(260, 20, 20, 1); //top
        building25.graphics.beginFill("Grey").drawRect(260, 20, 1, 51); //left
        building25.graphics.beginFill("Grey").drawRect(280, 20, 1, 41); //right

        var building26 = new createjs.Shape();
        building26.graphics.beginFill("Black").drawRect(280, 50, 10, 100);
        building26.graphics.beginFill("Grey").drawRect(280, 50, 10, 1); //top
        building26.graphics.beginFill("Grey").drawRect(290, 50, 1, 21); //right

        var building27 = new createjs.Shape();
        building27.graphics.beginFill("Black").drawRect(290, 70, 10, 80);
        building27.graphics.beginFill("Grey").drawRect(290, 70, 10, 1); //top

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
        stage.addChild(building13);
        stage.addChild(building14);
        stage.addChild(building15);
        stage.addChild(building16);
        stage.addChild(building17);
        stage.addChild(building18);
        stage.addChild(building19);
        stage.addChild(building20);
        stage.addChild(building21);
        stage.addChild(building22);
        stage.addChild(building23);
        stage.addChild(building24);
        stage.addChild(building25);
        stage.addChild(building26);
        stage.addChild(building27);

        stage.update();
    }
