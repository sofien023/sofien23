<?php
$fn=$_POST["fn"];
$ln=$_POST["ln"];
$email=$_POST["email"];

echo("
<html>
<html lang=en>
<head>
    <meta charset=UTF-8>
    <meta http-equiv=X-UA-Compatible content=IE=edge>
    <meta name=viewport content=width=device-width, initial-scale=1.0>
    <link rel=icon href=sofien.jpg>
    <link rel=stylesheet href=style.css>
    <script src=controle.js></script>
    <title>Sofien Ghorbel</title>
</head>
<body>
    <header>
        <div class=logo>
            <a href=#Home>
                <span class=sou>S</span>ofien <span class=sou>G</span>horbel
            </a>
        </div>
        <div class=nav>
            <ul>
                <li><a href=#Home><span class=sou>H</span>ome</a></li>
                <li><a href=#About><span class=sou>A</span>bout</a></li>
                <li><a href=#Contact><span class=sou>C</span>ontact</a></li>
            </ul>
        </div>
    </header>
    <section class=main id=Home>
    <div class=container>
        <div class=intro>
            <p>
               Hi , I'm <span class=sou>S</span>ofien
                <span class=sou>G</span>horbel
            </p>
            <p>
                I'm a student of 4th informatic sciences
            </p>
            <p >
                <span class=sou>A</span>nd
                I want to be in the future a <span class=sou>software engineer</span> 
            </p>
            <div class=btn>
                <a href=#About>About Me</a> 
            </div>
        </div>
        <div class=im>
            <img src=sofien.jpg>
        </div>
    </div>
    </section>
    <section class=second id=About>
        <div class=container>
            <div class=intro>
                <p>
                    I was born in Sfax
                </p>
                <p>
                    On 23th July 2004 
                </p>
                <p>
                    <span class=sou>A</span>nd
                    I love music
                </p>
            </div>
            <div class=im>
                <img src=sofien.jpg>
            </div>
        </div>
    </section>
    <section class=final id=Contact>
        <div class=container>
                <form action=sofien.php method=post onsubmit='return verif()'>
                    <fieldset>
                        <div class=c>
                            <label  for=first>First name<span class=x>:</span></label>
                            <input type=text name=fn id=fn>
                        </div>
                        <div class=c>
                            <label  for=second>Last name <span class=x>:</span></label>
                            <input type=text name=ln id=ln>
                        </div>
                        <div class=c>
                            <label for=last>Email <span class=c></span><span class=x>:</span></label> 
                            <input type=text name=email id=email>
                        </div>
                        <div class=into>
                            <input class=into type=submit value=Send>
                            <input class=into type=reset value=Cancel>
                        </div>
                    </fieldset>
                </form>
            <div class=ic>
                <p>
                    If you want to contact me
                </p>
                <p>
                    Sent you informations 
                </p>
                <p>
                    And i will answer you 
                </p>
            </div>
        </div>
    </section>
</body>
</html>
 ");

$conn= new mysqli("localhost","root","","sofien_data");

if ($conn->connect_error) 
 die("Connexion non effectué: " . $conn->connect_error); 

$req="insert into requests (firstName , lastname ,Email) Values('$fn','$ln','$email')";

$conn->query($req);

$conn->close();
?>