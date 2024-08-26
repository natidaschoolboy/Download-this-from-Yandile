function lightmode() {
    document.getElementById('light-body').innerHTML=`
     <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lukoshi</title>
        <link rel="stylesheet" type="text/css" href="css/lightstyle.css">

        <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    </head>
    <body>
        
        <!---header design-->
        <header>
            <a href="#" class="logo">Lu<span>koshi</span>.</a>

            <ul class="navlist">
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact Me</a></li>
                <li><a 
                     onclick="lightmode()" class="mode-btn">Dark Mode</a></li>

            </ul>

            <div class="bx bx-menu" id="menu-icon">

            </div>

        </header>

        <!---home section design-->
        <section class="home" id="home">
            <div class="home-text">
                <p><br><br><br><br><br><br><br><br>"You can change what you do<br> but you can't change what you want"<br>
                    </p>
                    <a href="contact.html" class="mode-btn2">Talk To Me</a>
                
            </div>
        </section>

        <!---about section design-->
        <section class="about" id="about">
            <div class="about-img">
                <img src="img/about.jpeg">
            </div>
            <div class="about-text">
                <h2>About <span>Lukoshi</span></h2>
                <h4>Entrepreneur</h4>
                <p>Lukoshi is the founder and CEO of the Brentana Company pty(ltd). 
                    He is a self-made man, having risen from humble beginnings to become a successful businessman. 
                    He is a strategic thinker and a natural leader, with a keen eye for opportunity and a relentless drive for success. 
                    He has built the Brentana Company into a formidable force in the world of business, and he shows no signs of slowing down.
                </p>
                <a href="" class="btn">More About</a>
            </div>
        </section>
        <!--service section design-->
        <section class="services" id="services">
            <div class="main-text">
                <p>I provide these services</p>
                <h2>Services: </h2>

            </div>

            <div class="services-content">
                <div class="box">
                    <div class="s-icons">
                        
                    </div>
                    <h3>Security and Protection Services</h3>
                    <p></p>
                        <a href="" class="read">Read More</a>
                </div>

                
                    <div class="box">
                        <div class="s-icons">
                           
                        </div>
                        <h3>Financial Services</h3>
                        <p>
                        </p>
                            <a href="" class="read">Read More</a>
                    </div>

                    <div class="box">
                        <div class="s-icons">
                           
                        </div>
                        <h3>Property Management</h3>
                        <p>
                        </p>
                            <a href="" class="read">Read More</a>
                    </div>

                    
                      

            </div>

        </section>

        <!---portofolio section design-->
        <section class="portfolio" id="portfolio">
            <div class="main-text">
                <h2><span>The</span> Portfolio</h2>
            </div>
            
            <div class="portfolio-content">
                <div class="row">
                    <img src="img/p2.jpeg">
                    <div class="layer">
                        <h5>BookMaking</h5>
                        <p>
                            Being a sports enthusiast myself I opened a book making company with Lukoshi Company's roots are from.[2010]
                        </p>
                        <a href="#" class="read">Read More</a>

                    </div>

                </div>

                <div class="row">
                    <img src="img/p3.jpeg">
                    <div class="layer">
                        <h5>Pubs and Casinos</h5>
                        <p>
                            2017 marked a great year as I opened 5 casinos across 2 continents.
                        </p>
                        <a href="#" class="read">Read More</a>
                    </div>

                </div>

                <div class="row">
                    <img src="img/p1.jpeg">
                    <div class="layer">
                        <h5>Political Party</h5>
                        <p>
                            In 2019, I helped found a political party to help those who are being suppressed by the goevernment to also have a say.
                        </p>
                        <a href="#" class="read">Read More</a>
                    </div>

                </div>

                

                </div>

                

                




            </div>
        </section>

        <!--contact section design-->
        <section class="contact" id="contact">
            
            <div class="contact-text">
                <h2>Get In Touch</h2>
                <p>Let's create something great.</p>
                

                <div class="contact-icons">
                    <a href="#"><i class='bx bx-tiktok' ></i></a>
                    <a href="#"><i class='bx bx1-whatsapp' ></i></a>
                    <a href="#"><i class='bx bx1-instagram-alt' ></i></a>
                    <a href="#"><i class='bx bx1-youtube' ></i></a>
                </div>
            </div>

            <div class="contact-form">
                <h1>Contact Me</h1>
                <form action="">
                    <input type="name" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email Address" required>
                    <input type="" placeholder="Your Mobile Number" required>
                    <textarea name="" id="" cols="35" rows="10" placeholder="How can I Help You" required></textarea>
                    <input type="submit" value="Submit" class="submit" required>
                </form>
            </div>
        </section>

        <!--end section design-->
        <section class="end">
            <div class="last-text">
            <p>&copy;Lukoshi All Rights Reserved </p>
            </div>

            
        </section>

        <!---Custom js link-->
        <script type="text/javascript" src="js/script.js"></script>
    </body>
    `;
    
}

