
function setup(){
    var canvas = createCanvas(1000,500);
    

    base = new Wall(500, 500,width,100);
    pillar1 = new Wall(50,290,70,320);
    pillar2 = new Wall(150,325,60,250);

    pillar3 = new Wall(850,325,60,250);
    pillar4 = new Wall(950,290,70,320);
    

    pillar1_dome = new Dome(50,120,30);
    pillar2_dome = new Dome(150,190,25);
    pillar3_dome = new Dome(850,190,25);
    pillar4_dome = new Dome(950,120,30);

    pillar1_tri = new Triangle(30,100,70,100,50,80);
    pillar2_tri = new Triangle(130,180,170,180,150,155);
    pillar3_tri = new Triangle(830,180,870,180,850,155);
    pillar4_tri = new Triangle(930,100,970,100,950,80);

    main_r_pillar = new Wall(700,195,50,50);
    main_l_pillar = new Wall(300,195,50,50);

    main_r_dome = new Dome(700,170,22);
    main_l_dome = new Dome(300,170,22);

    main_r_Tri = new Triangle(690,150,710,150,700,140);
    main_l_Tri = new Triangle(290,150,310,150,300,140);

    main = new Wall(500,335,500,230);

    mainDome = new Dome(500,180,150);

    mainTri = new Triangle(440,50,560,50,500,10);


    main_in_rect = new Wall(500,335,290,230);
    main_in_in_rect = new Wall(500,350,200,200);
   
    main_in_low_rect = new Wall(500,390,200,120);
    
    main_in_dome = new Dome(500,350,100);
}

function draw(){
    background("deepskyblue");
    

    

    base.display();

    pillar1_tri.display();
    pillar2_tri.display();
    pillar3_tri.display();
    pillar4_tri.display();

    pillar1_dome.display();
    pillar2_dome.display();
    pillar3_dome.display();
    pillar4_dome.display();

 

    pillar1.display();
    pillar2.display();

    pillar3.display();
    pillar4.display();
    
    mainTri.display();


    mainDome.display();

    
    main.display();

    main_r_Tri.display();
    main_l_Tri.display();

    main_r_dome.display();
    main_l_dome.display();
    
    
    main_r_pillar.display();
    main_l_pillar.display();

    main_in_rect.color = "#E0E0B0";
    main_in_rect.display();

    main_in_in_rect.color = "#D7D7AA";
    main_in_in_rect.display();


    main_in_dome.display();

    
    main_in_low_rect.display();

    
    
}