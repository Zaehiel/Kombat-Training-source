<!doctype html>
<html lang="en"> 
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="The simple workout app">
    <meta name="author" content="EHco.planet.ee">
	<link href="favicon.ico" type="image/x-icon" rel="icon" /><link href="favicon.ico" type="image/x-icon" rel="shortcut icon" />
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<title>Kombat Training</title>
	<!-- Bootstrap Core CSS -->
    <link  rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link  rel="stylesheet" type="text/css" href="http://getbootstrap.com/dist/css/bootstrap-theme.min.css">
	<link  rel="stylesheet" type="text/css" href="css/custom.css">

	<!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:600' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">



	<style type="text/css">
		
	</style>
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
	
<body class="b">


	<div class="navbar-fixed-top">
		<div class="container">
			<div class="col-lg-3"></div>
			<div class="col-lg-6 col-xs-12 noPad">
				
					<a href="#overlay"><button id="playBtn" class="btn btn-warning btn-lg navsq col-xs-4"><i class="fa fa-play fa-2x"></i></button></a>
					<a href="#saveload"><button id="saveBtn" class="btn btn-warning btn-lg navsq col-xs-4"><i class="fa fa-floppy-o fa-2x"></i></button></a>
					<a href="#settings"><button id="settingsBtn" class="btn btn-warning btn-lg navsq col-xs-4"><i class="fa fa-cogs fa-2x"></i></button></a>
				
			</div>
			<div class="col-lg-3"></div>
		</div>
	</div>
		
	<div id="overlay">
		
		 <div class="mtext">
			  <p class="bgcol"><span id="text">ready in</span> <span id="round"></span></p>
			  <p><span class="nantext" id="display" style="color: #000;"></span></p>
			<a href='#' onclick='endMan();'><button class="btn btn-warning btn-lg mtext" style="width:100%;">end</button></a>
			
		 </div>
		 
	</div>
	
	<div id="settings">
		
		 <div class="othertext">
			  
			  <span class="pull-left"> intervals</span> 
				<span class="pull-right">
			  <button class="btn btn-default" onclick="decreaseSetting('intervals')"><i class="fa fa-angle-left fa-2x"></i></button>
				<span id="intervals" > 1 </span>
			  <button class="btn btn-default " onclick="increaseSetting('intervals')"><i class="fa fa-angle-right fa-2x"></i></button>
				</span><br>
				
			  <span class="pull-left"> sound</span>  
			  <span class="pull-right" >
			  <button class="btn btn-default" onclick="decreaseSetting('sound')"><span id="sound"></span></button>
			  </span>
			  <br>
			  
			  <span class="pull-left">ready in</span>
			  <span class="pull-right">
			  <button class="btn btn-default"  onclick="decreaseSetting('readyup')"><i class="fa fa-angle-left fa-2x"></i></button>
			  <span id="readyup" > 5 </span>
			  <button class="btn btn-default" onclick="increaseSetting('readyup')"><i class="fa fa-angle-right fa-2x"></i></button>
			  </span>
				<br>			  
			  <button class="btn btn-default btn-lg pull-left" onclick="defaults()" style="width:50%;">defaults</button>
			<a href='#' onclick='settingsShow()'><button class="btn btn-warning btn-lg pull-right" style="width:50%;">close</button></a>
			
		 </div>
		 
	</div>
	
	<div id="saveload">
		
		 <div class="othertext">
			  <span>save file</span><br>
			  <a id="saveloadhref" href='#saveload'><button id="slBtn" class="btn btn-success btn-lg" onclick="slBtn();" style="width:150px;"><span id="saveState"></span></button></a><br>
			  <button id="overwrite" class="btn btn-default btn-lg" onclick="overwrite()" style="width:150px;"><span>save current</span></button>
			  
				<a href='#' onclick='saveShow();hidez();'><button class="btn btn-warning btn-lg" style="width:100%; margin-bottom: -3px;">close</button></a>
				
				
			
		 </div>
		 
	</div>
		
	<div class="container">
		<div class="col-lg-3"></div>
		<div class="col-lg-6">
			<ul id="appContainer">
				
			</ul>
			
			<div class="col-lg-12 noPad">
					<button id="addItem" class="btn btn-warning btn-lg col-xs-12 mkx" >NEW CHALLENGE</button>
			</div>
		</div>
		<div class="col-lg-3"></div>
	</div>
	

<audio id="sprite2" preload="auto"> <source type="audio/mpeg" src="audio/sprite2.mp3"></audio>

	
<script type="text/javascript" src="js/interval.js"></script>
	<script>
		
		
		document.addEventListener('DOMContentLoaded', function() {
			addItem(1,0);
			checkCookie();
			document.getElementById('addItem').onclick = function(){addItem(1,0);};
			document.getElementById('playBtn').onclick = function(){start();};
			document.getElementById('settingsBtn').onclick = function(){settingsShow();};
			document.getElementById('saveBtn').onclick = function(){saveShow();};
			document.addEventListener("mouseup", endRunnable);
		});
	</script>
</body>

</html>