function homelightmode() {
    document.getElementById('light-body').innerHTML=`
     <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lukoshi</title>
        <link rel="stylesheet" type="text/css" href="css/lightstyle.css">

        <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    </head>
    <body>
        
        <!---header design-->
        <header>
            <a href="#" class="logo">Lu<span>koshi</span>.</a>

            <ul class="navlist">
                <li><a href="index1.html" class="active">Home</a></li>
                <li><a href="about1.html">About</a></li>
                <li><a href="services1.html">Services</a></li>
                <li><a href="portfolio1.html">Portfolio</a></li>
                <li><a href="contact1.html">Contact Me</a></li>
                <li><a 
                     onclick="homedarkmode()" class="mode-btn">Dark Mode</a></li>

            </ul>

            <div class="bx bx-menu" id="menu-icon">

            </div>

        </header>

        <!---home section design-->
        <section class="home" id="home">
            <div class="home-text">
                <p><br><br><br><br><br><br><br><br>"You can change what you do<br> but you can't change what you want"<br>
                    </p>
                    <a href="contact.html" class="mode-btn2">Talk To Me</a>
                
            </div>
        </section>

       
        
        <section class="end">
            <div class="last-text">
            <p>&copy;Lukoshi All Rights Reserved </p>
            </div>

            
        </section>

        <!---Custom js link-->
        <script type="text/javascript" src="js/script.js"></script>
    </body>
    `;
    
}

