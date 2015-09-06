var soundState = true, readyState = 5, totalRepeat = 1, kstatus;
		var kount, addBtnShow, txtTarget, target2, text, tm, ts;
		var runMin, runSec, timeStamp, runnable, elements, runun, working, round, fite;
		var data = [];
		var sets = [1,2,3,4,5,6,7,8,9,10];
		var tracks = {
		  roundf: {from: 32.783, to: 34.173},
		  round1: {from: 37.158, to: 38.367},
		  round2: {from: 39.64, to: 40.992},
		  round3: {from: 42.415, to: 43.76},
		  round4: {from: 45.292, to: 46.644},
		  round5: {from: 48.067, to: 49.509},
		  round6: {from: 50.816, to: 52.104},
		  round7: {from: 53.291, to: 54.642},
		  round8: {from: 56.028, to: 57.26},
		  round9: {from: 58.379, to: 59.828},
		  challenge1: {from: 3.725, to: 6.385},
		  flawless: {from: 28.953, to: 30.906},
		  tym: {from: 61.391, to: 63.312},
		  challenge2: {from: 0.879, to: 2.448},
		  fight1: {from: 9.073, to: 10.138},
		  fight2: {from: 11.296, to: 12.278},
		  fight3: {from: 13.459, to: 14.441},
		  fight4: {from: 15.644, to: 16.841},
		  fight5: {from: 17.999, to: 18.999},
		  fight6: {from: 20.65, to: 21.85},
		  fight7: {from: 23.339, to: 24.34},
		  fight8: {from: 25.907, to: 26.999}
		  
		};
		
		var audio_folder = "audio/";
		var audio_ext = ".mp3";
		var audio_track;
		
		function addItem(m, s){
			if(s==0){
				s = 0+"0";
			}
			kount = sets.length;
			if (kount != 0){
				nanban = sets[0];
				sets.splice(0, 1);
				sets.sort();
				//console.log(nanban);
				document.getElementById('appContainer').innerHTML += 
				'<li id="'+nanban+'" class="col-lg-12 col-xs-12 item">'+
					'<div class="col-xs-9">'+
						'<div class="row display cycle">'+
							'<div class="col-xs-5 mins">'+
								'<div class="row">'+
									'<button class="btn btn-warning btn-lg dtext" onmousedown=\'incMins("mins'+nanban+'")\' ><i class="fa fa-chevron-up"></i></button>'+
								'</div>'+
								'<div class="row">'+
									'<button id="mins'+nanban+'" class="btn btn-default btn-lg ntext" onClick=\'setMin("mins'+nanban+'")\'>'+m+'</button>'+
								'</div>'+
								'<div class="row">'+
									'<button class="btn btn-warning btn-lg dtext" onmousedown=\'decMins("mins'+nanban+'")\'  ><i class="fa fa-chevron-down"></i></button>'+
								'</div>'+
							'</div>'+
							
							'<div class="col-xs-5 secs">'+
								'<div class="row">'+
									'<button class="btn btn-warning btn-lg dtext" onmousedown=\'incSecs("secs'+nanban+'","mins'+nanban+'")\'  ><i class="fa fa-chevron-up"></i></button>'+
								'</div>'+
								'<div class="row">'+
									'<button id="secs'+nanban+'" class="btn btn-default btn-lg ntext" onClick=\'setSec("mins'+nanban+'")\'>'+s+'</button>'+
								'</div>'+
								'<div class="row">'+
									'<button class="btn btn-warning btn-lg dtext" onmousedown=\'decSecs("secs'+nanban+'","mins'+nanban+'")\'  ><i class="fa fa-chevron-down"></i></button>'+
								'</div>'+
							'</div>'+
						'</div>'+
				'</div>'+
				'<div class="col-xs-3" style="padding-right:0px;">'+
				
				'<button class="btn btn-warning mkx pull-right" onclick=\'removeItem("'+nanban+'")\'><i class="fa fa-times"></i></button>'+
				
				'</div>'+
				''+
				'</li>';
				if (kount == 1){
					document.getElementById('addItem').style.display = 'none';
				}
			}
		}
		
		function removeItem(element){
			sets.push(element);
			sets.sort();
			var d = document.getElementById('appContainer');
			var target = document.getElementById(element);
			target.remove();
			document.getElementById('addItem').style.display = 'block';
		}
		
		function endRunnable(){
			runMin = false;
			runSec = false;
			timeStamp = 0;
			clearInterval(runnable);
		}
		
		function increaseMinutes(element){
			txtTarget = document.getElementById(element);
			text = txtTarget.innerText || txtTarget.textContent;
			text = parseInt(text);
			text += 1;
			txtTarget.innerHTML = text;
			
		}
		
		function incMins(element){
			increaseMinutes(element);
			runMin = true;
			timeStamp = 0;
			if(runMin){
				runnable = setInterval(function(){
					timeStamp++;
					if(timeStamp > 4 && runMin){
						increaseMinutes(element);
					}
				},167)
			}
			
		}
		
		function decreaseMinutes(element){
			txtTarget = document.getElementById(element);
			text = txtTarget.innerText || txtTarget.textContent;
			text = parseInt(text);
			text = text - 1;
			if(text < 0){
				txtTarget.innerHTML = "0";
			} else {
				txtTarget.innerHTML = text;
			}
		}
		
		function decMins(element){
			decreaseMinutes(element);
			runMin = true;
			timeStamp = 0;
			if(runMin){
				runnable = setInterval(function(){
					timeStamp++;
					if(timeStamp > 4 && runMin){
						decreaseMinutes(element);
					}
				},167)
			}
		}
		
		function increaseSecs(element, element2){
			txtTarget = document.getElementById(element);
			text = txtTarget.innerText || txtTarget.textContent;
			text = parseInt(text);
			text += 1;
			if(text < 10){
				txtTarget.innerHTML = "0"+text;
			}else if(text < 60){
				txtTarget.innerHTML = text;
			} else if (text == 60){
				txtTarget.innerHTML = "00";
				increaseMinutes(element2);
			}
		}
		
		function incSecs(element, element2){
			increaseSecs(element, element2);
			runSec = true;
			timeStamp = 0;
			if(runSec){
				runnable = setInterval(function(){
					timeStamp++;
					if(timeStamp > 8 && runSec){
						increaseSecs(element, element2);
					}
				},50)
			}
		}
		
		function decreaseSecs(element, element2){
			txtTarget = document.getElementById(element);
			text = txtTarget.innerText || txtTarget.textContent;
			text = parseInt(text);
			text = text - 1;
			if(text < 10 && text > 0){
				txtTarget.innerHTML = "0"+text;
			}else if(text < 0 || text == 0){
				txtTarget.innerHTML = "00";
			} else {
				txtTarget.innerHTML = text;
			}
		}
		
		function decSecs(element, element2){
			decreaseSecs(element, element2);
			runSec = true;
			timeStamp = 0;
			if(runSec){
				runnable = setInterval(function(){
					timeStamp++;
					if(timeStamp > 8 && runSec){
						decreaseSecs(element, element2);
					}
				},50)
			}
		}
		
		function getData(){
			data = [];
			var selector = document.getElementById('appContainer');
			elements = document.querySelectorAll('.cycle');
			Array.prototype.forEach.call(elements, function(el, i){
				//console.log(el+" "+i);
				var c = i +1;
				var minut = el.childNodes[0].childNodes[1].childNodes[0];
				var sekund =  el.childNodes[1].childNodes[1].childNodes[0];
				
				var index = el.parentNode.parentNode.id;
				//console.log("id: "+index);
				tm = minut.innerText || minut.textContent;
				ts = sekund.innerText || sekund.textContent;
				var reps = totalRepeat;
				var pushable = {"id": index, "min":tm, "sec":ts, "repeat": reps, "sound": soundState, "readyin": readyState};
				//console.log("min:"+tm+" sec:"+ts);
				if(data.length < 1){
					data.push(pushable);
				} else {
					for (y = 0; y < data.length; y++){
						/*check for existing entries*/
						if(data[y].id == index){
							var pushed = true;
							data[y].min = tm;
							data[y].sec = ts;
							data[y].repeat = reps;
						} 
					}
					if(!pushed){
						/*entry didnt exist*/
						data.push(pushable);
					}
				}
				
			});
			return data;
		}
		
		function start(){
			var getd = getData();
			overlay();
			playSound(1337);
			startTimer(getd);
		}
		
		
		function startTimer(array) {
		var roundtext = document.querySelector('#text');
		var dynamicround = document.querySelector('#round');
		var repeats = 1,looping=false, rounds, kounting = 0, duration, neu = true;
		roundtext.textContent = "ready in";
		dynamicround.textContent = "";
		rounds = array.length;
		//console.log(rounds);
		display = document.querySelector('#display');
		
		var start = Date.now(), diff, minutes, seconds;
			function timer() {
				if(neu){
					duration = readyState;
				} else {
				duration = parseInt(array[kounting].min * 60) + parseInt(array[kounting].sec);
				}
				diff = duration - (((Date.now() - start) / 1000) | 0);

				minutes = (diff / 60) | 0;
				seconds = (diff % 60) | 0;

				minutes = minutes < 1 ? "" : minutes+":";
				if(minutes < 1){
					seconds = seconds < 10 ? "" + seconds : seconds;
				} else {
					seconds = seconds < 10 ? "0" + seconds : seconds;
				} 
				
				
				display.textContent = minutes + "" + seconds;
				
				if(diff <= 2 && diff > 0){
					roundtext.textContent = "round";
					
					if(!round){
						if(neu){
						
						playSound(kounting);
						roundtext.textContent = "round";
						dynamicround.textContent = kounting+1;
						
						}else if(looping){
							var cache= kounting+1;
							if(cache == rounds){
								if(repeats < totalRepeat){
									playSound(0);
									dynamicround.textContent = "1";
								}
							} else {
							playSound(cache);
							dynamicround.textContent = cache+1;
							}
							
						}else{
							var cache= kounting+1;
							if(cache == rounds){
								if(repeats < totalRepeat){
									playSound(0);
									dynamicround.textContent = "1";
								}
							} else {
							playSound(cache);
							dynamicround.textContent = cache+1;
							}
						}
					}
				}else if (diff <= 0) {
					if(!fite){playSound(1447);
					}
					if(!neu){kounting++;}
					
					neu = false;
					if(kounting + 1 > rounds){
						if(repeats < totalRepeat){
							repeats++;
							kounting = 0;
							looping = true;
						} else {
							end();
							playSound(1557);
						}
						
					}
					start = Date.now() + 1000;
				}
			};
		timer();
		runrun = setInterval(timer, 100);
		working = true;
		}
		
		function playSound(track){
			if(soundState){
			if(track == 1337){
				var randy = Math.floor((Math.random() * 2) + 1);
				if(randy==1){audio_track = "tym";} else {audio_track ="challenge1";}
				
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				 
			}
			if(track == 1447){
				fite = true;
				var randy = Math.floor((Math.random() * 8));
				var fights = ["fight1", "fight2", "fight3", "fight4", "fight5", "fight6", "fight7", "fight8"]
				audio_track = fights[randy];
				
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				round = false;
			}
			if(track == 1557){
				round = true;
				var randy = Math.floor((Math.random() * 2));
				var wins = ["challenge2", "flawless"]
				audio_track = wins[randy];
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				
			}
			if(track == 1117){
				//audio_track ="yousuck";
				//audio.src = audio_folder+audio_track+audio_ext;
				//audio.play();
			}
			
			if(track == 0){
				round = true;
				audio_track= "round1";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 1){
				round = true;
				audio_track= "round2";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 2){
				round = true;
				audio_track= "round3";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 3){
				round = true;
				audio_track= "round4";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 4){
				round = true;
				audio_track= "round5";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 5){
				round = true;
				audio_track= "round6";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 6){
				round = true;
				audio_track= "round7";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 7){
				round = true;
				audio_track= "round8";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 8){
				round = true;
				audio_track= "round9";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			if(track == 9){
				round = true;
				audio_track= "roundf";
				var track = tracks[audio_track];
				_('sprite2').currentTime = track.from;
				_('sprite2').play();

				setTimeout(function() {
				 _('sprite2').pause();
				}, (track.to * 1000) - (track.from * 1000));
				fite = false;
			}
			}
		
		}

		function end(){
			clearInterval(runrun);
			working = false;
			fite = false;
			round = false;
		}
		function endMan(){
			if(working){
				playSound(1117);
			}
			overlay();
			clearInterval(runrun);
			working = false;
			fite = false;
			round = false;
		}
		
		
		function overlay() {
			el = document.getElementById("overlay");
			
			el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
			if(working){
				end();
			}

		}
		
		function _(input){
			return document.getElementById(input);
		}
		
		function updateSettings(){
			_('intervals').textContent = totalRepeat;
			if(soundState){
				_('sound').innerHTML = "<i class='fa fa-volume-up fa-2x'></i>";
			} else {
				_('sound').innerHTML = "<i class='fa fa-volume-off fa-2x'></i>";
			}
			_('readyup').textContent = readyState;
		}
		
		function decreaseSetting(el){
			if(el == "intervals"){
				if(totalRepeat > 1){
					totalRepeat = totalRepeat - 1;
					updateSettings();
				}
			} else if(el == "readyup"){
				if(readyState > 3){
					readyState = readyState - 1;
					updateSettings();
				}
			} else if(el == "sound"){
				if(soundState){
					soundState = false;
					updateSettings();
				} else if(!soundState){
					soundState = true;
					updateSettings();
				}
			}
		}
		
		function increaseSetting(el){
			if(el == "intervals"){
				totalRepeat = totalRepeat + 1;
				updateSettings();
			} else if(el == "readyup"){
				readyState = readyState + 1;
				updateSettings();
			}
		}
		
		function defaults(){
			totalRepeat = 1;
			readyState = 5;
			soundState = true;
			updateSettings();
		}
		
		function settingsShow(){
			el = document.getElementById("settings");
			el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
			_('intervals').textContent = totalRepeat;
			updateSettings();
		}
		
	
		function saveMyTraining(){
			var myArray = getData();
			var r = new XMLHttpRequest(); 
			
			r.open("POST", "ajax.php", true);
			r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8;");
			r.onreadystatechange = function () {
				if (r.readyState != 4 || r.status != 200) return; 
				//console.log(r.responseText);
				checkCookie();
			};
			r.send(JSON.stringify(myArray));

		}
		
		function checkCookie(){
			var r = new XMLHttpRequest(); 
			r.open("GET", "ajax.php?q="+"check", true);
			r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8;");
			r.onreadystatechange = function () {
				if (r.readyState != 4 || r.status != 200) return; 
				//console.log(r.responseText);
				if(r.responseText == "true"){
					kstatus = true;
					//console.log(kstatus);
				} else if(r.responseText == "false"){
					kstatus = false;
					//console.log(kstatus);
				}
				updateSave();
			};
			r.send();
		}
		function getCookie(callback){
			
				var jsonObj;
				var r = new XMLHttpRequest(); 
				r.open("GET", "ajax.php?q="+"getData", true);
				r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8;");
				r.onreadystatechange = function () {
					if (r.readyState != 4 || r.status != 200) return; 
					callback(JSON.parse(r.responseText));
				};
				r.send();
		}
		
		function updateSave(){
			if(kstatus){
				_('saveState').textContent = "load save";
				if(_('saveload').style.visibility == "visible"){
				_('overwrite').style.visibility = "visible";
				}
			} else if(!kstatus){
				_('saveState').textContent = "save sets";
				_('overwrite').style.visibility = "hidden";
			}
			
		}
		function hidez(){
			_('overwrite').style.visibility = "hidden";
		}
		
		function saveShow(){
			checkCookie();
			el = document.getElementById("saveload");
			
			el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
			updateSave();
			 
		}
		
		function slBtn() {
			if(kstatus){
				loadSave();
				hidez();
			} else if (!kstatus){
				saveMyTraining();
			}
		}
		
		function overwrite(){
			saveMyTraining();
			
		}
		
		function loadSave(){
			getCookie( function(result){
				var jsonObj = result;
				elements = document.querySelectorAll('.cycle');
				Array.prototype.forEach.call(elements, function(el, i){
					var index = el.parentNode.parentNode.id;
					removeItem(index);
				});
				var jsonLen = jsonObj.length;
				for(i=0; i<jsonLen; i++){
					addItem(jsonObj[i].min,jsonObj[i].sec);
				}
				//console.log(JSON.stringify(jsonObj));
				totalRepeat = parseInt(jsonObj[0].repeat);
				soundState = jsonObj[0].sound; 
				readyState = parseInt(jsonObj[0].readyin);
			});
			saveShow();
			
		}