function homedarkmode() {
    document.getElementById('light-body').innerHTML=`
     
<!Doctype html>
<html id="light-body">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lukoshi</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">

        <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    </head>
    <body>
        
        <!---header design-->
        <header>
            <a href="#" class="myname">Lu<span>koshi</span>.</a>

            <ul class="nav-list">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact Me</a></li>
                <li><a 
                     onclick="homelightmode()" class="mode-btn">Light Mode</a></li>

            </ul>

            <div class="bx bx-menu" id="menu-icon">

            </div>

        </header>

      
        <section class="home" id="home">
            <div class="home-txt">
                <p><br><br><br><br><br><br><br><br>"Chase the sunset beyond the horizon<br> and maybe you might outrun the night"<br>
                    </p>

                    <a href="contact.html" class="mode-btn2">Talk To Me</a>
                
            </div>
        </section>

       
       
        <section class="end">
            <div class="last-text">
            <p>&copy;Lukoshi All Rights Reserved </p>
            </div>

            
        </section>

        <!---Custom js link-->
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
        

    `;
    
}
function aboutdarkmode() {
    document.getElementById('light-body').innerHTML=`
<!Doctype html>
<html id="light-body">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lukoshi</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">

        <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    </head>
    <body>
        
        <!---header design-->
        <header>
            <a href="#" class="myname">Lu<span>koshi</span>.</a>

            <ul class="nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html" class="active">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact Me</a></li>
                <li><a 
                     onclick="aboutlightmode()" class="mode-btn">Light Mode</a></li>

            </ul>

            <div class="bx bx-menu" id="menu-icon">

            </div>

        </header>

      
        <section class="about" id="about">
            <div class="about-image">
                <img src="img/about.jpeg">
            </div>
            <div class="about-txt">
                <h2>About <span>Lukoshi</span></h2>
                <h4>Entrepreneur</h4>
                <p>Lukoshi is the founder and CEO of the Brentana Company pty(ltd). 
                    He is a self-made man, having risen from humble beginnings to become a successful businessman. 
                    He is a strategic thinker and a natural leader, with a keen eye for opportunity and a relentless drive for success. 
                    He has built the Brentana Company into a formidable force in the world of business, and he shows no signs of slowing down.
                </p>
                <a href="" class="btn">More About</a>
            </div>
        </section>
       
        
        

        
        
        <section class="end">
            <div class="last-text">
            <p>&copy;Lukoshi All Rights Reserved </p>
            </div>

            
        </section>

        <!---Custom js link-->
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
    `;
    
}
function servicesdarkmode() {
    document.getElementById('light-body').innerHTML=`
 
<!Doctype html>
<html id="light-body">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lukoshi</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">

        <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    </head>
    <body>
        
        <!---header design-->
        <header>
            <a href="#" class="myname">Lu<span>koshi</span>.</a>

            <ul class="nav-list">
                <li><a href="index.html" >Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html" class="active">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact Me</a></li>
                <li><a 
                     onclick="serviceslightmode()" class="mode-btn">Light Mode</a></li>

            </ul>

            <div class="bx bx-menu" id="menu-icon">

            </div>

        </header>

      
        <!--service section design-->
        <section class="services" id="services">
            <div class="main-txt">
                <p>I provide these services</p>
                <h2>Services: </h2>

            </div>

            <div class="services-cntnt">
                <div class="box">
                    <div class="s-icons">
                        
                    </div>
                    <h3>Security and Protection Services</h3>
                    <p></p>
                        <a href="" class="read">Read More</a>
                </div>

                
                    <div class="box">
                        <div class="s-icons">
                           
                        </div>
                        <h3>Financial Services</h3>
                        <p>
                        </p>
                            <a href="" class="read">Read More</a>
                    </div>

                    <div class="box">
                        <div class="s-icons">
                           
                        </div>
                        <h3>Property Management</h3>
                        <p>
                        </p>
                            <a href="" class="read">Read More</a>
                    </div>

                    
                      

            </div>

        </section>

        
        



      

        <!--end section design-->
        <section class="end">
            <div class="last-text">
            <p>&copy;Lukoshi All Rights Reserved </p>
            </div>

            
        </section>

        <!---Custom js link-->
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>

    `;
    
}
function contactdarkmode() {
    document.getElementById('light-body').innerHTML=`

    <!Doctype html>
    <html id="light-body">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Lukoshi</title>
            <link rel="stylesheet" type="text/css" href="css/style.css">
    
            <link rel="stylesheet"
      href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    
      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
        </head>
        <body>
            
            <!---header design-->
            <header>
                <a href="#" class="myname">Lu<span>koshi</span>.</a>
    
                <ul class="nav-list">
                    <li><a href="index.html" >Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="contact.html" class="active">Contact Me</a></li>
                    <li><a 
                         onclick="contactlightmode()" class="mode-btn">Light Mode</a></li>
    
                </ul>
    
                <div class="bx bx-menu" id="menu-icon">
    
                </div>
    
            </header>
    
        
           
           
        
            <section class="contact" id="contact">
                
                <div class="cntct-txt">
                    <h2>Get In Touch</h2>
                    <p>Let's create something great.</p>
                    
    
                  
                </div>
    
                <div class="contact-form">
                    <h1>Contact Me</h1>
                    <form action="">
                        <input type="name" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email Address" required>
                        <input type="" placeholder="Your Mobile Number" required>
                        <textarea name="" id="" cols="35" rows="10" placeholder="How can I Help You" required></textarea>
                        <input type="submit" value="Submit" class="submit" required>
                    </form>
                </div>
            </section>
    
           
            <section class="end">
                <div class="last-text">
                <p>&copy;Lukoshi All Rights Reserved </p>
                </div>
    
                
            </section>
    
            <!---Custom js link-->
            <script type="text/javascript" src="js/script.js"></script>
        </body>
    </html>

    `;
    
}
function portfoliodarkmode() {
    document.getElementById('light-body').innerHTML=`
  
<!Doctype html>
<html id="light-body">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lukoshi</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">

        <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    </head>
    <body>
        
        <!---header design-->
        <header>
            <a href="#" class="myname">Lu<span>koshi</span>.</a>

            <ul class="nav-list">
                <li><a href="index.html" >Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html" class="active">Portfolio</a></li>
                <li><a href="contact.html">Contact Me</a></li>
                <li><a 
                     onclick="portfoliolightmode()" class="mode-btn">Light Mode</a></li>

            </ul>

            <div class="bx bx-menu" id="menu-icon">

            </div>

        </header>

      
        <section class="portfolio" id="portfolio">
            <div class="main-txt">
                <h2><span>The</span> Portfolio</h2>
            </div>
            
            <div class="portfolio-cntnt">
                <div class="row">
                    <img src="img/p2.jpeg">
                    <div class="layer">
                        <h5>BookMaking</h5>
                        <p>
                            Being a sports enthusiast myself I opened a book making company with Lukoshi Company's roots are from.[2010]
                        </p>
                        <a href="#" class="read">Read More</a>

                    </div>

                </div>

                <div class="row">
                    <img src="img/p3.jpeg">
                    <div class="layer">
                        <h5>Pubs and Casinos</h5>
                        <p>
                            2017 marked a great year as I opened 5 casinos across 2 continents.
                        </p>
                        <a href="#" class="read">Read More</a>
                    </div>

                </div>

                <div class="row">
                    <img src="img/p1.jpeg">
                    <div class="layer">
                        <h5>Political Party</h5>
                        <p>
                            In 2019, I helped found a political party to help those who are being suppressed by the goevernment to also have a say.
                        </p>
                        <a href="#" class="read">Read More</a>
                    </div>

                </div>

                

                </div>

                

                




            </div>
        </section>

        
        <section class="end">
            <div class="last-text">
            <p>&copy;Lukoshi All Rights Reserved </p>
            </div>

            
        </section>

        <!---Custom js link-->
        <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
    `;
    
}
function aboutlightmode() {
    document.getElementById('light-body').innerHTML=`
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lukoshi</title>
    <link rel="stylesheet" type="text/css" href="css/lightstyle.css">

    <link rel="stylesheet"
href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
    
    <!---header design-->
    <header>
        <a href="#" class="logo">Lu<span>koshi</span>.</a>

        <ul class="navlist">
            <li><a href="index1.html" >Home</a></li>
            <li><a href="about1.html"class="active">About</a></li>
            <li><a href="services1.html">Services</a></li>
            <li><a href="portfolio1.html">Portfolio</a></li>
            <li><a href="contact1.html">Contact Me</a></li>
            <li><a 
                 onclick="aboutdarkmode()" class="mode-btn">Dark Mode</a></li>

        </ul>

        <div class="bx bx-menu" id="menu-icon">

        </div>

    </header>


    <section class="about" id="about">
        <div class="about-img">
            <img src="img/about.jpeg">
        </div>
        <div class="about-text">
            <h2>About <span>Lukoshi</span></h2>
            <h4>Entrepreneur</h4>
            <p>Lukoshi is the founder and CEO of the Brentana Company pty(ltd). 
                He is a self-made man, having risen from humble beginnings to become a successful businessman. 
                He is a strategic thinker and a natural leader, with a keen eye for opportunity and a relentless drive for success. 
                He has built the Brentana Company into a formidable force in the world of business, and he shows no signs of slowing down.
            </p>
            <a href="" class="btn">More About</a>
        </div>
    </section>
   

        </div>
    </section>

    

    <!--end section design-->
    <section class="end">
        <div class="last-text">
        <p>&copy;Lukoshi All Rights Reserved </p>
        </div>

        
    </section>

    <!---Custom js link-->
    <script type="text/javascript" src="js/script.js"></script>
</body>

    `;
    
}
function serviceslightmode() {
    document.getElementById('light-body').innerHTML=`
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lukoshi</title>
    <link rel="stylesheet" type="text/css" href="css/lightstyle.css">

    <link rel="stylesheet"
href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
    
    <!---header design-->
    <header>
        <a href="#" class="logo">Lu<span>koshi</span>.</a>

        <ul class="navlist">
            <li><a href="index1.html" >Home</a></li>
            <li><a href="about1.html">About</a></li>
            <li><a href="services1.html" class="active">Services</a></li>
            <li><a href="portfolio1.html">Portfolio</a></li>
            <li><a href="contact1.html">Contact Me</a></li>
            <li><a 
                 onclick="servicesdarkmode()" class="mode-btn">Dark Mode</a></li>

        </ul>

        <div class="bx bx-menu" id="menu-icon">

        </div>

    </header>

   
    <section class="services" id="services">
        <div class="main-text">
            <p>I provide these services</p>
            <h2>Services: </h2>

        </div>

        <div class="services-content">
            <div class="box">
                <div class="s-icons">
                    
                </div>
                <h3>Security and Protection Services</h3>
                <p></p>
                    <a href="" class="read">Read More</a>
            </div>

            
                <div class="box">
                    <div class="s-icons">
                       
                    </div>
                    <h3>Financial Services</h3>
                    <p>
                    </p>
                        <a href="" class="read">Read More</a>
                </div>

                <div class="box">
                    <div class="s-icons">
                       
                    </div>
                    <h3>Property Management</h3>
                    <p>
                    </p>
                        <a href="" class="read">Read More</a>
                </div>

                
                  

        </div>

    </section>

   

            




   
    <section class="end">
        <div class="last-text">
        <p>&copy;Lukoshi All Rights Reserved </p>
        </div>

        
    </section>

    <!---Custom js link-->
    <script type="text/javascript" src="js/script.js"></script>
</body>

    `;
    
}
function portfoliolightmode() {
    document.getElementById('light-body').innerHTML=`
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lukoshi</title>
    <link rel="stylesheet" type="text/css" href="css/lightstyle.css">

    <link rel="stylesheet"
href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
    
    <!---header design-->
    <header>
        <a href="#" class="logo">Lu<span>koshi</span>.</a>

        <ul class="navlist">
            <li><a href="index1.html" >Home</a></li>
            <li><a href="about1.html">About</a></li>
            <li><a href="services1.html">Services</a></li>
            <li><a href="portfolio1.html" class="active">Portfolio</a></li>
            <li><a href="contact1.html">Contact Me</a></li>
            <li><a 
                 onclick="portfoliodarkmode()" class="mode-btn">Dark Mode</a></li>

        </ul>

        <div class="bx bx-menu" id="menu-icon">

        </div>

    </header>


    <section class="portfolio" id="portfolio">
        <div class="main-text">
            <h2><span>The</span> Portfolio</h2>
        </div>
        
        <div class="portfolio-content">
            <div class="row">
                <img src="img/p2.jpeg">
                <div class="layer">
                    <h5>Book Making</h5>
                    <p>
                        Being a sports enthusiast myself I opened a book making company with Lukoshi Company's roots are from.[2010]
                    </p>
                    <a href="#" class="read">Read More</a>

                </div>

            </div>

            <div class="row">
                <img src="img/p3.jpeg">
                <div class="layer">
                    <h5>Pubs and Casinos</h5>
                    <p>
                        2017 marked a great year as I opened 5 casinos across 2 continents.
                    </p>
                    <a href="#" class="read">Read More</a>
                </div>

            </div>

            <div class="row">
                <img src="img/p1.jpeg">
                <div class="layer">
                    <h5>Political Party</h5>
                    <p>
                        In 2019, I helped found a political party to help those who are being suppressed by the goevernment to also have a say.
                    </p>
                    <a href="#" class="read">Read More</a>
                </div>

            </div>

            

            </div>

            

            




        </div>
    </section>


    <section class="end">
        <div class="last-text">
        <p>&copy;Lukoshi All Rights Reserved </p>
        </div>

        
    </section>

    <!---Custom js link-->
    <script type="text/javascript" src="js/script.js"></script>
</body>

    `;
    
}
function contactlightmode() {
    document.getElementById('light-body').innerHTML=`
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lukoshi</title>
    <link rel="stylesheet" type="text/css" href="css/lightstyle.css">

    <link rel="stylesheet"
href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
    
    <!---header design-->
    <header>
        <a href="#" class="logo">Lu<span>koshi</span>.</a>

        <ul class="navlist">
            <li><a href="index1.html" >Home</a></li>
            <li><a href="about1.html">About</a></li>
            <li><a href="services1.html">Services</a></li>
            <li><a href="portfolio1.html">Portfolio</a></li>
            <li><a href="contact1.html"class="active">Contact Me</a></li>
            <li><a 
                 onclick="contactdarkmode()" class="mode-btn">Dark Mode</a></li>

        </ul>

        <div class="bx bx-menu" id="menu-icon">

        </div>

    </header>

    

    <!--contact section design-->
    <section class="contact" id="contact">
        
        <div class="contact-text">
            <h2>Get In Touch</h2>
            <p>Let's create something great.</p>
            

            <div class="contact-icons">
                <a href="#"><i class='bx bx-tiktok' ></i></a>
                <a href="#"><i class='bx bx1-whatsapp' ></i></a>
                <a href="#"><i class='bx bx1-instagram-alt' ></i></a>
                <a href="#"><i class='bx bx1-youtube' ></i></a>
            </div>
        </div>

        <div class="contact-form">
            <h1>Contact Me</h1>
            <form action="">
                <input type="name" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email Address" required>
                <input type="" placeholder="Your Mobile Number" required>
                <textarea name="" id="" cols="35" rows="10" placeholder="How can I Help You" required></textarea>
                <input type="submit" value="Submit" class="submit" required>
            </form>
        </div>
    </section>

    <!--end section design-->
    <section class="end">
        <div class="last-text">
        <p>&copy;Lukoshi All Rights Reserved </p>
        </div>

        
    </section>

    <!---Custom js link-->
    <script type="text/javascript" src="js/script.js"></script>
</body>

    `;
    
}